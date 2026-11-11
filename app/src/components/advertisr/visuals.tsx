'use client';

import Image from '@/components/ui/Image';
import { useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { FloatStat } from './service';

/* The hero mock-ups of the service pages. Client components because three of
   them cycle an "active" step, as the design's page scripts did. */

/** Index that advances every `ms`, unless the visitor prefers reduced motion. */
function useCycle(length: number, ms: number) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI((x) => (x + 1) % length), ms);
    return () => clearInterval(t);
  }, [length, ms]);
  return i;
}

function Stage({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('rv relative flex min-h-140 items-center justify-center max-mob:min-h-0', className)}>{children}</div>;
}

const card =
  'relative z-3 overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_40px_80px_-36px_rgba(14,14,18,.4),0_2px_0_rgba(14,14,18,.03)]';
const cardTop = 'flex items-center justify-between border-b border-line bg-soft px-[18px] py-4';

function Live({ label }: { label: string }) {
  return (
    <div className='flex items-center gap-[7px] text-[11.5px] text-dim'>
      <span className='size-[7px] animate-pulse-dot rounded-full bg-[#1FB866] shadow-[0_0_0_3px_rgba(31,184,102,.2)] motion-reduce:animate-none' />
      {label}
    </div>
  );
}

function Browser({ url, className, children }: { url: string; className?: string; children: ReactNode }) {
  return (
    <div className={cn(card, 'w-[530px] rounded-2xl max-dsk:w-full max-dsk:max-w-130', className)}>
      <div className='flex items-center gap-[9px] border-b border-line bg-soft px-4 py-[13px]'>
        {[0, 1, 2].map((i) => (
          <span key={i} className='size-[9px] rounded-full bg-ink/16' />
        ))}
        <div className='ml-2 flex-1 truncate rounded-full border border-line bg-white px-3.5 py-[7px] text-xs text-dim'>{url}</div>
      </div>
      {children}
    </div>
  );
}

export function PhoneVisual() {
  return (
    <Stage className='min-h-150 max-sm:min-h-130 max-mob:min-h-130!'>
      <FloatStat value='8%+' label='conversieratio Meta Ads' className='top-[34px] -left-[34px] max-sm:-left-2' />
      <div className='relative z-3 w-[298px] rounded-[36px] border border-ink/50 bg-[#15151B] p-[9px] shadow-[0_44px_80px_-34px_rgba(14,14,18,.55),inset_0_0_0_1px_rgba(255,255,255,.08)]'>
        <div className='overflow-hidden rounded-[28px] bg-white'>
          <div className='flex items-center gap-[9px] px-3 py-[11px]'>
            <div className='flex size-[29px] shrink-0 items-center justify-center rounded-full bg-red font-display text-[11px] font-bold text-white'>
              A
            </div>
            <div>
              <div className='text-[12.5px] leading-[1.2] font-semibold text-ink'>jouwmerk</div>
              <div className='text-[10.5px] leading-[1.2] text-dim-2'>Gesponsord</div>
            </div>
          </div>
          <div className='relative aspect-[4/5] overflow-hidden bg-soft'>
            <Image
              src='/images/advertisr/het-team-van-advertisr-op-kantoor-in-haa-2.jpg'
              alt='Voorbeeld van een social advertentie'
              fill
              priority
              sizes='280px'
              className='object-cover'
            />
            <div className='absolute inset-x-3.5 top-4 font-display text-[21px] leading-[1.12] font-bold tracking-[-.025em] text-white [text-shadow:0_2px_14px_rgba(0,0,0,.8)]'>
              Nog steeds <span className='text-[#FF6F82]'>gokken</span>
              <br />
              op je advertenties?
            </div>
            <div className='absolute inset-x-0 bottom-0 flex items-center justify-between bg-[linear-gradient(to_top,rgba(10,10,12,.9),rgba(10,10,12,0))] px-3.5 py-[11px] text-[12.5px] font-semibold text-white'>
              <span>Meer informatie</span>
              <span className='text-[#FF6F82]'>→</span>
            </div>
          </div>
          <div className='flex gap-3.5 px-[13px] pt-[11px] pb-[5px] text-[15px] text-dim'>♡ &nbsp; ○ &nbsp; ▷</div>
          <div className='px-[13px] pb-3.5 text-[11.5px] leading-normal text-dim'>
            <b className='font-semibold text-ink'>jouwmerk</b> Wij bouwen campagnes op data, niet op onderbuikgevoel...
          </div>
        </div>
      </div>
      <FloatStat value='130K' label='maandelijkse impressies' className='-right-10 bottom-[34px] max-sm:-right-2' />
    </Stage>
  );
}

export function SerpVisual() {
  return (
    <Stage className='w-full'>
      <FloatStat value='14×' label='return on ad spend' className='-top-1.5 -left-[30px]' />
      <Browser url='google.com/search?q=marketingbureau+haarlem' className='w-full max-w-130 min-w-0'>
        <div className='px-[22px] pt-[22px] pb-[26px] max-mob:px-4 max-mob:pt-4 max-mob:pb-5'>
          <div className='mb-[18px] border-b border-line pb-[18px]'>
            <span className='mb-[9px] inline-flex items-center gap-[7px] rounded-[5px] border border-line-2 bg-soft px-[9px] py-[3px] text-[11px] font-bold tracking-[.04em] text-ink'>
              Advertentie
            </span>
            <div className='mb-[5px] text-[13px] text-[#188038]'>www.advertisr.nl</div>
            <h3 className='mb-[7px] font-sans text-[19px] leading-[1.3] font-medium tracking-[-.01em] wrap-anywhere text-[#1a0dab]'>
              Online Marketingbureau Haarlem | Advertisr.
            </h3>
            <p className='max-w-110 text-[13.5px] leading-[1.55] text-dim'>
              Meer aanvragen via Google Ads. Gratis groeiplan, geen opstartkosten, maandelijks opzegbaar. Bekijk onze resultaten.
            </p>
            <div className='mt-3.5 grid grid-cols-2 gap-x-[18px] gap-y-2.5 max-mob:grid-cols-1'>
              {['Gratis groeiplan aanvragen', 'Bekijk onze resultaten', 'Meta & Google Ads beheer', 'Direct contact, geen wachtrij'].map(
                (l) => (
                  <div key={l} className='text-[12.5px] wrap-anywhere text-[#1a0dab]'>
                    {l}
                  </div>
                ),
              )}
            </div>
          </div>
          <div className='opacity-45'>
            <div className='mb-[5px] text-[13px] text-dim-2'>concurrent-bureau.nl</div>
            <h3 className='mb-1.5 font-sans text-base font-medium text-dim'>Marketingbureau in de buurt</h3>
            <p className='text-[12.5px] text-dim'>Algemene dienstverlening op het gebied van online marketing en advies.</p>
          </div>
        </div>
      </Browser>
      <FloatStat value='€2' label='kosten per lead (piekmaand)' className='-right-1.5 bottom-3.5' />
    </Stage>
  );
}

export function SiteVisual() {
  return (
    <Stage>
      <FloatStat value='100%' label='eigenaar van je website' className='top-1.5 left-0' />
      <Browser url='jouwbedrijf.nl'>
        <div className='flex items-center justify-between border-b border-line px-5 py-3.5'>
          <span className='size-[26px] rounded-full bg-[linear-gradient(135deg,var(--color-red),#ff7a8a)]' />
          <div className='flex gap-3.5'>
            {[0, 1, 2].map((i) => (
              <span key={i} className='h-1.5 w-[34px] rounded-[3px] bg-ink/14' />
            ))}
          </div>
        </div>
        <Image
          src='/images/advertisr/website-van-hart-huis-makelaardij-op-des.jpg'
          alt='Website van Hart & Huis Makelaardij op desktop'
          width={1060}
          height={700}
          priority
          sizes='530px'
          className='block h-auto w-full'
        />
      </Browser>
      <FloatStat value='<1s' label='laadtijd op mobiel' className='-right-1.5 -bottom-3' />
    </Stage>
  );
}

const DASH_POINTS = [
  [10, 55],
  [82, 48],
  [154, 50],
  [226, 32],
  [298, 26],
  [390, 12],
];

export function DashVisual() {
  return (
    <Stage>
      <FloatStat value='1 dashboard' label='voor alle kanalen' className='-top-1.5 left-2.5' />
      <FloatStat value='0' label='losse spreadsheets per platform' className='right-0 bottom-3' />
      <div className={cn(card, 'w-[480px] max-dsk:w-full max-dsk:max-w-110')}>
        <div className={cardTop}>
          <div className='font-display text-sm font-bold'>Overzicht, deze maand</div>
          <Live label='Live' />
        </div>
        <div className='px-5 pt-[22px] pb-6'>
          <div className='mb-5 grid grid-cols-3 gap-2.5'>
            {[
              ['148', 'Leads deze maand', '↑'],
              ['€24', 'Kosten per lead', '↓'],
              ['6,3%', 'Conversieratio site', '↑'],
            ].map(([n, l, d]) => (
              <div key={l} className='rounded-[13px] border border-line bg-soft px-3 py-3.5'>
                <div className='font-display text-[21px] font-bold tracking-[-.02em]'>{n}</div>
                <div className='mt-[3px] text-[10.5px] leading-[1.3] text-dim'>{l}</div>
                <div className='mt-[5px] text-[10.5px] font-semibold text-[#12945A]'>{d} t.o.v. vorige maand</div>
              </div>
            ))}
          </div>
          <div className='mb-2 flex items-center justify-between text-[11.5px] text-dim'>
            <span>Leads per week</span>
            <span>Laatste 6 weken</span>
          </div>
          <div className='rounded-xl border border-line bg-white px-3.5 pt-3.5 pb-2.5'>
            <svg width='100%' height='70' viewBox='0 0 420 70' preserveAspectRatio='none' aria-hidden='true'>
              <polyline
                points={DASH_POINTS.map((p) => p.join(',')).join(' ')}
                fill='none'
                stroke='#ff3951'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeDasharray='500'
                className='animate-draw motion-reduce:animate-none'
              />
              {DASH_POINTS.map(([cx, cy]) => (
                <circle key={cx} cx={cx} cy={cy} r='3' fill='#fff' stroke='#FF3951' strokeWidth='2' />
              ))}
            </svg>
            <div className='mt-1.5 flex justify-between text-[10.5px] text-dim-2'>
              {['W1', 'W2', 'W3', 'W4', 'W5', 'W6'].map((w) => (
                <span key={w}>{w}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Stage>
  );
}

const JOURNEY = [
  ['📩', 'Lead binnen', 'direct'],
  ['👋', 'Welkomstmail', 'na 5 min'],
  ['🔁', 'Opvolging', 'na 2 dagen'],
  ['🎯', 'Segment: warm', 'automatisch'],
];

export function JourneyVisual() {
  const active = useCycle(JOURNEY.length, 1700);
  return (
    <Stage className='max-sm:min-h-105'>
      <FloatStat value='Binnen 5 min' label='eerste reactie op elke lead' className='top-10 left-0' />
      <FloatStat value='0' label='leads die stil blijven liggen' className='-right-1.5 bottom-[50px]' />
      <div className={cn(card, 'w-[480px] max-dsk:w-full max-dsk:max-w-110')}>
        <div className={cardTop}>
          <div className='font-display text-sm font-bold'>Flow: Nieuwe lead</div>
          <Live label='Actief' />
        </div>
        <div className='px-[18px] pt-[34px] pb-[26px]'>
          <div className="relative flex justify-between before:absolute before:inset-x-[22px] before:top-[22px] before:h-px before:bg-[repeating-linear-gradient(90deg,rgba(255,57,81,.5)_0,rgba(255,57,81,.5)_5px,transparent_5px,transparent_10px)] before:content-['']">
            {JOURNEY.map(([icon, label, time], i) => (
              <div key={label} className='relative z-2 flex-1 text-center'>
                <div
                  className={cn(
                    'mx-auto mb-2.5 flex size-11 items-center justify-center rounded-full border-2 bg-white text-[17px] transition-all duration-[450ms] max-mob:size-9 max-mob:text-sm',
                    i === active ? 'border-red bg-red-tint shadow-[0_0_0_5px_rgba(255,57,81,.13)]' : 'border-line-2',
                  )}
                >
                  {icon}
                </div>
                <div
                  className={cn(
                    'font-display text-[11px] leading-[1.25] font-semibold transition-colors duration-[450ms] max-mob:text-[9.5px]',
                    i === active ? 'text-ink' : 'text-dim-2',
                  )}
                >
                  {label}
                </div>
                <div className='mt-[3px] text-[9.5px] text-dim-2'>{time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Stage>
  );
}

const FLOW = [
  'Lead ad ingevuld',
  'Automatisch gekwalificeerd door AI',
  'CRM & Mailchimp bijgewerkt',
  'Persoonlijke opvolgmail verstuurd',
  'Blogartikel gegenereerd via Notion',
  'Rapport klaar in dashboard',
];

export function FlowVisual() {
  const active = useCycle(FLOW.length, 1700);
  return (
    <Stage>
      <div className={cn(card, 'w-[430px] max-dsk:w-full max-dsk:max-w-110')}>
        <div className={cardTop}>
          <div className='flex items-center gap-[9px] font-display text-sm font-bold'>
            <span className='flex size-5 items-center justify-center rounded-md border border-red/35 bg-red/12 text-[10px] font-extrabold text-red-ink'>
              ⚡
            </span>
            Eén voorbeeld van wat kan
          </div>
          <Live label='Actief' />
        </div>
        <div className='px-[22px] pt-6 pb-[26px]'>
          <div className="relative flex flex-col pl-7 before:absolute before:top-2.5 before:bottom-2.5 before:left-[4.75px] before:w-[1.5px] before:bg-red/30 before:content-['']">
            {FLOW.map((title, i) => (
              <div
                key={title}
                className={cn(
                  "relative py-[13px] before:absolute before:top-[18px] before:-left-7 before:z-2 before:size-[11px] before:rounded-full before:border-2 before:transition-all before:duration-[450ms] before:content-['']",
                  i === active
                    ? 'before:border-red before:bg-red before:shadow-[0_0_0_5px_rgba(255,57,81,.16)]'
                    : 'before:border-line-2 before:bg-white',
                )}
              >
                <div className='mb-[3px] text-[10.5px] text-dim-2'>0{i + 1}</div>
                <div
                  className={cn(
                    'font-display text-[14.5px] font-semibold transition-colors duration-[450ms]',
                    i === active ? 'text-ink' : 'text-dim-2',
                  )}
                >
                  {title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FloatStat value='0' label='handmatig overtypen' className='-right-1.5 bottom-1.5' />
    </Stage>
  );
}

const PLATFORMS = ['IG', 'FB', 'in', 'TT'];
const TILES = [
  ['REEL', '🎬'],
  ['CARROUSEL', '📑'],
  ['STATIC', '✦'],
  ['REEL', '🎥'],
  ['BTS', '👋'],
  ['CARROUSEL', '💬'],
  ['STATIC', '⭐'],
  ['REEL', '🔥'],
  ['REVIEW', '💛'],
];

export function SocialVisual() {
  const on = useCycle(PLATFORMS.length, 1600);
  return (
    <Stage>
      <div className={cn(card, 'w-[420px] rounded-[22px] max-dsk:w-full max-dsk:max-w-100')}>
        <div className='flex items-center justify-between border-b border-line bg-soft px-[18px] py-[15px]'>
          <div className='flex items-center gap-2.5'>
            <div className='flex size-[34px] items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-red),#ff8a6e)] font-display text-[13px] font-bold text-white'>
              A
            </div>
            <div>
              <div className='font-display text-[13.5px] font-bold'>jouwmerk</div>
              <div className='text-[10.5px] text-dim'>Contentkalender actief</div>
            </div>
          </div>
          <div className='flex gap-[5px]'>
            {PLATFORMS.map((p, i) => (
              <div
                key={p}
                className={cn(
                  'flex size-[26px] items-center justify-center rounded-[7px] border font-display text-[10px] font-bold transition-all duration-[400ms]',
                  i === on ? 'border-red bg-red-tint text-red-ink' : 'border-line-2 bg-white text-dim-2',
                )}
              >
                {p}
              </div>
            ))}
          </div>
        </div>
        <div className='flex border-b border-line px-[18px] py-3.5'>
          {[
            ['8', 'posts p/m'],
            ['4', 'Reels p/m'],
            ['4', 'kanalen'],
          ].map(([n, l]) => (
            <div key={l} className='flex-1 text-center'>
              <div className='font-display text-[15px] font-bold'>{n}</div>
              <div className='mt-0.5 text-[9.5px] text-dim'>{l}</div>
            </div>
          ))}
        </div>
        <div className='grid grid-cols-3 gap-[3px] p-[3px]'>
          {TILES.map(([tag, icon], i) => (
            <div
              key={i}
              className='relative flex aspect-square items-center justify-center overflow-hidden bg-soft nth-[3n+1]:bg-red-tint nth-[5n]:bg-[#EFEAE0]'
            >
              <span className='absolute top-1.5 right-1.5 rounded-[5px] bg-white/85 px-1.5 py-0.5 font-display text-[8.5px] font-bold tracking-[.03em] text-ink'>
                {tag}
              </span>
              <span className='text-2xl'>{icon}</span>
            </div>
          ))}
        </div>
      </div>
    </Stage>
  );
}
