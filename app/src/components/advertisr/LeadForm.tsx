'use client';

import { usePathname } from 'next/navigation';
import { useId, useState, type FormEvent, type ReactNode } from 'react';
import { cn } from '@/lib/cn';
import type { Ui } from '@/lib/site';
import { Arrow, btnRed } from './ui';

/** The `form` object on a block; empty fields fall back to the defaults in Site information. */
export type FormSettings = {
  interesse?: string | null;
  messageLabel?: string | null;
  messagePlaceholder?: string | null;
  /** Drops the message field (the short groeiplan forms). */
  hideMessage?: boolean | null;
  submitLabel?: string | null;
  fine?: string | null;
} | null;

export type LeadFormProps = {
  ui: Ui;
  form?: FormSettings;
  id?: string;
  className?: string;
  /** Shown above the fields, inside the card. */
  intro?: ReactNode;
  /** Rendered on the card's frame, e.g. floating stats. */
  children?: ReactNode;
};

const input = cn(
  'w-full rounded-[11px] border border-line-2 bg-soft px-[15px] py-[13px] font-sans text-[14.5px] text-ink',
  'transition-[border-color,background,box-shadow] duration-200 placeholder:text-dim-2',
  'focus:border-red focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,57,81,.12)] focus:outline-none',
);
const label = 'mb-2 block text-[12.5px] font-semibold tracking-[.05em] text-dim';

/** The "groeiplan" lead form; posts to /api/lead, which mails it. */
export function LeadForm({ ui, form, id: anchor, className, intro, children }: LeadFormProps) {
  const interesse = form?.interesse;
  const fine = form?.fine || ui.formFine;
  const submitLabel = form?.submitLabel || ui.formSubmit;
  const id = useId();
  const path = usePathname();
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');
    setError('');
    const res = await fetch('/api/lead', { method: 'POST', body: new FormData(e.currentTarget) }).catch(() => null);
    if (res?.ok) return setState('sent');
    setState('idle');
    setError(ui.formError ?? '');
  }

  const field = (name: string, text: string | undefined, props: Record<string, unknown> = {}) => (
    <div className='mb-[18px]'>
      <label htmlFor={`${id}-${name}`} className={label}>
        {text}
      </label>
      <input id={`${id}-${name}`} name={name} className={input} {...props} />
    </div>
  );

  return (
    <div
      id={anchor}
      className={cn(
        'rv relative scroll-mt-24 rounded-3xl bg-[linear-gradient(135deg,rgba(255,57,81,.75),rgba(14,14,18,.08)_55%,rgba(255,57,81,.3))] p-0.5 shadow-[0_50px_90px_-44px_rgba(14,14,18,.45)]',
        className,
      )}
    >
      {children}
      <div className='rounded-[22px] bg-white px-[42px] py-11 max-sm:px-6 max-sm:py-8'>
        {intro}
        {state === 'sent' ? (
          <div className='py-10 text-center' role='status'>
            <h3 className='text-[26px] tracking-[-.03em]'>{ui.formSuccessTitle}</h3>
            <p className='mt-3 text-[15px] text-dim'>{ui.formSuccessBody}</p>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <div className='grid grid-cols-2 gap-4 max-sm:grid-cols-1'>
              {field('name', ui.formName, { type: 'text', placeholder: ui.formNamePlaceholder, required: true, autoComplete: 'name' })}
              {field('company', ui.formCompany, { type: 'text', placeholder: ui.formCompanyPlaceholder, autoComplete: 'organization' })}
            </div>
            <div className='grid grid-cols-2 gap-4 max-sm:grid-cols-1'>
              {field('email', ui.formEmail, { type: 'email', placeholder: ui.formEmailPlaceholder, required: true, autoComplete: 'email' })}
              {field('phone', ui.formPhone, { type: 'tel', placeholder: ui.formPhonePlaceholder, autoComplete: 'tel' })}
            </div>
            {field('website', ui.formWebsite, { type: 'text', placeholder: ui.formWebsitePlaceholder, autoComplete: 'url' })}
            {!form?.hideMessage && (
              <div className='mb-[18px]'>
                <label htmlFor={`${id}-message`} className={label}>
                  {form?.messageLabel || ui.formMessage}
                </label>
                <textarea
                  id={`${id}-message`}
                  name='message'
                  placeholder={form?.messagePlaceholder || ui.formMessagePlaceholder}
                  className={cn(input, 'min-h-[90px] resize-y')}
                />
              </div>
            )}
            {interesse && <input type='hidden' name='interesse' value={interesse} />}
            <input type='hidden' name='page' value={path} />
            {/* Honeypot, hidden from people and assistive tech. */}
            <input type='text' name='fax' tabIndex={-1} autoComplete='off' aria-hidden='true' className='hidden' />
            <button
              type='submit'
              disabled={state === 'sending'}
              className={cn(btnRed, 'mt-1.5 w-full cursor-pointer justify-center disabled:opacity-70')}
            >
              {state === 'sending' ? ui.formSending : submitLabel} <Arrow />
            </button>
            {error && (
              <p className='mt-3 text-center text-[13px] text-red-ink' role='alert'>
                {error}
              </p>
            )}
            <p className='mt-4 text-center text-xs text-dim-2'>{fine}</p>
          </form>
        )}
      </div>
    </div>
  );
}
