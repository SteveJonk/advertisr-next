import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { JsonLd } from '@/components/JsonLd';
import { ArticleCard } from '@/components/advertisr/ArticleCard';
import { CtaBand, FaqList } from '@/components/advertisr/service';
import { Toc } from '@/components/advertisr/Toc';
import { Ambient, Arrow, btnRed, Crumb, Eyebrow, Wrap } from '@/components/advertisr/ui';
import { ARTICLES } from '@/lib/advertisr/articles';
import { cn } from '@/lib/cn';
import { SITE_URL } from '@/lib/site';

const TITLE = 'Google Ads voor MKB: complete gids voor winstgevende campagnes in 2026';
const DESCRIPTION =
  'Wat kost Google Ads voor een MKB-bedrijf, wanneer is het rendabel en kun je het beter zelf doen of uitbesteden? De complete gids.';
const PATH = '/kennisbank/google-ads-voor-mkb';

export const metadata: Metadata = {
  title: 'Google Ads voor MKB: complete gids',
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { type: 'article', title: TITLE, description: DESCRIPTION },
};

const TOC: [string, string][] = [
  ['wat-is-google-ads', 'Wat is Google Ads en hoe werkt het?'],
  ['kosten', 'Wat kost Google Ads voor een MKB-bedrijf?'],
  ['rendabel', 'Wanneer is Google Ads rendabel?'],
  ['zelf-of-uitbesteden', 'Zelf doen of uitbesteden?'],
  ['fouten', 'Veelgemaakte fouten'],
  ['per-branche', 'Google Ads per branche'],
  ['roas-cpa', 'Wat is een goede ROAS of CPA?'],
  ['winstgevend-starten', 'Hoe start je winstgevend?'],
  ['geschikt', 'Is het geschikt voor jouw bedrijf?'],
  ['faq', 'Veelgestelde vragen'],
];

const FAQS = [
  {
    q: 'Wat kost Google Ads per maand?',
    a: 'Voor MKB-bedrijven ligt het advertentiebudget meestal tussen €750 en €5.000 per maand, afhankelijk van branche en doelstelling.',
  },
  {
    q: 'Hoe snel werkt Google Ads?',
    a: 'Binnen 1 tot 2 weken kun je verkeer genereren. Optimalisatie duurt meestal 30 tot 90 dagen voordat je stabiele resultaten ziet.',
  },
  {
    q: 'Is Google Ads geschikt voor kleine bedrijven?',
    a: 'Ja, mits er voldoende zoekvolume is binnen jouw niche en je marge toereikend is om een gezonde kosten-per-lead te dragen.',
  },
  {
    q: 'Wat is beter: Google Ads of SEO?',
    a: 'Google Ads werkt direct, SEO is een langetermijnstrategie. De meeste bedrijven combineren beide voor het beste resultaat op zowel korte als lange termijn.',
  },
];

const RELATED = [
  'Wat kost Google Ads per maand voor een MKB-bedrijf?',
  'ROAS vs. CPA: welke KPI stuurt jouw campagnes echt?',
  'Google Ads of SEO: wat pak je als eerste aan?',
].map((title) => ARTICLES.find((a) => a.title === title)!);

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: TITLE,
      description: DESCRIPTION,
      author: {
        '@type': 'Person',
        name: 'Dylan Arnold',
        jobTitle: 'Performance Marketeer',
        worksFor: { '@type': 'Organization', name: 'Advertisr' },
      },
      publisher: { '@type': 'Organization', name: 'Advertisr' },
      datePublished: '2026-08-02',
      dateModified: '2026-09-18',
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${PATH}` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Kennisbank', item: `${SITE_URL}/kennisbank` },
        { '@type': 'ListItem', position: 3, name: 'Google Ads voor MKB: complete gids', item: `${SITE_URL}${PATH}` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
};

/** Long-form body styles, as the design's `.art-prose`. */
const prose = cn(
  'max-w-170 text-[17px] leading-[1.78] text-[#2B2A33]',
  '[&_strong]:font-semibold [&_strong]:text-ink',
  '[&>p]:mb-5 [&>ul]:mb-5 [&>ul]:list-disc [&>ul]:pl-[22px] [&_li]:mb-[9px] [&_li]:pl-1',
  '[&>h2]:mt-13 [&>h2]:mb-[18px] [&>h2]:scroll-mt-[110px] [&>h2]:text-[clamp(24px,2.6vw,30px)] [&>h2]:tracking-[-.025em] [&>h2]:text-ink',
);

function InlineCta({ title }: { title: string }) {
  return (
    <div className="rv relative isolate my-11 flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-[20px] border border-white/10 bg-[radial-gradient(420px_200px_at_100%_0%,rgba(255,57,81,.5),transparent_70%),radial-gradient(360px_180px_at_0%_120%,rgba(255,120,90,.2),transparent_70%),linear-gradient(135deg,#1c1c24_0%,#0d0d12_100%)] px-[30px] py-7 text-white shadow-[inset_0_1px_0_rgba(255,255,255,.16),0_30px_60px_-28px_rgba(14,14,18,.55),0_50px_80px_-50px_rgba(255,57,81,.5)] before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:bg-[radial-gradient(rgba(255,255,255,.13)_1px,transparent_1.4px)] before:bg-size-[20px_20px] before:mask-[linear-gradient(100deg,transparent_40%,#000)] before:content-['']">
      <div className='relative z-2'>
        <div className='mb-2 flex items-center gap-[7px] text-[11px] font-bold tracking-[.1em] text-[#FF8A98] uppercase'>
          ✦ Gratis groeiplan
        </div>
        <h4 className='font-display text-[19px] font-bold tracking-[-.02em] text-white'>{title}</h4>
        <p className='mt-1.5 text-sm text-white/72'>Wij rekenen het voor je door, kosteloos en vrijblijvend.</p>
      </div>
      <Link
        href='/groeiplan'
        className={cn(btnRed, 'relative z-2 shrink-0 px-6! py-3.5! text-[14.5px]! hover:bg-white hover:text-red-ink')}
      >
        Ontvang mijn groeiplan <Arrow />
      </Link>
    </div>
  );
}

function Box({ label, children, className }: { label: ReactNode; children: ReactNode; className?: string }) {
  return (
    <div className={cn('rv', className)}>
      {label}
      {children}
    </div>
  );
}

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={JSON_LD} />
      <header className='relative overflow-hidden pt-[140px] pb-10'>
        <div className='absolute inset-0 mask-[linear-gradient(#000_65%,transparent)]'>
          <Ambient />
        </div>
        <Wrap>
          <div className='mx-auto max-w-205 text-left'>
            <Crumb items={[['Kennisbank', '/kennisbank'], ['Google Ads', '/kennisbank'], ['Complete gids']]} />
            <div className='rv inline-flex items-center gap-[7px] rounded-full border border-red/30 bg-red-tint px-[15px] py-[7px] font-display text-xs font-bold text-red-ink'>
              <svg width='13' height='13' viewBox='0 0 64 64' className='text-red' aria-hidden='true'>
                <circle cx='32' cy='32' r='20' fill='none' stroke='currentColor' strokeWidth='5' />
                <circle cx='32' cy='32' r='11' fill='none' stroke='currentColor' strokeWidth='5' />
                <circle cx='32' cy='32' r='3' fill='currentColor' />
              </svg>
              Pillar gids · Google Ads
            </div>
            <h1 className='rv mt-5 mb-[22px] text-[clamp(30px,4.4vw,50px)] leading-[1.08] tracking-[-.04em] text-ink'>{TITLE}</h1>
            <p className='rv max-w-170 text-lg leading-[1.6] text-dim'>
              Wat kost Google Ads nou echt voor een MKB-bedrijf, wanneer is het rendabel, en kun je het beter zelf doen of uitbesteden? Deze
              gids neemt je mee van de basis tot een winstgevende structuur.
            </p>
            <div className='rv mt-8 flex flex-wrap items-center justify-between gap-5 border-y border-line py-5'>
              <div className='flex items-center gap-3'>
                <Image
                  src='/images/advertisr/dylan-arnold.jpg'
                  alt='Dylan Arnold'
                  width={44}
                  height={44}
                  className='size-11 rounded-full border border-line-2 object-cover'
                />
                <div>
                  <div className='font-display text-[14.5px] font-bold'>Dylan Arnold</div>
                  <div className='text-xs text-dim'>Performance Marketeer bij Advertisr.</div>
                </div>
              </div>
              <div className='flex flex-wrap gap-[22px] text-[12.5px] text-dim [&_b]:font-semibold [&_b]:text-ink'>
                <div>
                  Gepubliceerd <b>2 aug 2026</b>
                </div>
                <div>
                  Laatst bijgewerkt <b>18 sep 2026</b>
                </div>
                <div>
                  <b>14 min</b> leestijd
                </div>
              </div>
              <div className='flex gap-2'>
                {/* ponytail: share links are '#' in the design. */}
                {[
                  ['in', 'Deel op LinkedIn'],
                  ['🔗', 'Kopieer link'],
                ].map(([icon, label]) => (
                  <a
                    key={label}
                    href='#'
                    aria-label={label}
                    className='flex size-9 items-center justify-center rounded-full border border-line-2 text-sm text-dim transition-colors duration-200 hover:border-red hover:text-red'
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Wrap>
      </header>

      <Wrap>
        <div className='mx-auto grid max-w-270 grid-cols-[230px_1fr] items-start gap-15 pt-14 max-[900px]:grid-cols-1 max-[900px]:pt-6'>
          <Toc items={TOC} />
          <article className={prose}>
            <p>
              Veel MKB-bedrijven investeren in Google Ads, maar weten niet precies wat het oplevert. Er komen klikken binnen, er wordt
              budget uitgegeven, maar hoeveel klanten het daadwerkelijk oplevert blijft vaak onduidelijk. En dat is precies waar het
              misgaat.
            </p>
            <p>
              Google Ads kan één van de krachtigste groeikanalen zijn voor ondernemers, maar alleen als het goed is ingericht, doorgemeten
              en geoptimaliseerd.
            </p>

            <Box
              className='relative mt-[30px] mb-11 rounded-2xl border border-red/30 bg-[linear-gradient(155deg,#FFF1F3,#fff)] px-[26px] py-6 shadow-[0_20px_40px_-34px_rgba(255,57,81,.5)]'
              label={
                <div className='mb-2.5 flex items-center gap-2 text-[11.5px] font-bold tracking-[.06em] text-red-ink uppercase'>
                  ⚡ Kort antwoord
                </div>
              }
            >
              <p className='text-[15.5px] leading-[1.6] text-ink'>
                Voor de meeste MKB-bedrijven ligt een realistisch startbudget tussen <strong>€750 en €5.000 per maand</strong>, afhankelijk
                van branche en concurrentie. Google Ads is rendabel zodra je marge, conversieratio en tracking op orde zijn, en wordt pas
                écht winstgevend na 30 tot 90 dagen optimaliseren.
              </p>
            </Box>

            <h2 id='wat-is-google-ads'>Wat is Google Ads en hoe werkt het?</h2>
            <p>
              Google Ads is het advertentieplatform van Google waarmee je zichtbaar wordt op het moment dat iemand actief zoekt naar jouw
              dienst of product. Dat is meteen het grote verschil met social media advertising: bij Google Ads is er al koopintentie.
            </p>
            <p>
              Als iemand zoekt op &quot;dakdekker Haarlem&quot;, &quot;marketingbureau Noord-Holland&quot; of &quot;tuinarchitect
              villa&quot;, dan wil die persoon iets. Nu.
            </p>
            <p>Je kunt via Google Ads zichtbaar worden via verschillende campagnetypes:</p>
            <ul>
              <li>
                <strong>Zoekadvertenties</strong>, tekstadvertenties boven de organische zoekresultaten
              </li>
              <li>
                <strong>Performance Max</strong>, geautomatiseerde campagnes die zoeknetwerk, display, YouTube en shopping combineren
              </li>
              <li>
                <strong>Shopping campagnes</strong>, voor e-commerce bedrijven met productfeeds
              </li>
              <li>
                <strong>Display advertenties</strong>, banners op websites binnen het Google-netwerk
              </li>
              <li>
                <strong>YouTube advertenties</strong>, video-advertenties gericht op specifieke doelgroepen
              </li>
            </ul>
            <p>
              Voor MKB-bedrijven zijn zoekadvertenties meestal de meest rendabele start, omdat je direct inspeelt op bestaande zoekintentie.
            </p>

            <h2 id='kosten'>Wat kost Google Ads voor een MKB-bedrijf?</h2>
            <p>
              Dit is de meest gestelde vraag, en terecht. De kosten van Google Ads bestaan uit twee onderdelen: advertentiebudget, wat je
              aan Google betaalt, en beheer of optimalisatie, intern of via een bureau.
            </p>
            <div className='rv my-[30px] grid grid-cols-3 gap-px overflow-hidden rounded-[14px] border border-line bg-line shadow-[0_20px_40px_-34px_rgba(14,14,18,.3)] max-[560px]:grid-cols-1'>
              {[
                ['€750–2.500', 'lokaal MKB per maand'],
                ['€1.500–5.000', 'regionaal MKB per maand'],
                ['€3.000–15.000+', 'e-commerce per maand'],
              ].map(([n, l]) => (
                <div key={l} className='bg-white px-4 py-[18px] text-center'>
                  <div className='font-display text-[22px] font-bold tracking-[-.02em] text-ink'>{n}</div>
                  <div className='mt-1 text-[11.5px] leading-[1.4] text-dim'>{l}</div>
                </div>
              ))}
            </div>
            <p>
              Dit zijn geen vaste regels. Het hangt af van concurrentie op zoekwoorden, de klikprijs binnen jouw branche, de conversieratio
              van je website en je gemiddelde orderwaarde of marge.
            </p>
            <p>
              Stel: de gemiddelde CPC in jouw branche is €2,50 en je conversieratio ligt op 5%. Dan kost een lead ongeveer €50. Als één
              nieuwe klant gemiddeld €1.200 omzet oplevert bij 40% marge, is Google Ads extreem rendabel. Maar bij een conversieratio van 1%
              wordt diezelfde klik ineens vijf keer zo duur per lead.
            </p>
            <p>
              Veel ondernemers denken dat Google Ads &quot;duur&quot; is. In werkelijkheid is vaak de website of de tracking het probleem,
              niet het platform zelf.
            </p>
            <InlineCta title='Benieuwd wat dit voor jouw branche betekent?' />

            <h2 id='rendabel'>Wanneer is Google Ads rendabel?</h2>
            <p>
              Google Ads is rendabel zodra je marges gezond zijn, je conversieratio klopt, je tracking goed staat en je voldoende data
              verzamelt om te kunnen optimaliseren.
            </p>
            <p>
              Voor leadgeneratie zien we in het MKB vaak een cost per lead tussen €15 en €75, afhankelijk van de branche. Bouw en technische
              sectoren zitten vaak hoger, horeca en retail vaak lager. Voor e-commerce is een ROAS tussen 300% en 600% gebruikelijk als
              startpunt.
            </p>
            <div className='rv relative my-9 rounded-2xl border border-l-[3px] border-line border-l-red bg-soft py-[30px] pr-8 pl-10'>
              <p className='font-display text-[19px] leading-[1.45] font-semibold tracking-[-.01em] text-ink'>
                Het probleem is zelden Google Ads zelf. Het probleem is meestal geen duidelijke structuur, geen negatieve zoekwoorden, of
                een landingspagina die niet is geoptimaliseerd voor conversie.
              </p>
            </div>

            <h2 id='zelf-of-uitbesteden'>Zelf doen of uitbesteden?</h2>
            <p>
              Veel ondernemers starten zelf. Logisch, Google maakt het laagdrempelig om te beginnen. Maar de echte vraag is niet &quot;kan
              ik het zelf?&quot;, maar &quot;wat kost het me als ik fouten maak?&quot;.
            </p>
            <p>
              Zelf doen levert lage directe kosten, volledige controle en de mogelijkheid om snel te starten. Daar staat tegenover dat het
              tijdsintensief is, fouten direct geld kosten, en je geen externe benchmark of geavanceerde optimalisatie hebt.
            </p>
            <p>
              Uitbesteden geeft je structuur vanaf dag één, continue optimalisatie, benchmarkdata en strategisch inzicht, tegen
              beheerkosten. Maar als een bureau jouw kosten per lead met 30% weet te verlagen, verdient het zichzelf meestal vanzelf terug.
            </p>

            <h2 id='fouten'>Veelgemaakte fouten bij Google Ads</h2>
            <p>
              We zien regelmatig accounts waar 20 tot 40% van het budget weglekt door slechte inrichting. De meest voorkomende oorzaken:
            </p>
            <ul>
              <li>Geen conversietracking, of verkeerd ingestelde tracking</li>
              <li>Te brede zoekwoorden zonder duidelijke afbakening</li>
              <li>Geen negatieve zoekwoorden ingesteld</li>
              <li>Campagnes zonder heldere structuur laten draaien</li>
              <li>Geen landingspagina-optimalisatie</li>
              <li>Beslissingen nemen op gevoel in plaats van op data</li>
            </ul>

            <h2 id='per-branche'>Google Ads per branche</h2>
            <p>Elke branche reageert anders op Google Ads.</p>
            <p>
              <strong>Bouw &amp; installatie</strong> kennen hogere klikprijzen, maar ook een hogere leadwaarde, met de focus vaak op lokale
              targeting. <strong>Restaurants &amp; hospitality</strong> hebben doorgaans een lage CPC en hoge conversies, met sterk
              seizoensgebonden campagnes. <strong>Retail</strong> combineert search met shopping, waarbij promoties en acties een grote rol
              spelen. <strong>E-commerce</strong> draait vooral op data: feedoptimalisatie is cruciaal, en opschalen gebeurt meestal via
              Performance Max.
            </p>

            <h2 id='roas-cpa'>Wat is een goede ROAS of CPA?</h2>
            <Box
              className='my-7 rounded-[14px] border border-l-[3px] border-line border-l-red bg-soft px-[22px] py-[18px]'
              label={<div className='mb-1.5 text-[11px] font-bold tracking-[.08em] text-dim-2 uppercase'>Definitie</div>}
            >
              <p className='text-[14.5px] leading-[1.6] text-dim'>
                <strong>ROAS</strong> (Return On Ad Spend) is de omzet die je terugkrijgt per euro advertentiebudget. <strong>CPA</strong>{' '}
                (Cost Per Acquisition) is wat één nieuwe klant of lead je gemiddeld kost.
              </p>
            </Box>
            <p>
              Dit verschilt sterk per branche, maar als grove richtlijn geldt voor leadgeneratie €15 tot €75 per lead, en voor e-commerce
              een ROAS van 3 tot 6 (dus 300% tot 600%) als startpunt.
            </p>
            <p>
              Belangrijker dan ROAS is uiteindelijk winstgevendheid. Je kunt een ROAS van 800% hebben en alsnog verlies draaien als je
              marges te laag zijn.
            </p>

            <h2 id='winstgevend-starten'>Hoe start je winstgevend met Google Ads?</h2>
            <p>
              Bepaal eerst een duidelijk doel, richt daarna je tracking goed in, bouw een strakke campagnestructuur, stel een realistisch
              testbudget vast, optimaliseer minimaal dertig dagen, en analyseer voortdurend je data om bij te sturen.
            </p>
            <p>Google Ads is geen knop die je aanzet. Het is een systeem dat je continu optimaliseert.</p>
            <InlineCta title='Wil je weten of Google Ads voor jou rendabel is?' />

            <h2 id='geschikt'>Is Google Ads geschikt voor jouw bedrijf?</h2>
            <p>
              Google Ads werkt vooral goed als je klanten actief zoeken naar jouw dienst, je marge gezond is, je website conversiegericht
              is, en je bereid bent minimaal drie maanden te testen voordat je resultaten beoordeelt.
            </p>

            <Box
              className='mt-[50px] border-t border-line pt-[26px]'
              label={<div className='mb-3 text-[11px] font-bold tracking-[.08em] text-dim-2 uppercase'>Bronnen</div>}
            >
              <ol className='list-decimal pl-5 text-[13px] leading-normal text-dim [&_a]:underline [&_a]:decoration-line-2 [&_a:hover]:text-red [&_li]:mb-[7px]'>
                {/* ponytail: source links are '#' in the design. */}
                <li>
                  <a href='#' target='_blank' rel='noopener'>
                    Google Ads Help, officiële documentatie over campagnetypes en biedstrategieën
                  </a>
                </li>
                <li>
                  <a href='#' target='_blank' rel='noopener'>
                    CBS, Kleinschalig ondernemerschap in Nederland, meest recente cijfers
                  </a>
                </li>
                <li>Interne benchmarkdata Advertisr op basis van lopende klantcampagnes, 2025–2026</li>
              </ol>
            </Box>

            <div className='rv mt-11 flex flex-wrap gap-2'>
              {['Google Ads', 'MKB', 'Strategie', 'Budget', 'ROAS'].map((t) => (
                <a
                  key={t}
                  href='#'
                  className='rounded-full border border-line bg-white px-[15px] py-2 text-[12.5px] text-dim transition-all duration-200 hover:border-red hover:text-red-ink'
                >
                  {t}
                </a>
              ))}
            </div>

            <div className='rv mt-[50px] flex gap-5 rounded-[18px] border border-line bg-soft p-[26px]'>
              <Image
                src='/images/advertisr/dylan-arnold.jpg'
                alt='Dylan Arnold'
                width={68}
                height={68}
                className='size-[68px] shrink-0 rounded-full object-cover'
              />
              <div>
                <div className='mb-1.5 text-[11px] font-bold tracking-[.08em] text-dim-2 uppercase'>Over de auteur</div>
                <h4 className='font-display text-[17px] font-bold'>Dylan Arnold</h4>
                <div className='mt-[3px] mb-2.5 text-[12.5px] font-semibold text-red-ink'>Performance Marketeer bij Advertisr.</div>
                <p className='text-[13.5px] leading-[1.55] text-dim'>
                  Zet dagelijks Meta en Google Ads campagnes op voor klanten van Advertisr en houdt ze scherp geoptimaliseerd. Schrijft over
                  wat er in de praktijk echt werkt, niet over de theorie uit een cursus.
                </p>
              </div>
            </div>
          </article>
        </div>
      </Wrap>

      <section id='faq' className='relative z-2 mx-auto max-w-270 scroll-mt-[100px] py-30 max-sm:py-20 max-[1120px]:px-10 max-sm:px-[22px]'>
        <Eyebrow>Veelgestelde vragen</Eyebrow>
        <h2 className='rv mt-4 text-[28px] tracking-[-.035em]'>Vragen die we vaak krijgen.</h2>
        <FaqList items={FAQS} className='mt-[26px] max-w-170' />
      </section>

      <section className='relative z-2 mx-auto mt-[70px] max-w-270 py-30 max-sm:py-20 max-[1120px]:px-10 max-sm:px-[22px]'>
        <Eyebrow>Meer uit dit kennisgebied</Eyebrow>
        <h2 className='rv mt-4 text-[26px] tracking-[-.035em]'>Gerelateerde artikelen.</h2>
        <div className='mt-[34px] grid grid-cols-3 gap-5 max-[980px]:grid-cols-2 max-[600px]:grid-cols-1'>
          {RELATED.map((a) => (
            <ArticleCard key={a.title} a={a} excerpt={false} />
          ))}
        </div>
      </section>

      <section className='relative z-2 pb-[90px]'>
        <div className='mx-auto max-w-270 max-[1120px]:px-10 max-sm:px-[22px]'>
          <CtaBand
            className='mt-0!'
            href='/groeiplan'
            title='Klaar om Google Ads winstgevend te maken?'
            sub='In je gratis groeiplan zien we waar jouw account het meeste rendement laat liggen.'
          />
        </div>
      </section>
    </>
  );
}
