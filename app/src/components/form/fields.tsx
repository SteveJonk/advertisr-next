import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import type { FormFieldDefinition } from '@/lib/form-fields';

/** `card` is the lead-form card, `inline` a single row (the newsletter). */
export type FormFieldVariant = 'card' | 'inline';

const control = cn(
  'w-full border border-line-2 font-sans text-ink',
  'transition-[border-color,background,box-shadow] duration-200 placeholder:text-dim-2',
  'focus:border-red focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,57,81,.12)] focus:outline-none',
);

const VARIANTS = {
  card: {
    wrapper: 'mb-[18px]',
    label: 'mb-2 block text-[12.5px] font-semibold tracking-[.05em] text-dim',
    control: 'rounded-[11px] bg-soft px-[15px] py-[13px] text-[14.5px]',
  },
  inline: {
    wrapper: '',
    label: 'sr-only',
    control: 'w-[230px] rounded-full bg-white px-5 py-[13px] text-sm',
  },
} as const satisfies Record<FormFieldVariant, Record<string, string>>;

/** What the browser may autofill, guessed from the field type and key. */
function autoComplete(field: FormFieldDefinition) {
  if (field.type === 'email') return 'email';
  if (field.type === 'tel') return 'tel';
  if (field.type === 'url' || field.name === 'website') return 'url';
  if (field.name === 'name') return 'name';
  if (field.name === 'company') return 'organization';
  return undefined;
}

/** Turns `[label](href)` in editor copy into a real link. */
export function linkify(text: string): ReactNode {
  const parts = text.split(/\[([^\]]+)\]\(([^)]+)\)/g);
  if (parts.length === 1) return text;

  const nodes: ReactNode[] = [];
  for (let i = 0; i < parts.length; i += 3) {
    if (parts[i]) nodes.push(parts[i]);
    if (parts[i + 1]) {
      nodes.push(
        <Link key={i} href={parts[i + 2]} className='text-red-ink underline underline-offset-[3px]'>
          {parts[i + 1]}
        </Link>,
      );
    }
  }
  return nodes;
}

export function FormField({
  field,
  variant = 'card',
  idPrefix = 'field',
}: {
  field: FormFieldDefinition;
  variant?: FormFieldVariant;
  idPrefix?: string;
}) {
  const styles = VARIANTS[variant];
  const id = `${idPrefix}-${field.name}`;
  const controlClass = cn(control, styles.control);

  // Hidden fields are drawn by the renderer: it knows the page context.
  if (field.type === 'hidden') return null;

  // Checkboxes carry their own label per option, so they skip the field label.
  if (field.type === 'checkbox') {
    return (
      <div className={styles.wrapper}>
        {(field.checkboxOptions ?? []).map((option, index) => (
          <div key={option} className='mb-2.5 flex items-start gap-3'>
            <input
              type='checkbox'
              id={`${id}-${index}`}
              name={field.name}
              value={option}
              required={field.isRequired}
              className='mt-[3px] size-[18px] shrink-0 cursor-pointer accent-red'
            />
            <label htmlFor={`${id}-${index}`} className='cursor-pointer text-[13.5px] leading-[1.6] text-dim'>
              {linkify(option)}
            </label>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {field.label}
      </label>

      {field.type === 'textarea' ? (
        <textarea
          id={id}
          name={field.name}
          required={field.isRequired}
          placeholder={field.placeholder}
          className={cn(controlClass, 'min-h-[90px] resize-y')}
        />
      ) : field.type === 'select' ? (
        <select
          id={id}
          name={field.name}
          required={field.isRequired}
          // With a placeholder the empty option is the initial value, so a
          // required dropdown actually blocks submitting.
          defaultValue={field.placeholder ? '' : undefined}
          className={cn(controlClass, 'cursor-pointer')}
        >
          {field.placeholder ? <option value=''>{field.placeholder}</option> : null}
          {(field.selectOptions ?? []).map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      ) : field.type === 'radio' ? (
        <div className='flex flex-wrap gap-x-6 gap-y-2.5'>
          {(field.radioOptions ?? []).map((option) => (
            <label key={option} className='flex cursor-pointer items-center gap-2.5 text-[14.5px] text-dim'>
              <input
                type='radio'
                name={field.name}
                value={option}
                required={field.isRequired}
                className='size-[18px] cursor-pointer accent-red'
              />
              {option}
            </label>
          ))}
        </div>
      ) : (
        <input
          type={field.type}
          id={id}
          name={field.name}
          required={field.isRequired}
          placeholder={field.placeholder}
          autoComplete={autoComplete(field)}
          className={controlClass}
        />
      )}

      {field.helpText ? <p className='mt-2 text-xs text-dim-2'>{linkify(field.helpText)}</p> : null}
    </div>
  );
}
