import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import type { Site } from '@/lib/site';
import type { PAGE_QUERY_RESULT } from '@/sanity/sanity.types';
import { ArticleCard, PillarCard, type ArticleCardData } from './ArticleCard';
import { CaseCard } from './CaseCard';
import { Animated, btn, pic, Rich } from './cms';
import { ArticleFilter, FilterEmpty, FilterGroup, FilterItem, NewsletterForm, Pills, SearchBox } from './kennisbank';
import { LeadForm } from './LeadForm';
import { BridgeQuote, CtaBand, FloatStat, frame, ProcRow, type Cta } from './service';
import { Ambient, BtnGhost, BtnRed, Crumb, Eyebrow, Sec, SecHead, Wrap } from './ui';

/* The sections that only one or two pages use, one component per block type. */

type Content = NonNullable<NonNullable<PAGE_QUERY_RESULT>['content']>[number];
export type B<T extends Content['_type']> = Extract<Content, { _type: T }>;
type P<T extends Content['_type']> = { b: B<T>; site: Site };

/** The default red button: the block's own, else "Ontvang mijn groeiplan" to the page's form. */
export const mainCta = (link: Parameters<typeof btn>[0], site: Site, href = '#groeiplan'): Cta =>
  btn(link, { label: site.ui.ctaLabel, href });

const chip =
  'rounded-full border border-line-2 bg-white px-[15px] py-2 text-[13px] text-dim transition-colors duration-[250ms] hover:border-red hover:text-ink';
const tick = "flex items-center gap-2 before:size-[5px] before:rounded-full before:bg-red before:content-['']";
const fadedAmbient = (
  <div className='absolute inset-0 mask-[linear-gradient(#000_65%,transparent)]'>
    <Ambient />
  </div>
);

// ---------------------------------------------------------------------------
// Home
// ---------------------------------------------------------------------------

const HERO_DOTS = [
  [6, 48], [16, 48], [26, 48], [16, 38], [26, 38], [36, 38], [26, 28], [36, 28], [36, 18], [46, 18], [46, 8],
];

export function HomeHero({ b, site }: P<'homeHero'>) {
  const [one, two, three] = [pic(b.image, 900), pic(b.image2, 700), pic(b.image3, 420)];
  const primary = mainCta(b.primaryCta, site);
  const secondary = btn(b.secondaryCta);
  return (
    <header className='relative overflow-hidden pt-[170px] pb-24 max-sm:pt-[130px]'>
      <Ambient />
      <Wrap>
        <div className='grid grid-cols-[1.02fr_.98fr] items-center gap-15 max-dsk:grid-cols-1 max-dsk:gap-14'>
          <div>
            <Eyebrow>{b.eyebrow}</Eyebrow>
            <h1 className="rv mt-[22px] mb-[26px] text-[clamp(44px,5.4vw,78px)] tracking-[-.04em] [&_em]:relative [&_em]:inline-block [&_em]:after:absolute [&_em]:after:inset-x-0 [&_em]:after:bottom-[.08em] [&_em]:after:h-[.09em] [&_em]:after:rounded-xs [&_em]:after:bg-red [&_em]:after:opacity-28 [&_em]:after:content-['']">
              <Rich value={b.title} />
            </h1>
            <p className='rv mb-9 max-w-130 text-[18.5px] text-dim [&_strong]:font-semibold [&_strong]:text-ink'>
              <Rich value={b.lead} />
            </p>
            <div className='rv mb-[22px] flex flex-wrap items-center gap-[22px]'>
              {primary && <BtnRed href={primary.href}>{primary.label}</BtnRed>}
              {secondary && <BtnGhost href={secondary.href}>{secondary.label}</BtnGhost>}
            </div>
            <p className='rv max-w-[470px] text-[13.5px] leading-[1.6] text-dim-2'>{b.note}</p>
          </div>
          <div className='rv relative h-140 max-dsk:h-115 max-sm:h-100' data-parallax>
            {one && (
              <div
                className='absolute top-0 right-0 z-2 h-[62%] w-[74%] overflow-hidden rounded-2xl bg-soft shadow-[0_36px_70px_-30px_rgba(14,14,18,.38)]'
                data-depth='0.035'
              >
                <Image src={one.src} alt={one.alt} fill priority sizes='(max-width:1080px) 74vw, 440px' className='object-cover' />
              </div>
            )}
            {two && (
              <div
                className='absolute bottom-[26px] left-0 z-3 h-[46%] w-[56%] overflow-hidden rounded-2xl border-4 border-white bg-soft shadow-[0_30px_60px_-26px_rgba(14,14,18,.42)]'
                data-depth='-0.05'
              >
                <Image src={two.src} alt={two.alt} fill sizes='(max-width:1080px) 56vw, 330px' className='object-cover' />
              </div>
            )}
            {three && (
              <div className='absolute right-[8%] bottom-0 z-1 h-[30%] w-[34%] overflow-hidden rounded-2xl bg-soft opacity-85' data-depth='0.02'>
                <Image src={three.src} alt={three.alt} fill sizes='(max-width:1080px) 34vw, 200px' className='object-cover' />
              </div>
            )}
            {site.rating && (
              <div
                className='absolute top-[52%] -right-3.5 z-5 min-w-49 rounded-[14px] border border-line bg-white/90 px-5 py-4 shadow-[0_22px_50px_-20px_rgba(14,14,18,.35)] backdrop-blur-[14px] max-sm:right-0'
                data-depth='-0.07'
              >
                <div className='text-sm tracking-[3px] text-red'>★★★★★</div>
                <div className='mt-[5px] font-display text-[26px] font-bold tracking-[-.03em]'>{site.rating} / 5</div>
                <div className='mt-px text-[12.5px] text-dim'>{site.ui.ratedOnGoogle}</div>
              </div>
            )}
            <svg className='absolute top-3 -left-4 z-5' width='54' height='54' viewBox='0 0 54 54' data-depth='0.06' aria-hidden='true'>
              <g fill='#FF3951' opacity='.75'>
                {HERO_DOTS.map(([cx, cy]) => (
                  <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r='2.4' />
                ))}
              </g>
            </svg>
          </div>
        </div>
      </Wrap>
    </header>
  );
}

export function Stages({ b, site }: P<'stages'>) {
  const cta = mainCta(b.band?.cta, site);
  return (
    <Sec id={b.anchor ?? undefined} className='scroll-mt-10 border-y border-line bg-soft'>
      <Wrap>
        <SecHead eyebrow={b.eyebrow} title={<Rich value={b.title} />} lead={b.lead} />
        <div className="relative grid grid-cols-4 gap-5 before:absolute before:inset-x-[6%] before:top-[26px] before:z-0 before:border-t-2 before:border-dashed before:border-red/40 before:content-[''] max-dsk:grid-cols-2 max-dsk:before:hidden max-sm:grid-cols-1">
          {(b.stages ?? []).map((s, i) => (
            <div
              key={s._key}
              className='rv relative z-1 rounded-[18px] border border-line bg-white px-[26px] pt-[30px] pb-[26px] hover:-translate-y-[5px] hover:border-line-2 hover:shadow-[0_26px_50px_-28px_rgba(14,14,18,.3)]'
            >
              <div className='mb-[22px] flex size-[46px] items-center justify-center rounded-full bg-red font-display text-base font-bold text-white shadow-[0_0_0_6px_var(--color-soft)]'>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className='mb-2 text-[23px] tracking-[-.025em]'>{s.title}</h3>
              <p className='mb-[22px] min-h-[46px] text-[14.5px] leading-[1.55] text-dim max-sm:min-h-0'>{s.text}</p>
              <ul className='border-t border-line'>
                {(s.links ?? []).map((l) => (
                  <li key={l._key} className='border-b border-line last:border-b-0'>
                    <Link
                      href={l.href ?? '#'}
                      className="group/l flex items-center justify-between gap-2.5 py-[13px] text-[15px] font-semibold transition-[color,padding] duration-200 after:text-red after:transition-transform after:duration-200 after:content-['→'] hover:pl-1 hover:text-red-ink hover:after:translate-x-[3px]"
                    >
                      <span>
                        {l.label}
                        {l.badge && (
                          <span className='ml-2 inline-block rounded-full border border-red/28 bg-red/10 px-2 py-0.5 align-[2px] text-[10.5px] tracking-[.1em] text-red-ink uppercase'>
                            {l.badge}
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="rv relative isolate mt-8 flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-[22px] border border-white/10 bg-[radial-gradient(520px_220px_at_100%_0%,rgba(255,57,81,.55),transparent_70%),radial-gradient(420px_200px_at_0%_120%,rgba(255,120,90,.22),transparent_70%),linear-gradient(135deg,#1c1c24_0%,#0d0d12_100%)] px-[34px] py-[30px] text-base text-white shadow-[inset_0_1px_0_rgba(255,255,255,.16),inset_0_-24px_40px_-30px_rgba(255,57,81,.35),0_2px_0_rgba(14,14,18,.06),0_30px_60px_-26px_rgba(14,14,18,.6),0_60px_90px_-50px_rgba(255,57,81,.5)] before:absolute before:inset-0 before:-z-1 before:bg-[radial-gradient(rgba(255,255,255,.14)_1px,transparent_1.4px)] before:bg-size-[20px_20px] before:mask-[linear-gradient(100deg,transparent_35%,#000)] before:content-['']">
          <span className='max-w-155 leading-[1.55] text-white/72 [&_strong]:font-semibold [&_strong]:text-white'>
            <Rich value={b.band?.text} />
          </span>
          {cta && (
            <Link
              href={cta.href}
              className='inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold whitespace-nowrap text-ink shadow-[0_14px_30px_-12px_rgba(0,0,0,.6),inset_0_-2px_0_rgba(14,14,18,.08)] transition-[translate,box-shadow,background,color] duration-[220ms] hover:-translate-y-0.5 hover:bg-red hover:text-white hover:shadow-[0_18px_34px_-12px_rgba(255,57,81,.8)]'
            >
              {cta.label}
            </Link>
          )}
        </div>
      </Wrap>
    </Sec>
  );
}

export function CaseCards({ b, site }: P<'caseCards'>) {
  return (
    <Sec id={b.anchor ?? undefined}>
      <Wrap>
        <SecHead eyebrow={b.eyebrow} title={<Rich value={b.title} />} lead={b.lead} />
        <div className='grid grid-cols-3 gap-4 max-dsk:grid-cols-2 max-sm:grid-cols-1'>
          {(b.cases ?? []).map((c) => (
            <CaseCard
              key={c._id}
              href={c.url ?? '#'}
              img={pic(c.image, 800)?.src}
              cat={c.category}
              title={c.name}
              linkLabel={site.ui.caseCardLink}
              stats={(c.stats ?? []).slice(0, 2).map((s) => [<Animated key={s._key} value={s.value} />, s.label ?? ''])}
            />
          ))}
        </div>
      </Wrap>
    </Sec>
  );
}

export function Approach({ b, site }: P<'approach'>) {
  const cta = mainCta(b.closing?.cta, site);
  return (
    <Sec id={b.anchor ?? undefined} className='scroll-mt-10 border-y border-line bg-soft'>
      <Wrap>
        <SecHead eyebrow={b.eyebrow} title={<Rich value={b.title} />} />
        <div className='mt-[54px] grid grid-cols-4 max-dsk:grid-cols-2 max-dsk:gap-y-[34px] max-sm:grid-cols-1'>
          {(b.steps ?? []).map((s, i) => (
            <div
              key={s._key}
              className='rv relative pr-[30px] not-first:pl-[30px] not-last:border-r not-last:border-line-2 max-dsk:nth-2:border-r-0 max-dsk:nth-3:pl-0 max-sm:border-r-0! max-sm:border-b max-sm:border-line max-sm:pb-[26px] max-sm:pl-0!'
            >
              <div className="mb-[18px] flex items-center gap-[9px] font-display text-[13px] font-bold tracking-[.08em] text-red-ink uppercase after:h-px after:flex-1 after:bg-[linear-gradient(90deg,rgba(255,57,81,.45),transparent)] after:content-['']">
                {site.ui.stepPrefix} {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className='mb-2.5 text-xl tracking-[-.02em]'>{s.title}</h3>
              <p className='text-[14.5px] leading-[1.6] text-dim'>{s.text}</p>
            </div>
          ))}
        </div>
        <div className='rv mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-9'>
          <p className='max-w-130 font-display text-[clamp(20px,2.2vw,26px)] leading-[1.2] font-bold tracking-[-.025em]'>
            {b.closing?.title}
            <span className='mt-2 block font-sans text-[15px] font-normal tracking-normal text-dim'>{b.closing?.text}</span>
          </p>
          {cta && (
            <BtnRed href={cta.href} className='max-sm:w-full max-sm:justify-center'>
              {cta.label}
            </BtnRed>
          )}
        </div>
      </Wrap>
    </Sec>
  );
}

export function StatBand({ b }: P<'statBand'>) {
  return (
    <Sec className='pb-0!'>
      <Wrap>
        <div className='grid grid-cols-4 gap-4 max-dsk:grid-cols-2 max-sm:grid-cols-1'>
          {(b.stats ?? []).map((s) => (
            <div
              key={s._key}
              className='rv rounded-2xl border border-line bg-white px-6 py-7 hover:border-red/40 hover:shadow-[0_20px_40px_-26px_rgba(255,57,81,.45)]'
            >
              <div className='font-display text-[44px] leading-none font-bold tracking-[-.04em]'>
                <Animated value={s.value} />
                <span className='text-red'>{s.unit}</span>
              </div>
              <div className='mt-2.5 text-[13.5px] text-dim'>{s.label}</div>
            </div>
          ))}
        </div>
      </Wrap>
    </Sec>
  );
}

export function HomeTeam({ b }: P<'homeTeam'>) {
  const photo = pic(b.image, 1240);
  return (
    <Sec id={b.anchor ?? undefined}>
      <Wrap>
        <div className='grid grid-cols-[1.05fr_.95fr] items-center gap-14 max-dsk:grid-cols-1 max-dsk:gap-9'>
          <div className='rv relative h-130 overflow-hidden rounded-[20px] shadow-[0_36px_70px_-34px_rgba(14,14,18,.4)]'>
            {photo && <Image src={photo.src} alt={photo.alt} fill sizes='(max-width:1080px) 100vw, 620px' className='object-cover' />}
            <div className='absolute bottom-[22px] left-[22px] z-3 rounded-xl border border-line bg-white/92 px-[18px] py-3.5 backdrop-blur-[14px]'>
              <div className='font-display text-[15px] font-bold'>{b.badge?.title}</div>
              <div className='mt-0.5 text-[12.5px] text-dim'>{b.badge?.text}</div>
            </div>
          </div>
          <div>
            <Eyebrow>{b.eyebrow}</Eyebrow>
            <h2 className='rv mt-4 mb-5 text-[clamp(30px,3.4vw,46px)] tracking-[-.035em]'>
              <Rich value={b.title} />
            </h2>
            {(b.paragraphs ?? []).map((p) => (
              <p key={p} className='rv mb-4 text-[16.5px] text-dim'>
                {p}
              </p>
            ))}
            <div className='rv mt-[26px] flex flex-wrap gap-[9px]'>
              {(b.chips ?? []).map((c) => (
                <span key={c} className={chip}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Wrap>
    </Sec>
  );
}

// ---------------------------------------------------------------------------
// Team, results
// ---------------------------------------------------------------------------

/** Team/results hero: with an image it is the two-column team hero, else text with figures below. */
export function PageHero({ b, site }: P<'pageHero'>) {
  const image = pic(b.image, 1160);
  const primary = mainCta(b.primaryCta, site);
  const secondary = btn(b.secondaryCta);
  const crumbs: [string][] = b.crumb ? [[b.crumb]] : [];
  if (image)
    return (
      <header className='relative overflow-hidden pt-[150px] pb-[90px]'>
        {fadedAmbient}
        <Wrap>
          <div className='grid grid-cols-2 items-center gap-[70px] max-[980px]:grid-cols-1 max-[980px]:gap-[54px]'>
            <div>
              <Crumb home={site.ui.crumbHome} items={crumbs} />
              <Eyebrow>{b.eyebrow}</Eyebrow>
              <h1 className='rv mt-[18px] mb-5 text-[clamp(38px,5vw,66px)] leading-[1.03] tracking-[-.04em]'>
                <Rich value={b.title} />
              </h1>
              <p className='rv mb-[34px] max-w-130 text-[18.5px] text-dim'>{b.lead}</p>
              <div className='rv mb-[22px] flex flex-wrap items-center gap-[22px]'>
                {primary && <BtnRed href={primary.href}>{primary.label}</BtnRed>}
                {secondary && <BtnGhost href={secondary.href}>{secondary.label}</BtnGhost>}
              </div>
            </div>
            <div className={frame}>
              <div className='relative z-2 h-120 overflow-hidden rounded-[18px] shadow-[0_40px_80px_-36px_rgba(14,14,18,.5)] max-[980px]:h-85'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes='(max-width:980px) 100vw, 580px'
                  className='object-cover object-[center_45%]'
                />
              </div>
            </div>
          </div>
        </Wrap>
      </header>
    );

  return (
    <header className='relative overflow-hidden pt-[150px] pb-[50px]'>
      {fadedAmbient}
      <Wrap>
        <div className='max-w-190'>
          <Crumb home={site.ui.crumbHome} items={crumbs} />
          <Eyebrow>{b.eyebrow}</Eyebrow>
          <h1 className='rv mt-[18px] mb-5 text-[clamp(36px,5vw,60px)] leading-[1.03] tracking-[-.04em] text-ink'>
            <Rich value={b.title} />
          </h1>
          <p className='rv max-w-155 text-[18.5px] text-dim'>{b.lead}</p>
        </div>
      </Wrap>
      {!!b.stats?.length && (
        <Wrap>
          <div className='rv mt-14 grid grid-cols-4 gap-3.5 max-[900px]:grid-cols-2 max-mob:grid-cols-1 max-mob:gap-3'>
            {b.stats.map((s) => (
              <div
                key={s._key}
                className='relative rounded-[18px] border border-line bg-white px-6 py-[30px] shadow-[0_20px_40px_-32px_rgba(14,14,18,.35)]'
              >
                <div className='flex items-baseline gap-0.5 font-display text-[clamp(30px,3.6vw,46px)] font-bold tracking-[-.03em] text-ink'>
                  <Animated value={s.value} />
                  {s.unit}
                </div>
                <div className='mt-2 text-[12.5px] leading-[1.4] text-dim'>{s.label}</div>
              </div>
            ))}
          </div>
        </Wrap>
      )}
    </header>
  );
}

export function TeamGrid({ b }: P<'teamGrid'>) {
  return (
    <Sec id={b.anchor ?? undefined} className='scroll-mt-10 pt-2.5!'>
      <Wrap>
        <SecHead eyebrow={b.eyebrow} title={<Rich value={b.title} />} lead={b.lead} />
        <div className='grid grid-cols-4 gap-5 max-[960px]:grid-cols-2 max-mob:grid-cols-1'>
          {(b.members ?? []).map((m) => {
            const photo = pic(m.photo, 600);
            return (
              <div
                key={m._id}
                className='group rv relative overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_24px_46px_-34px_rgba(14,14,18,.45)] hover:-translate-y-1.5 hover:border-red/40 hover:shadow-[0_34px_60px_-32px_rgba(255,57,81,.4)]'
              >
                <div className='relative aspect-[4/5] overflow-hidden bg-soft'>
                  {photo && (
                    <Image
                      src={photo.src}
                      alt={m.name}
                      fill
                      sizes='(max-width:520px) 100vw, (max-width:960px) 50vw, 300px'
                      className='object-cover object-[center_30%] transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-105'
                    />
                  )}
                </div>
                <div className='relative px-5 pt-[18px] pb-[22px]'>
                  <h3 className='text-lg tracking-[-.02em]'>{m.name}</h3>
                  <div className='mt-[3px] text-[12.5px] font-semibold text-red-ink'>{m.role}</div>
                  <p className='mt-2.5 text-[13.5px] leading-normal text-dim'>{m.bio}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Wrap>
    </Sec>
  );
}

export function Story({ b }: P<'story'>) {
  return (
    <Sec className='pt-5!'>
      <Wrap>
        <div className='grid grid-cols-[.9fr_1.1fr] items-start gap-[70px] max-[980px]:grid-cols-1 max-[980px]:gap-10'>
          <div className='sticky top-30 max-[980px]:static'>
            <Eyebrow>{b.eyebrow}</Eyebrow>
            <h2 className='rv mt-4 mb-[30px] text-[clamp(32px,3.7vw,50px)] tracking-[-.035em]'>
              <Rich value={b.title} />
            </h2>
            <div className='rv rounded-[20px] border border-line bg-white px-7 pt-7 pb-[26px] shadow-[0_26px_50px_-34px_rgba(14,14,18,.4)]'>
              <div className='mb-4 text-[11.5px] font-semibold tracking-[.16em] text-red-ink uppercase'>{b.uspTitle}</div>
              <ul className='flex flex-col gap-3.5'>
                {(b.usps ?? []).map((u) => (
                  <li key={u._key} className='relative pl-[30px] text-[14.5px] leading-normal text-dim'>
                    <svg className='absolute top-0.5 left-0 size-5' viewBox='0 0 22 22' aria-hidden='true'>
                      <circle cx='11' cy='11' r='11' fill='#FF3951' />
                      <path d='M6.2 11.4l3.1 3.1 6.5-6.8' fill='none' stroke='#fff' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                    <b className='font-semibold text-ink'>{u.title}</b> {u.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            {(b.paragraphs ?? []).map((p, i) => (
              <p key={p} className={cn('rv mb-5 text-lg leading-[1.75] text-dim', i === 0 && 'text-xl leading-[1.6] text-ink')}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </Wrap>
    </Sec>
  );
}

export function CaseList({ b, site }: P<'caseList'>) {
  return (
    <Sec className='py-5!'>
      <Wrap>
        {(b.cases ?? []).map((c, i) => {
          const image = pic(c.image, 1180);
          return (
            <div
              key={c._id}
              className='rv grid grid-cols-2 items-center gap-14 border-t border-line py-16 first:border-t-0 max-[860px]:grid-cols-1 max-[860px]:gap-7'
            >
              <div
                className={cn(
                  'group/m relative aspect-[16/12] overflow-hidden rounded-[20px] border border-line shadow-[0_30px_60px_-36px_rgba(14,14,18,.45)]',
                  i % 2 === 1 && 'order-2 max-[860px]:order-none',
                )}
              >
                {image && (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes='(max-width:860px) 100vw, 590px'
                    className='object-cover transition-transform duration-600 group-hover/m:scale-104'
                  />
                )}
                <div className='absolute top-4 left-4 rounded-full border border-line bg-white/92 px-3.5 py-1.5 font-display text-[11px] font-bold tracking-[.04em] text-ink uppercase backdrop-blur-[6px]'>
                  {c.badge}
                </div>
              </div>
              <div>
                <Eyebrow rv={false} className='mb-3.5'>
                  {c.eyebrow}
                </Eyebrow>
                <h3 className='mb-4 text-[clamp(24px,2.6vw,32px)] leading-[1.15] tracking-[-.03em]'>{c.headline}</h3>
                <p className='mb-6 text-[15.5px] leading-[1.65] text-dim'>{c.summary}</p>
                <div className='mb-[22px] grid grid-cols-3 gap-px overflow-hidden rounded-[14px] border border-line bg-line'>
                  {(c.stats ?? []).map((s) => (
                    <div key={s._key} className='bg-soft px-3.5 py-4 text-left'>
                      <div className='font-display text-[19px] font-bold tracking-[-.01em] text-ink'>{s.value}</div>
                      <div className='mt-1 text-[10.5px] leading-[1.35] text-dim'>{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className='mb-6 flex flex-wrap gap-2'>
                  {(c.tags ?? []).map((t) => (
                    <span key={t} className='rounded-full border border-line bg-white px-[13px] py-1.5 font-display text-[11.5px] font-semibold text-dim'>
                      {t}
                    </span>
                  ))}
                </div>
                {c.url && (
                  <a
                    href={c.url}
                    target='_blank'
                    rel='noopener'
                    className='mt-[18px] inline-flex items-center gap-2 border-b-[1.5px] border-line-2 pb-[3px] text-[14.5px] font-semibold text-ink transition-colors duration-200 hover:border-red hover:text-red'
                  >
                    {site.ui.caseListLink}
                  </a>
                )}
              </div>
            </div>
          );
        })}
        {b.band && <CtaBand className='mt-5! mb-16' title={<Rich value={b.band.title} />} sub={b.band.text} cta={mainCta(b.band.cta, site)} />}
      </Wrap>
    </Sec>
  );
}

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

export function ContactHero({ b, site }: P<'contactHero'>) {
  const value = 'font-display text-[15.5px] font-semibold text-ink';
  return (
    <header className='relative overflow-hidden pt-[150px] pb-[90px]'>
      {fadedAmbient}
      <Wrap className='grid grid-cols-2 items-start gap-[70px] max-[980px]:grid-cols-1 max-[980px]:gap-12'>
        <div>
          <Crumb home={site.ui.crumbHome} items={b.crumb ? [[b.crumb]] : []} />
          <Eyebrow>{b.eyebrow}</Eyebrow>
          <h1 className='rv mt-4 mb-5 text-[clamp(36px,4.6vw,58px)] leading-[1.03] tracking-[-.04em]'>
            <Rich value={b.title} />
          </h1>
          <p className='rv mb-[34px] max-w-115 text-[18.5px] text-dim'>{b.lead}</p>
          <div className='rv mt-9 flex flex-col'>
            {(b.quick ?? []).map((q) => (
              <div key={q._key} className='flex items-center gap-3.5 border-t border-line px-1 py-3.5 first:border-t-0'>
                <div className='flex size-[38px] shrink-0 items-center justify-center rounded-[10px] border border-line bg-white text-base shadow-[0_10px_20px_-14px_rgba(14,14,18,.4)]'>
                  {q.icon}
                </div>
                <div>
                  <div className='text-[11px] tracking-[.06em] text-dim uppercase'>{q.label}</div>
                  {q.href ? (
                    <a href={q.href} className={`${value} hover:text-red-ink`}>
                      {q.value}
                    </a>
                  ) : (
                    <span className={value}>{q.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className='rv mt-[30px] flex flex-wrap gap-x-[22px] gap-y-2 text-[13.5px] text-dim'>
            {(b.ticks ?? []).map((t) => (
              <span key={t} className={tick}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <LeadForm id={b.anchor ?? undefined} ui={site.ui} form={b.form} />
      </Wrap>
    </header>
  );
}

export function ContactMethods({ b }: P<'contactMethods'>) {
  return (
    <Sec className='pt-0!'>
      <Wrap>
        <SecHead eyebrow={b.eyebrow} title={<Rich value={b.title} />} className='mb-0!' />
        <div className='mt-11 grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-mob:grid-cols-1'>
          {(b.methods ?? []).map((m) => (
            <a
              key={m._key}
              href={m.href ?? '#'}
              className='rv block rounded-2xl border border-line bg-white px-5 py-6 shadow-[0_20px_40px_-32px_rgba(14,14,18,.4)] hover:-translate-y-1 hover:border-red/35 hover:shadow-[0_28px_50px_-30px_rgba(255,57,81,.4)]'
            >
              <div className='mb-3.5 flex size-10 items-center justify-center rounded-[10px] bg-red-tint text-[17px]'>{m.icon}</div>
              <h3 className='text-[15px] text-ink'>{m.title}</h3>
              <div className='mt-1.5 text-sm font-semibold text-red-ink'>{m.value}</div>
              <p className='mt-1.5 text-[12.5px] leading-normal text-dim'>{m.text}</p>
            </a>
          ))}
        </div>
      </Wrap>
    </Sec>
  );
}

export function InfoCard({ b }: P<'infoCard'>) {
  const cta = btn(b.cta);
  return (
    <Sec className='pt-0!'>
      <Wrap>
        <div className='rv relative overflow-hidden rounded-[20px] border border-line bg-[radial-gradient(ellipse_at_20%_0%,#FFF1F3,transparent_60%),#fff] p-11 shadow-[0_30px_60px_-40px_rgba(14,14,18,.4)]'>
          <div
            className='pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(rgba(14,14,18,.13)_1px,transparent_1.4px)] bg-size-[26px_26px] opacity-50 mask-[radial-gradient(ellipse_70%_60%_at_70%_30%,#000_0%,transparent_75%)]'
            aria-hidden='true'
          />
          <div className='relative z-2 flex flex-wrap items-center justify-between gap-10'>
            <div>
              <div className='mb-4 flex size-[52px] items-center justify-center rounded-[14px] border border-red/30 bg-red-tint text-[22px]'>{b.icon}</div>
              <h3 className='text-[22px] tracking-[-.02em]'>{b.title}</h3>
              <p className='mt-1.5 max-w-130 text-[14.5px] text-dim'>{b.text}</p>
            </div>
            {cta && <BtnRed href={cta.href}>{cta.label}</BtnRed>}
          </div>
        </div>
      </Wrap>
    </Sec>
  );
}

// ---------------------------------------------------------------------------
// Groeiplan
// ---------------------------------------------------------------------------

export function GroeiplanHero({ b, site }: P<'groeiplanHero'>) {
  const [first, ...more] = b.floatStats ?? [];
  const position = ['-top-7 right-[30px] max-[980px]:right-4', '-right-[22px] -bottom-5 max-[980px]:-right-1.5'];
  return (
    <header className='relative overflow-hidden pt-[150px] pb-25'>
      <Ambient />
      <Wrap className='grid grid-cols-[1.05fr_.95fr] items-start gap-[70px] max-[980px]:grid-cols-1 max-[980px]:gap-14'>
        <div>
          <div className='rv inline-flex items-center gap-2 rounded-full border border-red/28 bg-red-tint px-3.5 py-[7px] font-display text-[12.5px] font-semibold text-red-ink'>
            <span className='size-1.5 rounded-full bg-red shadow-[0_0_0_4px_rgba(255,57,81,.15)]' />
            {b.badge}
          </div>
          <h1 className='rv mt-[18px] mb-5 text-[clamp(36px,4.6vw,58px)] leading-[1.03] tracking-[-.04em]'>
            <Rich value={b.title} />
          </h1>
          <p className='rv mb-1.5 max-w-125 text-[18.5px] text-dim'>{b.lead}</p>
          <div className='rv mt-7 flex flex-col gap-3'>
            {(b.ticks ?? []).map((t) => (
              <div key={t} className='flex items-center gap-3 text-[15px] text-ink'>
                <span className='flex size-[22px] shrink-0 items-center justify-center rounded-full border border-[rgba(23,138,71,.35)] bg-[#E7F8EE] text-xs text-[#178A47]'>
                  ✓
                </span>
                {t}
              </div>
            ))}
          </div>
          <div className='rv mt-[38px] flex flex-wrap gap-[18px] max-mob:grid max-mob:grid-cols-3 max-mob:gap-2.5'>
            {(b.mini ?? []).map((m) => (
              <div
                key={m._key}
                className='rounded-[14px] border border-line bg-white px-[18px] py-3.5 shadow-[0_18px_34px_-26px_rgba(14,14,18,.35)] max-mob:px-2.5 max-mob:py-3'
              >
                <div className='font-display text-[22px] font-bold tracking-[-.02em] text-ink max-mob:text-[19px]'>{m.value}</div>
                <div className='text-[11.5px] text-dim max-mob:text-[10.5px]'>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
        <LeadForm
          id={b.anchor ?? undefined}
          ui={site.ui}
          form={b.form}
          intro={
            b.formIntro && (
              <Eyebrow rv={false} className='mb-2.5'>
                {b.formIntro}
              </Eyebrow>
            )
          }
        >
          {[first, ...more].filter(Boolean).map((f, i) => (
            <FloatStat
              key={f!._key}
              value={
                <>
                  {f!.value} {f!.stars && <span className='text-sm tracking-[1px] text-star'>★★★★★</span>}
                </>
              }
              label={f!.label ?? ''}
              className={position[i] ?? position[1]}
            />
          ))}
        </LeadForm>
      </Wrap>
    </header>
  );
}

export function ValueGrid({ b }: P<'valueGrid'>) {
  return (
    <Sec className='pt-0!'>
      <Wrap>
        <SecHead eyebrow={b.eyebrow} title={<Rich value={b.title} />} lead={b.lead} />
        <div className='grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-mob:grid-cols-1'>
          {(b.items ?? []).map((v, i) => (
            <div
              key={v._key}
              className='rv rounded-[18px] border border-line bg-white px-[22px] py-7 shadow-[0_20px_40px_-32px_rgba(14,14,18,.35)] hover:-translate-y-1 hover:border-red/45 hover:shadow-[0_28px_50px_-30px_rgba(255,57,81,.4)]'
            >
              <div className='font-display text-[13px] font-bold tracking-[.04em] text-red-ink'>{String(i + 1).padStart(2, '0')}</div>
              <h3 className='mt-3 mb-2 text-lg tracking-[-.02em]'>{v.title}</h3>
              <p className='text-sm leading-[1.55] text-dim'>{v.text}</p>
            </div>
          ))}
        </div>
      </Wrap>
    </Sec>
  );
}

export function StepsMedia({ b, site }: P<'stepsMedia'>) {
  const image = pic(b.image, 1120);
  return (
    <Sec className='border-t border-line bg-soft'>
      <Wrap>
        <div className='grid grid-cols-2 items-center gap-[70px] max-dsk:grid-cols-1 max-dsk:gap-13'>
          <div className={frame}>
            <div className='relative z-2 h-[470px] overflow-hidden rounded-[18px] shadow-[0_40px_80px_-36px_rgba(14,14,18,.5)] max-[980px]:h-85'>
              {image && <Image src={image.src} alt={image.alt} fill sizes='(max-width:1080px) 100vw, 560px' className='object-cover object-[center_40%]' />}
              <div className='absolute bottom-5 left-5 z-3 rounded-xl border border-line bg-white/92 px-[17px] py-[13px] backdrop-blur-[14px]'>
                <div className='font-display text-[14.5px] font-bold'>{b.badge?.title}</div>
                <div className='mt-0.5 text-xs text-dim'>{b.badge?.text}</div>
              </div>
            </div>
          </div>
          <div>
            <Eyebrow>{b.eyebrow}</Eyebrow>
            {/* The design leaves this h2 at the browser default size (1.5em). */}
            <h2 className='rv text-2xl'>
              <Rich value={b.title} />
            </h2>
            <div className='mt-[30px] flex flex-col'>
              {(b.steps ?? []).map((s, i) => (
                <div
                  key={s._key}
                  className="rv relative grid grid-cols-[46px_1fr] gap-[18px] pb-[26px] last:pb-0 not-last:before:absolute not-last:before:top-12 not-last:before:bottom-0.5 not-last:before:left-[22px] not-last:before:w-[1.5px] not-last:before:bg-[repeating-linear-gradient(180deg,rgba(255,57,81,.5)_0,rgba(255,57,81,.5)_5px,transparent_5px,transparent_10px)] not-last:before:content-['']"
                >
                  <div className='relative z-2 flex size-[46px] items-center justify-center rounded-full bg-red font-display text-[17px] font-bold text-white shadow-[0_0_0_6px_var(--color-soft)]'>
                    {i + 1}
                  </div>
                  <div>
                    <h3 className='mt-1 mb-[5px] text-[17px] tracking-[-.015em]'>{s.title}</h3>
                    <p className='text-[14.5px] leading-[1.55] text-dim'>{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {b.band && <CtaBand className='mt-14!' title={<Rich value={b.band.title} />} sub={b.band.text} cta={mainCta(b.band.cta, site, '#plan')} />}
      </Wrap>
    </Sec>
  );
}

export function QuoteBand({ b }: P<'quoteBand'>) {
  const image = pic(b.quote?.image, 160);
  return (
    <Sec className='py-0!'>
      <Wrap>
        <BridgeQuote img={image?.src} alt={image?.alt} line={<Rich value={b.quote?.line} />} sig={b.quote?.signature} />
      </Wrap>
    </Sec>
  );
}

// ---------------------------------------------------------------------------
// SEO & GEO
// ---------------------------------------------------------------------------

const dots =
  'absolute inset-0 bg-[radial-gradient(rgba(14,14,18,.13)_1px,transparent_1.4px)] bg-size-[26px_26px] mask-[radial-gradient(ellipse_70%_60%_at_70%_30%,#000_0%,transparent_75%)]';

export const Dots = () => (
  <div className='pointer-events-none absolute inset-0 z-0 overflow-hidden' aria-hidden='true'>
    <div className={dots} />
  </div>
);

/** Browser-framed screenshot of the Advertisr portal. */
export function Shot({ src, alt, url, className, priority }: { src: string; alt: string; url?: string | null; className?: string; priority?: boolean }) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-line-2 bg-white shadow-[0_40px_80px_-40px_rgba(14,14,18,.38),0_8px_24px_-12px_rgba(14,14,18,.12)]',
        className,
      )}
    >
      <div className='flex items-center gap-[7px] border-b border-line bg-soft px-3.5 py-[11px]'>
        {[0, 1, 2].map((i) => (
          <i key={i} className='block size-[9px] rounded-full bg-ink/16' />
        ))}
        <span className='ml-2.5 max-w-65 flex-1 truncate rounded-full border border-line bg-white px-3 py-1 text-[11.5px] text-dim-2'>{url}</span>
      </div>
      <Image src={src} alt={alt} width={1200} height={800} priority={priority} sizes='(max-width:1000px) 100vw, 640px' className='block h-auto w-full' />
    </div>
  );
}

export function ToolCards({ b }: P<'toolCards'>) {
  return (
    <Sec id={b.anchor ?? undefined} className='scroll-mt-10 overflow-hidden border-t border-line bg-soft'>
      <div className='pointer-events-none absolute inset-0 z-0 overflow-hidden' aria-hidden='true'>
        <div className={dots} />
        <div className='absolute -right-[220px] -bottom-[340px] size-[820px] rounded-full bg-[radial-gradient(circle,rgba(255,150,120,.16),rgba(255,150,120,0)_66%)] blur-[10px]' />
      </div>
      <Wrap>
        <SecHead eyebrow={b.eyebrow} title={<Rich value={b.title} />} lead={b.lead} />
        <div className='relative z-2 grid grid-cols-2 gap-[22px] max-[1000px]:grid-cols-1'>
          {(b.tools ?? []).map((t) => (
            <div
              key={t._key}
              className='rv relative overflow-hidden rounded-[22px] border border-line bg-white px-[38px] py-10 shadow-[0_24px_50px_-34px_rgba(14,14,18,.35)] hover:-translate-y-1 hover:border-red/45 max-[640px]:px-6 max-[640px]:py-[30px]'
            >
              <p className='mb-3.5 text-[11px] font-semibold tracking-[.14em] text-red-ink uppercase'>{t.tag}</p>
              <div className='mb-3.5 font-display text-[clamp(38px,4.2vw,56px)] leading-none font-extrabold tracking-[-.045em]'>
                {t.name}
                <b className='font-extrabold text-red'>.</b>
              </div>
              <p className='mb-[22px] max-w-120 text-base text-dim'>{t.text}</p>
              <ul className='mb-1.5 grid gap-[11px]'>
                {(t.points ?? []).map((pt) => (
                  <li
                    key={pt}
                    className="flex gap-[11px] text-[15px] leading-normal text-ink before:mt-2 before:size-[7px] before:shrink-0 before:rounded-full before:bg-red before:content-['']"
                  >
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='relative z-2 mt-[22px] grid grid-cols-3 gap-3.5 max-[1000px]:grid-cols-1'>
          {(b.options ?? []).map((o) => (
            <div
              key={o._key}
              className={cn('rv rounded-2xl border border-line bg-white px-6 py-[22px]', o.highlight && 'border-red/40 bg-[linear-gradient(140deg,#FFF1F3,#fff_72%)]')}
            >
              <h4 className='mb-1.5 font-display text-[19px] font-bold tracking-[-.02em]'>{o.title}</h4>
              <p className='text-sm leading-[1.55] text-dim'>{o.text}</p>
            </div>
          ))}
        </div>
      </Wrap>
    </Sec>
  );
}

export function StepCards({ b, site }: P<'stepCards'>) {
  return (
    <Sec className='bg-white'>
      <Wrap>
        <SecHead eyebrow={b.eyebrow} title={<Rich value={b.title} />} />
        <div className='grid grid-cols-3 gap-4 max-[1000px]:grid-cols-1'>
          {(b.steps ?? []).map((s, i) => (
            <div key={s._key} className='rv rounded-[18px] border border-line bg-white px-[26px] py-7 shadow-[0_18px_40px_-32px_rgba(14,14,18,.3)]'>
              <div className="mb-3.5 flex items-center gap-2.5 font-display text-[15px] font-extrabold tracking-[.04em] text-red-ink after:h-px after:flex-1 after:bg-[linear-gradient(90deg,rgba(255,57,81,.4),transparent)] after:content-['']">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className='mb-[9px] text-xl tracking-[-.022em]'>{s.title}</h3>
              <p className='text-[14.5px] leading-[1.6] text-dim'>{s.text}</p>
            </div>
          ))}
        </div>
        {b.band && <CtaBand title={<Rich value={b.band.title} />} sub={b.band.text} cta={mainCta(b.band.cta, site)} />}
      </Wrap>
    </Sec>
  );
}

/** Small tinted check, as the design's `.pts li::before`. */
function Tick() {
  return (
    <span className='mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full border border-red/35 bg-red-tint'>
      <svg viewBox='0 0 12 12' className='size-3' aria-hidden='true'>
        <path d='M3 6.2l2 2 4-4.4' fill='none' stroke='#FF3951' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    </span>
  );
}

export function Features({ b }: P<'features'>) {
  return (
    <Sec className='border-t border-line bg-soft'>
      <Wrap>
        {(b.items ?? []).map((f) => {
          const [main, overlay] = (f.images ?? []).map((i) => pic(i, 1280));
          return (
            <div
              key={f._key}
              className={cn(
                'mb-26 grid items-center gap-16 *:min-w-0 last:mb-0 max-[1000px]:mb-19 max-[1000px]:grid-cols-1 max-[1000px]:gap-9',
                f.flip ? 'grid-cols-[1.1fr_.9fr]' : 'grid-cols-[.9fr_1.1fr]',
              )}
            >
              <div className={cn('rv', f.flip && 'order-2 max-[1000px]:order-none')}>
                <Eyebrow rv={false}>{f.eyebrow}</Eyebrow>
                <h2 className='mt-4 mb-[18px] text-[clamp(30px,3.3vw,44px)] tracking-[-.035em]'>{f.title}</h2>
                {f.text && <p className='mb-[22px] text-[16.5px] text-dim'>{f.text}</p>}
                {!!f.points?.length && (
                  <ul className='mb-6 grid gap-[13px]'>
                    {f.points.map((pt) => (
                      <li key={pt._key} className='flex gap-3 text-[15.5px] leading-normal [&_strong]:font-semibold'>
                        <Tick />
                        <span>
                          <Rich value={pt.text} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {!!f.note?.length && (
                  <div className='rounded-r-xl border-l-[3px] border-red bg-soft px-5 py-[15px] text-[14.5px] leading-[1.55] text-dim [&_strong]:text-ink'>
                    <Rich value={f.note} />
                  </div>
                )}
              </div>
              <div className='rv'>
                {overlay ? (
                  <div className='relative pb-[70px] max-[640px]:pb-0'>
                    {main && <Shot src={main.src} alt={main.alt} url={b.browserUrl} />}
                    <Shot
                      src={overlay.src}
                      alt={overlay.alt}
                      url={b.browserUrl}
                      className='absolute bottom-0 -left-3.5 w-[62%] shadow-[0_30px_60px_-24px_rgba(14,14,18,.5)] max-[640px]:relative max-[640px]:left-0 max-[640px]:mt-3.5 max-[640px]:w-full'
                    />
                  </div>
                ) : (
                  main && <Shot src={main.src} alt={main.alt} url={b.browserUrl} />
                )}
              </div>
            </div>
          );
        })}
      </Wrap>
    </Sec>
  );
}

// ---------------------------------------------------------------------------
// Social media
// ---------------------------------------------------------------------------

export function Pillars({ b }: P<'pillars'>) {
  return (
    <Sec className='pt-0!'>
      <Wrap>
        <SecHead eyebrow={b.eyebrow} title={<Rich value={b.title} />} lead={b.lead} />
        <div className='grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[540px]:grid-cols-1'>
          {(b.items ?? []).map((p) => (
            <div
              key={p._key}
              className='rv rounded-2xl border border-line bg-white px-[22px] py-[26px] shadow-[0_14px_30px_-26px_rgba(14,14,18,.3)] hover:-translate-y-1 hover:border-red/45 hover:shadow-[0_24px_44px_-28px_rgba(255,57,81,.4)]'
            >
              <div className='mb-3.5 flex size-10 items-center justify-center rounded-[11px] border border-red/26 bg-red-tint text-lg'>{p.icon}</div>
              <h3 className='mb-2 text-[17px] tracking-[-.02em]'>{p.title}</h3>
              <p className='text-[13.5px] leading-[1.55] text-dim'>{p.text}</p>
            </div>
          ))}
        </div>
      </Wrap>
    </Sec>
  );
}

export function Output({ b }: P<'output'>) {
  return (
    <Sec className='pt-0!'>
      <Wrap>
        <SecHead eyebrow={b.eyebrow} title={<Rich value={b.title} />} lead={b.lead} />
        <div className='rv grid grid-cols-4 gap-px overflow-hidden rounded-[18px] border border-line bg-line shadow-[0_20px_40px_-32px_rgba(14,14,18,.3)] max-[900px]:grid-cols-2 max-mob:grid-cols-1'>
          {(b.items ?? []).map((o) => (
            <div key={o._key} className='bg-white px-5 py-7 text-center'>
              <div className='font-display text-[clamp(24px,2.8vw,34px)] font-bold tracking-[-.03em] text-ink'>{o.value}</div>
              <div className='mt-1.5 text-xs leading-[1.4] text-dim'>{o.label}</div>
            </div>
          ))}
        </div>
      </Wrap>
    </Sec>
  );
}

export function ProcSteps({ b }: P<'procSteps'>) {
  return (
    <Sec className='pt-0!'>
      <Wrap>
        <SecHead eyebrow={b.eyebrow} title={<Rich value={b.title} />} />
        <ProcRow items={(b.steps ?? []).map((s) => [s.title ?? '', s.text])} />
      </Wrap>
    </Sec>
  );
}

// ---------------------------------------------------------------------------
// Kennisbank
// ---------------------------------------------------------------------------

export function ArticleIndex({ b, site }: P<'articleIndex'>) {
  const articles = (b.articles ?? []) as ArticleCardData[];
  const featured = (b.articles ?? []).filter((a) => a.featured) as ArticleCardData[];
  const latest = articles.filter((a) => !featured.includes(a));
  const cta = mainCta(b.band?.cta, site, '/groeiplan');
  const pills = [b.allLabel ?? '', ...(b.categories ?? [])];
  const ids = (list: ArticleCardData[]) => list.map((a) => a._id);
  const filterData = articles.map((a) => ({
    _id: a._id,
    category: a.category?.title ?? null,
    text: [a.title, a.excerpt, a.category?.title].join(' ').toLocaleLowerCase(),
  }));
  return (
    <ArticleFilter articles={filterData} categories={pills}>
      <header className='relative overflow-hidden pt-[150px] pb-[50px]'>
        {fadedAmbient}
        <Wrap>
          <div className='max-w-190'>
            <Crumb home={site.ui.crumbHome} items={b.crumb ? [[b.crumb]] : []} />
            <Eyebrow>{b.eyebrow}</Eyebrow>
            <h1 className='rv mt-4 mb-[18px] text-[clamp(34px,4.6vw,54px)] tracking-[-.04em] text-ink'>
              <Rich value={b.title} />
            </h1>
            <p className='rv max-w-[530px] text-[18.5px] text-dim'>{b.lead}</p>
            <SearchBox label={b.searchLabel ?? undefined} placeholder={b.searchPlaceholder ?? undefined} button={b.searchButton ?? undefined} />
            <Pills items={pills} />
          </div>
        </Wrap>
      </header>

      {!!featured.length && (
        <FilterGroup ids={ids(featured)}>
          <Sec className='pt-[34px]!'>
            <Wrap>
              <SecHead eyebrow={b.featured?.eyebrow} title={<Rich value={b.featured?.title} />} lead={b.featured?.lead} className='mb-0!' />
              <div className='mt-11 grid grid-cols-2 gap-[18px] max-[860px]:grid-cols-1'>
                {featured.map((a) => (
                  <FilterItem key={a._id} id={a._id}>
                    <PillarCard a={a} ui={site.ui} lang={site.language} />
                  </FilterItem>
                ))}
              </div>
            </Wrap>
          </Sec>
        </FilterGroup>
      )}

      {!!latest.length && (
        <FilterGroup ids={ids(latest)}>
          <Sec className='pt-3.5!'>
            <Wrap>
              <SecHead eyebrow={b.latest?.eyebrow} title={<Rich value={b.latest?.title} />} className='mb-0!' />
              <div className='mt-5 grid grid-cols-3 gap-5 max-[980px]:grid-cols-2 max-[600px]:grid-cols-1'>
                {latest.map((a) => (
                  <FilterItem key={a._id} id={a._id}>
                    <ArticleCard a={a} ui={site.ui} />
                  </FilterItem>
                ))}
              </div>
              {b.loadMoreLabel && (
                <div className='rv mt-11 flex justify-center'>
                  <BtnGhost href='#'>
                    {b.loadMoreLabel} <span>↓</span>
                  </BtnGhost>
                </div>
              )}
            </Wrap>
          </Sec>
        </FilterGroup>
      )}

      {b.noResults && (
        <FilterEmpty ids={ids(articles)}>
          <Sec className='pt-[34px]!'>
            <Wrap>
              <p className='text-center text-base text-dim' role='status'>
                {b.noResults}
              </p>
            </Wrap>
          </Sec>
        </FilterEmpty>
      )}

      {b.band && (
        <Sec className='pb-0!'>
          <Wrap>
            <CtaBand className='mt-0!' title={<Rich value={b.band.title} />} sub={b.band.text} cta={cta} />
          </Wrap>
        </Sec>
      )}

      {b.newsletter && (
        <Sec>
          <Wrap>
            <div className='rv relative mt-5 overflow-hidden rounded-[22px] border border-line bg-[linear-gradient(135deg,#fff,var(--color-soft))] p-11 shadow-[0_30px_60px_-40px_rgba(14,14,18,.35)]'>
              <div
                className='pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(rgba(14,14,18,.13)_1px,transparent_1.4px)] bg-size-[26px_26px] opacity-50 mask-[radial-gradient(ellipse_70%_60%_at_70%_30%,#000_0%,transparent_75%)]'
                aria-hidden='true'
              />
              <div className='relative z-2 flex flex-wrap items-center justify-between gap-[30px]'>
                <div>
                  <h3 className='text-2xl tracking-[-.02em]'>{b.newsletter.title}</h3>
                  <p className='mt-2 max-w-100 text-[14.5px] text-dim'>{b.newsletter.text}</p>
                </div>
                <NewsletterForm ui={site.ui} interesse={b.newsletter.interesse} />
              </div>
            </div>
          </Wrap>
        </Sec>
      )}
    </ArticleFilter>
  );
}
