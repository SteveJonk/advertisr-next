import Image from '@/components/ui/Image';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Ambient, BtnGhost, BtnRed, Crumb, Eyebrow, Sec, SecHead, Wrap } from './ui';

/* Sections shared by the service pages (Meta Ads, Google Ads, …), top to bottom. */

const darkBand = cn(
  'relative isolate overflow-hidden rounded-[22px] border border-white/10 text-white',
  'bg-[radial-gradient(520px_220px_at_100%_0%,rgba(255,57,81,.55),transparent_70%),radial-gradient(420px_200px_at_0%_120%,rgba(255,120,90,.22),transparent_70%),linear-gradient(135deg,#1c1c24_0%,#0d0d12_100%)]',
  'shadow-[inset_0_1px_0_rgba(255,255,255,.16),inset_0_-24px_40px_-30px_rgba(255,57,81,.35),0_30px_60px_-26px_rgba(14,14,18,.6),0_60px_90px_-50px_rgba(255,57,81,.5)]',
  "before:absolute before:inset-0 before:-z-1 before:bg-[radial-gradient(rgba(255,255,255,.14)_1px,transparent_1.4px)] before:bg-size-[20px_20px] before:mask-[linear-gradient(100deg,transparent_35%,#000)] before:content-['']",
);

/** Dark "Wat levert … op?" band with a CTA button. */
export type Cta = { label: string; href: string } | null;

export function CtaBand({
  title,
  sub,
  cta,
  className,
}: {
  title: ReactNode;
  sub: ReactNode;
  cta: Cta;
  className?: string;
}) {
  return (
    <div
      className={cn(
        darkBand,
        'rv mt-16 flex flex-wrap items-center justify-between gap-6 px-[38px] py-[34px] max-sm:px-6 max-sm:py-7',
        className,
      )}
    >
      <h3 className='max-w-140 text-[clamp(22px,2.4vw,30px)] leading-[1.15] tracking-[-.03em]'>
        {title}
        <span className='mt-2.5 block font-sans text-[15.5px] leading-[1.55] font-normal tracking-normal text-white/72'>
          {sub}
        </span>
      </h3>
      {cta && (
        <BtnRed href={cta.href} className='max-sm:w-full max-sm:justify-center'>
          {cta.label}
        </BtnRed>
      )}
    </div>
  );
}

/** Small frosted stat that floats over a hero visual. Hidden below 520px. */
export function FloatStat({
  value,
  label,
  className,
}: {
  value: ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'absolute z-4 rounded-[13px] border border-line bg-white/92 px-[17px] py-[13px] shadow-[0_22px_44px_-22px_rgba(14,14,18,.4)] backdrop-blur-[12px] max-mob:hidden',
        className,
      )}
    >
      <b className='block font-display text-[23px] leading-none tracking-[-.03em]'>
        {value}
      </b>
      <span className='text-[11.5px] text-dim'>{label}</span>
    </div>
  );
}

export function ServiceHero({
  home,
  crumbs,
  eyebrow,
  title,
  sub,
  primary,
  ghost,
  ticks = [],
  visual,
  className,
}: {
  className?: string;
  home?: string;
  crumbs: ([string, string] | [string])[];
  eyebrow?: string | null;
  title: ReactNode;
  sub: ReactNode;
  primary: Cta;
  ghost: Cta;
  ticks?: string[];
  visual: ReactNode;
}) {
  return (
    <header className={cn('relative overflow-hidden pt-[150px] pb-24', className)}>
      <Ambient />
      <Wrap>
        <div className='grid grid-cols-[1.08fr_.92fr] items-center gap-16 *:min-w-0 max-dsk:grid-cols-1 max-dsk:gap-13'>
          <div>
            <Crumb home={home} items={crumbs} />
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className='rv mt-1.5 mb-6 text-[clamp(40px,4.9vw,68px)] tracking-[-.04em]'>
              {title}
            </h1>
            <p className='rv mb-[34px] max-w-[530px] text-[18.5px] text-dim'>{sub}</p>
            <div className='rv mb-[22px] flex flex-wrap items-center gap-[22px]'>
              {primary && <BtnRed href={primary.href}>{primary.label}</BtnRed>}
              {ghost && <BtnGhost href={ghost.href}>{ghost.label}</BtnGhost>}
            </div>
            <div className='rv flex flex-wrap gap-x-[22px] gap-y-2 text-[13.5px] text-dim'>
              {ticks.map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-2 before:size-[5px] before:rounded-full before:bg-red before:content-['']"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          {visual}
        </div>
      </Wrap>
    </header>
  );
}

export type PainItem = { q: string; text: ReactNode };
export type Bridge = {
  img?: string;
  alt?: string;
  line: ReactNode;
  sig?: string | null;
};

/** Founder quote card; overlaps the section below it by 64px. */
export function BridgeQuote({ img, alt, line, sig }: Bridge) {
  return (
    <div className='relative z-6 mt-14'>
      <div className='rv relative translate-y-16 rounded-3xl bg-[linear-gradient(120deg,rgba(255,57,81,.85),rgba(255,57,81,.2)_44%,rgba(14,14,18,.1))] p-0.5 shadow-[0_40px_80px_-36px_rgba(14,14,18,.45),0_0_60px_-30px_rgba(255,57,81,.5)] max-sm:translate-y-[50px]'>
        <div className='relative flex flex-wrap items-center gap-[34px] overflow-hidden rounded-[22px] bg-[linear-gradient(125deg,#FFF1F3_0%,#fff_52%,#F6F4F0_100%)] px-11 py-[38px] max-sm:gap-5 max-sm:px-[22px] max-sm:py-[26px]'>
          {img && (
            <div className='relative z-2 size-[76px] shrink-0 overflow-hidden rounded-full border-2 border-red/55'>
              <Image
                src={img}
                alt={alt ?? ''}
                fill
                sizes='76px'
                className='object-cover object-[center_22%]'
              />
            </div>
          )}
          <div className='relative z-2 min-w-70 flex-1'>
            <div className='font-display text-[clamp(20px,2.2vw,29px)] leading-[1.18] font-bold tracking-[-.03em] [&_em]:text-red [&_em]:not-italic'>
              {line}
            </div>
            <div className="mt-3.5 flex items-center gap-[9px] text-[13.5px] text-dim before:h-[1.5px] before:w-5 before:bg-red before:content-['']">
              {sig}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** "Herken je dit?" quotes on the soft band, with the founder quote overlapping the next section. */
export function Pain({
  eyebrow,
  title,
  lead,
  items,
  bridge,
  className,
  children,
}: {
  eyebrow?: string | null;
  title: ReactNode;
  lead?: ReactNode;
  items: PainItem[];
  bridge?: Bridge;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section
      className={cn(
        'relative z-2 border-t border-line bg-soft pt-[110px] max-sm:pt-[74px]',
        className,
      )}
    >
      <div
        className='pointer-events-none absolute inset-0 z-0 overflow-hidden'
        aria-hidden='true'
      >
        <div className='absolute inset-0 bg-[radial-gradient(rgba(14,14,18,.13)_1px,transparent_1.4px)] bg-size-[26px_26px] opacity-50 mask-[radial-gradient(ellipse_70%_60%_at_70%_30%,#000_0%,transparent_75%)]' />
        <div className='absolute -top-[280px] -left-[200px] size-[860px] rounded-full bg-[radial-gradient(circle,rgba(255,57,81,.13),rgba(255,57,81,0)_64%)] blur-[10px]' />
      </div>
      <Wrap>
        <SecHead eyebrow={eyebrow} title={title} lead={lead} />
        <div className='relative z-2 grid grid-cols-3 gap-4 max-dsk:grid-cols-1'>
          {items.map((p) => (
            <div
              key={p.q}
              className='rv rounded-[18px] border border-line bg-white px-7 py-[30px] shadow-[0_18px_40px_-30px_rgba(14,14,18,.3)] hover:-translate-y-1 hover:border-red/45 hover:shadow-[0_28px_50px_-30px_rgba(255,57,81,.4)]'
            >
              <span className='mb-[18px] block font-display text-[44px] leading-[.55] text-red'>
                &quot;
              </span>
              <div className='mb-3 font-display text-[21px] leading-[1.22] font-bold tracking-[-.024em]'>
                {p.q}
              </div>
              <p className='text-[15px] leading-[1.6] text-dim'>{p.text}</p>
            </div>
          ))}
        </div>
        {children}
        {bridge && <BridgeQuote {...bridge} />}
      </Wrap>
    </section>
  );
}

export type Layer = { tag?: string; title?: string; text: ReactNode; kpi?: ReactNode };

/** "De aanpak": copy beside a stack of funnel layers on a white panel. */
export function Funnel({
  id,
  eyebrow,
  title,
  body,
  ghost,
  layers,
  className,
}: {
  id?: string;
  eyebrow?: string | null;
  title: ReactNode;
  body: ReactNode;
  ghost?: string | null;
  layers: Layer[];
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative z-2 scroll-mt-10 pt-[150px] pb-28 max-sm:pt-30 max-sm:pb-[74px]',
        className,
      )}
    >
      <Wrap>
        <div className='relative overflow-hidden rounded-[26px] border border-line bg-[linear-gradient(180deg,#fff,#FBFAF8)] px-14 py-15 shadow-[0_40px_80px_-50px_rgba(14,14,18,.35)] max-dsk:px-8 max-dsk:py-11 max-sm:rounded-[20px] max-sm:px-[22px] max-sm:py-[34px]'>
          <div
            className='pointer-events-none absolute inset-0 z-0 overflow-hidden'
            aria-hidden='true'
          >
            <div className='absolute inset-0 bg-[radial-gradient(rgba(14,14,18,.13)_1px,transparent_1.4px)] bg-size-[26px_26px] opacity-45 mask-[radial-gradient(ellipse_70%_60%_at_70%_30%,#000_0%,transparent_75%)]' />
          </div>
          <div className='relative z-2 grid grid-cols-[.88fr_1.12fr] items-center gap-14 max-dsk:grid-cols-1 max-dsk:gap-13'>
            <div>
              <Eyebrow>{eyebrow}</Eyebrow>
              <h2 className='rv mt-4 text-[clamp(31px,3.5vw,48px)] tracking-[-.035em]'>
                {title}
              </h2>
              <p className='rv mt-[18px] text-[17px] text-dim'>{body}</p>
              {ghost && (
                <div className='rv mt-[30px]'>
                  <BtnGhost href='#groeiplan'>{ghost}</BtnGhost>
                </div>
              )}
            </div>
            <div className="relative z-2 flex flex-col gap-3.5 pl-[26px] before:absolute before:top-4 before:bottom-4 before:left-[5px] before:w-[1.5px] before:bg-[linear-gradient(180deg,rgba(255,57,81,.15),rgba(255,57,81,.85))] before:content-['']">
              {layers.map((l) => (
                <div
                  key={l.title}
                  className={cn(
                    'group/fl rv relative z-2 rounded-2xl border border-line bg-white px-7 py-6 shadow-[0_14px_30px_-24px_rgba(14,14,18,.3)] hover:translate-x-[7px] hover:border-red/45',
                    "before:absolute before:top-[30px] before:-left-[26px] before:size-[11px] before:rounded-full before:border-2 before:border-red/50 before:bg-white before:transition-[background,border-color] before:duration-300 before:content-[''] hover:before:border-red hover:before:bg-red",
                    'nth-2:mr-[6%] nth-3:mr-[12%] nth-3:border-red/35 nth-3:bg-[linear-gradient(140deg,#FFF1F3,#fff_72%)] max-dsk:nth-2:mr-0 max-dsk:nth-3:mr-0',
                  )}
                >
                  <div className="mb-[9px] flex items-center gap-[9px] text-[11px] font-semibold tracking-[.13em] text-red-ink uppercase after:h-px after:flex-1 after:bg-[linear-gradient(90deg,rgba(255,57,81,.4),transparent)] after:content-['']">
                    {l.tag}
                  </div>
                  <h3 className='mb-2 text-xl tracking-[-.022em]'>{l.title}</h3>
                  <p className='text-[14.5px] leading-[1.58] text-dim'>{l.text}</p>
                  {l.kpi && (
                    <div className='mt-3.5 border-t border-line pt-[11px] text-[12.5px] text-dim-2 [&_b]:font-semibold [&_b]:text-ink'>
                      {l.kpi}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

/** Numbered ledger row with the red hover bar. */
export function LedgerRow({
  n,
  title,
  text,
}: {
  n: string;
  title: string;
  text: ReactNode;
}) {
  return (
    <div className="group/l relative grid grid-cols-[64px_1fr_26px] items-start gap-[22px] border-b border-line px-1 py-7 transition-[padding-left,background] duration-300 ease-rv before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-red before:transition-[width] before:duration-300 before:ease-rv before:content-[''] hover:bg-ink/[.025] hover:pl-[22px] hover:before:w-[3px] max-sm:grid-cols-[40px_1fr] max-sm:py-[22px]">
      <div className='pt-[3px] font-display text-[15px] font-bold text-dim-2 transition-colors duration-300 group-hover/l:text-red-ink'>
        {n}
      </div>
      <div>
        <h3 className='mb-2 text-xl tracking-[-.024em]'>{title}</h3>
        <p className='max-w-120 text-[14.5px] leading-[1.6] text-dim'>{text}</p>
      </div>
      <div className='-translate-x-1.5 pt-0.5 text-[19px] text-dim-2 opacity-0 transition-[opacity,translate] duration-300 group-hover/l:translate-x-0 group-hover/l:text-red group-hover/l:opacity-100 max-sm:hidden'>
        →
      </div>
    </div>
  );
}

export type Photo = {
  src?: string;
  alt?: string;
  t?: string | null;
  s?: string | null;
};

/** "Wat wij doen": sticky photo beside the numbered ledger, then the dark CTA band. */
export function Deliverables({
  eyebrow,
  title,
  lead,
  photo,
  rows,
  band,
  className,
}: {
  eyebrow?: string | null;
  title: ReactNode;
  lead?: ReactNode;
  photo: Photo;
  rows: { title: string; text: ReactNode }[];
  band?: { title: ReactNode; sub: ReactNode; cta: Cta };
  className?: string;
}) {
  return (
    <Sec className={cn('pt-5!', className)}>
      <Wrap>
        <SecHead eyebrow={eyebrow} title={title} lead={lead} />
        <div className='relative z-2 grid grid-cols-[.72fr_1.28fr] items-start gap-15 max-dsk:grid-cols-1 max-dsk:gap-8'>
          <div className="rv sticky top-[104px] h-140 overflow-hidden rounded-[20px] shadow-[0_40px_80px_-40px_rgba(14,14,18,.5)] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent_42%,rgba(12,12,16,.9)_100%)] after:content-[''] max-dsk:relative max-dsk:top-0 max-dsk:h-80 max-sm:h-60">
            {photo.src && (
              <Image
                src={photo.src}
                alt={photo.alt ?? ''}
                fill
                sizes='(max-width:1080px) 100vw, 440px'
                className='object-cover'
              />
            )}
            <div className='absolute inset-x-6 bottom-6 z-3 text-white'>
              <div className='font-display text-[21px] leading-[1.2] font-bold tracking-[-.026em]'>
                {photo.t}
              </div>
              <div className='mt-2 text-[13.5px] leading-normal text-white/85'>
                {photo.s}
              </div>
            </div>
          </div>
          <div className='rv border-t-[1.5px] border-ink'>
            {rows.map((r, i) => (
              <LedgerRow
                key={r.title}
                n={String(i + 1).padStart(2, '0')}
                title={r.title}
                text={r.text}
              />
            ))}
          </div>
        </div>
        {band && <CtaBand {...band} />}
      </Wrap>
    </Sec>
  );
}

/** Red outline + dot grid behind a photo (the design's `.crea-frame`). */
export const frame =
  "rv relative pt-[18px] pr-[18px] before:absolute before:top-0 before:right-0 before:z-0 before:h-[76%] before:w-[72%] before:rounded-[20px] before:border-[1.5px] before:border-red/50 before:content-[''] after:absolute after:-bottom-[34px] after:-left-[34px] after:z-0 after:size-[190px] after:bg-[radial-gradient(rgba(255,57,81,.85)_1.6px,transparent_1.6px)] after:bg-size-[15px_15px] after:opacity-55 after:content-[''] max-dsk:after:hidden max-sm:pt-3 max-sm:pr-3";

/** Framed photo with a badge beside copy and chips, on the soft band. */
export function Crea({
  img,
  alt,
  badge,
  eyebrow,
  title,
  paras,
  chips,
  shot = false,
}: {
  img?: string;
  alt?: string;
  badge: { t?: string | null; s?: string | null };
  eyebrow?: string | null;
  title: ReactNode;
  paras: ReactNode[];
  chips?: string[];
  /** A website screenshot: natural height, no crop (web development). */
  shot?: boolean;
}) {
  return (
    <Sec className='border-t border-line bg-soft'>
      <Wrap>
        <div className='grid grid-cols-2 items-center gap-[70px] max-dsk:grid-cols-1 max-dsk:gap-13'>
          <div className={frame}>
            <div
              className={cn(
                'relative z-2 rounded-[18px]',
                shot
                  ? ''
                  : 'h-[430px] overflow-hidden shadow-[0_40px_80px_-36px_rgba(14,14,18,.5)] max-dsk:h-[390px] max-sm:h-75',
              )}
            >
              {!img ? null : shot ? (
                <Image
                  src={img}
                  alt={alt ?? ''}
                  width={1200}
                  height={800}
                  sizes='(max-width:1080px) 100vw, 560px'
                  className='h-auto w-full rounded-[18px] border border-line shadow-[0_40px_80px_-36px_rgba(14,14,18,.5)]'
                />
              ) : (
                <Image
                  src={img}
                  alt={alt ?? ''}
                  fill
                  sizes='(max-width:1080px) 100vw, 560px'
                  className='object-cover'
                />
              )}
              <div
                className={cn(
                  'absolute left-5 z-3 rounded-xl border border-line bg-white/92 px-[17px] py-[13px] backdrop-blur-[14px]',
                  shot ? '-bottom-6' : 'bottom-5',
                )}
              >
                <div className='font-display text-[14.5px] font-bold'>{badge.t}</div>
                <div className='mt-0.5 text-xs text-dim'>{badge.s}</div>
              </div>
            </div>
          </div>
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className='rv mt-4 mb-5 text-[clamp(29px,3.2vw,42px)] tracking-[-.035em]'>
              {title}
            </h2>
            {paras.map((p, i) => (
              <p
                key={i}
                className={cn(
                  'rv text-[16.5px] text-dim',
                  i < paras.length - 1 && 'mb-4',
                )}
              >
                {p}
              </p>
            ))}
            {chips && (
              <div className='rv mt-[26px] flex flex-wrap gap-[9px]'>
                {chips.map((c) => (
                  <span
                    key={c}
                    className='rounded-full border border-line-2 bg-white px-[15px] py-2 text-[13px] text-dim transition-colors duration-[250ms] hover:border-red hover:text-ink'
                  >
                    {c}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Wrap>
    </Sec>
  );
}

export type CaseStudyProps = {
  eyebrow?: string | null;
  title?: ReactNode;
  img?: string;
  alt?: string;
  cat?: string | null;
  name?: string | null;
  text: ReactNode;
  stats: [string, string][];
};

/** "Bewijs": one case as photo + copy + stats. */
export function CaseStudy({
  eyebrow,
  title,
  img,
  alt,
  cat,
  name,
  text,
  stats,
}: CaseStudyProps) {
  return (
    <Sec>
      <Wrap>
        <SecHead eyebrow={eyebrow} title={title} />
        <div className='rv relative grid min-h-85 grid-cols-2 overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_30px_60px_-40px_rgba(14,14,18,.35)] max-dsk:grid-cols-1'>
          <div className='relative max-dsk:min-h-65'>
            {img && (
              <Image
                src={img}
                alt={alt ?? ''}
                fill
                sizes='(max-width:1080px) 100vw, 620px'
                className='object-cover'
              />
            )}
          </div>
          <div className='flex flex-col justify-center px-[42px] py-11 max-sm:px-[26px] max-sm:py-8'>
            <Eyebrow rv={false}>{cat}</Eyebrow>
            <h3 className='mt-3 mb-3.5 text-[29px] tracking-[-.03em]'>{name}</h3>
            <p className='mb-[26px] text-[15.5px] text-dim'>{text}</p>
            <div className='flex gap-9 border-t border-line pt-5'>
              {stats.map(([n, l]) => (
                <div key={l}>
                  <div className='font-display text-[32px] font-bold tracking-[-.035em]'>
                    {n}
                  </div>
                  <div className='mt-0.5 text-[12.5px] text-dim'>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrap>
    </Sec>
  );
}

export type FaqItem = { q: string; a: ReactNode };

/** Accordion on native <details>. */
export function FaqList({
  items,
  className,
}: {
  items: FaqItem[];
  className?: string;
}) {
  return (
    <div className={cn('max-w-210 border-t-[1.5px] border-ink', className)}>
      {items.map((f) => (
        <details key={f.q} className='group rv border-b border-line'>
          <summary className='flex cursor-pointer list-none items-center justify-between gap-5 py-[22px] font-display text-lg/[1.65] font-semibold tracking-[-.02em] transition-colors duration-200 hover:text-red-ink [&::-webkit-details-marker]:hidden'>
            {f.q}{' '}
            <span className='shrink-0 text-[22px] leading-none text-red transition-transform duration-[280ms] ease-rv group-open:rotate-45'>
              +
            </span>
          </summary>
          <p className='max-w-175 pb-6 text-[15.5px] text-dim'>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Faq({
  items,
  eyebrow,
  title,
  className,
}: {
  items: FaqItem[];
  eyebrow?: string | null;
  title?: ReactNode;
  className?: string;
}) {
  return (
    <Sec className={className}>
      <Wrap>
        <SecHead eyebrow={eyebrow} title={title} />
        <FaqList items={items} />
      </Wrap>
    </Sec>
  );
}

/** Numbered steps joined by a dashed line (stacks below 900px). */
export function ProcRow({ items }: { items: [string, ReactNode][] }) {
  return (
    <div className='relative flex max-[900px]:flex-col max-[900px]:gap-[26px]'>
      {items.map(([title, text], i) => (
        <div
          key={title}
          className="rv relative flex-1 pr-[18px] not-last:after:absolute not-last:after:top-[23px] not-last:after:-right-0.5 not-last:after:h-[1.5px] not-last:after:w-[calc(100%-46px)] not-last:after:bg-[repeating-linear-gradient(90deg,rgba(255,57,81,.5)_0,rgba(255,57,81,.5)_5px,transparent_5px,transparent_10px)] not-last:after:content-[''] max-[900px]:not-last:after:hidden"
        >
          <div className='relative z-2 mb-4 flex size-[46px] items-center justify-center rounded-full bg-red font-display text-[17px] font-bold text-white shadow-[0_0_0_6px_#fff]'>
            {i + 1}
          </div>
          <h3 className='mb-[7px] text-[15.5px] tracking-[-.01em]'>{title}</h3>
          <p className='text-[13px] leading-normal text-dim'>{text}</p>
        </div>
      ))}
    </div>
  );
}
