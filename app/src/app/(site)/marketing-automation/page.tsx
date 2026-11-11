import type { Metadata } from 'next';
import { FinalCta } from '@/components/advertisr/FinalCta';
import { Logos } from '@/components/advertisr/Logos';
import { Marquee } from '@/components/advertisr/Marquee';
import { CaseStudy, Crea, Deliverables, Faq, Funnel, Pain, ServiceHero } from '@/components/advertisr/service';
import { JourneyVisual } from '@/components/advertisr/visuals';

export const metadata: Metadata = {
  title: 'Marketing automation',
  description:
    'Een lead die je al binnen hebt is duurder om te missen dan om op te volgen. Wij bouwen e-mailflows, CRM-koppelingen en segmentatie die automatisch het juiste bericht op het juiste moment sturen.',
};

export default function Page() {
  return (
    <>
      <ServiceHero
        name={'Marketing automation'}
        eyebrow={'Marketing Automation, Meer rendement uit leads die je al hebt'}
        title={
          <>
            Elke lead krijgt <em>de opvolging</em> die hij verdient.
          </>
        }
        sub={
          'Een lead die je al binnen hebt is duurder om te missen dan om op te volgen. Wij bouwen e-mailflows, CRM-koppelingen en segmentatie die automatisch het juiste bericht op het juiste moment sturen.'
        }
        ghost={{ label: 'Bekijk onze aanpak', href: '#aanpak' }}
        ticks={['Geen opstartkosten', 'Maandelijks opzegbaar', 'Direct contact met je marketeer']}
        visual={<JourneyVisual />}
      />
      <Marquee
        items={[
          'E-mailflows',
          'Segmentatie',
          'CRM-koppelingen',
          'Leadscoring',
          'Automatische opvolging',
          'Nieuwsbriefbeheer',
          'Welkomstflows',
          'Retentie',
        ]}
      />
      <Pain
        eyebrow={'Herken je dit?'}
        title={'Je haalt leads binnen. De opvolging gebeurt niet.'}
        lead={'Dit zijn de zinnen die we het vaakst horen in een eerste gesprek.'}
        items={[
          {
            q: 'We hebben leads, maar niemand volgt ze structureel op.',
            text: 'Een lead die binnenkomt en daarna stilvalt, is weggegooid budget. Wij zorgen dat er altijd automatisch een volgende stap volgt.',
          },
          {
            q: 'Onze mailinglijst groeit, maar we doen er niks structureels mee.',
            text: 'Een lijst zonder plan is een gemiste kans. Wij bouwen een vast ritme, zodat je lijst een kanaal wordt in plaats van een archief.',
          },
          {
            q: 'We versturen wel eens een nieuwsbrief, maar zonder plan.',
            text: 'Losse, ad-hoc mails leveren zelden rendement op. Wij bouwen een vaste contentkalender en flows die logisch op elkaar aansluiten, van eerste kennismaking tot terugkerende klant.',
          },
        ]}
        bridge={{
          img: '/images/advertisr/marc-jonk-oprichter-van-advertisr.jpg',
          alt: 'Marc Jonk, oprichter van Advertisr',
          line: (
            <>
              Een goede flow voelt niet als automatisering. Het voelt alsof iemand op het <em>juiste moment</em> aan je dacht.
            </>
          ),
          sig: 'Marc Jonk, oprichter Advertisr.',
        }}
      />
      <Funnel
        eyebrow={'De aanpak'}
        title={'Van losse leads naar een lopend systeem.'}
        body={
          'De meeste bedrijven hebben leads, maar geen systeem eromheen. Wij bouwen dat in drie lagen op, van een technisch kloppende koppeling tot flows die dag en nacht doorlopen zonder dat iemand op een knop hoeft te drukken.'
        }
        ghost={'Wat betekent dit voor jouw leads? →'}
        layers={[
          {
            tag: 'Laag 1 · Fundament',
            title: 'Systemen die met elkaar praten',
            text: 'CRM en mailtool aan elkaar gekoppeld, zodat leaddata automatisch synchroniseert en nergens dubbel hoeft te worden ingevoerd.',
            kpi: (
              <>
                Sturen op: <b>datakwaliteit, koppelingsstabiliteit</b>
              </>
            ),
          },
          {
            tag: 'Laag 2 · Segmentatie',
            title: 'Leads indelen op gedrag',
            text: 'Op basis van interesse, fase in het proces en interactie weten we wie warm is en wie nog moet worden overtuigd.',
            kpi: (
              <>
                Sturen op: <b>relevantie van elk bericht</b>
              </>
            ),
          },
          {
            tag: 'Laag 3 · Flows',
            title: 'Automatisering die zelf draait',
            text: 'Geautomatiseerde e-mailreeksen die op het juiste moment het juiste bericht sturen, zonder dat iemand er handmatig naar hoeft om te kijken.',
            kpi: (
              <>
                Sturen op: <b>open- en klikpercentages, conversies</b>
              </>
            ),
          },
        ]}
      />
      <Deliverables
        eyebrow={'Wat wij doen'}
        title={'Alles wat nodig is om leads warm te houden.'}
        lead={'Geen losse mail hier en daar. Wij pakken de volledige keten op, lees het als een menukaart, niet als een checklist.'}
        photo={{
          src: '/images/advertisr/het-team-van-advertisr-bouwt-workflows-o.jpg',
          alt: 'Het team van Advertisr bouwt e-mailflows en koppelingen',
          t: 'Eén team, geen doorgeefluik',
          s: 'Strategie, techniek en copywriting op dezelfde vloer, geen losse tool die je zelf moet leren bedienen.',
        }}
        rows={[
          {
            title: 'CRM & mailtool koppelen',
            text: 'Leaddata synchroniseert automatisch tussen de systemen die je al gebruikt, geen dubbele invoer meer.',
          },
          {
            title: 'Segmentatie opzetten',
            text: 'Leads indelen op gedrag, interesse en fase in het proces, zodat elk bericht relevant blijft.',
          },
          {
            title: 'Welkomst- en opvolgflows',
            text: 'Automatische reeksen die direct na een aanmelding of aanvraag starten, zonder vertraging.',
          },
          {
            title: 'Leadscoring',
            text: 'Inzicht in wie warm is en aandacht van sales verdient, zodat niemand tijd verspilt aan koude leads.',
          },
          {
            title: 'Nieuwsbrief & retentie',
            text: 'Vaste content naar bestaande klanten en leads die nog niet klaar zijn om te kopen, zodat je top of mind blijft.',
          },
          {
            title: 'Rapportage & optimalisatie',
            text: 'Open- en klikpercentages, en precies zien waar mensen afhaken, zodat flows steeds beter worden.',
          },
        ]}
        band={{
          title: 'Benieuwd waar jouw leads nu blijven liggen?',
          sub: 'In je gratis groeiplan zie je precies welke flows en koppelingen het meeste opleveren.',
        }}
      />
      <Crea
        img={'/images/advertisr/het-team-van-advertisr-op-kantoor-in-haa.jpg'}
        alt={'Het team van Advertisr bespreekt een e-mailflow'}
        badge={{ t: 'Op maat gebouwd', s: 'In de tool die jij al gebruikt' }}
        eyebrow={'Flows'}
        title={'Elke lead doorloopt dezelfde zorgvuldige route.'}
        paras={[
          'We bouwen flows in de tools die je al gebruikt, of adviseren een overstap als dat verstandig is. Geen massale bulkmail, maar berichten die aansluiten op wat iemand al heeft laten zien.',
          'Zo wordt automatisering geen kille machine, maar juist het middel om elke lead persoonlijker te benaderen dan handmatig ooit zou lukken.',
        ]}
        chips={['E-mailflows', 'Segmentatie', 'CRM-koppelingen', 'Leadscoring', 'Nieuwsbriefbeheer', 'Retentieflows']}
      />
      <CaseStudy
        eyebrow={'Bewijs'}
        title={'We laten zelf ook geen lead liggen.'}
        img={'/images/advertisr/het-team-van-advertisr-bouwt-automatiser.jpg'}
        alt={'Het team van Advertisr op kantoor in Haarlem'}
        cat={'Advertisr, eigen opvolging'}
        name={'Hoe wij het zelf inrichten'}
        text={
          'Elke aanvraag via ons contactformulier triggert automatisch een opvolgmoment, zodat niemand tussen wal en schip valt, ook niet in een drukke week.'
        }
        stats={[
          ['5.0', 'score op Google reviews'],
          ['1', 'werkdag reactietijd'],
          ['0', 'leads die stil blijven liggen'],
        ]}
      />
      <Faq
        eyebrow={'Veelgestelde vragen'}
        title={'Wat je waarschijnlijk wilt weten.'}
        items={[
          {
            q: 'Wat kost Marketing Automation bij Advertisr?',
            a: 'Dat hangt af van het aantal flows en koppelingen dat nodig is. In je groeiplan krijg je een concreet voorstel, met een eenmalige inrichting en een vast bedrag voor doorlopend beheer en optimalisatie.',
          },
          {
            q: 'Moet ik een nieuw CRM of mailtool aanschaffen?',
            a: 'Meestal niet. We bouwen het liefst in de tools die je al gebruikt. Alleen als de huidige tool echt tekortschiet voor wat je wilt bereiken, adviseren we een overstap, en dat bespreken we altijd eerst.',
          },
          {
            q: 'Werkt dit samen met Meta Ads of Google Ads?',
            a: 'Ja, juist daar zit vaak de meeste winst. Leads uit advertenties stromen automatisch de juiste flow in, zodat je meer rendement haalt uit budget dat je al besteedde.',
          },
          {
            q: 'Wat gebeurt er als iemand zich afmeldt?',
            a: 'Die persoon stroomt automatisch uit alle flows en ontvangt geen berichten meer. We houden ons hierbij aan de geldende regels rondom toestemming en afmelden.',
          },
          {
            q: 'Hoe persoonlijk voelen de mails?',
            a: 'Dat is het hele punt. Door segmentatie en goede timing voelt een geautomatiseerde mail juist persoonlijker aan dan een generieke nieuwsbrief die iedereen tegelijk krijgt.',
          },
          {
            q: 'Hoe snel staat de eerste flow live?',
            a: 'Een eerste welkomst- of opvolgflow staat meestal binnen één tot twee weken live, afhankelijk van de koppelingen die nodig zijn.',
          },
          {
            q: 'Zit ik ergens aan vast?',
            a: 'Nee. We werken bewust zonder langlopende contracten. De samenwerking is maandelijks opzegbaar met een opzegtermijn van één kalendermaand.',
          },
        ]}
      />
      <Logos title={'Merken die hun leads bij ons neerleggen.'} note={'Van horeca tot makelaardij.'} />
      <FinalCta
        eyebrow={'Klaar om leads niet meer te laten liggen?'}
        title={'Ontvang je gratis groeiplan.'}
        lead={
          'Wij bellen je, brengen je huidige leadopvolging in kaart en sturen een concreet plan met kansen en aanpak. Volledig vrijblijvend.'
        }
        list={['Reactie binnen 1 werkdag', '15 minuten kennismaking, geen verkooppraatje', 'Concreet plan, geen vage belofte']}
        messagePlaceholder={'Waar loopt de opvolging van leads nu vast?'}
        interesse={'Marketing Automation'}
      />
    </>
  );
}
