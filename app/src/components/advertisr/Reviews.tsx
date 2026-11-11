import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import type { Ui } from '@/lib/site';
import { GoogleG, Sec, SecHead, Wrap } from './ui';

const AVATAR = {
  pink: 'bg-[#D3399E]',
  purple: 'bg-[#6A3BD1]',
  red: 'bg-[#D2483A]',
  green: 'bg-[#1E8E3E]',
  dark: 'bg-[#2b2b33]',
  dim: 'bg-[#5c5c66]',
} as const;

const TONES = Object.keys(AVATAR) as (keyof typeof AVATAR)[];

export type ReviewItem = { _id: string; name: string; text: string; tone?: string | null };

/** A tone for reviews without one (Google imports), stable per name. */
function toneFor(r: ReviewItem) {
  if (r.tone && r.tone in AVATAR) return r.tone as keyof typeof AVATAR;
  return TONES[[...r.name].reduce((n, c) => n + c.charCodeAt(0), 0) % TONES.length];
}

/** Google-review masonry. */
export function Reviews({
  eyebrow,
  title,
  items,
  rating,
  ui,
  className,
}: {
  eyebrow?: string | null;
  title?: ReactNode;
  items: ReviewItem[];
  /** The Google score as printed, e.g. "5,0". */
  rating: string;
  ui: Ui;
  className?: string;
}) {
  return (
    <Sec className={className}>
      <Wrap>
        <SecHead eyebrow={eyebrow} title={title} className={items.length < 10 ? 'mb-11' : undefined}>
          {rating && (
            <div className='rv mt-4 inline-flex items-center gap-2.5 rounded-full border border-line-2 bg-white py-[9px] pr-4 pl-3'>
              <GoogleG />
              <span className='text-sm tracking-[1px] text-star'>★★★★★</span>
              <span className='font-display text-[14.5px] font-bold'>{rating}</span>
              <span className='text-[13px] text-dim'>{ui.onGoogle}</span>
            </div>
          )}
        </SecHead>
        <div className='columns-3 gap-4 max-[900px]:columns-2 max-[640px]:columns-1'>
          {items.map((r) => (
            <div
              key={r._id}
              className='rv mb-4 break-inside-avoid rounded-[14px] border border-line bg-soft px-5 py-[22px] hover:border-red/40 hover:shadow-[0_18px_36px_-26px_rgba(14,14,18,.3)]'
            >
              <span className='mb-2.5 block text-[12.5px] tracking-[1px] text-star'>★★★★★</span>
              <p className='text-[14.5px] leading-[1.55] tracking-[-.006em]'>{r.text}</p>
              <div className='mt-3.5 flex items-center gap-[9px] text-[12.5px] text-dim'>
                <span
                  className={cn(
                    'flex size-[26px] shrink-0 items-center justify-center rounded-full text-[10.5px] font-bold text-white',
                    AVATAR[toneFor(r)],
                  )}
                >
                  {r.name[0]?.toUpperCase()}
                </span>{' '}
                {r.name} · {ui.googleReview}
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </Sec>
  );
}
