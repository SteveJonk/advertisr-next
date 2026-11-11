import type { Metadata } from 'next';
import { FinalCta } from '@/components/advertisr/FinalCta';
import { Logos } from '@/components/advertisr/Logos';
import { Marquee } from '@/components/advertisr/Marquee';
import { CaseStudy, Crea, Deliverables, Faq, Funnel, Pain, ProcRow, ServiceHero } from '@/components/advertisr/service';
import { Sec, SecHead, Wrap } from '@/components/advertisr/ui';
import { SocialVisual } from '@/components/advertisr/visuals';

export const metadata: Metadata = {
  title: 'Social media organisch',
  description:
    'Van brainstorm en scripting tot contentshoot, Reels-editing en publiceren op Instagram, Facebook, LinkedIn en TikTok. Wij nemen je organische social volledig uit handen.',
};

const PILLARS = [
  ['👋', 'Meet the team', 'De mensen achter het bedrijf in beeld. Verreweg de snelste manier om vertrouwen op te bouwen.'],
  ['🎬', 'Behind the scenes', 'Het werk dat normaal niemand ziet. Maakt je merk menselijk in plaats van een logo.'],
  ['💡', 'Kennis & tips', 'Korte, concrete tips uit jouw vakgebied. Positioneert je als de partij die het snapt.'],
  ['⭐', 'Social proof', 'Klantverhalen, reviews en opgeleverd werk. Het bewijs dat je waarmaakt wat je belooft.'],
  ['📦', 'Aanbod & product', 'Wat je verkoopt, mooi in beeld. Niet elke post, maar wel structureel terugkerend.'],
  ['🎉', 'Actueel & seizoen', 'Events, acties en wat er speelt. Houdt de feed levend en geeft mensen reden om terug te komen.'],
];

const OUTPUT = [
  ['4', 'Reels, inclusief montage en ondertiteling'],
  ['4', 'statische posts of carrousels'],
  ['4', 'kanalen: IG, FB, LinkedIn, TikTok'],
  ['1', 'correctieronde per contentitem'],
];

const MONTH: [string, string][] = [
  ['Contentoverleg', 'Kort afstemmen wat er speelt: acties, events, nieuwe producten of klantverhalen.'],
  ['Shoot of aanlevering', 'Wij komen filmen, of verwerken het materiaal dat jij zelf hebt geschoten.'],
  ['Productie', 'Montage, design en copy. Je krijgt de volledige kalender ter goedkeuring.'],
  ['Publicatie', 'Alles wordt ingepland en gepubliceerd. Jij ziet het vanzelf voorbijkomen.'],
];

function Pillars() {
  return (
    <Sec className='pt-0!'>
      <Wrap>
        <SecHead
          eyebrow='Contentpilaren'
          title='Nooit meer een leeg vel.'
          lead="Vaste thema's die altijd werken. Dit zijn de pilaren waar we meestal mee starten."
        />
        <div className='grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[540px]:grid-cols-1'>
          {PILLARS.map(([icon, title, text]) => (
            <div
              key={title}
              className='rv rounded-2xl border border-line bg-white px-[22px] py-[26px] shadow-[0_14px_30px_-26px_rgba(14,14,18,.3)] hover:-translate-y-1 hover:border-red/45 hover:shadow-[0_24px_44px_-28px_rgba(255,57,81,.4)]'
            >
              <div className='mb-3.5 flex size-10 items-center justify-center rounded-[11px] border border-red/26 bg-red-tint text-lg'>
                {icon}
              </div>
              <h3 className='mb-2 text-[17px] tracking-[-.02em]'>{title}</h3>
              <p className='text-[13.5px] leading-[1.55] text-dim'>{text}</p>
            </div>
          ))}
        </div>
      </Wrap>
    </Sec>
  );
}

function Output() {
  return (
    <Sec className='pt-0!'>
      <Wrap>
        <SecHead
          eyebrow='Wat je per maand krijgt'
          title='Concreet, geen vage inspanningsverplichting.'
          lead='Een gebruikelijk maandpakket ziet er zo uit. De exacte aantallen stemmen we af op jouw situatie.'
        />
        <div className='rv grid grid-cols-4 gap-px overflow-hidden rounded-[18px] border border-line bg-line shadow-[0_20px_40px_-32px_rgba(14,14,18,.3)] max-[900px]:grid-cols-2 max-mob:grid-cols-1'>
          {OUTPUT.map(([n, l]) => (
            <div key={l} className='bg-white px-5 py-7 text-center'>
              <div className='font-display text-[clamp(24px,2.8vw,34px)] font-bold tracking-[-.03em] text-ink'>{n}</div>
              <div className='mt-1.5 text-xs leading-[1.4] text-dim'>{l}</div>
            </div>
          ))}
        </div>
      </Wrap>
    </Sec>
  );
}

function Month() {
  return (
    <Sec className='pt-0!'>
      <Wrap>
        <SecHead eyebrow='Hoe een maand eruitziet' title='Een vast ritme waar je op kunt rekenen.' />
        <ProcRow items={MONTH} />
      </Wrap>
    </Sec>
  );
}

export default function Page() {
  return (
    <>
      <ServiceHero
        name={'Social Media Organisch'}
        eyebrow={'Social Media Organisch, Van brainstorm tot post'}
        title={
          <>
            Een feed die <em>klopt</em>, zonder dat het jouw tijd kost.
          </>
        }
        sub={
          'Content bedenken, filmen, monteren, schrijven en publiceren. Wij nemen het hele traject over, zodat jouw kanalen er elke week uitzien alsof er een heel team achter zit. Want dat is ook zo.'
        }
        ghost={{ label: 'Bekijk onze aanpak', href: '#aanpak' }}
        ticks={['Geen opstartkosten', 'Maandelijks opzegbaar', 'Direct contact met je marketeer']}
        visual={<SocialVisual />}
      />
      <Marquee
        items={[
          'Contentstrategie',
          'Scripting',
          'Contentshoots',
          'Reels editing',
          'Carrousels',
          'Copywriting',
          'Contentkalender',
          'Publicatie & beheer',
        ]}
      />
      <Pain
        eyebrow={'Herken je dit?'}
        title={'Social media is het eerste dat blijft liggen.'}
        lead={'Dit zijn de zinnen die we het vaakst horen in een eerste gesprek.'}
        items={[
          {
            q: 'We posten als we eraan denken, en dus eigenlijk nooit.',
            text: 'Consistentie is het hele punt bij organisch. Met een vaste kalender en vooraf geproduceerde content loopt het door, ook in je drukste weken.',
          },
          {
            q: 'We hebben geen idee wát we zouden moeten posten.',
            text: "Daarom beginnen we met contentpilaren: vaste thema's die altijd werken voor jouw bedrijf. Daarna is het nooit meer een leeg vel.",
          },
          {
            q: 'Onze ads lopen prima, maar als mensen ons profiel bezoeken schrikken ze.',
            text: 'Advertenties brengen mensen binnen, je feed bepaalt of ze blijven. Een dode of rommelige pagina maakt juist je betaalde campagnes duurder.',
          },
        ]}
        bridge={{
          img: '/images/advertisr/jilles-kaptein.jpg',
          alt: 'Jilles Kaptein, content en video bij Advertisr',
          line: (
            <>
              Uit één draaidag halen we genoeg materiaal voor een <em>hele maand content</em>. Het zit hem niet in meer filmen, maar in
              slimmer filmen.
            </>
          ),
          sig: 'Jilles Kaptein, content & video bij Advertisr.',
        }}
      />
      <Funnel
        eyebrow={'De aanpak'}
        title={'Van losse posts naar een merk dat je herkent.'}
        body={
          'Organisch werkt alleen als het structureel is. Wij bouwen dat in drie lagen op, van een vastgelegde stijl tot een kalender die maand na maand vanzelf doorloopt.'
        }
        ghost={'Wat betekent dit voor jouw kanalen? →'}
        layers={[
          {
            tag: 'Laag 1 · Fundament',
            title: 'Stijl & contentpilaren',
            text: 'Brand guide, tone-of-voice, vaste rubrieken en templates voor Reels, carrousels en statische posts. Alles wat daarna gemaakt wordt, voelt als één merk.',
            kpi: (
              <>
                Sturen op: <b>herkenbaarheid, consistentie</b>
              </>
            ),
          },
          {
            tag: 'Laag 2 · Productie',
            title: 'Shoots, montage & copy',
            text: 'We filmen op locatie, monteren de Reels, ontwerpen de posts en schrijven de teksten, met aparte copy per platform waar dat nodig is.',
            kpi: (
              <>
                Sturen op: <b>contentvolume, kwaliteit per item</b>
              </>
            ),
          },
          {
            tag: 'Laag 3 · Ritme',
            title: 'Kalender & publicatie',
            text: 'Een vaste maandkalender, ingepland en gepubliceerd op Instagram, Facebook, LinkedIn en TikTok. Jij hoeft alleen nog goedkeuring te geven.',
            kpi: (
              <>
                Sturen op: <b>bereik, volgersgroei, engagement</b>
              </>
            ),
          },
        ]}
      />
      <Deliverables
        eyebrow={'Wat wij doen'}
        title={'Het hele traject, van idee tot gepubliceerde post.'}
        lead={'Jij levert toegang en input. De rest ligt bij ons. Lees het als een menukaart, niet als een checklist.'}
        photo={{
          src: '/images/advertisr/het-team-van-advertisr-bouwt-workflows-o.jpg',
          alt: 'Het team van Advertisr monteert content',
          t: 'Eén team, geen doorgeefluik',
          s: 'Strategie, camera, montage en copy op dezelfde vloer, geen losse freelancer per onderdeel.',
        }}
        rows={[
          {
            title: 'Strategie & brainstorm',
            text: 'We bepalen samen de contentpilaren, rubrieken en tone-of-voice die bij jouw merk en doelgroep passen.',
          },
          {
            title: 'Scripting & shotlists',
            text: 'Voor elke shoot leveren we concrete scripts en shotlists aan, zodat een draaidag niets aan toeval overlaat.',
          },
          {
            title: 'Contentshoots op locatie',
            text: 'Wij komen filmen bij jou op de zaak. Uit één dagdeel halen we materiaal voor weken aan content.',
          },
          { title: 'Reels editing', text: 'Montage, ondertiteling, hooks, muziek en pacing, afgestemd op wat per platform werkt.' },
          {
            title: 'Carrousels & statische posts',
            text: 'Ontworpen binnen jouw huisstijl, met vaste templates zodat alles herkenbaar blijft.',
          },
          {
            title: 'Copywriting per platform',
            text: 'Captions voor Instagram en Facebook, en aparte, zakelijkere copy voor LinkedIn. Geen copy-paste over kanalen heen.',
          },
          {
            title: 'Contentkalender',
            text: 'Een maandplanning die je vooraf inziet en goedkeurt, zodat je nooit verrast wordt door wat er live gaat.',
          },
          {
            title: 'Inplannen & publiceren',
            text: 'Wij zetten alles klaar en publiceren op Instagram, Facebook, LinkedIn en TikTok, inclusief basisbeheer van de kanalen.',
          },
        ]}
        band={{
          title: 'Hoeveel uur per week kost jouw content nu?',
          sub: 'In je gratis groeiplan zie je hoe wij de hele feed van je overnemen.',
        }}
      />
      <Pillars />
      <Output />
      <Month />
      <Crea
        img={'/images/advertisr/het-team-van-advertisr-op-kantoor-in-haa.jpg'}
        alt={'Het team van Advertisr tijdens een contentoverleg'}
        badge={{ t: 'Shoot inbegrepen', s: 'Wij komen naar jou toe' }}
        eyebrow={'Content'}
        title={'Eén draaidag, een maand aan content.'}
        paras={[
          'We filmen gericht, met een shotlist vooraf, zodat we uit één dagdeel genoeg materiaal halen voor meerdere Reels, losse snippets en beeld voor je statische posts.',
          'De sterkste content zetten we daarna ook in als advertentie. Zo versterken je organische kanalen en je betaalde campagnes elkaar in plaats van los van elkaar te lopen.',
        ]}
        chips={['Instagram', 'Facebook', 'LinkedIn', 'TikTok', 'Reels', 'Carrousels']}
      />
      <CaseStudy
        eyebrow={'Bewijs'}
        title={'We draaien het ook voor onszelf.'}
        img={'/images/advertisr/het-team-van-advertisr-bouwt-automatiser.jpg'}
        alt={'Het team van Advertisr op kantoor in Haarlem'}
        cat={'Advertisr, eigen kanalen'}
        name={'Hoe wij het zelf aanpakken'}
        text={
          'Vaste contentpilaren, een maandkalender en één draaidag per maand. Dezelfde werkwijze die we voor klanten inrichten, zodat we weten wat werkt voordat we het adviseren.'
        }
        stats={[
          ['5.0', 'score op Google reviews'],
          ['4', 'kanalen die we zelf draaien'],
          ['1', 'draaidag per maand'],
        ]}
      />
      <Faq
        eyebrow={'Veelgestelde vragen'}
        title={'Wat je waarschijnlijk wilt weten.'}
        items={[
          {
            q: 'Wat kost social media organisch bij Advertisr?',
            a: 'Dat hangt af van het aantal posts, Reels en kanalen. In je groeiplan krijg je een concreet voorstel met een vaste maandfee, zodat je vooraf precies weet waar je aan toe bent.',
          },
          {
            q: 'Moeten wij zelf content aanleveren?',
            a: 'Dat mag, maar het hoeft niet. Wij komen periodiek filmen op locatie. Heb je zelf al beeldmateriaal, dan verwerken we dat net zo goed.',
          },
          {
            q: 'Komen jullie ook echt filmen, of alleen monteren?',
            a: 'We komen naar je toe. Een contentshoot op locatie wordt doorgaans per dagdeel afgerekend, zodat je flexibel blijft in hoe vaak we draaien.',
          },
          {
            q: 'Kunnen jullie ook alleen het fundament neerzetten?',
            a: 'Ja. Sommige klanten willen de brand guide, contentpilaren, templates en kalender van ons, en voeren het daarna intern zelf uit. Dat kan prima als losse opdracht.',
          },
          {
            q: 'Zien wij de content voordat die live gaat?',
            a: 'Altijd. Je krijgt de volledige maandkalender ter goedkeuring, inclusief één correctieronde per contentitem.',
          },
          {
            q: 'Werkt dit samen met onze advertenties?',
            a: 'Juist daar zit veel winst. Organische content die goed presteert, schalen we op als advertentie. En een verzorgd profiel maakt je betaalde campagnes aantoonbaar effectiever.',
          },
          {
            q: 'Zit ik ergens aan vast?',
            a: 'Nee. We werken bewust zonder langlopende contracten. De samenwerking is maandelijks opzegbaar met een opzegtermijn van één kalendermaand.',
          },
        ]}
      />
      <Logos title={'Merken die hun kanalen bij ons neerleggen.'} note={'Van horeca tot makelaardij.'} />
      <FinalCta
        eyebrow={'Klaar voor kanalen die wél lopen?'}
        title={'Ontvang je gratis groeiplan.'}
        lead={'Wij bellen je, bekijken je huidige kanalen en sturen een concreet plan met contentpilaren en aanpak. Volledig vrijblijvend.'}
        list={['Reactie binnen 1 werkdag', '15 minuten kennismaking, geen verkooppraatje', 'Concreet plan, geen vage belofte']}
        messagePlaceholder={'Waar loopt het nu vast? Tijd, ideeën, consistentie...'}
        interesse={'Social Media Organisch'}
      />
    </>
  );
}
