import type { Metadata } from 'next';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { FinalCta } from '@/components/advertisr/FinalCta';
import { Logos } from '@/components/advertisr/Logos';
import { Reviews } from '@/components/advertisr/Reviews';
import { CtaBand, FaqList } from '@/components/advertisr/service';
import { Ambient, Count, Crumb, Eyebrow, Sec, SecHead, Wrap } from '@/components/advertisr/ui';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'Resultaten',
  description: 'Drie klanten, drie totaal verschillende branches, één patroon: gerichte campagnes die zich terugverdienen.',
};

const STATS: [ReactNode, string][] = [
  [
    <>
      €<Count to={500} />
      K+
    </>,
    'omzet in één jaar voor Trockenblumengrosshandel',
  ],
  [<Count key='n' to={164} />, 'leads in de beste maand voor PPExport'],
  [
    <>
      <Count to={14} />×
    </>,
    'ROAS op de advertentiecampagnes van Trockenblumengrosshandel',
  ],
  [
    <>
      +<Count to={30} />%
    </>,
    'omzetgroei voor pizzeria Ciao Italia',
  ],
];

const CASES = [
  {
    img: 'https://advertisr.nl/wp-content/uploads/2025/11/Advertisr_blogppexort_cover.jpg',
    alt: 'Case study PPExport, bloemengroothandel',
    badge: 'Groothandel · Internationaal',
    eyebrow: 'PPExport, bloemengroothandel',
    title: 'Van sterke naam in Nederland naar speler in vier Europese landen.',
    text: 'PPExport had leads, maar geen internationale doorbraak. Met gerichte Google Ads en Meta-campagnes per land, een kwalificatieformulier vooraf en een scherpe focus op de markten die het beste converteerden, groeide het bedrijf uit tot een gevestigde naam in Duitsland, Spanje, Polen en Tsjechië.',
    stats: [
      ['164', 'leads/maand in de piekmaand'],
      ['€2', 'kosten per lead in Polen'],
      ['130K+', 'maandelijkse impressies'],
    ],
    tags: ['Google Ads', 'Meta Ads', 'SEO', 'Web development', 'Marketing automation'],
    href: 'https://advertisr.nl/case-study-ppexport/',
  },
  {
    img: 'https://advertisr.nl/wp-content/uploads/2024/10/blog_image_trockenblumen.jpg',
    alt: 'Case study Trockenblumengrosshandel, Duitse groothandel in droogbloemen',
    badge: 'E-commerce · Duitsland',
    eyebrow: 'Trockenblumengrosshandel, droogbloemen groothandel',
    title: 'Van idee zonder webshop naar € 500.000 omzet.',
    text: 'Trockenblumengrosshandel had een sterke productlijn, maar nog geen digitaal verkoopkanaal. We bouwden een webshop op maat voor groothandelklanten en zetten daarna gerichte Meta- en Google Ads-campagnes op de Duitse markt op, met ruimte om snel te schalen naar Frankrijk, de Benelux en het Verenigd Koninkrijk.',
    stats: [
      ['€500K', 'omzet in 2023'],
      ['14×', 'ROAS op advertentiebudget'],
      ['4', 'landen bereikt'],
    ],
    tags: ['Web development', 'SEO', 'Google Ads', 'Meta Ads'],
    href: 'https://advertisr.nl/case-study-advertisr-online-marketingbureau-haarlem-over-internationaal-online-succes/',
  },
  {
    img: 'https://advertisr.nl/wp-content/uploads/2024/10/blog_image_Ciao_italia-1.jpg',
    alt: 'Case study Ciao Italia, pizzeria in Culemborg',
    badge: 'Horeca · Lokaal',
    eyebrow: 'Ciao Italia, pizzeria & bezorgdienst',
    title: 'Een verouderde website en groeiende concurrentie omgebogen naar +30% omzet.',
    text: 'Ciao Italia had een sterke reputatie sinds 1999, maar een website zonder online betalen en groeiende concurrentie in Culemborg. Na een nieuwe website met eenvoudig beheer voor de eigenaar zetten we Google Ads en Social Ads in, gericht op de eigen regio. Binnen dagen stegen de bestellingen merkbaar.',
    stats: [
      ['+30%', 'omzetgroei'],
      ['1999', 'jaar van oprichting'],
      ['Mnd.', 'rapportage aan de eigenaar'],
    ],
    tags: ['Web development', 'Google Ads', 'Meta Ads'],
    href: 'https://advertisr.nl/online-ads-case-study-ciao-italia/',
  },
];

const FAQS = [
  {
    q: 'Zijn deze resultaten representatief voor mijn branche?',
    a: 'Elke branche en elk startpunt is anders. Wat deze cases gemeen hebben, is de aanpak: eerst de basis op orde, dan gericht testen, dan opschalen wat werkt. In je gratis groeiplan rekenen we door wat realistisch is voor jouw situatie.',
  },
  {
    q: 'Hoe snel zie ik dit soort resultaten?',
    a: 'Ciao Italia zag binnen dagen meer bestellingen. PPExport en Trockenblumengrosshandel groeiden over maanden naar jaren naar hun huidige cijfers. Structurele groei kost tijd, eerste signalen meestal niet.',
  },
  {
    q: 'Rapporteren jullie dit soort cijfers ook voor mij?',
    a: 'Ja. Elke klant krijgt periodieke rapportage met de cijfers die er voor hun situatie toe doen, geen lege vanity metrics.',
  },
];

export default function ResultsPage() {
  return (
    <>
      <header className='relative overflow-hidden pt-[150px] pb-[50px]'>
        <div className='absolute inset-0 mask-[linear-gradient(#000_65%,transparent)]'>
          <Ambient />
        </div>
        <Wrap>
          <div className='max-w-190'>
            <Crumb items={[['Resultaten']]} />
            <Eyebrow>Resultaten</Eyebrow>
            <h1 className='rv mt-[18px] mb-5 text-[clamp(36px,5vw,60px)] leading-[1.03] tracking-[-.04em] text-ink'>
              Cijfers, <em>geen beloftes.</em>
            </h1>
            <p className='rv max-w-155 text-[18.5px] text-dim'>
              Dit is wat er gebeurt als strategie, uitvoering en optimalisatie bij hetzelfde team liggen. Drie klanten, drie totaal
              verschillende branches, één patroon: gerichte campagnes die zich terugverdienen.
            </p>
          </div>
        </Wrap>
        <Wrap>
          <div className='rv mt-14 grid grid-cols-4 gap-3.5 max-[900px]:grid-cols-2 max-mob:grid-cols-1 max-mob:gap-3'>
            {STATS.map(([n, l]) => (
              <div
                key={l}
                className='relative rounded-[18px] border border-line bg-white px-6 py-[30px] shadow-[0_20px_40px_-32px_rgba(14,14,18,.35)]'
              >
                <div className='flex items-baseline gap-0.5 font-display text-[clamp(30px,3.6vw,46px)] font-bold tracking-[-.03em] text-ink'>
                  {n}
                </div>
                <div className='mt-2 text-[12.5px] leading-[1.4] text-dim'>{l}</div>
              </div>
            ))}
          </div>
        </Wrap>
      </header>

      <Sec className='py-5!'>
        <Wrap>
          {CASES.map((c, i) => (
            <div
              key={c.href}
              className={cn(
                'rv grid grid-cols-2 items-center gap-14 border-t border-line py-16 first:border-t-0 max-[860px]:grid-cols-1 max-[860px]:gap-7',
              )}
            >
              <div
                className={cn(
                  'group/m relative aspect-[16/12] overflow-hidden rounded-[20px] border border-line shadow-[0_30px_60px_-36px_rgba(14,14,18,.45)]',
                  i % 2 === 1 && 'order-2 max-[860px]:order-none',
                )}
              >
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  sizes='(max-width:860px) 100vw, 590px'
                  className='object-cover transition-transform duration-600 group-hover/m:scale-104'
                />
                <div className='absolute top-4 left-4 rounded-full border border-line bg-white/92 px-3.5 py-1.5 font-display text-[11px] font-bold tracking-[.04em] text-ink uppercase backdrop-blur-[6px]'>
                  {c.badge}
                </div>
              </div>
              <div>
                <Eyebrow rv={false} className='mb-3.5'>
                  {c.eyebrow}
                </Eyebrow>
                <h3 className='mb-4 text-[clamp(24px,2.6vw,32px)] leading-[1.15] tracking-[-.03em]'>{c.title}</h3>
                <p className='mb-6 text-[15.5px] leading-[1.65] text-dim'>{c.text}</p>
                <div className='mb-[22px] grid grid-cols-3 gap-px overflow-hidden rounded-[14px] border border-line bg-line'>
                  {c.stats.map(([n, l]) => (
                    <div key={l} className='bg-soft px-3.5 py-4 text-left'>
                      <div className='font-display text-[19px] font-bold tracking-[-.01em] text-ink'>{n}</div>
                      <div className='mt-1 text-[10.5px] leading-[1.35] text-dim'>{l}</div>
                    </div>
                  ))}
                </div>
                <div className='mb-6 flex flex-wrap gap-2'>
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className='rounded-full border border-line bg-white px-[13px] py-1.5 font-display text-[11.5px] font-semibold text-dim'
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={c.href}
                  target='_blank'
                  rel='noopener'
                  className='mt-[18px] inline-flex items-center gap-2 border-b-[1.5px] border-line-2 pb-[3px] text-[14.5px] font-semibold text-ink transition-colors duration-200 hover:border-red hover:text-red'
                >
                  Bekijk de volledige case study →
                </a>
              </div>
            </div>
          ))}
          <CtaBand
            className='mt-5! mb-16'
            title='Welke case wordt de jouwe?'
            sub='In je gratis groeiplan zie je welke resultaten voor jouw branche en budget realistisch zijn.'
          />
        </Wrap>
      </Sec>

      <Reviews className='pt-5!' />
      <Logos title='Van horeca tot internationale groothandel.' note='10+ klanten, allemaal met een eigen aanpak.' />
      <Sec>
        <Wrap>
          <SecHead eyebrow='Veelgestelde vragen' title='Wat deze cijfers voor jou betekenen.' />
          <FaqList items={FAQS} />
        </Wrap>
      </Sec>
      <FinalCta
        eyebrow='Wil jij de volgende case worden?'
        lead='Wij bellen je, brengen je situatie in kaart en sturen een concreet plan met kansen en aanpak. Volledig vrijblijvend.'
        messagePlaceholder='Waar wil je hulp bij?'
        interesse='Resultaten'
      />
    </>
  );
}
