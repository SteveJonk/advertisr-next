import Image from 'next/image';
import Link from 'next/link';
import { CaseCard, type CaseItem } from '@/components/advertisr/CaseCard';
import { Compare } from '@/components/advertisr/Compare';
import { FinalCta } from '@/components/advertisr/FinalCta';
import { Logos } from '@/components/advertisr/Logos';
import { Marquee } from '@/components/advertisr/Marquee';
import { Reviews } from '@/components/advertisr/Reviews';
import { Ambient, BtnGhost, BtnRed, Count, Eyebrow, Sec, SecHead, Wrap } from '@/components/advertisr/ui';

const STAGES = [
  {
    n: '01',
    title: 'Gevonden worden',
    text: 'Bovenaan staan op het moment dat iemand zoekt.',
    links: [
      ['Google Ads', '/google-ads'],
      ['SEO & GEO', '/seo-geo'],
    ],
  },
  {
    n: '02',
    title: 'Opvallen',
    text: 'In beeld komen bij mensen die je nog niet kennen.',
    links: [
      ['Meta Ads', '/meta-ads'],
      ['Social media organisch', '/social-media-organisch'],
    ],
  },
  {
    n: '03',
    title: 'Overtuigen',
    text: 'Van bezoeker naar aanvraag of bestelling.',
    links: [
      ['Web development', '/web-development'],
      ['Data & analytics', '/data-analytics'],
    ],
  },
  {
    n: '04',
    title: 'Opvolgen',
    text: 'Geen lead meer die blijft liggen.',
    links: [
      ['Marketing automation', '/marketing-automation'],
      ['AI Agent Workflows', '/ai-agent-workflows'],
    ],
  },
];

const CASES: CaseItem[] = [
  {
    href: 'https://advertisr.nl/case-study-ppexport/',
    img: 'https://advertisr.nl/wp-content/uploads/2025/11/Advertisr_blogppexort_cover.jpg',
    cat: 'Groothandel, Google & Meta Ads',
    title: 'PPExport',
    stats: [
      [<Count key='n' to={164} />, 'leads in de topmaand'],
      [
        <>
          €<Count to={2} />
        </>,
        'kosten per lead in Polen',
      ],
    ],
  },
  {
    href: 'https://advertisr.nl/case-study-advertisr-online-marketingbureau-haarlem-over-internationaal-online-succes/',
    img: 'https://advertisr.nl/wp-content/uploads/2024/10/blog_image_trockenblumen.jpg',
    cat: 'Droogbloemen, Webshop & Ads',
    title: 'Trockenblumen­grosshandel',
    stats: [
      [
        <>
          €<Count to={500} />K
        </>,
        'omzet in 2023',
      ],
      [
        <>
          <Count to={14} />×
        </>,
        'return on ad spend',
      ],
    ],
  },
  {
    href: 'https://advertisr.nl/online-ads-case-study-ciao-italia/',
    img: 'https://advertisr.nl/wp-content/uploads/2024/10/blog_image_Ciao_italia-1.jpg',
    cat: 'Horeca, Website & online ads',
    title: 'Ciao Italia',
    stats: [
      [
        <>
          +<Count to={30} />%
        </>,
        'omzetgroei',
      ],
      ['Nieuw', 'webshop met online betalen'],
    ],
  },
];

const STEPS = [
  [
    'Gesprek',
    'We bellen en duiken in je markt, doelen, marges en huidige cijfers. Wij stellen de vragen, jij hoeft niets voor te bereiden.',
  ],
  ['Groeiplan', 'Je ontvangt een concreet plan: welke kanalen, welke volgorde, welke investering en wat je realistisch mag verwachten.'],
  ['Bouwen', 'Tracking, campagnestructuur, creatives en automations worden ingericht. Geen aparte opstartkosten voor Ads.'],
  [
    'Optimaliseren',
    'Maandelijkse rapportage en afstemming. Maandelijks opzegbaar, we houden je klant omdat het werkt, niet door een contract.',
  ],
];

const STATS = [
  [<Count key='n' to={5} />, ',0', 'gemiddelde Google-review'],
  [<Count key='n' to={130} />, 'K', 'maandelijkse impressies voor één klant'],
  [<Count key='n' to={6} />, '×', 'disciplines onder één dak'],
  ['1', 'mnd', 'opzegtermijn, geen jaarcontract'],
] as const;

function Hero() {
  return (
    <header className='relative overflow-hidden pt-[170px] pb-24 max-sm:pt-[130px]'>
      <Ambient />
      <Wrap>
        <div className='grid grid-cols-[1.02fr_.98fr] items-center gap-15 max-dsk:grid-cols-1 max-dsk:gap-14'>
          <div>
            <Eyebrow>Online marketingbureau in Haarlem</Eyebrow>
            <h1 className="rv mt-[22px] mb-[26px] text-[clamp(44px,5.4vw,78px)] tracking-[-.04em] [&_em]:relative [&_em]:inline-block [&_em]:after:absolute [&_em]:after:inset-x-0 [&_em]:after:bottom-[.08em] [&_em]:after:h-[.09em] [&_em]:after:rounded-xs [&_em]:after:bg-red [&_em]:after:opacity-28 [&_em]:after:content-['']">
              Marketing zonder gedoe. <em>Groei</em> met bewijs.
            </h1>
            <p className='rv mb-9 max-w-130 text-[18.5px] text-dim'>
              Wij bouwen groeisystemen op Meta Ads, Google Ads en <strong className='font-semibold text-ink'>AI Agent Workflows</strong>.
              Geen ticketsysteem, geen managementlaag. Je schakelt direct met de marketeers die je campagnes draaien.
            </p>
            <div className='rv mb-[22px] flex flex-wrap items-center gap-[22px]'>
              <BtnRed href='#groeiplan'>Ontvang mijn groeiplan</BtnRed>
              <BtnGhost href='/resultaten'>Bekijk onze resultaten</BtnGhost>
            </div>
            <p className='rv max-w-[470px] text-[13.5px] leading-[1.6] text-dim-2'>
              Geen standaard adviesgesprek. Wij bellen, duiken in je huidige marketing en sturen een concreet plan met kansen, kanalen en
              aanpak. Vrijblijvend.
            </p>
          </div>
          <div className='rv relative h-140 max-dsk:h-115 max-sm:h-100' data-parallax>
            <div
              className='absolute top-0 right-0 z-2 h-[62%] w-[74%] overflow-hidden rounded-2xl bg-soft shadow-[0_36px_70px_-30px_rgba(14,14,18,.38)]'
              data-depth='0.035'
            >
              <Image
                src='/images/advertisr/het-team-van-advertisr-bouwt-automatiser.jpg'
                alt='Het team van Advertisr aan het werk op kantoor'
                fill
                priority
                sizes='(max-width:1080px) 74vw, 440px'
                className='object-cover'
              />
            </div>
            <div
              className='absolute bottom-[26px] left-0 z-3 h-[46%] w-[56%] overflow-hidden rounded-2xl border-4 border-white bg-soft shadow-[0_30px_60px_-26px_rgba(14,14,18,.42)]'
              data-depth='-0.05'
            >
              <Image
                src='/images/advertisr/het-team-van-advertisr-bouwt-workflows-o.jpg'
                alt='Twee marketeers bespreken campagnedata'
                fill
                sizes='(max-width:1080px) 56vw, 330px'
                className='object-cover'
              />
            </div>
            <div
              className='absolute right-[8%] bottom-0 z-1 h-[30%] w-[34%] overflow-hidden rounded-2xl bg-soft opacity-85'
              data-depth='0.02'
            >
              <Image
                src='/images/advertisr/het-team-van-advertisr-op-kantoor-in-haa.jpg'
                alt='Het team van Advertisr'
                fill
                sizes='(max-width:1080px) 34vw, 200px'
                className='object-cover'
              />
            </div>
            <div
              className='absolute top-[52%] -right-3.5 z-5 min-w-49 rounded-[14px] border border-line bg-white/90 px-5 py-4 shadow-[0_22px_50px_-20px_rgba(14,14,18,.35)] backdrop-blur-[14px] max-sm:right-0'
              data-depth='-0.07'
            >
              <div className='text-sm tracking-[3px] text-red'>★★★★★</div>
              <div className='mt-[5px] font-display text-[26px] font-bold tracking-[-.03em]'>5,0 / 5</div>
              <div className='mt-px text-[12.5px] text-dim'>Beoordeeld op Google</div>
            </div>
            <svg className='absolute top-3 -left-4 z-5' width='54' height='54' viewBox='0 0 54 54' data-depth='0.06' aria-hidden='true'>
              <g fill='#FF3951' opacity='.75'>
                {[
                  [6, 48],
                  [16, 48],
                  [26, 48],
                  [16, 38],
                  [26, 38],
                  [36, 38],
                  [26, 28],
                  [36, 28],
                  [36, 18],
                  [46, 18],
                  [46, 8],
                ].map(([cx, cy]) => (
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

function Services() {
  return (
    <Sec id='diensten' className='scroll-mt-10 border-y border-line bg-soft'>
      <Wrap>
        <SecHead
          eyebrow='Diensten'
          title={
            <>
              Eén groeisysteem. <em>Vier schakels.</em>
            </>
          }
          lead='Losse kanalen die niet met elkaar praten, leveren zelden groei op. Wij kijken naar de hele route: van eerste zoekopdracht tot opvolging van de lead.'
        />
        <div className="relative grid grid-cols-4 gap-5 before:absolute before:inset-x-[6%] before:top-[26px] before:z-0 before:border-t-2 before:border-dashed before:border-red/40 before:content-[''] max-dsk:grid-cols-2 max-dsk:before:hidden max-sm:grid-cols-1">
          {STAGES.map((s) => (
            <div
              key={s.n}
              className='rv relative z-1 rounded-[18px] border border-line bg-white px-[26px] pt-[30px] pb-[26px] hover:-translate-y-[5px] hover:border-line-2 hover:shadow-[0_26px_50px_-28px_rgba(14,14,18,.3)]'
            >
              <div className='mb-[22px] flex size-[46px] items-center justify-center rounded-full bg-red font-display text-base font-bold text-white shadow-[0_0_0_6px_var(--color-soft)]'>
                {s.n}
              </div>
              <h3 className='mb-2 text-[23px] tracking-[-.025em]'>{s.title}</h3>
              <p className='mb-[22px] min-h-[46px] text-[14.5px] leading-[1.55] text-dim max-sm:min-h-0'>{s.text}</p>
              <ul className='border-t border-line'>
                {s.links.map(([label, href]) => (
                  <li key={href} className='border-b border-line last:border-b-0'>
                    <Link
                      href={href}
                      className="group/l flex items-center justify-between gap-2.5 py-[13px] text-[15px] font-semibold transition-[color,padding] duration-200 after:text-red after:transition-transform after:duration-200 after:content-['→'] hover:pl-1 hover:text-red-ink hover:after:translate-x-[3px]"
                    >
                      <span>
                        {label}
                        {label === 'AI Agent Workflows' && (
                          <span className='ml-2 inline-block rounded-full border border-red/28 bg-red/10 px-2 py-0.5 align-[2px] text-[10.5px] tracking-[.1em] text-red-ink uppercase'>
                            n8n
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
          <span className='max-w-155 leading-[1.55] text-white/72'>
            Je hoeft niet alles af te nemen.{' '}
            <b className='font-semibold text-white'>In je groeiplan staat welke schakel bij jou het meeste oplevert.</b>
          </span>
          <Link
            href='#groeiplan'
            className='inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold whitespace-nowrap text-ink shadow-[0_14px_30px_-12px_rgba(0,0,0,.6),inset_0_-2px_0_rgba(14,14,18,.08)] transition-[translate,box-shadow,background,color] duration-[220ms] hover:-translate-y-0.5 hover:bg-red hover:text-white hover:shadow-[0_18px_34px_-12px_rgba(255,57,81,.8)]'
          >
            Ontdek waar jouw kans ligt →
          </Link>
        </div>
      </Wrap>
    </Sec>
  );
}

function Cases() {
  return (
    <Sec id='cases'>
      <Wrap>
        <SecHead
          eyebrow='Resultaten'
          title='Cijfers, geen beloftes.'
          lead='Drie klanten, drie startpunten, drie keer aantoonbare groei. Van lokale pizzeria tot Europese groothandel.'
        />
        <div className='grid grid-cols-3 gap-4 max-dsk:grid-cols-2 max-sm:grid-cols-1'>
          {CASES.map((c) => (
            <CaseCard key={c.title} {...c} />
          ))}
        </div>
      </Wrap>
    </Sec>
  );
}

function Approach() {
  return (
    <Sec id='aanpak' className='scroll-mt-10 border-y border-line bg-soft'>
      <Wrap>
        <SecHead eyebrow='Onze aanpak' title='Vier stappen. Geen verrassingen.' />
        <div className='mt-[54px] grid grid-cols-4 max-dsk:grid-cols-2 max-dsk:gap-y-[34px] max-sm:grid-cols-1'>
          {STEPS.map(([title, text], i) => (
            <div
              key={title}
              className='rv relative pr-[30px] not-first:pl-[30px] not-last:border-r not-last:border-line-2 max-dsk:nth-2:border-r-0 max-dsk:nth-3:pl-0 max-sm:border-r-0! max-sm:border-b max-sm:border-line max-sm:pb-[26px] max-sm:pl-0!'
            >
              <div className="mb-[18px] flex items-center gap-[9px] font-display text-[13px] font-bold tracking-[.08em] text-red-ink after:h-px after:flex-1 after:bg-[linear-gradient(90deg,rgba(255,57,81,.45),transparent)] after:content-['']">
                STAP 0{i + 1}
              </div>
              <h3 className='mb-2.5 text-xl tracking-[-.02em]'>{title}</h3>
              <p className='text-[14.5px] leading-[1.6] text-dim'>{text}</p>
            </div>
          ))}
        </div>
        <div className='rv mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-9'>
          <p className='max-w-130 font-display text-[clamp(20px,2.2vw,26px)] leading-[1.2] font-bold tracking-[-.025em]'>
            Zo ziet jouw eerste stap eruit.
            <span className='mt-2 block font-sans text-[15px] font-normal tracking-normal text-dim'>
              Wij bellen, jij hoeft niets voor te bereiden. Vrijblijvend.
            </span>
          </p>
          <BtnRed href='#groeiplan' className='max-sm:w-full max-sm:justify-center'>
            Ontvang mijn groeiplan
          </BtnRed>
        </div>
      </Wrap>
    </Sec>
  );
}

function StatBand() {
  return (
    <Sec className='pb-0!'>
      <Wrap>
        <div className='grid grid-cols-4 gap-4 max-dsk:grid-cols-2 max-sm:grid-cols-1'>
          {STATS.map(([n, u, l]) => (
            <div
              key={l}
              className='rv rounded-2xl border border-line bg-white px-6 py-7 hover:border-red/40 hover:shadow-[0_20px_40px_-26px_rgba(255,57,81,.45)]'
            >
              <div className='font-display text-[44px] leading-none font-bold tracking-[-.04em]'>
                {n}
                <span className='text-red'>{u}</span>
              </div>
              <div className='mt-2.5 text-[13.5px] text-dim'>{l}</div>
            </div>
          ))}
        </div>
      </Wrap>
    </Sec>
  );
}

function Team() {
  return (
    <Sec id='team'>
      <Wrap>
        <div className='grid grid-cols-[1.05fr_.95fr] items-center gap-14 max-dsk:grid-cols-1 max-dsk:gap-9'>
          <div className='rv relative h-130 overflow-hidden rounded-[20px] shadow-[0_36px_70px_-34px_rgba(14,14,18,.4)]'>
            <Image
              src='/images/advertisr/het-team-van-advertisr-op-kantoor-in-haa.jpg'
              alt='Het team van Advertisr op kantoor'
              fill
              sizes='(max-width:1080px) 100vw, 620px'
              className='object-cover'
            />
            <div className='absolute bottom-[22px] left-[22px] z-3 rounded-xl border border-line bg-white/92 px-[18px] py-3.5 backdrop-blur-[14px]'>
              <div className='font-display text-[15px] font-bold'>Direct contact met je marketeer</div>
              <div className='mt-0.5 text-[12.5px] text-dim'>Geen accountmanager, geen ticketsysteem</div>
            </div>
          </div>
          <div>
            <Eyebrow>Het team</Eyebrow>
            <h2 className='rv mt-4 mb-5 text-[clamp(30px,3.4vw,46px)] tracking-[-.035em]'>
              De mensen die je campagnes draaien, zijn de mensen die je spreekt.
            </h2>
            <p className='rv mb-4 text-[16.5px] text-dim'>
              Bij de meeste bureaus praat je met een accountmanager die daarna doorgeeft wat jij bedoelde. Bij ons zit je direct aan tafel
              met de marketeers die het werk uitvoeren. Kort lijntje, snel schakelen, geen ruis.
            </p>
            <p className='rv mb-4 text-[16.5px] text-dim'>
              We werken hands-on en persoonlijk: we denken mee over je hele bedrijf, niet alleen over je advertentieaccount.
            </p>
            <div className='rv mt-[26px] flex flex-wrap gap-[9px]'>
              {['Vast aanspreekpunt', 'Maandelijkse strategie', 'Transparante rapportage', 'Geen langlopende contracten'].map((chip) => (
                <span
                  key={chip}
                  className='rounded-full border border-line-2 bg-white px-[15px] py-2 text-[13px] text-dim transition-colors duration-[250ms] hover:border-red hover:text-ink'
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Wrap>
    </Sec>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee
        items={[
          'Meta Ads',
          'Google Ads',
          'AI Agent Workflows',
          'Web development',
          'Social media organisch',
          'SEO & GEO',
          'Data & analytics',
          'Marketing automation',
        ]}
      />
      <Compare />
      <Services />
      <Cases />
      <Approach />
      <StatBand />
      <Team />
      <Logos title='Merken die hun marketing bij ons neerleggen.' note='Van horeca tot B2B-export.' />
      <Reviews title='Waarom ze blijven.' count={10} />
      <FinalCta />
    </>
  );
}
