import { type PortableTextComponents } from 'next-sanity';
import Link from 'next/link';
import { btn, Rich, type Inline } from '@/components/advertisr/cms';
import { Arrow, btnRed } from '@/components/advertisr/ui';
import { cn } from '@/lib/cn';

/* Long-form Portable Text (articles, case stories): body styles and block renderers. */

/** "Wat kost Google Ads?" → "wat-kost-google-ads", the h2's id for the table of contents. */
export const anchor = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

type Block = { children?: { text?: string }[] } | object;
export const textOf = (b: Block) => ('children' in b ? (b.children ?? []).map((c) => c.text).join('') : '');

/** Long-form body styles, as the design's `.art-prose`. */
export const prose = cn(
  'max-w-170 text-[17px] leading-[1.78] text-[#2B2A33]',
  '[&_strong]:font-semibold [&_strong]:text-ink',
  '[&>p]:mb-5 [&>ul]:mb-5 [&>ul]:list-disc [&>ul]:pl-[22px] [&>ol]:mb-5 [&>ol]:list-decimal [&>ol]:pl-[22px] [&_li]:mb-[9px] [&_li]:pl-1',
  '[&>h2]:mt-13 [&>h2]:mb-[18px] [&>h2]:scroll-mt-[110px] [&>h2]:text-[clamp(24px,2.6vw,30px)] [&>h2]:tracking-[-.025em] [&>h2]:text-ink',
  '[&>h3]:mt-9 [&>h3]:mb-3 [&>h3]:text-xl [&>h3]:text-ink [&_a]:underline [&_a]:decoration-line-2 [&_a:hover]:text-red',
);

export const proseComponents: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => <h2 id={anchor(textOf(value as Block))}>{children}</h2>,
  },
  marks: {
    link: ({ children, value }) => <a href={value?.href}>{children}</a>,
  },
  types: {
    callout: ({ value }: { value: { variant?: string; label?: string; text?: Inline } }) =>
      value.variant === 'definition' ? (
        <div className='rv my-7 rounded-[14px] border border-l-[3px] border-line border-l-red bg-soft px-[22px] py-[18px]'>
          <div className='mb-1.5 text-[11px] font-bold tracking-[.08em] text-dim-2 uppercase'>{value.label}</div>
          <p className='text-[14.5px] leading-[1.6] text-dim'>
            <Rich value={value.text} />
          </p>
        </div>
      ) : (
        <div className='rv relative mt-[30px] mb-11 rounded-2xl border border-red/30 bg-[linear-gradient(155deg,#FFF1F3,#fff)] px-[26px] py-6 shadow-[0_20px_40px_-34px_rgba(255,57,81,.5)]'>
          <div className='mb-2.5 flex items-center gap-2 text-[11.5px] font-bold tracking-[.06em] text-red-ink uppercase'>{value.label}</div>
          <p className='text-[15.5px] leading-[1.6] text-ink'>
            <Rich value={value.text} />
          </p>
        </div>
      ),
    pullQuote: ({ value }: { value: { text?: string } }) => (
      <div className='rv relative my-9 rounded-2xl border border-l-[3px] border-line border-l-red bg-soft py-[30px] pr-8 pl-10'>
        <p className='font-display text-[19px] leading-[1.45] font-semibold tracking-[-.01em] text-ink'>{value.text}</p>
      </div>
    ),
    statGrid: ({ value }: { value: { stats?: { _key: string; value?: string; label?: string }[] } }) => (
      <div className='rv my-[30px] grid grid-cols-3 gap-px overflow-hidden rounded-[14px] border border-line bg-line shadow-[0_20px_40px_-34px_rgba(14,14,18,.3)] max-[560px]:grid-cols-1'>
        {(value.stats ?? []).map((s) => (
          <div key={s._key} className='bg-white px-4 py-[18px] text-center'>
            <div className='font-display text-[22px] font-bold tracking-[-.02em] text-ink'>{s.value}</div>
            <div className='mt-1 text-[11.5px] leading-[1.4] text-dim'>{s.label}</div>
          </div>
        ))}
      </div>
    ),
    inlineCta: ({ value }: { value: { eyebrow?: string; title?: string; text?: string; cta?: Parameters<typeof btn>[0] } }) => {
      const cta = btn(value.cta);
      return (
        <div className="rv relative isolate my-11 flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-[20px] border border-white/10 bg-[radial-gradient(420px_200px_at_100%_0%,rgba(255,57,81,.5),transparent_70%),radial-gradient(360px_180px_at_0%_120%,rgba(255,120,90,.2),transparent_70%),linear-gradient(135deg,#1c1c24_0%,#0d0d12_100%)] px-[30px] py-7 text-white shadow-[inset_0_1px_0_rgba(255,255,255,.16),0_30px_60px_-28px_rgba(14,14,18,.55),0_50px_80px_-50px_rgba(255,57,81,.5)] before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:bg-[radial-gradient(rgba(255,255,255,.13)_1px,transparent_1.4px)] before:bg-size-[20px_20px] before:mask-[linear-gradient(100deg,transparent_40%,#000)] before:content-['']">
          <div className='relative z-2'>
            <div className='mb-2 flex items-center gap-[7px] text-[11px] font-bold tracking-[.1em] text-[#FF8A98] uppercase'>{value.eyebrow}</div>
            <h4 className='font-display text-[19px] font-bold tracking-[-.02em] text-white'>{value.title}</h4>
            <p className='mt-1.5 text-sm text-white/72'>{value.text}</p>
          </div>
          {cta && (
            <Link href={cta.href} className={cn(btnRed, 'relative z-2 shrink-0 px-6! py-3.5! text-[14.5px]! hover:bg-white hover:text-red-ink')}>
              {cta.label} <Arrow />
            </Link>
          )}
        </div>
      );
    },
  },
};
