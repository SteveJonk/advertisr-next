import type { Metadata } from 'next';
import { FinalCta } from '@/components/advertisr/FinalCta';
import { Logos } from '@/components/advertisr/Logos';
import { Marquee } from '@/components/advertisr/Marquee';
import { CaseStudy, Crea, Deliverables, Faq, Funnel, Pain, ServiceHero } from '@/components/advertisr/service';
import { SiteVisual } from '@/components/advertisr/visuals';

export const metadata: Metadata = {
  title: 'Website laten bouwen',
  description:
    'Een mooie site is het startpunt, geen eindpunt. Wij bouwen snelle, overtuigende websites die bezoekers omzetten in aanvragen, met een CMS waar je zelf in kunt werken.',
};

export default function Page() {
  return (
    <>
      <ServiceHero
        name={'Web development'}
        eyebrow={'Web Development, Websites die converteren'}
        title={
          <>
            Een website die <em>verkoopt</em>, niet alleen bestaat.
          </>
        }
        sub={
          'Een mooie site is het startpunt, geen eindpunt. Wij bouwen snelle, overtuigende websites die bezoekers omzetten in aanvragen, met een CMS waar je zelf in kunt werken.'
        }
        ghost={{ label: 'Bekijk onze aanpak', href: '#aanpak' }}
        ticks={['Geen opstartkosten', 'Maandelijks opzegbaar', 'Direct contact met je marketeer']}
        visual={<SiteVisual />}
      />
      <Marquee
        items={[
          'Maatwerk websites',
          'Webshops',
          'CMS & onderhoud',
          'Snelheid & performance',
          'SEO-technisch fundament',
          "Landingspagina's",
          'CRO & conversie',
          'Koppelingen & integraties',
        ]}
      />
      <Pain
        eyebrow={'Herken je dit?'}
        title={'Een mooie site hebben en online geld verdienen zijn twee dingen.'}
        lead={'Dit zijn de zinnen die we het vaakst horen in een eerste gesprek.'}
        items={[
          {
            q: 'Onze site is jaren geleden gebouwd en niemand durft er nog aan te komen.',
            text: "Elke aanpassing kost weken en gaat via een externe partij die niet meer reageert. Bij ons werk je in een CMS dat gemaakt is om zelf in te muteren, teksten, foto's, pagina's, zonder developer nodig te hebben.",
          },
          {
            q: 'Onze site is traag, zeker op mobiel.',
            text: 'Een laadtijd van meer dan twee seconden kost je zichtbaar bezoekers, en Google straft het ook nog eens af in de zoekresultaten. Snelheid is bij ons een technisch uitgangspunt, geen bijzaak.',
          },
          {
            q: 'We hebben geen idee of onze site eigenlijk werkt.',
            text: "Zonder kloppende tracking weet je niet welke pagina's bezoekers afhaken of welke bron daadwerkelijk aanvragen oplevert. Wij richten dat in vanaf dag één.",
          },
        ]}
        bridge={{
          img: '/images/advertisr/marc-jonk-oprichter-van-advertisr-2.jpg',
          alt: 'Marc Jonk, oprichter van Advertisr',
          line: (
            <>
              Een website is geen visitekaartje. Het is je <em>hardstwerkende verkoper</em>, die alleen goed werkt als hij ook snel is en
              zelf onderhoudbaar blijft.
            </>
          ),
          sig: 'Marc Jonk, oprichter Advertisr.',
        }}
      />
      <Funnel
        eyebrow={'De aanpak'}
        title={'Van doel naar site, in drie lagen.'}
        body={
          'De meeste websites worden gebouwd om er goed uit te zien, niet om te presteren. Wij bouwen andersom: eerst het doel, dan de structuur die daarbij hoort, dan pas het ontwerp. Zo landt elke pagina op een concrete actie.'
        }
        ghost={'Wat betekent dit voor jouw site? →'}
        layers={[
          {
            tag: 'Laag 1 · Strategie & structuur',
            title: 'Bepalen wat de site moet doen',
            text: 'Welke bezoeker moet waar landen, en welke actie moet hij ondernemen? We bouwen de sitemap en paginastructuur op basis van je doelgroepen en funnel, niet op basis van een sjabloon.',
            kpi: (
              <>
                Sturen op: <b>paginastructuur, gebruikersreis, kernboodschap</b>
              </>
            ),
          },
          {
            tag: 'Laag 2 · Ontwerp & bouw',
            title: 'Vertrouwen en snelheid inbouwen',
            text: 'Een strak, merkeigen ontwerp gebouwd op een snel, technisch fundament. Geen trage sjablonen of overbodige plugins, elke pagina laadt razendsnel, ook op mobiel.',
            kpi: (
              <>
                Sturen op: <b>laadtijd, mobielvriendelijkheid, merkherkenning</b>
              </>
            ),
          },
          {
            tag: 'Laag 3 · Conversie & beheer',
            title: 'De aanvraag binnenhalen',
            text: 'Duidelijke call-to-actions, slimme formulieren en kloppende tracking, zodat je precies ziet wat werkt. Daarna blijft het CMS van jou, met of zonder onze hulp.',
            kpi: (
              <>
                Sturen op: <b>conversieratio, formulierinzendingen, uptime</b>
              </>
            ),
          },
        ]}
      />
      <Deliverables
        eyebrow={'Wat wij doen'}
        title={'Alles wat er nodig is om live te gaan.'}
        lead={
          'Geen losse onderdelen die je zelf moet samenvoegen. Wij pakken de volledige keten op, lees het als een menukaart, niet als een checklist.'
        }
        photo={{
          src: '/images/advertisr/het-team-van-advertisr-aan-het-werk-op-k.jpg',
          alt: 'Het team van Advertisr aan het werk op kantoor',
          t: 'Eén team, geen doorgeefluik',
          s: 'Strategie, ontwerp en development op dezelfde vloer, geen los ingehuurde freelancers per onderdeel.',
        }}
        rows={[
          {
            title: 'Strategie & sitemap',
            text: "We bepalen welke pagina's er nodig zijn, wat elke pagina moet doen, en welke route bezoekers volgen, op basis van je doelgroepen, niet op basis van een sjabloon.",
          },
          {
            title: 'Ontwerp op maat',
            text: 'Een visuele stijl die bij je merk past, uitgewerkt tot een compleet ontwerp per pagina, geen kant-en-klaar thema met een ander logo erop.',
          },
          {
            title: 'Development & CMS',
            text: "Een snel, technisch gedegen fundament met een CMS waarin je zelf teksten, afbeeldingen en pagina's kunt aanpassen zonder developer.",
          },
          {
            title: 'Tracking & meetbaarheid',
            text: "Conversiemetingen die kloppen, zodat je precies ziet welke pagina's presteren en waar bezoekers afhaken. Zonder dit is optimaliseren giswerk.",
          },
          {
            title: 'Testen & livegang',
            text: 'Uitgebreid testen op snelheid, mobielvriendelijkheid en werking van formulieren, voordat we de knop omzetten en je site live gaat.',
          },
          {
            title: 'Onderhoud & doorontwikkeling',
            text: 'Updates, kleine aanpassingen en doorontwikkeling na livegang. Je kunt dit zelf doen in het CMS, of bij ons beleggen, jouw keuze.',
          },
        ]}
        band={{
          title: 'Benieuwd wat jouw website nu laat liggen?',
          sub: 'In je gratis groeiplan zie je waar je site het meeste conversie en snelheid laat liggen.',
        }}
      />
      <Crea
        img={'/images/advertisr/website-van-l-schuijt-klussenbedrijf-ont.jpg'}
        alt={'Website van L. Schuijt Klussenbedrijf, ontworpen en gebouwd door Advertisr'}
        badge={{ t: 'Design zit erbij', s: 'Geen aparte designfactuur achteraf' }}
        shot
        eyebrow={'Design & build'}
        title={'Een mooie site die ook daadwerkelijk werkt.'}
        paras={[
          'Design zonder strategie is decoratie. Elke pagina die wij bouwen begint met de vraag: wat moet een bezoeker hier doen? Pas daarna komt de vormgeving, in lijn met je merk en geoptimaliseerd voor conversie.',
          "We bouwen op een modern CMS dat je zelf begrijpt: teksten aanpassen, pagina's toevoegen, content beheren. Geen ontwikkelaar nodig voor elke kleine wijziging.",
        ]}
        chips={[
          'UX & wireframes',
          'Custom design',
          'Responsive development',
          'Snelheid & Core Web Vitals',
          'SEO-technisch fundament',
          'Beheersvriendelijk CMS',
        ]}
      />
      <CaseStudy
        eyebrow={'Bewijs'}
        title={'Zo pakt dat uit in de praktijk.'}
        img={'/images/advertisr/website-van-hart-huis-makelaardij-gebouw.png'}
        alt={'Website van Hart & Huis Makelaardij, gebouwd door Advertisr'}
        cat={'Makelaardij, Web Development'}
        name={'Hart & Huis Makelaardij'}
        text={
          'Een nieuwe website die past bij hoe dit makelaarskantoor zelf werkt: persoonlijk, lokaal en zonder poespas. Snel geladen, duidelijke call-to-actions naar een waardebepaling en volledig zelf te beheren zonder developer nodig te hebben.'
        }
        stats={[
          ['9,6', 'score op Funda'],
          ['<1s', 'laadtijd op mobiel'],
          ['100%', 'zelf te beheren'],
        ]}
      />
      <Faq
        eyebrow={'Veelgestelde vragen'}
        title={'Wat je waarschijnlijk wilt weten.'}
        items={[
          {
            q: 'Wat kost een nieuwe website bij Advertisr?',
            a: "Dat hangt af van het aantal pagina's, of er een CMS en koppelingen nodig zijn, en of we ook content en fotografie verzorgen. In je groeiplan krijg je een concreet voorstel met een vaste projectprijs, zodat je vooraf precies weet waar je aan toe bent.",
          },
          {
            q: 'Hoe lang duurt het bouwen van een website?',
            a: 'Voor een gemiddelde bedrijfswebsite reken je op vier tot acht weken, van eerste gesprek tot livegang. Grotere sites met een webshop of maatwerkfunctionaliteit duren langer. We spreken vooraf een planning af, zodat je weet wanneer je site online gaat.',
          },
          {
            q: "Kan ik zelf teksten en pagina's aanpassen?",
            a: 'Ja. We bouwen op een CMS dat gemaakt is om zelf in te muteren, zonder kennis van code. Bij oplevering krijg je een korte uitleg, zodat je direct zelfstandig aan de slag kunt.',
          },
          {
            q: 'Blijft de website van mij?',
            a: 'Altijd. Je bent eigenaar van de website, de content en het CMS. Stopt de samenwerking, dan blijft alles gewoon van jou.',
          },
          {
            q: 'Kunnen jullie ook onze huidige site verbeteren?',
            a: 'Ja, dat kan zowel als volledige vernieuwing als als gerichte verbetering op snelheid, conversie of techniek. In een eerste gesprek kijken we wat het meeste oplevert voor jouw situatie.',
          },
          {
            q: 'Wat gebeurt er na livegang?',
            a: 'De website blijft van jou en je kunt zelf verder muteren in het CMS. Wil je liever dat wij updates en doorontwikkeling verzorgen, dan kun je dat afzonderlijk bij ons beleggen.',
          },
          {
            q: 'Combineren jullie website en advertenties?',
            a: 'Ja, en dat raden we ook vaak aan. Een website die aansluit op je Meta of Google Ads-campagnes converteert aantoonbaar beter dan een los gebouwde site. Zo dekken we de volledige route van advertentie tot aanvraag.',
          },
        ]}
      />
      <Logos title={'Merken die hun website bij ons hebben laten bouwen.'} note={'Van horeca tot B2B-export.'} set={2} staal={false} />
      <FinalCta
        eyebrow={'Klaar om te groeien?'}
        title={'Ontvang je gratis groeiplan.'}
        lead={
          'Wij bellen je, brengen je huidige marketing in kaart en sturen een concreet plan met kansen, kanalen en aanpak. Volledig vrijblijvend.'
        }
        list={['Reactie binnen 1 werkdag', '15 minuten kennismaking, geen verkooppraatje', 'Concreet plan, geen vage belofte']}
        messagePlaceholder={'Waar wil je mee groeien? Meer leads, meer omzet, meer naamsbekendheid...'}
        interesse={'Web Development'}
      />
    </>
  );
}
