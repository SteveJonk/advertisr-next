import type { Metadata } from 'next';
import { FinalCta } from '@/components/advertisr/FinalCta';
import { Logos } from '@/components/advertisr/Logos';
import { Marquee } from '@/components/advertisr/Marquee';
import { CaseStudy, Crea, Deliverables, Faq, Funnel, Pain, ServiceHero } from '@/components/advertisr/service';
import { SerpVisual } from '@/components/advertisr/visuals';

export const metadata: Metadata = {
  title: 'Google Ads uitbesteden',
  description:
    'Wie op Google zoekt, wil al iets. Wij zorgen dat jij daar staat, met een structuur die klopt en tracking die klopt, zodat elke euro budget aantoonbaar wordt terugverdiend.',
};

export default function Page() {
  return (
    <>
      <ServiceHero
        name={'Google Ads'}
        eyebrow={'Google Ads, Search & Shopping'}
        title={
          <>
            Gevonden worden op het moment dat het <em>telt</em>.
          </>
        }
        sub={
          'Wie op Google zoekt, wil al iets. Wij zorgen dat jij daar staat, met een structuur die klopt en tracking die klopt, zodat elke euro budget aantoonbaar wordt terugverdiend.'
        }
        ghost={{ label: 'Bekijk onze aanpak', href: '#aanpak' }}
        ticks={['Geen opstartkosten', 'Maandelijks opzegbaar', 'Direct contact met je marketeer']}
        visual={<SerpVisual />}
      />
      <Marquee
        items={[
          'Search Ads',
          'Performance Max',
          'Shopping',
          'Display & YouTube',
          'Zoekwoordenonderzoek',
          'Biedstrategie',
          'Conversietracking',
          'Remarketing',
        ]}
      />
      <Pain
        eyebrow={'Herken je dit?'}
        title={'Adverteren op Google is makkelijk. Winstgevend adverteren niet.'}
        lead={'Dit zijn de zinnen die we het vaakst horen in een eerste gesprek.'}
        items={[
          {
            q: 'Ik geef veel budget uit, maar weet niet wat het oplevert.',
            text: 'Zonder kloppende conversiemeting optimaliseert Google Ads zichzelf blind. Wij zetten eerst de tracking goed, pas daarna gaan we opschalen.',
          },
          {
            q: 'Ik snap gewoon niet waar mijn geld naartoe gaat.',
            text: 'Een dashboard vol cijfers zegt niets als niemand het uitlegt. Wij bellen je maandelijks en laten precies zien welke zoekterm welke aanvraag opleverde.',
          },
          {
            q: 'Ik heb het ooit zelf geprobeerd, maar mis de tijd.',
            text: 'Logisch. Google Ads vraagt continue optimalisatie: biedingen, zoekwoorden, negatieve termen. Dat is precies het werk dat wij structureel oppakken.',
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
        title={'Van zoekopdracht naar klant, in drie lagen.'}
        body={
          'De meeste bedrijven zetten alleen Search Ads aan en stoppen daar. Dat vangt mensen die al zoeken, maar mist iedereen die nog twijfelt of nog niet actief zoekt. Wij bouwen alle drie de lagen, zodat je zowel directe intentie vangt als de markt daarachter opbouwt.'
        }
        ghost={'Wat betekent dit voor jouw markt? →'}
        layers={[
          {
            tag: 'Laag 1 · Search & Shopping',
            title: 'Vangen wie al zoekt',
            text: 'Zoekadvertenties en Shopping op de termen waarmee mensen actief naar jouw dienst of product zoeken. Dit is waar de directe koopintentie zit, en waar we altijd beginnen.',
            kpi: (
              <>
                Sturen op: <b>kosten per conversie, conversieratio, zoektermrelevantie</b>
              </>
            ),
          },
          {
            tag: 'Laag 2 · Performance Max',
            title: 'Breder dekken binnen Google',
            text: 'Performance Max combineert zoeknetwerk, Shopping, Display en YouTube automatisch op basis van je conversiedata. Dit vangt vraag die Search alleen niet volledig dekt.',
            kpi: (
              <>
                Sturen op: <b>conversiewaarde, bereik binnen relevante segmenten</b>
              </>
            ),
          },
          {
            tag: 'Laag 3 · Remarketing',
            title: 'Terughalen wie nog twijfelde',
            text: 'Display en YouTube-advertenties gericht op iedereen die je site al bezocht maar niet converteerde. Vaak de goedkoopste laag met het hoogste rendement.',
            kpi: (
              <>
                Sturen op: <b>kosten per lead, terugkerende conversies</b>
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
            title: 'Zoekwoordenonderzoek & structuur',
            text: 'We bepalen welke zoektermen daadwerkelijk koopintentie hebben en bouwen een campagnestructuur die dat weerspiegelt, geen losse advertentiegroepen zonder logica.',
          },
          {
            title: 'Account- & trackingopzet',
            text: 'Google Ads-account, Google Tag Manager en conversiemetingen worden correct ingericht voordat er één euro wordt uitgegeven.',
          },
          {
            title: 'Advertentieteksten & assets',
            text: 'Advertentieteksten, sitelinks, extensies en productfeeds voor Shopping. We schrijven en optimaliseren totdat de kwaliteitsscore klopt.',
          },
          {
            title: 'Negatieve zoekwoorden',
            text: 'We sluiten actief zoektermen uit die wel kliks maar geen aanvragen opleveren, zo lekt er geen budget weg aan irrelevant verkeer.',
          },
          {
            title: 'Biedstrategie & optimalisatie',
            text: 'Doorlopend bijsturen op basis van conversiedata, van handmatig bieden tot slimme biedstrategieën zodra er genoeg data is.',
          },
          {
            title: 'Rapportage & afstemming',
            text: 'Maandelijks een helder overzicht én een gesprek waarin we uitleggen wat er gebeurde, waarom, en wat we volgende maand doen.',
          },
        ]}
        band={{
          title: 'Staat jouw Google Ads account op het juiste spoor?',
          sub: 'In je gratis groeiplan zie je waar structuur en tracking het meeste rendement laten liggen.',
        }}
      />
      <Crea
        img={'/images/advertisr/het-team-van-advertisr-werkt-aan-adverte.jpg'}
        alt={'Het team van Advertisr werkt aan advertentiecreatie'}
        badge={{ t: 'Structuur zit erbij', s: 'Geen aparte factuur voor feed- of accountoptimalisatie' }}
        eyebrow={'Structuur & assets'}
        title={'Bij Google win je met structuur, niet met een mooi plaatje.'}
        paras={[
          'Google beloont relevantie: een kwaliteitsscore die klopt, een productfeed die schoon is, advertentieteksten die exact aansluiten op de zoekintentie. Dat werk is minder zichtbaar dan een mooie advertentie, maar bepaalt wel je kosten per klik.',
          "Heb je een webshop? Dan optimaliseren we je productfeed voor Shopping. Geen webshop? Dan richten we ons op landingspagina's die de zoekintentie direct beantwoorden.",
        ]}
        chips={[
          'Zoekwoordenonderzoek',
          'Advertentie-extensies',
          'Productfeedoptimalisatie',
          'A/B-testen advertenties',
          'Negatieve zoekwoorden',
          'Landingspagina-advies',
        ]}
      />
      <CaseStudy
        eyebrow={'Bewijs'}
        title={'Zo pakt dat uit in de praktijk.'}
        img={'/images/advertisr/ppexport-bloemengroothandel.jpg'}
        alt={'PPExport bloemengroothandel'}
        cat={'Bloemengroothandel, Google & Meta Ads'}
        name={'PPExport'}
        text={
          'Van losse leads uit Nederland naar een gevestigde naam in Duitsland, Spanje, Polen en Tsjechië. Door de zoekwoordenstructuur volledig te herbouwen en Shopping in te zetten voor de productcatalogus, daalden de kosten per lead terwijl het volume juist steeg.'
        }
        stats={[
          ['164', 'leads in de topmaand'],
          ['8%+', 'conversieratio'],
          ['€2', 'per lead in Polen'],
        ]}
      />
      <Faq
        eyebrow={'Veelgestelde vragen'}
        title={'Wat je waarschijnlijk wilt weten.'}
        items={[
          {
            q: 'Wat kost Google Ads bij Advertisr?',
            a: 'Onze fee hangt af van de omvang van de campagnes en het aantal productgroepen of diensten dat we adverteren. Het advertentiebudget staat daar los van en betaal je rechtstreeks aan Google. In je groeiplan krijg je een concreet voorstel met een vaste maandfee, zodat je vooraf precies weet waar je aan toe bent.',
          },
          {
            q: 'Hoeveel advertentiebudget heb ik minimaal nodig?',
            a: 'Dat hangt sterk af van de concurrentie op je zoekwoorden en je regio. Voor een lokale dienst is een paar honderd euro per maand vaak al genoeg om te leren wat werkt; in een competitieve markt heb je meer volume nodig om voldoende data te verzamelen. We bepalen dit samen op basis van je markt en marges.',
          },
          {
            q: 'Betaal ik opstartkosten?',
            a: 'Nee. De werkzaamheden voor zoekwoordenonderzoek, accountinrichting, tracking en campagnestructuur zitten in de eerste maand van het beheer inbegrepen.',
          },
          {
            q: 'Zit ik ergens aan vast?',
            a: 'Nee. We werken bewust zonder langlopende contracten. De samenwerking is maandelijks opzegbaar met een opzegtermijn van één kalendermaand. We houden je liever klant omdat het werkt.',
          },
          {
            q: 'Van wie zijn mijn advertentieaccount en data?',
            a: 'Altijd van jou. Je blijft eigenaar van je Google Ads-account, conversiedata en Tag Manager-container, wij krijgen alleen beheerrechten. Stopt de samenwerking, dan blijft alles gewoon van jou.',
          },
          {
            q: 'Hoe snel zie ik resultaat?',
            a: 'Search-campagnes leveren vaak sneller eerste data op dan andere kanalen, omdat je direct inspeelt op bestaande zoekintentie. Reken op ongeveer 30 dagen voor een betrouwbaar beeld en 90 dagen om echt te kunnen optimaliseren en opschalen.',
          },
          {
            q: "Heb ik zelf een webshop of aparte landingspagina's nodig?",
            a: 'Niet per se, maar het scheelt enorm. Een landingspagina die precies aansluit op de zoekintentie converteert veel beter dan een algemene homepage. Heb je die nog niet, dan adviseren we hierin en werken we samen aan een oplossing.',
          },
          {
            q: 'Doen jullie ook Meta Ads erbij?',
            a: 'Ja, en in veel gevallen adviseren we dat ook. Google vangt mensen op die al actief zoeken; Meta creëert de vraag daarvóór en haalt bezoekers terug die nog niet klaar waren. Samen dekken ze de volledige customer journey.',
          },
        ]}
      />
      <Logos title={'Merken die hun Google Ads bij ons neerleggen.'} note={'Van horeca tot B2B-export.'} set={2} />
      <FinalCta
        eyebrow={'Klaar om te groeien?'}
        title={'Ontvang je gratis groeiplan.'}
        lead={
          'Wij bellen je, brengen je huidige marketing in kaart en sturen een concreet plan met kansen, kanalen en aanpak. Volledig vrijblijvend.'
        }
        list={['Reactie binnen 1 werkdag', '15 minuten kennismaking, geen verkooppraatje', 'Concreet plan, geen vage belofte']}
        messagePlaceholder={'Waar wil je mee groeien? Meer leads, meer omzet, meer naamsbekendheid...'}
        interesse={'Google Ads'}
      />
    </>
  );
}
