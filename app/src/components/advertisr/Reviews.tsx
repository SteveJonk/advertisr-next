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

const MAX = 300;

/** The text cut at the last word before MAX chars, or null when it fits. */
function excerpt(text: string) {
  if (text.length <= MAX) return null;
  const cut = text.slice(0, MAX);
  return `${cut.slice(0, cut.lastIndexOf(' ') > 0 ? cut.lastIndexOf(' ') : MAX).trimEnd()}…`;
}

/** Google-review masonry; long reviews open in full in a native popover. */
export function Reviews({
  eyebrow,
  title,
  items,
  rating,
  ratingLink,
  ui,
  className,
}: {
  eyebrow?: string | null;
  title?: ReactNode;
  items: ReviewItem[];
  /** The Google score as printed, e.g. "5,0". */
  rating: string;
  ratingLink?: string | null;
  ui: Ui;
  className?: string;
}) {
  return (
    <Sec className={className}>
      <Wrap>
        <SecHead eyebrow={eyebrow} title={title} className={items.length < 10 ? 'mb-11' : undefined}>
          {rating && (
            <Badge
              href={ratingLink}
              className='rv mt-4 inline-flex items-center gap-2.5 rounded-full border border-line-2 bg-white py-[9px] pr-4 pl-3 transition-colors duration-200'
            >
              <GoogleG />
              <span className='text-sm tracking-[1px] text-star'>★★★★★</span>
              <span className='font-display text-[14.5px] font-bold'>{rating}</span>
              <span className='text-[13px] text-dim'>{ui.onGoogle}</span>
            </Badge>
          )}
        </SecHead>
        <div className='columns-3 gap-4 max-[900px]:columns-2 max-[640px]:columns-1'>
          {items.map((r) => {
            const short = excerpt(r.text);
            const author = (
              <div className='mt-3.5 flex items-center gap-[9px] text-[12.5px] text-dim'>
                <span className={cn('flex size-[26px] shrink-0 items-center justify-center rounded-full text-[10.5px] font-bold text-white', AVATAR[toneFor(r)])}>
                  {r.name[0]?.toUpperCase()}
                </span>{' '}
                {r.name} · {ui.googleReview}
              </div>
            );
            return (
              <div
                key={r._id}
                className='rv mb-4 break-inside-avoid rounded-[14px] border border-line bg-soft px-5 py-[22px] hover:border-red/40 hover:shadow-[0_18px_36px_-26px_rgba(14,14,18,.3)]'
              >
                <span className='mb-2.5 block text-[12.5px] tracking-[1px] text-star'>★★★★★</span>
                <p className='text-[14.5px] leading-[1.55] tracking-[-.006em]'>{short ?? r.text}</p>
                {short && (
                  <>
                    <button
                      type='button'
                      popoverTarget={`review-${r._id}`}
                      className='mt-2 cursor-pointer border-b-[1.5px] border-line-2 pb-px text-[13.5px] font-semibold text-ink transition-colors duration-200 hover:border-red hover:text-red'
                    >
                      {ui.readMore}
                    </button>
                    <div
                      id={`review-${r._id}`}
                      popover='auto'
                      className='m-auto w-[min(560px,calc(100vw-32px))] max-h-[calc(100dvh-64px)] overflow-y-auto rounded-[18px] border border-line bg-white px-7 py-7 text-ink shadow-[0_30px_70px_-30px_rgba(14,14,18,.5)] backdrop:bg-ink/40 backdrop:backdrop-blur-[2px] max-sm:px-5'
                    >
                      <button
                        type='button'
                        popoverTarget={`review-${r._id}`}
                        popoverTargetAction='hide'
                        aria-label={ui.close ?? undefined}
                        className='float-right -mt-2 -mr-2 flex size-9 cursor-pointer items-center justify-center rounded-full text-xl text-dim hover:bg-soft hover:text-ink'
                      >
                        ×
                      </button>
                      <span className='mb-3 block text-[12.5px] tracking-[1px] text-star'>★★★★★</span>
                      <p className='text-[15.5px] leading-[1.6] tracking-[-.006em] whitespace-pre-line'>{r.text}</p>
                      {author}
                    </div>
                  </>
                )}
                {author}
              </div>
            );
          })}
        </div>
      </Wrap>
    </Sec>
  );
}

/** The score pill: a link once there is somewhere to go. */
function Badge({ href, className, children }: { href?: string | null; className: string; children: ReactNode }) {
  return href ? (
    <a href={href} target='_blank' rel='noopener' className={cn(className, 'hover:border-red')}>
      {children}
    </a>
  ) : (
    <div className={className}>{children}</div>
  );
}
