import type { ReactNode } from 'react';
import { Check, Sec, SecHead, Wrap } from './ui';

export type CompareRow = { _key: string; label?: string; them?: string; us?: string };

/** "Bureaus zetten er vaak een laag tussen. Wij niet." comparison table. */
export function Compare({
  eyebrow,
  title,
  lead,
  themLabel,
  usLabel,
  themPrefix,
  rows,
}: {
  eyebrow?: string | null;
  title: ReactNode;
  lead?: string | null;
  themLabel?: string | null;
  usLabel?: string | null;
  themPrefix?: string | null;
  rows: CompareRow[];
}) {
  return (
    <Sec id='verschil'>
      <Wrap>
        <SecHead eyebrow={eyebrow} title={title} lead={lead} />
        <div className='rv border-t-[1.5px] border-ink' role='table' aria-label={themLabel ?? undefined}>
          <div
            className='grid grid-cols-[200px_1fr_1fr] gap-8 border-b border-line py-4 text-[11.5px] font-semibold tracking-[.14em] text-dim-2 uppercase max-sm:hidden'
            role='row'
          >
            <span role='columnheader' />
            <span role='columnheader'>{themLabel}</span>
            <span role='columnheader' className='text-red-ink'>
              {usLabel}
            </span>
          </div>
          {rows.map((row) => (
            <div
              key={row._key}
              className='grid grid-cols-[200px_1fr_1fr] items-start gap-8 border-b border-line py-[26px] max-sm:grid-cols-1 max-sm:gap-2.5 max-sm:py-[22px]'
              role='row'
            >
              <span className='font-display text-xl font-bold tracking-[-.02em]' role='rowheader'>
                {row.label}
              </span>
              <span className='text-[16.5px] text-dim' role='cell'>
                {themPrefix && <span className='hidden font-semibold text-dim-2 max-sm:inline'>{themPrefix} </span>}
                {row.them}
              </span>
              <span className='flex items-start gap-3 text-[16.5px] font-medium text-ink' role='cell'>
                <Check className='mt-0.5' />
                <span>{row.us}</span>
              </span>
            </div>
          ))}
        </div>
      </Wrap>
    </Sec>
  );
}
