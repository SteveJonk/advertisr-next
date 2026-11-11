'use client';

import { useState, type FormEvent } from 'react';
import { cn } from '@/lib/cn';
import { btnRed } from './ui';

/** Category pills. Like the design, they only mark the active one; filtering comes with real content. */
export function Pills({ items }: { items: string[] }) {
  const [on, setOn] = useState(0);
  return (
    <div className='rv mt-[38px] flex flex-wrap gap-2.5'>
      {items.map((label, i) => (
        <button
          key={label}
          type='button'
          onClick={() => setOn(i)}
          aria-pressed={i === on}
          className={cn(
            'cursor-pointer rounded-full border px-[18px] py-[9px] font-display text-[13.5px] font-semibold whitespace-nowrap transition-all duration-[220ms]',
            i === on ? 'border-red bg-red text-white' : 'border-line-2 bg-white text-dim hover:bg-soft hover:text-ink',
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

/** Newsletter sign-up; reuses /api/lead so it lands in the same inbox. */
export function NewsletterForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');
    const body = new FormData(e.currentTarget);
    body.set('name', 'Nieuwsbrief-aanmelding');
    body.set('interesse', 'Nieuwsbrief');
    const res = await fetch('/api/lead', { method: 'POST', body }).catch(() => null);
    setState(res?.ok ? 'sent' : 'error');
  }

  if (state === 'sent')
    return (
      <p className='font-display text-[15px] font-semibold text-ink' role='status'>
        Bedankt, je staat op de lijst.
      </p>
    );

  return (
    <form onSubmit={onSubmit} className='flex shrink-0 flex-wrap gap-2.5'>
      <input
        type='email'
        name='email'
        required
        placeholder='jij@bedrijf.nl'
        aria-label='E-mailadres'
        className='w-[230px] rounded-full border border-line-2 bg-white px-5 py-[13px] text-sm text-ink outline-none placeholder:text-dim-2'
      />
      <input type='text' name='fax' tabIndex={-1} autoComplete='off' aria-hidden='true' className='hidden' />
      <button type='submit' disabled={state === 'sending'} className={cn(btnRed, 'cursor-pointer px-6! py-[13px]!')}>
        Aanmelden
      </button>
      {state === 'error' && (
        <p className='w-full text-[13px] text-red-ink' role='alert'>
          Aanmelden lukt nu niet. Probeer het later opnieuw.
        </p>
      )}
    </form>
  );
}
