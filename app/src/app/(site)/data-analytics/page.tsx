import type { Metadata } from 'next';
import { FinalCta } from '@/components/advertisr/FinalCta';
import { Logos } from '@/components/advertisr/Logos';
import { Marquee } from '@/components/advertisr/Marquee';
import { CaseStudy, Crea, Deliverables, Faq, Funnel, Pain, ServiceHero } from '@/components/advertisr/service';
import { DashVisual } from '@/components/advertisr/visuals';

export const metadata: Metadata = {
  title: 'Data & analytics',
  description:
    'Een dashboard vol grafieken zegt niets als niemand uitlegt wat erin staat. Wij zetten tracking, dashboards en rapportage zo neer dat je precies weet welke euro waar naartoe gaat, en wat hij oplevert.',
};

export default function Page() {
  return (
    <>
      <ServiceHero
        name={'Data & analytics'}
        eyebrow={'Data & Analytics, Sturen op cijfers die kloppen'}
        title={
          <>
            Cijfers die je iets <em>vertellen</em>, geen ruis.
          </>
        }
        sub={
          'Een dashboard vol grafieken zegt niets als niemand uitlegt wat erin staat. Wij zetten tracking, dashboards en rapportage zo neer dat je precies weet welke euro waar naartoe gaat, en wat hij oplevert.'
        }
        ghost={{ label: 'Bekijk onze aanpak', href: '#aanpak' }}
        ticks={['Geen opstartkosten', 'Maandelijks opzegbaar', 'Direct contact met je marketeer']}
        visual={<DashVisual />}
      />
      <Marquee
        items={[
          'Conversietracking',
          'Dashboards',
          'GA4',
          'Attributiemodellen',
          'Rapportage',
          'Server-side tracking',
          'KPI-monitoring',
          'Data-visualisatie',
        ]}
      />
      <Pain
        eyebrow={'Herken je dit?'}
        title={'Je hebt cijfers. Overzicht heb je niet.'}
        lead={'Dit zijn de zinnen die we het vaakst horen in een eerste gesprek.'}
        items={[
          {
            q: 'We hebben Analytics wel geïnstalleerd, maar niemand kijkt ernaar.',
            text: 'Een tool die niemand opent, levert niks op. Wij bouwen een dashboard dat je daadwerkelijk maandelijks doorneemt, met uitleg erbij.',
          },
          {
            q: 'We weten niet welke advertentie echt een klant oplevert.',
            text: 'Zonder kloppende attributie optimaliseer je op de verkeerde signalen. Wij richten de meting zo in dat je ziet welk kanaal daadwerkelijk bijdraagt, niet alleen welk kanaal de laatste klik pakte.',
          },
          {
            q: 'We sturen eigenlijk op gevoel, niet op cijfers.',
            text: 'Dat werkt, tot het misgaat. Met een kloppend dashboard zie je op tijd of een campagne omslaat, in plaats van dat achteraf te ontdekken.',
          },
        ]}
        bridge={{
          img: '/images/advertisr/marc-jonk-oprichter-van-advertisr.jpg',
          alt: 'Marc Jonk, oprichter van Advertisr',
          line: (
            <>
              Een dashboard is geen doel op zich. Het doel is dat jij binnen <em>dertig seconden</em> weet of het goed gaat, en waarom.
            </>
          ),
          sig: 'Marc Jonk, oprichter Advertisr.',
        }}
      />
      <Funnel
        eyebrow={'De aanpak'}
        title={'Van losse cijfers naar overzicht.'}
        body={
          'De meeste bedrijven hebben data, maar geen overzicht. Wij bouwen dat in drie lagen op, van een technisch kloppend fundament tot een gesprek waarin je precies weet waarom een cijfer omhoog of omlaag ging.'
        }
        ghost={'Wat betekent dit voor jouw kanalen? →'}
        layers={[
          {
            tag: 'Laag 1 · Fundament',
            title: 'Tracking die klopt',
            text: 'GA4, server-side tracking en conversiemeting per kanaal correct ingericht, zodat elk cijfer daarna ook echt ergens op gebaseerd is.',
            kpi: (
              <>
                Sturen op: <b>datakwaliteit, dekking van conversiepunten</b>
              </>
            ),
          },
          {
            tag: 'Laag 2 · Overzicht',
            title: 'Eén dashboard, alle kanalen',
            text: 'Meta, Google, je website en mail bij elkaar in één overzicht, zodat je niet meer tussen vijf tabbladen hoeft te schakelen.',
            kpi: (
              <>
                Sturen op: <b>volledigheid, actualiteit van cijfers</b>
              </>
            ),
          },
          {
            tag: 'Laag 3 · Sturing',
            title: 'Duiding, niet alleen data',
            text: 'Een maandelijks gesprek waarin we uitleggen wat er gebeurde, waarom, en welk besluit daaruit volgt.',
            kpi: (
              <>
                Sturen op: <b>besluiten die je erop baseert</b>
              </>
            ),
          },
        ]}
      />
      <Deliverables
        eyebrow={'Wat wij doen'}
        title={'Alles wat er nodig is om te kunnen sturen.'}
        lead={
          'Geen losse rapportjes die je zelf moet interpreteren. Wij pakken de volledige keten op, lees het als een menukaart, niet als een checklist.'
        }
        photo={{
          src: '/images/advertisr/het-team-van-advertisr-bouwt-automatiser.jpg',
          alt: 'Het team van Advertisr werkt aan dashboards en tracking',
          t: 'Eén team, geen doorgeefluik',
          s: 'Strategie, techniek en rapportage op dezelfde vloer, geen losse data-consultant die eenmalig langskomt.',
        }}
        rows={[
          {
            title: 'Tracking-audit',
            text: 'We controleren of conversies, events en kanalen correct worden gemeten, en waar data nu wegvalt of dubbel wordt geteld.',
          },
          {
            title: 'GA4 & server-side tracking',
            text: 'Een technisch fundament dat klopt, ook nu browsers en cookiebeperkingen metingen steeds lastiger maken.',
          },
          {
            title: 'Eén centraal dashboard',
            text: 'Alle kanalen, van Meta en Google tot je website en mail, samen in één overzicht dat je zelf ook begrijpt.',
          },
          {
            title: 'Attributie & kanaalinzicht',
            text: 'Zien welk kanaal daadwerkelijk aan een klant bijdraagt, niet alleen welk kanaal toevallig de laatste klik pakte.',
          },
          {
            title: 'Maandelijkse rapportage',
            text: 'Cijfers mét toelichting in een gesprek, in plaats van een pdf die je zelf moet doorspitten.',
          },
          {
            title: 'Doorontwikkeling',
            text: 'Dashboards en meetpunten groeien mee zodra er een nieuw kanaal, nieuwe doelstelling of nieuwe campagne bijkomt.',
          },
        ]}
        band={{
          title: 'Benieuwd welke cijfers je nu mist?',
          sub: 'In je gratis groeiplan zie je precies welke tracking en dashboards het meeste inzicht opleveren.',
        }}
      />
      <Crea
        img={'/images/advertisr/het-team-van-advertisr-bouwt-workflows-o.jpg'}
        alt={'Het team van Advertisr bespreekt rapportages'}
        badge={{ t: 'Rapportage zit erbij', s: 'Geen aparte data-factuur achteraf' }}
        eyebrow={'Rapportage'}
        title={'Cijfers die je zelf ook snapt.'}
        paras={[
          'Een rapport vol vaktermen en vanity metrics helpt niemand. Wij vertalen data naar wat het voor jouw bedrijf betekent: meer aanvragen, lagere kosten per klant, of een kanaal dat eindelijk uit de rode cijfers komt.',
          'We bouwen het dashboard in de tools die jij al gebruikt of kunt gebruiken, en lichten het elke maand persoonlijk toe.',
        ]}
        chips={['GA4', 'Server-side tracking', 'Dashboards', 'Attributiemodellen', 'KPI-rapportage', 'Kanaaloverzicht']}
      />
      <CaseStudy
        eyebrow={'Bewijs'}
        title={'We meten het ook voor onszelf.'}
        img={'/images/advertisr/het-team-van-advertisr-op-kantoor-in-haa.jpg'}
        alt={'Het team van Advertisr op kantoor in Haarlem'}
        cat={'Advertisr, eigen dashboards'}
        name={'Hoe wij het zelf inrichten'}
        text={
          'We volgen onze eigen leads, kanalen en campagnes in hetzelfde soort dashboard dat we voor klanten bouwen, zodat we weten wat werkt voordat we het adviseren.'
        }
        stats={[
          ['5.0', 'score op Google reviews'],
          ['1', 'dashboard voor alle kanalen'],
          ['0', 'losse spreadsheets per platform'],
        ]}
      />
      <Faq
        eyebrow={'Veelgestelde vragen'}
        title={'Wat je waarschijnlijk wilt weten.'}
        items={[
          {
            q: 'Wat kost Data & Analytics bij Advertisr?',
            a: 'Dat hangt af van het aantal kanalen dat we moeten koppelen en hoe uitgebreid het dashboard moet zijn. In je groeiplan krijg je een concreet voorstel, met een eenmalige inrichtingsprijs en een vast bedrag voor doorlopend beheer en rapportage.',
          },
          {
            q: 'Moet ik overstappen op nieuwe tools?',
            a: 'Meestal niet. We werken met de platforms die je al gebruikt, zoals Google Analytics 4, en bouwen daaromheen. Alleen als de basis echt tekortschiet, adviseren we een verandering, en dat bespreken we altijd eerst met je.',
          },
          {
            q: 'Wat is het verschil met gewoon zelf Analytics gebruiken?',
            a: 'Analytics registreert data. Wij zorgen dat die data klopt, brengen alle kanalen samen in één overzicht, en leggen elke maand uit wat het betekent. Dat laatste is waar de meeste bedrijven vastlopen.',
          },
          {
            q: 'Kunnen jullie ook rapporteren over kanalen die niet bij jullie lopen?',
            a: 'Ja. We nemen graag alle relevante kanalen mee in het dashboard, ook als wij die zelf niet beheren, zodat je één compleet overzicht hebt in plaats van losse rapportages per bureau.',
          },
          {
            q: 'Wat gebeurt er met mijn data?',
            a: 'Je data en accounts blijven van jou. Wij krijgen beheerrechten om de tracking en dashboards in te richten en te onderhouden, maar de eigendom verandert niet.',
          },
          {
            q: 'Hoe vaak krijg ik rapportage?',
            a: 'Standaard maandelijks, met een persoonlijke toelichting. Heb je liever een andere frequentie, dan stemmen we dat af op wat voor jouw bedrijf werkt.',
          },
          {
            q: 'Zit ik ergens aan vast?',
            a: 'Nee. We werken bewust zonder langlopende contracten. De samenwerking is maandelijks opzegbaar met een opzegtermijn van één kalendermaand.',
          },
        ]}
      />
      <Logos title={'Merken die hun cijfers bij ons neerleggen.'} note={'Van horeca tot makelaardij.'} />
      <FinalCta
        eyebrow={'Klaar om te sturen op cijfers?'}
        title={'Ontvang je gratis groeiplan.'}
        lead={
          'Wij bellen je, brengen je huidige tracking en rapportage in kaart en sturen een concreet plan met kansen en aanpak. Volledig vrijblijvend.'
        }
        list={['Reactie binnen 1 werkdag', '15 minuten kennismaking, geen verkooppraatje', 'Concreet plan, geen vage belofte']}
        messagePlaceholder={'Waar wil je meer grip op krijgen? Tracking, rapportage, overzicht tussen kanalen...'}
        interesse={'Data & Analytics'}
      />
    </>
  );
}
