import type { Metadata } from 'next';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { FinalCta } from '@/components/advertisr/FinalCta';
import { Logos } from '@/components/advertisr/Logos';
import { Marquee } from '@/components/advertisr/Marquee';
import { Reviews } from '@/components/advertisr/Reviews';
import { CtaBand, FaqList, FloatStat, Funnel, Pain, ProcRow, ServiceHero } from '@/components/advertisr/service';
import { Eyebrow, Sec, SecHead, Wrap } from '@/components/advertisr/ui';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'SEO & GEO',
  description:
    "Elke maand nieuwe blogs en landingspagina's op basis van echte zoekdata, in jouw tone of voice, zonder dat het jou tijd kost. En je ziet precies wat het oplevert, ook in ChatGPT en Gemini.",
};

/** Browser-framed screenshot of the Advertisr portal. */
function Shot({ src, alt, className, priority }: { src: string; alt: string; className?: string; priority?: boolean }) {
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
        <span className='ml-2.5 max-w-65 flex-1 truncate rounded-full border border-line bg-white px-3 py-1 text-[11.5px] text-dim-2'>
          portaal.advertisr.nl
        </span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        priority={priority}
        sizes='(max-width:1000px) 100vw, 640px'
        className='block h-auto w-full'
      />
    </div>
  );
}

function HeroShot() {
  return (
    <div className='rv relative'>
      <Shot src='/images/advertisr/overzicht-van-het-advertisr-portaal.jpg' alt='Overzicht van het Advertisr portaal' priority />
      <FloatStat value='4 blogs' label='per maand, standaard' className='bottom-14 -left-[34px] max-[1000px]:hidden' />
      <FloatStat value='Wekelijks' label='AI-meting in ChatGPT en Gemini' className='-top-[22px] -right-[18px] max-[1000px]:hidden' />
      <p className='mt-3 text-xs text-dim-2'>Voorbeeld van ons portaal, met een fictieve klant en voorbeeldcijfers.</p>
    </div>
  );
}

const TOOLS = [
  {
    tag: 'Elke maand nieuwe content',
    name: 'Blogr',
    text: 'Maandelijks blogs op basis van zoekdata, geschreven in jouw toon en gecontroleerd op feiten. Klaargezet in WordPress als concept.',
    points: [
      'Standaard 4 blogs per maand',
      'Onderwerpen gekozen op zoekdata en Search Console',
      'Jouw tone of voice via merkprofiel en kennisdocument',
      'Automatische kwaliteitscontrole voor publicatie',
    ],
  },
  {
    tag: "Pagina's die aanvragen opleveren",
    name: 'Pagr',
    text: "Landingspagina's per dienst en per plaats, in de stijl van jouw website. Het plan baseren we op zoekdata en keuren we samen goed.",
    points: [
      'Pagina per dienst en werkgebied',
      'Inclusief FAQ en kloppende bedrijfsgegevens',
      'Live in WordPress, jij hoeft niets te doen',
      'Plan voorgesteld door AI, goedgekeurd door ons',
    ],
  },
];

const OPTIONS = [
  ['Alleen Blogr.', 'Voor wie structureel wil groeien met content en nieuwe zoekvragen.'],
  ['Alleen Pagr.', 'Voor wie vooral gevonden wil worden op diensten en plaatsen.'],
  ['Beide samen', "Blogs en pagina's verwijzen naar elkaar en alles loopt via één portaal."],
];

const STEPS = [
  ['Onderwerpen kiezen', 'Op basis van zoekdata en Search Console kiezen we de vragen waar jouw klanten echt naar zoeken.'],
  ['Schrijven in jouw toon', 'Met je merkprofiel en kennisdocument klinkt elke blog als jouw bedrijf.'],
  ['Kwaliteitscontrole', 'Automatische controle op feiten en stijl, voordat jij er iets van ziet.'],
  ['Klaarzetten in WordPress', 'Met interne links, titel, omschrijving en afbeelding, als concept.'],
  ['Goedkeuren op jouw manier', 'In het portaal, of laat ons plaatsen. Jij beslist.'],
  ['Meten en bijsturen', 'We kijken wat werkt en sturen elke maand bij op basis van de cijfers.'],
];

type Feature = {
  eyebrow: string;
  title: string;
  text?: string;
  points?: ReactNode[];
  assure?: ReactNode;
  visual: ReactNode;
  flip?: boolean;
};

const FEATURES: Feature[] = [
  {
    eyebrow: 'Jij houdt de regie',
    title: 'Snel, maar nooit buiten jouw merk om.',
    points: [
      <>
        <b>Merkprofiel en kennisdocument.</b> Daar staat in hoe jij klinkt en wat er waar is over je bedrijf.
      </>,
      <>
        <b>Ideeën aandragen.</b> Heb je zelf een onderwerp? Zet het in het portaal.
      </>,
      <>
        <b>Goedkeuren of laten plaatsen.</b> Jij bepaalt hoeveel je zelf wilt doen.
      </>,
    ],
    assure: (
      <>
        <b>Bestaande pagina&apos;s blijven van jou.</b> We zetten geen verzonnen klantverhalen, cijfers of beloftes in een blog.
      </>
    ),
    visual: <Shot src='/images/advertisr/blogs-in-het-portaal.jpg' alt='Blogs in het portaal' />,
  },
  {
    eyebrow: 'Meten wat het oplevert',
    title: 'Per blog en per pagina zie je wat er gebeurt.',
    text: 'Geen vage rapporten. Via Search Console en Analytics volg je de weg van bezoek naar aanvraag.',
    points: [
      <>
        Resultaten <b>per blog en per pagina</b>
      </>,
      <>
        Acties worden <b>na 28 dagen opnieuw gemeten</b>
      </>,
      <>
        Elke maand een <b>duidelijk maandrapport</b>
      </>,
    ],
    visual: <Shot src='/images/advertisr/google-resultaten-in-het-portaal.jpg' alt='Google resultaten in het portaal' />,
    flip: true,
  },
  {
    eyebrow: 'AI zichtbaarheid',
    title: 'Word je genoemd in ChatGPT en Gemini?',
    text: 'Elke week stellen we een vaste set kernvragen aan ChatGPT en Gemini. We tellen of je merk wordt genoemd, welke bron wordt gebruikt en waar kansen liggen.',
    assure: (
      <>
        <b>Eerlijk over de cijfers.</b> AI-antwoorden verschillen per keer. Daarom kijken we naar de richting over meerdere weken, niet naar
        één losse meting.
      </>
    ),
    visual: <Shot src='/images/advertisr/ai-zichtbaarheid-in-het-portaal.jpg' alt='AI zichtbaarheid in het portaal' />,
  },
  {
    eyebrow: 'Pagr.',
    title: "Landingspagina's per dienst en plaats, zonder gedoe.",
    text: "AI stelt een plan voor op basis van zoekdata. Wij keuren het goed, bouwen de pagina's in de stijl van je website en zetten ze live in WordPress.",
    points: [
      <>
        Een pagina per <b>dienst en werkgebied</b>
      </>,
      <>
        <b>FAQ en kloppende gegevens</b> op elke pagina
      </>,
      <>
        Jij hoeft <b>niets te doen</b>
      </>,
    ],
    visual: (
      <div className='relative pb-[70px] max-[640px]:pb-0'>
        <Shot src='/images/advertisr/landingspagina-s-in-het-portaal.jpg' alt="Landingspagina's in het portaal" />
        <Shot
          src='/images/advertisr/pagr-plan-in-het-portaal.jpg'
          alt='Pagr. plan in het portaal'
          className='absolute bottom-0 -left-3.5 w-[62%] shadow-[0_30px_60px_-24px_rgba(14,14,18,.5)] max-[640px]:relative max-[640px]:left-0 max-[640px]:mt-3.5 max-[640px]:w-full'
        />
      </div>
    ),
    flip: true,
  },
];

const FAQS = [
  {
    q: 'Wat is het verschil tussen SEO en GEO?',
    a: "SEO zorgt dat je gevonden wordt in Google. GEO zorgt dat AI-tools als ChatGPT en Gemini jouw bedrijf noemen als bron of antwoord. Het fundament is grotendeels hetzelfde: duidelijke, betrouwbare pagina's en blogs over de vragen die je klanten echt stellen. Daarom pakken we beide in één aanpak op.",
  },
  {
    q: 'Moet ik kiezen tussen Blogr. en Pagr.?',
    a: "Nee. Je kunt starten met Blogr. voor maandelijkse blogs, met Pagr. voor landingspagina's per dienst en plaats, of met beide. Bij beide verwijzen blogs en pagina's naar elkaar en werk je vanuit één portaal.",
  },
  {
    q: 'Hoeveel blogs krijg ik per maand?',
    a: 'Standaard schrijven we vier blogs per maand. De onderwerpen kiezen we op basis van zoekdata en Search Console, en jij kunt zelf ook ideeën aandragen.',
  },
  {
    q: 'Kan ik blogs eerst goedkeuren?',
    a: "Ja. Elke blog wordt als concept in WordPress klaargezet. Jij keurt goed op jouw manier, via het portaal of door het ons te laten plaatsen. Bestaande pagina's van jouw website blijven van jou.",
  },
  {
    q: 'Verzint AI geen dingen over mijn bedrijf?',
    a: 'We werken met een merkprofiel en een kennisdocument, waarin jouw tone of voice en feiten staan. Elke tekst krijgt een automatische kwaliteitscontrole en we zetten geen verzonnen klantverhalen, cijfers of beloftes in een blog.',
  },
  {
    q: 'Welke cijfers krijg ik te zien?',
    a: 'Via Search Console en Analytics zie je per blog en per pagina wat er gebeurt, van bezoek tot aanvraag. Acties worden na 28 dagen opnieuw gemeten en je ontvangt elke maand een rapport. Daarnaast meten we wekelijks of je genoemd wordt in ChatGPT en Gemini.',
  },
  {
    q: 'Kunnen jullie garanderen dat ik in ChatGPT genoemd word?',
    a: 'Nee, en dat zou niemand eerlijk kunnen beloven. AI-antwoorden verschillen per keer. Daarom kijken we naar de richting over meerdere weken: hoe vaak je genoemd wordt, welke bronnen worden gebruikt en waar kansen liggen.',
  },
  {
    q: 'Hoe snel zie ik resultaat?',
    a: 'De eerste blog of pagina staat na de start snel live. Zoekresultaten bouwen daarna op, dus reken op een traject van maanden in plaats van weken. Wat er in die tijd gebeurt zie je steeds terug in het portaal.',
  },
  {
    q: 'Werkt dit ook als mijn website niet in WordPress staat?',
    a: 'Blogr. en Pagr. zetten content nu klaar in WordPress. Draait jouw site op iets anders, vertel het ons in het kennismakingsgesprek. Dan kijken we eerlijk wat er mogelijk is.',
  },
  { q: 'Zit ik ergens aan vast?', a: 'Nee. Er zijn geen opstartkosten en je kunt maandelijks opzeggen.' },
];

const dots =
  'absolute inset-0 bg-[radial-gradient(rgba(14,14,18,.13)_1px,transparent_1.4px)] bg-size-[26px_26px] mask-[radial-gradient(ellipse_70%_60%_at_70%_30%,#000_0%,transparent_75%)]';

function Tools() {
  return (
    <Sec id='tools' className='scroll-mt-10 overflow-hidden border-t border-line bg-soft'>
      <div className='pointer-events-none absolute inset-0 z-0 overflow-hidden' aria-hidden='true'>
        <div className={dots} />
        <div className='absolute -right-[220px] -bottom-[340px] size-[820px] rounded-full bg-[radial-gradient(circle,rgba(255,150,120,.16),rgba(255,150,120,0)_66%)] blur-[10px]' />
      </div>
      <Wrap>
        <SecHead
          eyebrow='Onze eigen tools'
          title='Twee tools die dit werk voor je doen.'
          lead='We bouwden Blogr. en Pagr. om vindbaarheid betaalbaar, structureel en meetbaar te maken voor ons klanten. Samen met ons team, niet in plaats van.'
        />
        <div className='relative z-2 grid grid-cols-2 gap-[22px] max-[1000px]:grid-cols-1'>
          {TOOLS.map((t) => (
            <div
              key={t.name}
              className='rv relative overflow-hidden rounded-[22px] border border-line bg-white px-[38px] py-10 shadow-[0_24px_50px_-34px_rgba(14,14,18,.35)] hover:-translate-y-1 hover:border-red/45 max-[640px]:px-6 max-[640px]:py-[30px]'
            >
              <p className='mb-3.5 text-[11px] font-semibold tracking-[.14em] text-red-ink uppercase'>{t.tag}</p>
              <div className='mb-3.5 font-display text-[clamp(38px,4.2vw,56px)] leading-none font-extrabold tracking-[-.045em]'>
                {t.name}
                <b className='font-extrabold text-red'>.</b>
              </div>
              <p className='mb-[22px] max-w-120 text-base text-dim'>{t.text}</p>
              <ul className='mb-1.5 grid gap-[11px]'>
                {t.points.map((pt) => (
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
          {OPTIONS.map(([title, text], i) => (
            <div
              key={title}
              className={cn(
                'rv rounded-2xl border border-line bg-white px-6 py-[22px]',
                i === 2 && 'border-red/40 bg-[linear-gradient(140deg,#FFF1F3,#fff_72%)]',
              )}
            >
              <h4 className='mb-1.5 font-display text-[19px] font-bold tracking-[-.02em]'>{title}</h4>
              <p className='text-sm leading-[1.55] text-dim'>{text}</p>
            </div>
          ))}
        </div>
      </Wrap>
    </Sec>
  );
}

function Steps() {
  return (
    <Sec className='bg-white'>
      <Wrap>
        <SecHead eyebrow='Zo werkt Blogr.' title='Van zoekdata tot blog in jouw WordPress.' />
        <div className='grid grid-cols-3 gap-4 max-[1000px]:grid-cols-1'>
          {STEPS.map(([title, text], i) => (
            <div
              key={title}
              className='rv rounded-[18px] border border-line bg-white px-[26px] py-7 shadow-[0_18px_40px_-32px_rgba(14,14,18,.3)]'
            >
              <div className="mb-3.5 flex items-center gap-2.5 font-display text-[15px] font-extrabold tracking-[.04em] text-red-ink after:h-px after:flex-1 after:bg-[linear-gradient(90deg,rgba(255,57,81,.4),transparent)] after:content-['']">
                0{i + 1}
              </div>
              <h3 className='mb-[9px] text-xl tracking-[-.022em]'>{title}</h3>
              <p className='text-[14.5px] leading-[1.6] text-dim'>{text}</p>
            </div>
          ))}
        </div>
        <CtaBand
          title='Benieuwd wat Blogr. en Pagr. voor jouw website kunnen doen?'
          sub='Plan een kennismaking. We laten het portaal zien en vertellen eerlijk wat we verwachten.'
        />
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

function Features() {
  return (
    <Sec className='border-t border-line bg-soft'>
      <Wrap>
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className={cn(
              'mb-26 grid items-center gap-16 *:min-w-0 last:mb-0 max-[1000px]:mb-19 max-[1000px]:grid-cols-1 max-[1000px]:gap-9',
              f.flip ? 'grid-cols-[1.1fr_.9fr]' : 'grid-cols-[.9fr_1.1fr]',
            )}
          >
            <div className={cn('rv', f.flip && 'order-2 max-[1000px]:order-none')}>
              <Eyebrow rv={false}>{f.eyebrow}</Eyebrow>
              <h2 className='mt-4 mb-[18px] text-[clamp(30px,3.3vw,44px)] tracking-[-.035em]'>{f.title}</h2>
              {f.text && <p className='mb-[22px] text-[16.5px] text-dim'>{f.text}</p>}
              {f.points && (
                <ul className='mb-6 grid gap-[13px]'>
                  {f.points.map((pt, i) => (
                    <li key={i} className='flex gap-3 text-[15.5px] leading-normal [&_b]:font-semibold'>
                      <Tick />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
              {f.assure && (
                <div className='rounded-r-xl border-l-[3px] border-red bg-soft px-5 py-[15px] text-[14.5px] leading-[1.55] text-dim [&_b]:text-ink'>
                  {f.assure}
                </div>
              )}
            </div>
            <div className='rv'>{f.visual}</div>
          </div>
        ))}
      </Wrap>
    </Sec>
  );
}

export default function Page() {
  return (
    <>
      <ServiceHero
        className='pt-[170px] max-sm:pt-[130px]'
        name='SEO & GEO'
        eyebrow='SEO & GEO met Blogr. en Pagr.'
        title={
          <>
            Gevonden worden in Google <em>én in AI</em>.
          </>
        }
        sub="Elke maand nieuwe blogs en landingspagina's op basis van echte zoekdata, in jouw tone of voice, zonder dat het jou tijd kost. En je ziet precies wat het oplevert, ook in ChatGPT en Gemini."
        ghost={{ label: 'Bekijk Blogr. en Pagr.', href: '#tools' }}
        ticks={['Geen opstartkosten', 'Maandelijks opzegbaar', 'Jij houdt de regie']}
        visual={<HeroShot />}
      />
      <Marquee
        items={[
          'Blogr.',
          'Pagr.',
          'Zoekdata',
          'Search Console',
          'AI zichtbaarheid',
          'ChatGPT en Gemini',
          'WordPress',
          'Maandrapport',
          "Landingspagina's",
          'Merkprofiel',
        ]}
      />
      <Pain
        className='pb-[110px]'
        eyebrow='Waarom dit nu speelt'
        title='Je klant zoekt niet meer alleen in Google.'
        lead='Steeds meer mensen stellen hun vraag aan ChatGPT of Gemini. Wie daar niet genoemd wordt, bestaat voor die klant niet. Content die Google vertrouwt, is ook de content die AI aanhaalt. Maar er zijn drie problemen.'
        items={[
          {
            q: 'Ik zou echt vaker moeten bloggen, maar ik kom er niet aan toe.',
            text: 'Goede content schrijven kost tijd, elke maand opnieuw. Dat is precies waar het meestal stokt.',
          },
          {
            q: 'Ik heb ChatGPT een blog laten schrijven, maar het klinkt nergens naar ons.',
            text: 'Snelle AI-tekst kopieert wat er al is. Het mist jouw toon, jouw feiten en jouw verhaal.',
          },
          {
            q: 'Geen idee of die blogs eigenlijk iets opleveren.',
            text: 'Zonder meting blijft het gokken. Niemand kijkt naar bezoek, aanvragen of zichtbaarheid in AI.',
          },
        ]}
      />
      <Tools />
      <Steps />
      <Features />
      <Funnel
        className='pt-[110px]!'
        eyebrow='Het fundament'
        title='Eén fundament, twee uitkomsten.'
        body='De content en structuur die Google vertrouwt, is dezelfde die een AI-zoekmachine aanhaalt. Blogr. en Pagr. draaien daarom op drie lagen, van technisch fundament tot zichtbaarheid.'
        layers={[
          {
            tag: 'Laag 1 · Fundament',
            title: 'Een technisch gezonde basis',
            text: 'Snelheid, indexering, mobielvriendelijkheid en structured data. Zonder gezond fundament heeft content geen effect.',
          },
          {
            tag: 'Laag 2 · Autoriteit',
            title: 'Topical content opbouwen',
            text: "Blogs en pagina's rond de vragen die jouw klanten echt stellen, met interne links die laten zien dat je het onderwerp beheerst.",
          },
          {
            tag: 'Laag 3 · Zichtbaarheid',
            title: 'Verschijnen waar mensen zoeken',
            text: 'In Google en in AI-antwoorden van ChatGPT en Gemini, gemeten in het portaal.',
          },
        ]}
      />
      <Sec className='pt-5!'>
        <Wrap>
          <SecHead eyebrow='Starten' title='Zo starten we samen.' />
          <ProcRow
            items={[
              ['Kennismaking en intake', 'We bekijken je website en doelen.'],
              ['Strategie voor Google en AI', 'We bepalen waar de kansen liggen.'],
              ['Merkprofiel bevestigen', 'Jij checkt toon en feiten.'],
              ['Google koppelen', 'Search Console en Analytics aan het portaal.'],
              ['Eerste blog of pagina live', 'Je ziet direct resultaat in het portaal.'],
            ]}
          />
        </Wrap>
      </Sec>
      <Reviews />
      <Sec className='border-t border-line bg-soft'>
        <Wrap>
          <SecHead eyebrow='Veelgestelde vragen' title='Wat je waarschijnlijk wilt weten.' />
          <FaqList items={FAQS} />
        </Wrap>
      </Sec>
      <Logos title='Merken die hun vindbaarheid bij ons neerleggen.' />
      <FinalCta
        eyebrow='Klaar voor de volgende stap?'
        lead='We kijken eerlijk naar je website, laten het portaal zien en vertellen wat we verwachten van Blogr., Pagr. of beide. Volledig vrijblijvend.'
        list={['Reactie binnen 1 werkdag', '15 minuten kennismaking, geen verkooppraatje', 'Eerlijk advies over wat het jou oplevert']}
        messagePlaceholder='Waar wil je mee groeien? Meer vindbaarheid, meer aanvragen, zichtbaar in ChatGPT...'
        interesse='SEO & GEO'
        backdrop={
          <div className='pointer-events-none absolute inset-0 z-0 overflow-hidden' aria-hidden='true'>
            <div className={dots} />
          </div>
        }
      />
    </>
  );
}
