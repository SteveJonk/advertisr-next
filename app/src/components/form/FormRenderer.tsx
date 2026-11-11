'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useRef, useState, type FormEvent, type MouseEvent } from 'react';
import { flushSync } from 'react-dom';
import { cn } from '@/lib/cn';
import { Arrow, btnRed } from '@/components/advertisr/ui';
import {
  fillTokens,
  toFieldRows,
  toSteps,
  type FormDefinition,
  type FormText,
} from '@/lib/form-fields';
import { Captcha, type CaptchaHandle, type FormCaptcha } from './Captcha';
import { FormField, type FormFieldVariant } from './fields';

export type FormRendererProps = {
  form: FormDefinition;
  /** Shared copy from Form settings: button fallbacks, progress, errors. */
  text: FormText;
  captcha?: FormCaptcha;
  variant?: FormFieldVariant;
  /**
   * Values the surrounding page knows and the visitor does not type — which
   * the lead's interest, say. A hidden field picks them up by `{{token}}`;
   * `{{path}}` (the current page) is always there.
   */
  context?: Record<string, string>;
};

type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

/** `card` is the lead-form card (full-width button), `inline` one row (newsletter). */
const VARIANTS = {
  card: {
    form: '',
    fields: '',
    row: 'grid grid-cols-2 gap-4 max-sm:grid-cols-1',
    button: cn(btnRed, 'mt-1.5 w-full cursor-pointer justify-center disabled:opacity-70'),
    error: 'mt-3 text-center text-[13px] text-red-ink',
    note: 'mt-4 text-center text-xs text-dim-2',
  },
  inline: {
    form: 'flex shrink-0 flex-wrap gap-2.5',
    fields: 'contents',
    row: 'contents',
    button: cn(btnRed, 'cursor-pointer px-6! py-[13px]! disabled:opacity-70'),
    error: 'w-full text-[13px] text-red-ink',
    note: 'w-full text-xs text-dim-2',
  },
} as const satisfies Record<FormFieldVariant, Record<string, string>>;

function SuccessPanel({ variant, title, body }: { variant: FormFieldVariant; title?: string; body?: string }) {
  if (variant === 'inline') {
    return (
      <p className='font-display text-[15px] font-semibold text-ink' role='status'>
        {title}
        {body ? <span className='mt-1 block font-sans text-sm font-normal text-dim'>{body}</span> : null}
      </p>
    );
  }
  return (
    <div className='py-10 text-center' role='status'>
      {title ? <h3 className='text-[26px] tracking-[-.03em]'>{title}</h3> : null}
      {body ? <p className='mt-3 text-[15px] text-dim'>{body}</p> : null}
    </div>
  );
}

/**
 * Renders any Sanity `form` — one page of fields or several steps — and posts
 * the whole thing to /api/submit-form in one request. A form with a redirect
 * sends the visitor to that page afterwards instead of showing its
 * confirmation panel.
 *
 * Every step stays mounted (hidden steps keep their values in the FormData),
 * which is why the form carries `noValidate`: the browser would otherwise
 * refuse to submit over a required field it cannot focus. Validation is driven
 * per step instead — `reportValidity()` still shows the native message.
 */
export function FormRenderer({ form, text, captcha, variant = 'card', context }: FormRendererProps) {
  const router = useRouter();
  const tokens = { path: usePathname(), ...context };
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');
  const [error, setError] = useState<string | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const captchaRef = useRef<CaptchaHandle>(null);

  const styles = VARIANTS[variant];
  const steps = toSteps(form);
  const total = steps.length;
  const isLastStep = step >= total - 1;

  function controlsOf(index: number): Control[] {
    const container = stepRefs.current[index];
    if (!container) return [];
    return Array.from(container.querySelectorAll<Control>('input, select, textarea'));
  }

  /** Silent check — safe to run on a step the user cannot see. */
  function stepIsValid(index: number) {
    return controlsOf(index).every((control) => control.checkValidity());
  }

  /** Focuses and explains the first problem on a step the user *can* see. */
  function reportStep(index: number) {
    const invalid = controlsOf(index).find((control) => !control.checkValidity());
    if (!invalid) return true;
    invalid.reportValidity();
    return false;
  }

  function goNext(event: MouseEvent<HTMLButtonElement>) {
    // This very button becomes the submit button on the last step. Its
    // activation behaviour is read after this handler runs, so without this the
    // step that setStep() just revealed is submitted by the same click — and
    // the visitor lands on step 2 staring at a native "fill in this field".
    event.preventDefault();
    if (reportStep(step)) setStep((current) => Math.min(current + 1, total - 1));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Should only ever be the current step, since you cannot walk past an
    // invalid one — but an earlier step is still recoverable: show it first,
    // because reportValidity() cannot open a bubble on a hidden field.
    const firstInvalid = steps.findIndex((_, index) => !stepIsValid(index));
    if (firstInvalid !== -1) {
      if (firstInvalid !== step) flushSync(() => setStep(firstInvalid));
      reportStep(firstInvalid);
      return;
    }

    const body = new FormData(event.currentTarget);
    body.set('formId', form.id);

    if (captcha) {
      const token = captchaRef.current?.token() ?? null;
      if (token === '') {
        setError(text.recaptchaPrompt);
        return;
      }
      // null: the widget never came up. Send anyway — the server lets it
      // through only if the provider is really down.
      if (token) body.set('captchaToken', token);
    }

    setStatus('sending');
    setError(null);
    try {
      const response = await fetch('/api/submit-form', { method: 'POST', body });
      const result = (await response.json()) as { success?: boolean; message?: string };
      // 4xx messages are for the visitor ("Name is required"); 5xx ones name
      // server config and stay in the response and logs for whoever debugs it.
      if (response.status >= 500) {
        console.error(result.message);
        throw new Error(text.sendFailed);
      }
      if (!response.ok || !result.success) {
        throw new Error(result.message || text.sendFailed);
      }
      if (form.redirect) {
        // Stay on 'sending' so the button keeps its disabled state until the
        // new page takes over — a second submit would mail the same answers.
        if (form.redirect.internal) router.push(form.redirect.href);
        else window.location.assign(form.redirect.href);
        return;
      }
      setStatus('done');
    } catch (submitError) {
      // A token is single-use: clear it so a retry gets a fresh one.
      captchaRef.current?.reset();
      setStatus('idle');
      setError(
        submitError instanceof Error ? submitError.message : text.sendFailed,
      );
    }
  }

  if (status === 'done') {
    return <SuccessPanel variant={variant} title={form.successTitle} body={form.successBody} />;
  }

  return (
    <>
      {total > 1 ? (
        <div className='mb-[26px] flex items-center gap-3.5'>
          <div className='h-1 flex-1 overflow-hidden rounded-full bg-line'>
            <span
              className='block h-full rounded-full bg-red transition-[width] duration-[450ms] ease-rv'
              style={{ width: `${((step + 1) / total) * 100}%` }}
            />
          </div>
          <span className='text-[11.5px] font-semibold tracking-[.11em] whitespace-nowrap text-dim-2 uppercase'>
            {fillTokens(text.stepCounter, { step: String(step + 1), total: String(total) })}
          </span>
        </div>
      ) : null}

      <form onSubmit={onSubmit} noValidate className={styles.form}>
        {form.showTitle && form.title ? <h3 className='mb-5 text-[22px] tracking-[-.02em]'>{form.title}</h3> : null}

        {steps.map((formStep, index) => (
          <div
            key={index}
            ref={(el) => {
              stepRefs.current[index] = el;
            }}
            hidden={index !== step}
            className={styles.fields}
          >
            {formStep.title ? <h3 className='mb-4 text-lg'>{formStep.title}</h3> : null}

            {formStep.fields
              .filter((field) => field.type === 'hidden')
              .map((field) => (
                <input key={field.name} type='hidden' name={field.name} value={fillTokens(field.defaultValue ?? '', tokens)} />
              ))}

            {toFieldRows(formStep.fields).map((row) => {
              const key = row.map((field) => field.name).join('-');
              return row.length === 2 ? (
                <div key={key} className={styles.row}>
                  {row.map((field) => (
                    <FormField key={field.name} field={field} variant={variant} idPrefix={form.id} />
                  ))}
                </div>
              ) : (
                <FormField key={key} field={row[0]} variant={variant} idPrefix={form.id} />
              );
            })}
          </div>
        ))}

        {/* Honeypot, hidden from people and assistive tech. */}
        <input type='text' name='fax' tabIndex={-1} autoComplete='off' aria-hidden='true' className='hidden' />

        {/* Mounted on every step so the token survives Back/Next; it loads once the last step shows. */}
        {captcha ? <Captcha ref={captchaRef} {...captcha} hidden={!isLastStep} /> : null}

        {isLastStep ? (
          <button type='submit' disabled={status === 'sending'} className={styles.button}>
            {status === 'sending' ? text.sendingText : form.submitButtonText || text.submitButtonText}
            {variant === 'card' && <Arrow />}
          </button>
        ) : (
          <button type='button' onClick={goNext} className={styles.button}>
            {form.nextButtonText || text.nextButtonText}
            <Arrow />
          </button>
        )}

        {step > 0 ? (
          <button
            type='button'
            onClick={() => setStep((current) => Math.max(current - 1, 0))}
            className='mt-3.5 flex w-full cursor-pointer items-center justify-center gap-1.5 text-[13.5px] font-medium text-dim-2 transition-colors hover:text-ink'
          >
            ← {form.backButtonText || text.backButtonText}
          </button>
        ) : null}

        {error ? (
          <p role='alert' className={styles.error}>
            {error}
          </p>
        ) : null}

        {form.note ? <p className={styles.note}>{form.note}</p> : null}
      </form>
    </>
  );
}
