import type { ReactNode } from 'react';
import { FormRenderer } from '@/components/form/FormRenderer';
import { cn } from '@/lib/cn';
import { toFormDefinition } from '@/lib/form-fields';
import type { Site } from '@/lib/site';

export type LeadFormProps = {
  site: Site;
  /** The block's resolved `form->` reference. */
  form?: unknown;
  /** Fills a hidden field whose value is {{interesse}}. */
  interesse?: string | null;
  id?: string;
  className?: string;
  /** Shown above the fields, inside the card. */
  intro?: ReactNode;
  /** Rendered on the card's frame, e.g. floating stats. */
  children?: ReactNode;
};

/** The red-framed card around a Sanity form; the form posts to /api/submit-form. */
export function LeadForm({ site, form, interesse, id: anchor, className, intro, children }: LeadFormProps) {
  const definition = toFormDefinition(form);
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
        {definition ? (
          <FormRenderer
            form={definition}
            text={site.forms.text}
            captcha={site.forms.captcha}
            context={{ interesse: interesse ?? '' }}
          />
        ) : (
          // The block exists but no form is picked yet; say so instead of an empty card.
          <p className='text-dim-2'>No form is connected to this block yet.</p>
        )}
      </div>
    </div>
  );
}

/** The kennisbank's one-row newsletter sign-up: the same renderer, inline. */
export function NewsletterForm({ site, form, interesse }: Pick<LeadFormProps, 'site' | 'form' | 'interesse'>) {
  const definition = toFormDefinition(form);
  if (!definition) return null;
  return (
    <FormRenderer
      form={definition}
      text={site.forms.text}
      captcha={site.forms.captcha}
      variant='inline'
      context={{ interesse: interesse ?? '' }}
    />
  );
}
