import type { Metadata } from 'next';
import { FinalCta } from '@/components/advertisr/FinalCta';
import { Logos } from '@/components/advertisr/Logos';
import { Marquee } from '@/components/advertisr/Marquee';
import { CaseStudy, Crea, Deliverables, Faq, Funnel, Pain, ServiceHero } from '@/components/advertisr/service';
import { PhoneVisual } from '@/components/advertisr/visuals';

export const metadata: Metadata = {
  title: 'Meta Ads uitbesteden',
  description:
    'Meta Ads werken alleen als creatie, doelgroep en funnel kloppen. Wij bouwen alle drie, van het eerste sfeerbeeld tot de lead die automatisch in je CRM landt.',
};

export default function Page() {
  return (
    <>
      <ServiceHero
        name={'Meta Ads'}
        eyebrow={'Meta Ads, Facebook & Instagram'}
        title={
          <>
            Advertenties waar mensen <em>voor stoppen</em> met scrollen.
          </>
        }
        sub={
          'Meta Ads werken alleen als creatie, doelgroep en funnel kloppen. Wij bouwen alle drie, van het eerste sfeerbeeld tot de lead die automatisch in je CRM landt.'
        }
        ghost={{ label: 'Bekijk onze aanpak', href: '#aanpak' }}
        ticks={['Geen opstartkosten', 'Maandelijks opzegbaar', 'Direct contact met je marketeer']}
        visual={<PhoneVisual />}
      />
      <Marquee
        items={[
          'Instagram Ads',
          'Facebook Ads',
          'Reels & video',
          'Carrousels',
          'Retargeting',
          'Doelgroepopbouw',
          'Creatie & copy',
          'Conversietracking',
        ]}
      />
      <Pain
        eyebrow={'Herken je dit?'}
        title={'Adverteren op Meta is makkelijk. Er geld mee verdienen niet.'}
        lead={'Dit zijn de zinnen die we het vaakst horen in een eerste gesprek.'}
        items={[
          {
            q: 'Ik weet eigenlijk niet wat die gasten dóén.',
            text: 'Weken niks horen en dan een factuur. Bij ons zit je in een vaste app-groep en spreek je maandelijks de marketeer die zelf in je account werkt, niet een accountmanager die het navertelt.',
          },
          {
            q: 'Ik zie wel klikken, maar geen klanten.',
            text: 'Verkeer is geen resultaat. Zonder kloppende conversiemeting weet je nooit welke campagne daadwerkelijk omzet oplevert, en optimaliseer je dus op de verkeerde cijfers.',
          },
          {
            q: 'Leads komen binnen, maar blijven liggen.',
            text: 'Een lead die pas na drie dagen wordt gebeld is meestal al weg. Wij automatiseren de opvolging vanaf het moment dat het formulier wordt ingevuld.',
          },
        ]}
        bridge={{
          img: '/images/advertisr/marc-jonk-oprichter-van-advertisr-2.jpg',
          alt: 'Marc Jonk, oprichter van Advertisr',
          line: (
            <>
              Een advertentie is geen doel. Een <em>voorspelbare stroom aanvragen</em> wel, en dat vraagt om iemand die je gewoon even belt
              als iets niet loopt.
            </>
          ),
          sig: 'Marc Jonk, oprichter Advertisr.',
        }}
      />
      <Funnel
        eyebrow={'De aanpak'}
        title={'Van onbekend naar klant, in drie lagen.'}
        body={
          'De meeste bedrijven adverteren alleen onderin de funnel: direct verkopen aan mensen die je nog niet kennen. Dat is de duurste manier om te groeien. Wij bouwen alle drie de lagen, zodat elke euro onderin steunt op warme doelgroepen die je bovenin hebt opgebouwd.'
        }
        ghost={'Wat betekent dit voor jouw markt? →'}
        layers={[
          {
            tag: 'Laag 1 · Awareness',
            title: 'Zichtbaar worden bij de juiste mensen',
            text: "Video's en sfeerbeelden die je merk laten zien aan een brede, relevante doelgroep in je regio of markt. Hier bouwen we het publiek op dat we later opnieuw kunnen bereiken.",
            kpi: (
              <>
                Sturen op: <b>bereik, videoweergaven, opgebouwde doelgroepen</b>
              </>
            ),
          },
          {
            tag: 'Laag 2 · Overweging',
            title: 'Vertrouwen opbouwen',
            text: 'Reviews, klantverhalen, veelgestelde vragen en bewijs. Mensen die je content zagen of je site bezochten krijgen nu de informatie die twijfel wegneemt.',
            kpi: (
              <>
                Sturen op: <b>doorkliks, tijd op site, terugkerende bezoekers</b>
              </>
            ),
          },
          {
            tag: 'Laag 3 · Conversie',
            title: 'De aanvraag binnenhalen',
            text: 'Retargeting op iedereen die interesse toonde, met een concreet aanbod en een korte route naar het formulier. Dit is waar de omzet zichtbaar wordt.',
            kpi: (
              <>
                Sturen op: <b>leads, kosten per lead, ROAS</b>
              </>
            ),
          },
        ]}
      />
      <Deliverables
        eyebrow={'Wat wij doen'}
        title={'Alles wat er nodig is om te draaien.'}
        lead={
          'Geen losse onderdelen die je zelf moet samenvoegen. Wij pakken de volledige keten op, lees het als een menukaart, niet als een checklist.'
        }
        photo={{
          src: '/images/advertisr/het-team-van-advertisr-aan-het-werk-op-k.jpg',
          alt: 'Het team van Advertisr aan het werk op kantoor',
          t: 'Eén team, geen doorgeefluik',
          s: 'Strategie, creatie en beheer op dezelfde vloer, geen los ingehuurde freelancers per onderdeel.',
        }}
        rows={[
          {
            title: 'Strategie & doelgroepen',
            text: 'We bepalen welke doelgroepen, boodschappen en funnelfases prioriteit krijgen, op basis van je marges en klantwaarde, niet op gevoel.',
          },
          {
            title: 'Campagnestructuur',
            text: 'Business Manager, advertentieaccount, pixel, conversie-API en doelgroepen worden correct ingericht voordat er één euro wordt uitgegeven.',
          },
          {
            title: 'Creatie van advertenties',
            text: "Reels, carrousels, statische visuals en teksten. We schrijven de hooks en monteren de video's, of we komen op locatie filmen.",
          },
          {
            title: 'Tracking & meetbaarheid',
            text: 'Conversiemetingen die kloppen, zodat je precies ziet welke campagne welke aanvraag opleverde. Zonder dit is optimaliseren giswerk.',
          },
          {
            title: 'Testen & optimaliseren',
            text: "Doorlopend testen op hooks, creaties, doelgroepen en CTA's. Wat werkt schalen we op, wat niet werkt zetten we uit.",
          },
          {
            title: 'Rapportage & afstemming',
            text: 'Maandelijks een helder overzicht én een gesprek waarin we uitleggen wat er gebeurde, waarom, en wat we volgende maand doen.',
          },
        ]}
        band={{
          title: 'Wat levert jouw Meta budget nu eigenlijk op?',
          sub: 'In je gratis groeiplan zie je waar jouw creatie, doelgroep en funnel de meeste winst laten liggen.',
        }}
      />
      <Crea
        img={'/images/advertisr/het-team-van-advertisr-werkt-aan-adverte.jpg'}
        alt={'Het team van Advertisr werkt aan advertentiecreatie'}
        badge={{ t: 'Creatie zit erbij', s: 'Geen aparte designfactuur achteraf' }}
        eyebrow={'Creatie'}
        title={'De advertentie ís tegenwoordig de targeting.'}
        paras={[
          "Meta's algoritme vindt zelf wel de juiste mensen. Waar jij het verschil maakt, is in de eerste twee seconden: de hook, het beeld, de boodschap. Daarom besteden wij het grootste deel van onze tijd aan creatie in plaats van aan knoppen draaien.",
          'Heb je zelf al beeldmateriaal? Dan gebruiken we dat. Heb je niets? Dan komen we filmen en halen we uit één draaidag genoeg content voor meerdere weken campagne.',
        ]}
        chips={[
          'Reels & korte video',
          'Carrousels',
          'Statische visuals',
          'Advertentieteksten & hooks',
          'Video-editing',
          'Contentshoot op locatie',
        ]}
      />
      <CaseStudy
        eyebrow={'Bewijs'}
        title={'Zo pakt dat uit in de praktijk.'}
        img={'/images/advertisr/ppexport-bloemengroothandel.jpg'}
        alt={'PPExport bloemengroothandel'}
        cat={'Bloemengroothandel, Meta & Google Ads'}
        name={'PPExport'}
        text={
          "Van losse leads uit Nederland naar een gevestigde naam in Duitsland, Spanje, Polen en Tsjechië. Met carrouseladvertenties van populaire producten, actiegerichte video's en een kwalificatieformulier verhoogden we niet alleen het aantal leads, maar vooral de kwaliteit ervan."
        }
        stats={[
          ['164', 'leads in de topmaand'],
          ['8%+', 'conversieratio Meta'],
          ['€2', 'per lead in Polen'],
        ]}
      />
      <Faq
        eyebrow={'Veelgestelde vragen'}
        title={'Wat je waarschijnlijk wilt weten.'}
        items={[
          {
            q: 'Wat kost Meta Ads bij Advertisr?',
            a: 'Onze fee hangt af van de omvang van de campagnes, het aantal creaties per maand en of we ook content produceren. Het advertentiebudget staat daar los van en betaal je rechtstreeks aan Meta. In je groeiplan krijg je een concreet voorstel met een vaste maandfee, zodat je vooraf precies weet waar je aan toe bent.',
          },
          {
            q: 'Hoeveel advertentiebudget heb ik minimaal nodig?',
            a: 'Dat verschilt sterk per branche en doelstelling. Voor een lokaal bedrijf is een paar honderd euro per maand vaak al genoeg om te leren wat werkt; wil je een volledige funnel met retargeting draaien, dan heb je meer volume nodig. We bepalen dit samen op basis van je markt en marges, niet op basis van een standaardbedrag.',
          },
          {
            q: 'Betaal ik opstartkosten?',
            a: 'Nee. De werkzaamheden voor strategie, accountinrichting, tracking en campagnestructuur zitten in de eerste maand van het beheer inbegrepen.',
          },
          {
            q: 'Zit ik ergens aan vast?',
            a: 'Nee. We werken bewust zonder langlopende contracten. De samenwerking is maandelijks opzegbaar met een opzegtermijn van één kalendermaand. We houden je liever klant omdat het werkt.',
          },
          {
            q: 'Van wie zijn mijn advertentieaccount en data?',
            a: 'Altijd van jou. Je blijft eigenaar van je Business Manager, advertentieaccount, pixel en doelgroepen, wij krijgen alleen beheerrechten. Stopt de samenwerking, dan blijft alles gewoon van jou.',
          },
          {
            q: 'Hoe snel zie ik resultaat?',
            a: 'De eerste data zie je binnen dagen, maar campagnes hebben tijd nodig om te leren. Reken op ongeveer 30 dagen voor een betrouwbaar beeld en 90 dagen om echt te kunnen optimaliseren en opschalen.',
          },
          {
            q: 'Moet ik zelf content aanleveren?',
            a: "Mag, hoeft niet. Heb je al foto's en video's, dan gebruiken we die. Zo niet, dan verzorgen wij de creatie en kunnen we op locatie komen filmen. Dat spreken we vooraf af, zodat je nooit voor verrassingen komt te staan.",
          },
          {
            q: 'Doen jullie ook Google Ads erbij?',
            a: 'Ja, en in veel gevallen adviseren we dat ook. Google vangt mensen op die al actief zoeken; Meta creëert de vraag daarvóór en haalt bezoekers terug die nog niet klaar waren. Samen dekken ze de volledige customer journey.',
          },
        ]}
      />
      <Logos title={'Merken die hun Meta Ads bij ons neerleggen.'} note={'Van horeca tot B2B-export.'} set={2} />
      <FinalCta
        eyebrow={'Klaar om te groeien?'}
        title={'Ontvang je gratis groeiplan.'}
        lead={
          'Wij bellen je, brengen je huidige marketing in kaart en sturen een concreet plan met kansen, kanalen en aanpak. Volledig vrijblijvend.'
        }
        list={['Reactie binnen 1 werkdag', '15 minuten kennismaking, geen verkooppraatje', 'Concreet plan, geen vage belofte']}
        messagePlaceholder={'Waar wil je mee groeien? Meer leads, meer omzet, meer naamsbekendheid...'}
        interesse={'Meta Ads'}
      />
    </>
  );
}
