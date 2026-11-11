import type { Metadata } from 'next';
import { FinalCta } from '@/components/advertisr/FinalCta';
import { Logos } from '@/components/advertisr/Logos';
import { Marquee } from '@/components/advertisr/Marquee';
import { CaseStudy, Crea, Deliverables, Faq, Funnel, Pain, ServiceHero } from '@/components/advertisr/service';
import { FlowVisual } from '@/components/advertisr/visuals';

export const metadata: Metadata = {
  title: 'AI Agent Workflows',
  description:
    'Alles wat zich herhaalt, kunnen we automatiseren: leadopvolging, rapportage, content, interne processen. Wij bouwen de workflow op maat rond jouw situatie, met de tools en AI die daar het beste bij passen.',
};

export default function Page() {
  return (
    <>
      <ServiceHero
        name={'AI Agent Workflows'}
        eyebrow={'AI Agent Workflows, Slimme automatisering'}
        title={
          <>
            Werk dat doorgaat, <em>ook als jij slaapt</em>.
          </>
        }
        sub={
          'Alles wat zich herhaalt, kunnen we automatiseren: leadopvolging, rapportage, content, interne processen. Wij bouwen de workflow op maat rond jouw situatie, met de tools en AI die daar het beste bij passen.'
        }
        ghost={{ label: 'Bekijk onze aanpak', href: '#aanpak' }}
        ticks={['Geen opstartkosten', 'Maandelijks opzegbaar', 'Direct contact met je marketeer']}
        visual={<FlowVisual />}
      />
      <Marquee
        items={[
          'Leadopvolging',
          'CRM-koppelingen',
          'E-mailflows',
          'Interne processen',
          'Contentautomatisering',
          'Data-sync',
          'Op maat gebouwd',
          'Dashboards & rapportage',
        ]}
      />
      <Pain
        eyebrow={'Herken je dit?'}
        title={'Je hebt de tools. Ze praten alleen niet met elkaar.'}
        lead={'Dit zijn de zinnen die we het vaakst horen in een eerste gesprek.'}
        items={[
          {
            q: 'We typen dezelfde informatie drie keer over in drie systemen.',
            text: 'Een lead komt binnen via Meta, wordt met de hand overgetypt in het CRM en dan nog eens in Mailchimp. Wij knopen die systemen aan elkaar, zodat het één keer goed gebeurt en daarna vanzelf gaat.',
          },
          {
            q: 'Nieuwe klanten of leden doorlopen steeds weer dezelfde handmatige stappen.',
            text: 'Onboarding, welkomstmails, het klaarzetten van toegang: werk dat exact hetzelfde is bij iedereen, maar toch iedere keer met de hand gebeurt. Wij zetten dat om in een workflow die vanzelf loopt.',
          },
          {
            q: 'We hebben wel losse tools, maar niemand die ze aan elkaar knoopt.',
            text: 'Een CRM, een mailtool, een advertentieaccount en een spreadsheet, allemaal los van elkaar. Wij bouwen de verbindingen ertussen, zodat data maar één keer wordt ingevoerd.',
          },
        ]}
        bridge={{
          img: '/images/advertisr/marc-jonk-oprichter-van-advertisr.jpg',
          alt: 'Marc Jonk, oprichter van Advertisr',
          line: (
            <>
              Automatisering is geen luxe voor grote bedrijven. Het is het verschil tussen een lead die <em>binnen vijf minuten</em> een
              reactie krijgt, en een lead die naar de concurrent gaat.
            </>
          ),
          sig: 'Marc Jonk, oprichter Advertisr.',
        }}
      />
      <Funnel
        eyebrow={'De aanpak'}
        title={'Van losse tools naar één systeem.'}
        body={
          'De meeste bedrijven hebben de losse onderdelen al: een CRM, een advertentieaccount, een mailtool, interne tools. Wat ontbreekt is de verbinding ertussen. Wij bouwen die verbinding in drie lagen, van koppeling tot volledig zelfstandige workflow, voor welk proces dat zich ook leent.'
        }
        ghost={'Wat betekent dit voor jouw systemen? →'}
        layers={[
          {
            tag: 'Laag 1 · Fundament',
            title: 'De systemen die je al gebruikt koppelen',
            text: 'CRM, advertentieplatformen, mail, agenda en spreadsheets aan elkaar knopen, zodat data nog maar op één plek wordt ingevoerd.',
            kpi: (
              <>
                Sturen op: <b>koppelingen, datakwaliteit</b>
              </>
            ),
          },
          {
            tag: 'Laag 2 · Kwalificatie & opvolging',
            title: 'AI beoordeelt en reageert',
            text: 'Inkomend werk, van leads tot vragen tot content, wordt automatisch beoordeeld en gecategoriseerd, waarna de juiste actie of reactie direct volgt.',
            kpi: (
              <>
                Sturen op: <b>reactietijd, kwalificatiegraad</b>
              </>
            ),
          },
          {
            tag: 'Laag 3 · Schaal',
            title: 'Workflows die zichzelf draaiende houden',
            text: 'Van automatische blogpublicatie tot maandelijkse rapportage: taken die zich herhalen, lopen voortaan vanzelf.',
            kpi: (
              <>
                Sturen op: <b>tijd bespaard, consistentie</b>
              </>
            ),
          },
        ]}
      />
      <Deliverables
        eyebrow={'Wat wij doen'}
        title={'Alles wat er nodig is om het draaiend te krijgen.'}
        lead={
          'Geen kant-en-klaar sjabloon dat toch net niet past. Wij bouwen maatwerk workflows rond jouw systemen, lees het als een menukaart, niet als een checklist.'
        }
        photo={{
          src: '/images/advertisr/het-team-van-advertisr-bouwt-workflows-o.jpg',
          alt: 'Het team van Advertisr bouwt workflows op kantoor in Haarlem',
          t: 'Zelf gebouwd, geen sjabloon van de plank',
          s: 'We schrijven de workflows zelf op maat, geen losse koppeling van de plank die het na een update niet meer doet.',
        }}
        rows={[
          {
            title: 'Workflow-analyse',
            text: 'We brengen in kaart welke taken zich herhalen en zich lenen voor automatisering, en welke systemen daarvoor gekoppeld moeten worden.',
          },
          {
            title: 'Koppelingen bouwen',
            text: 'CRM, advertentieplatformen, mail, agenda en andere tools worden met elkaar verbonden, zodat data automatisch de juiste kant op stroomt.',
          },
          {
            title: 'Slimme automatisering met AI',
            text: 'Leads, vragen, aanvragen of content worden automatisch beoordeeld, gecategoriseerd of opgesteld, zodat er minder handmatig werk overblijft.',
          },
          {
            title: 'Automatische opvolging',
            text: 'Persoonlijke mailflows die direct de content sturen die past bij de fase van de lead, zonder dat iemand op een knop hoeft te drukken.',
          },
          {
            title: 'Contentautomatisering',
            text: 'Blogartikelen, rapportages of andere terugkerende content die automatisch worden opgesteld, klaargezet en na een laatste controle gepubliceerd.',
          },
          {
            title: 'Monitoring & doorontwikkeling',
            text: 'We houden de workflows in de gaten en bouwen door zodra een platform wijzigt of jouw proces verandert.',
          },
        ]}
        band={{
          title: 'Welk proces kost jou nu elke week uren?',
          sub: 'In je gratis groeiplan zie je welke workflows het meeste tijd en leads opleveren.',
        }}
      />
      <Crea
        img={'/images/advertisr/het-team-van-advertisr-bouwt-automatiser.jpg'}
        alt={'Het team van Advertisr bouwt automatiseringen'}
        badge={{ t: 'Maatwerk, geen sjabloon', s: 'Elke workflow gebouwd rond jouw systemen' }}
        eyebrow={'Automatisering'}
        title={'Onder de motorkap draait het gewoon door.'}
        paras={[
          'We bouwen de koppelingen zelf en zetten AI in waar dat waarde toevoegt: beoordelen, opstellen, structureren. Geen losse ChatGPT-vensters die iemand handmatig moet bedienen, maar een workflow die op de achtergrond blijft draaien, voor bijna elk proces dat zich herhaalt.',
          'Gebruik je al een CRM of mailtool? Dan bouwen we daaromheen. Begin je vanaf nul? Dan adviseren we ook over welke tools passen bij jouw schaal.',
        ]}
        chips={[
          'Workflow-koppelingen',
          'CRM-koppelingen',
          'AI-modellen op maat',
          'Contentautomatisering',
          'Custom AI-agents',
          'Dashboards & rapportage',
        ]}
      />
      <CaseStudy
        eyebrow={'Bewijs'}
        title={'We bouwen dit ook voor onszelf.'}
        img={'/images/advertisr/marc-jonk-van-advertisr-bij-een-klantove.jpg'}
        alt={'Marc Jonk van Advertisr bij een klantoverleg'}
        cat={'Advertisr, eigen workflows'}
        name={'Hoe wij het zelf inrichten'}
        text={
          'Waar het kan zetten we onze eigen productie ook programmatisch op: creatieve varianten die automatisch worden gerenderd in plaats van één voor één met de hand, en systemen die data maar op één plek laten binnenkomen.'
        }
        stats={[
          ['24/7', 'workflows actief'],
          ['0', 'handmatig overtypen'],
          ['1', 'plek waar alles samenkomt'],
        ]}
      />
      <Faq
        eyebrow={'Veelgestelde vragen'}
        title={'Wat je waarschijnlijk wilt weten.'}
        items={[
          {
            q: 'Wat kost een AI Agent Workflow bij Advertisr?',
            a: 'Dat hangt af van het aantal systemen dat gekoppeld moet worden en de complexiteit van de workflow. In je groeiplan krijg je een concreet voorstel, met een eenmalige bouwprijs en eventueel een vast bedrag voor onderhoud en doorontwikkeling.',
          },
          {
            q: 'Heb ik al een CRM of mailtool nodig voordat jullie kunnen starten?',
            a: 'Nee. Gebruik je al iets, dan bouwen we daaromheen. Heb je nog niets, dan adviseren we welke tools passen bij jouw schaal en budget, en richten we die gelijk goed in.',
          },
          {
            q: 'Is dit hetzelfde als een chatbot op mijn website?',
            a: 'Nee. Een chatbot beantwoordt vragen van bezoekers. Een AI Agent Workflow werkt op de achtergrond: het beoordeelt leads, werkt systemen bij en verstuurt opvolging, zonder dat een bezoeker er iets van merkt.',
          },
          {
            q: 'Wat gebeurt er als een workflow een keer misgaat?',
            a: 'We bouwen foutmeldingen en controlepunten in, zodat we het zelf zien voordat het een probleem wordt. Bij gevoelige stappen, zoals een blog publiceren, houden we standaard een menselijke controle erin.',
          },
          {
            q: 'Blijven mijn data en workflows van mij?',
            a: 'Ja. De workflows draaien in jouw eigen omgeving en gekoppelde accounts. Wij bouwen en onderhouden ze, maar de eigendom en de data blijven bij jou.',
          },
          {
            q: 'Hoe lang duurt het om een workflow te bouwen?',
            a: 'Een eerste, eenvoudige workflow staat vaak binnen een tot twee weken. Complexere trajecten met meerdere koppelingen en AI-kwalificatie duren langer. We geven vooraf een realistische planning.',
          },
          {
            q: 'Werkt dit samen met jullie andere diensten, zoals Meta Ads of SEO?',
            a: 'Ja, en dat is precies waar het sterk wordt. Een lead ad heeft weinig waarde zonder snelle opvolging, en een contentstrategie werkt beter als publicatie geen handmatig werk kost. We bouwen dit het liefst als onderdeel van een groter geheel.',
          },
          {
            q: 'Zit ik ergens aan vast?',
            a: 'De bouw van een workflow is een eenmalig project. Kies je voor doorlopend onderhoud en doorontwikkeling, dan is dat, net als onze andere diensten, maandelijks opzegbaar.',
          },
        ]}
      />
      <Logos title={'Merken die hun marketing bij ons laten draaien.'} note={'Van horeca tot makelaardij.'} />
      <FinalCta
        eyebrow={'Klaar om te automatiseren?'}
        title={'Ontvang je gratis groeiplan.'}
        lead={
          'Wij bellen je, brengen je huidige systemen en processen in kaart en sturen een concreet plan met kansen en aanpak. Volledig vrijblijvend.'
        }
        list={['Reactie binnen 1 werkdag', '15 minuten kennismaking, geen verkooppraatje', 'Concreet plan, geen vage belofte']}
        messagePlaceholder={'Welk proces kost nu nog te veel handwerk?'}
        interesse={'AI Agent Workflows'}
      />
    </>
  );
}
