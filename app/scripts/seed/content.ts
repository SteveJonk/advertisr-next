/**
 * The site's real copy, as it was in the approved designs. The service pages
 * (pages/*.json) were extracted from the static pages; the rest is here.
 */
import { cta, h2, img, li, p, ref, t } from './lib';

const SERVICES = [
  ['Meta Ads', '/meta-ads'],
  ['Google Ads', '/google-ads'],
  ['AI Agent Workflows', '/ai-agent-workflows'],
  ['Social media organisch', '/social-media-organisch'],
  ['Web development', '/web-development'],
  ['SEO & GEO', '/seo-geo'],
  ['Data & analytics', '/data-analytics'],
  ['Marketing automation', '/marketing-automation'],
];
const link = ([label, href]: string[]) => ({ label, href });

export const singletons = [
  {
    _id: 'siteInformation',
    _type: 'siteInformation',
    name: 'Advertisr.',
    defaultTitle: 'Advertisr. | Marketing zonder gedoe.',
    description: 'Online marketingbureau uit Haarlem. Marketing zonder gedoe.',
    language: 'nl',
    email: 'info@advertisr.nl',
    city: 'Haarlem, NH',
    address: ['Haarlem'],
    addressCountry: 'NL',
    interfaceText: {
      ctaLabel: 'Ontvang mijn groeiplan',
      crumbHome: 'Home',
      crumbServices: 'Diensten',
      crumbKennisbank: 'Kennisbank',
      stepPrefix: 'Stap',
      caseCardLink: 'Bekijk case →',
      caseListLink: 'Bekijk de volledige case study →',
      ratedOnGoogle: 'Beoordeeld op Google',
      onGoogle: 'op Google',
      googleReview: 'Google review',
      formName: 'Naam',
      formNamePlaceholder: 'Voor- en achternaam',
      formCompany: 'Bedrijfsnaam',
      formCompanyPlaceholder: 'Jouw bedrijf',
      formEmail: 'E-mailadres',
      formEmailPlaceholder: 'jij@bedrijf.nl',
      formPhone: 'Telefoonnummer',
      formPhonePlaceholder: '06 - 12345678',
      formWebsite: 'Website',
      formWebsitePlaceholder: 'www.jouwbedrijf.nl',
      formMessage: 'Grootste marketingvraag',
      formMessagePlaceholder: 'Waar wil je mee groeien? Meer leads, meer omzet, meer naamsbekendheid...',
      formSubmit: 'Ontvang mijn groeiplan',
      formSending: 'Versturen…',
      formFine: 'Geen spam. Je gegevens worden alleen gebruikt om je groeiplan voor te bereiden.',
      formSuccessTitle: 'Bedankt, we hebben je aanvraag.',
      formSuccessBody: 'We nemen binnen 1 werkdag contact met je op.',
      formError: 'Versturen lukt nu niet. Probeer het later opnieuw of mail ons op info@advertisr.nl.',
      newsletterButton: 'Aanmelden',
      newsletterSuccess: 'Bedankt, je staat op de lijst.',
      newsletterError: 'Aanmelden lukt nu niet. Probeer het later opnieuw.',
      pillarBadge: '📖 Pillar gids',
      readingTime: 'min leestijd',
      updated: 'Bijgewerkt',
      toc: 'Inhoudsopgave',
      published: 'Gepubliceerd',
      lastUpdated: 'Laatst bijgewerkt',
      shareLinkedIn: 'Deel op LinkedIn',
      copyLink: 'Kopieer link',
      linkCopied: 'Link gekopieerd',
      sources: 'Bronnen',
      aboutAuthor: 'Over de auteur',
      faqEyebrow: 'Veelgestelde vragen',
      faqTitle: 'Vragen die we vaak krijgen.',
      relatedEyebrow: 'Meer uit dit kennisgebied',
      relatedTitle: 'Gerelateerde artikelen.',
      notFoundMetaTitle: 'Pagina niet gevonden',
      notFoundEyebrow: '404',
      notFoundTitle: 'Deze pagina bestaat niet.',
      notFoundBody: 'De link is verlopen, verplaatst of heeft nooit bestaan. Ga terug naar de homepage, of neem contact op als je iets specifieks zocht.',
      notFoundButtonLabel: 'Terug naar home',
    },
  },
  {
    _id: 'navigation',
    _type: 'navigation',
    links: [
      { label: 'Diensten', href: '/#diensten', match: SERVICES.map(([, href]) => href) },
      { label: 'Resultaten', href: '/resultaten' },
      { label: 'Aanpak', href: '/#aanpak' },
      { label: 'Team', href: '/team' },
      { label: 'Kennisbank', href: '/kennisbank' },
    ],
    ctaLabel: 'Ontvang mijn groeiplan',
    landingCtaLabel: 'Gratis groeiplan aanvragen',
  },
  {
    _id: 'footer',
    _type: 'footer',
    columns: [
      { title: 'Diensten', links: SERVICES.map(link) },
      { title: 'Bureau', links: [['Over ons', '/team'], ['Resultaten', '/resultaten'], ['Kennisbank', '/kennisbank'], ['Gratis groeiplan', '/groeiplan']].map(link) },
      // ponytail: '#' placeholders straight from the design; fill in the real profiles in the studio.
      { title: 'Contact', links: [['Contact', '/contact'], ['info@advertisr.nl', 'mailto:info@advertisr.nl'], ['Haarlem, NH', '#'], ['LinkedIn', '#'], ['Instagram', '#']].map(link) },
    ],
    legal: [['Algemene voorwaarden', '#'], ['Privacyverklaring', '#']].map(link),
    copyright: '© 2026 Advertisr. Alle rechten voorbehouden.',
  },
];

/** Only the score the badges show until the first real sync overwrites it. */
export const googleReviews = { _id: 'googleReviews', _type: 'googleReviews', languageCode: 'nl', enabled: true, rating: 5 };

export const reviews = [
  ['Hugo Kaptein', 'pink', 'Advertisr heeft voor mij mijn webshop gebouwd en doet nu al ruim 2 jaar mijn online marketing. Heel fijn dat ik dankzij deze heren ook online mijn producten aan mijn klanten aan kan bieden. Goede ervaringen!'],
  ['Bart Verhagen', 'purple', 'Dankzij Advertisr. hebben wij de instroom en leads op orde gekregen. Ze denken goed mee met de wensen en behoeftes. Daarnaast zijn reageren de mannen ook snel op vragen. Kortom, een hele fijne partij om mee samen te werken!'],
  ['Daan Andela', 'purple', 'Wij zijn super goed geholpen door dit bedrijf met onze social media. Ze denken echt met je mee, reageren snel en hebben veel kennis van zaken. Dankzij hun hulp is onze online zichtbaarheid enorm verbeterd.'],
  ['Ian Van Rooijen', 'dim', 'Advertisr denkt met je mee, helpt je pro-actief en levert een super service. Niks is te gek en ze zetten altijd een stapje extra voor je. Ik kan ze absoluut aanraden!'],
  ['Bas Auto Service IJmuiden', 'red', 'Wij werken al jaren met deze toppers! Werken snel, vakkundig en komen afspraken na. Wat wil je nog meer!'],
  ['Ingrid Kaptein', 'red', 'Leuk bedrijf met zeer gemotiveerde jonge mannen. Ben zeer tevreden over onze website.'],
  ['Denise Grooters', 'red', 'Hele leuke, fijne, jonge jongens om mee samen te werken. Zeker een aanrader!'],
  ['sabrine', 'green', 'Fijne ervaring met Advertisr. Leuke gasten ook om mee samen te werken!'],
  ['De Racketmeesters', 'dark', 'Zeer tevreden. De werkzaamheden zijn goed, snel en met maatwerk.'],
  ['Luuk Riezebos', 'purple', 'Goed bedrijf professionele omgang met klanten! Niks anders dan tevreden.'],
].map(([name, tone, text], i) => ({ _id: `review-${i + 1}`, _type: 'review', source: 'manual', hidden: false, name, tone, text, rating: 5, sortOrder: i + 1 }));

export const clients = [
  ['ciao-italia', 'Ciao Italia', 'ciao-italia-2.png'],
  ['ppexport', 'PPExport', 'ppexport-2.png'],
  ['de-racketmeesters', 'De Racketmeesters', 'de-racketmeesters-2.png'],
  ['maxim-s-fashion-plus', "Maxim's Fashion Plus", 'maxim-s-fashion-plus-2.png'],
  ['hostel-roots', 'Hostel Roots', 'hostel-roots-2.png'],
  ['harlem-dance-center', 'Harlem Dance Center', 'harlem-dance-center-2.png'],
  ['groovy-anton', 'Groovy Anton', 'groovy-anton-2.png'],
  ['haarlemse-fiets', 'Haarlemse Fiets', 'haarlemse-fiets-2.png'],
  ['staalconstructie-online', 'Staalconstructie Online', 'staalconstructie-online.png'],
  ['l-schuijt-klussenbedrijf', 'L. Schuijt Klussenbedrijf', 'l-schuijt-klussenbedrijf-2.png'],
  ['hart-huis-makelaardij', 'Hart & Huis Makelaardij', 'hart-huis-makelaardij-2.png'],
].map(([id, name, file], i) => ({ _id: `client-${id}`, _type: 'client', name, logo: img(`/images/advertisr/${file}`, name), sortOrder: i + 1 }));

export const team = [
  {
    _id: 'team-marc',
    name: 'Marc Jonk',
    role: 'Oprichter & Social Ads specialist',
    bio: 'Bouwt en optimaliseert Meta Ads campagnes en zet de strategie uit voor klanten.',
    photo: img('/images/advertisr/marc-jonk-oprichter-van-advertisr.jpg', 'Marc Jonk'),
  },
  {
    _id: 'team-dylan',
    name: 'Dylan Arnold',
    role: 'Oprichter & Google Ads specialist',
    bio: 'Bouwt en optimaliseert Google Ads campagnes, van zoekwoorden tot conversietracking.',
    photo: img('/images/advertisr/dylan-arnold.jpg', 'Dylan Arnold'),
    authorTitle: 'Performance Marketeer bij Advertisr.',
    authorBio:
      'Zet dagelijks Meta en Google Ads campagnes op voor klanten van Advertisr en houdt ze scherp geoptimaliseerd. Schrijft over wat er in de praktijk echt werkt, niet over de theorie uit een cursus.',
  },
  {
    _id: 'team-steve',
    name: 'Steve Jonk',
    role: 'Webdevelopment',
    bio: 'Bouwt websites en webshops die snel zijn en converteren.',
    photo: img('/images/advertisr/steve-jonk.jpg', 'Steve Jonk'),
  },
  {
    _id: 'team-jilles',
    name: 'Jilles Kaptein',
    role: 'Social media organisch & content',
    bio: 'Filmt, monteert en plant de content die jouw kanalen vult.',
    photo: img('/images/advertisr/jilles-kaptein-2.jpg', 'Jilles Kaptein'),
  },
].map((m, i) => ({ _type: 'teamMember', sortOrder: i + 1, ...m }));

export const cases = [
  {
    _id: 'case-ppexport',
    name: 'PPExport',
    category: 'Groothandel, Google & Meta Ads',
    badge: 'Groothandel · Internationaal',
    eyebrow: 'PPExport, bloemengroothandel',
    headline: 'Van sterke naam in Nederland naar speler in vier Europese landen.',
    summary:
      'PPExport had leads, maar geen internationale doorbraak. Met gerichte Google Ads en Meta-campagnes per land, een kwalificatieformulier vooraf en een scherpe focus op de markten die het beste converteerden, groeide het bedrijf uit tot een gevestigde naam in Duitsland, Spanje, Polen en Tsjechië.',
    image: img('https://advertisr.nl/wp-content/uploads/2025/11/Advertisr_blogppexort_cover.jpg', 'Case study PPExport, bloemengroothandel'),
    stats: [['164', 'leads/maand in de piekmaand'], ['€2', 'kosten per lead in Polen'], ['130K+', 'maandelijkse impressies']],
    tags: ['Google Ads', 'Meta Ads', 'SEO', 'Web development', 'Marketing automation'],
    url: 'https://advertisr.nl/case-study-ppexport/',
  },
  {
    _id: 'case-trockenblumen',
    name: 'Trockenblumen­grosshandel',
    category: 'Droogbloemen, Webshop & Ads',
    badge: 'E-commerce · Duitsland',
    eyebrow: 'Trockenblumengrosshandel, droogbloemen groothandel',
    headline: 'Van idee zonder webshop naar € 500.000 omzet.',
    summary:
      'Trockenblumengrosshandel had een sterke productlijn, maar nog geen digitaal verkoopkanaal. We bouwden een webshop op maat voor groothandelklanten en zetten daarna gerichte Meta- en Google Ads-campagnes op de Duitse markt op, met ruimte om snel te schalen naar Frankrijk, de Benelux en het Verenigd Koninkrijk.',
    image: img('https://advertisr.nl/wp-content/uploads/2024/10/blog_image_trockenblumen.jpg', 'Case study Trockenblumengrosshandel, Duitse groothandel in droogbloemen'),
    stats: [['€500K', 'omzet in 2023'], ['14×', 'ROAS op advertentiebudget'], ['4', 'landen bereikt']],
    tags: ['Web development', 'SEO', 'Google Ads', 'Meta Ads'],
    url: 'https://advertisr.nl/case-study-advertisr-online-marketingbureau-haarlem-over-internationaal-online-succes/',
  },
  {
    _id: 'case-ciao-italia',
    name: 'Ciao Italia',
    category: 'Horeca, Website & online ads',
    badge: 'Horeca · Lokaal',
    eyebrow: 'Ciao Italia, pizzeria & bezorgdienst',
    headline: 'Een verouderde website en groeiende concurrentie omgebogen naar +30% omzet.',
    summary:
      'Ciao Italia had een sterke reputatie sinds 1999, maar een website zonder online betalen en groeiende concurrentie in Culemborg. Na een nieuwe website met eenvoudig beheer voor de eigenaar zetten we Google Ads en Social Ads in, gericht op de eigen regio. Binnen dagen stegen de bestellingen merkbaar.',
    image: img('https://advertisr.nl/wp-content/uploads/2024/10/blog_image_Ciao_italia-1.jpg', 'Case study Ciao Italia, pizzeria in Culemborg'),
    stats: [['+30%', 'omzetgroei'], ['1999', 'jaar van oprichting'], ['Mnd.', 'rapportage aan de eigenaar']],
    tags: ['Web development', 'Google Ads', 'Meta Ads'],
    url: 'https://advertisr.nl/online-ads-case-study-ciao-italia/',
  },
].map((c, i) => ({ _type: 'caseStudy', sortOrder: i + 1, ...c, stats: c.stats.map(([value, label]) => ({ value, label })) }));

export const categories = [
  ['google-ads', 'Google Ads', '#FF3951', 'target'],
  ['meta-ads', 'Meta Ads', '#3B82F6', 'play'],
  ['seo-geo', 'SEO & GEO', '#22C55E', 'search'],
  ['data-analytics', 'Data & Analytics', '#F5A623', 'bars'],
  ['marketing-automation', 'Marketing Automation', '#06B6D4', 'nodes'],
  ['ai', 'AI & Automatisering', '#A855F7', 'spark'],
].map(([id, title, color, icon], i) => ({ _id: `category-${id}`, _type: 'articleCategory', title, color, icon, sortOrder: i + 1 }));

const GUIDE_FAQS: [string, string][] = [
  ['Wat kost Google Ads per maand?', 'Voor MKB-bedrijven ligt het advertentiebudget meestal tussen €750 en €5.000 per maand, afhankelijk van branche en doelstelling.'],
  ['Hoe snel werkt Google Ads?', 'Binnen 1 tot 2 weken kun je verkeer genereren. Optimalisatie duurt meestal 30 tot 90 dagen voordat je stabiele resultaten ziet.'],
  ['Is Google Ads geschikt voor kleine bedrijven?', 'Ja, mits er voldoende zoekvolume is binnen jouw niche en je marge toereikend is om een gezonde kosten-per-lead te dragen.'],
  ['Wat is beter: Google Ads of SEO?', 'Google Ads werkt direct, SEO is een langetermijnstrategie. De meeste bedrijven combineren beide voor het beste resultaat op zowel korte als lange termijn.'],
];

const inlineCta = (title: string) => ({
  _type: 'inlineCta',
  eyebrow: '✦ Gratis groeiplan',
  title,
  text: 'Wij rekenen het voor je door, kosteloos en vrijblijvend.',
  cta: cta('Ontvang mijn groeiplan', '/groeiplan'),
});

const GUIDE_BODY = [
  p('Veel MKB-bedrijven investeren in Google Ads, maar weten niet precies wat het oplevert. Er komen klikken binnen, er wordt budget uitgegeven, maar hoeveel klanten het daadwerkelijk oplevert blijft vaak onduidelijk. En dat is precies waar het misgaat.'),
  p('Google Ads kan één van de krachtigste groeikanalen zijn voor ondernemers, maar alleen als het goed is ingericht, doorgemeten en geoptimaliseerd.'),
  {
    _type: 'callout',
    variant: 'answer',
    label: '⚡ Kort antwoord',
    text: t('Voor de meeste MKB-bedrijven ligt een realistisch startbudget tussen **€750 en €5.000 per maand**, afhankelijk van branche en concurrentie. Google Ads is rendabel zodra je marge, conversieratio en tracking op orde zijn, en wordt pas écht winstgevend na 30 tot 90 dagen optimaliseren.'),
  },
  h2('Wat is Google Ads en hoe werkt het?'),
  p('Google Ads is het advertentieplatform van Google waarmee je zichtbaar wordt op het moment dat iemand actief zoekt naar jouw dienst of product. Dat is meteen het grote verschil met social media advertising: bij Google Ads is er al koopintentie.'),
  p('Als iemand zoekt op "dakdekker Haarlem", "marketingbureau Noord-Holland" of "tuinarchitect villa", dan wil die persoon iets. Nu.'),
  p('Je kunt via Google Ads zichtbaar worden via verschillende campagnetypes:'),
  li('**Zoekadvertenties**, tekstadvertenties boven de organische zoekresultaten'),
  li('**Performance Max**, geautomatiseerde campagnes die zoeknetwerk, display, YouTube en shopping combineren'),
  li('**Shopping campagnes**, voor e-commerce bedrijven met productfeeds'),
  li('**Display advertenties**, banners op websites binnen het Google-netwerk'),
  li('**YouTube advertenties**, video-advertenties gericht op specifieke doelgroepen'),
  p('Voor MKB-bedrijven zijn zoekadvertenties meestal de meest rendabele start, omdat je direct inspeelt op bestaande zoekintentie.'),
  h2('Wat kost Google Ads voor een MKB-bedrijf?'),
  p('Dit is de meest gestelde vraag, en terecht. De kosten van Google Ads bestaan uit twee onderdelen: advertentiebudget, wat je aan Google betaalt, en beheer of optimalisatie, intern of via een bureau.'),
  {
    _type: 'statGrid',
    stats: [
      ['€750–2.500', 'lokaal MKB per maand'],
      ['€1.500–5.000', 'regionaal MKB per maand'],
      ['€3.000–15.000+', 'e-commerce per maand'],
    ].map(([value, label]) => ({ value, label })),
  },
  p('Dit zijn geen vaste regels. Het hangt af van concurrentie op zoekwoorden, de klikprijs binnen jouw branche, de conversieratio van je website en je gemiddelde orderwaarde of marge.'),
  p('Stel: de gemiddelde CPC in jouw branche is €2,50 en je conversieratio ligt op 5%. Dan kost een lead ongeveer €50. Als één nieuwe klant gemiddeld €1.200 omzet oplevert bij 40% marge, is Google Ads extreem rendabel. Maar bij een conversieratio van 1% wordt diezelfde klik ineens vijf keer zo duur per lead.'),
  p('Veel ondernemers denken dat Google Ads "duur" is. In werkelijkheid is vaak de website of de tracking het probleem, niet het platform zelf.'),
  inlineCta('Benieuwd wat dit voor jouw branche betekent?'),
  h2('Wanneer is Google Ads rendabel?'),
  p('Google Ads is rendabel zodra je marges gezond zijn, je conversieratio klopt, je tracking goed staat en je voldoende data verzamelt om te kunnen optimaliseren.'),
  p('Voor leadgeneratie zien we in het MKB vaak een cost per lead tussen €15 en €75, afhankelijk van de branche. Bouw en technische sectoren zitten vaak hoger, horeca en retail vaak lager. Voor e-commerce is een ROAS tussen 300% en 600% gebruikelijk als startpunt.'),
  {
    _type: 'pullQuote',
    text: 'Het probleem is zelden Google Ads zelf. Het probleem is meestal geen duidelijke structuur, geen negatieve zoekwoorden, of een landingspagina die niet is geoptimaliseerd voor conversie.',
  },
  h2('Zelf doen of uitbesteden?'),
  p('Veel ondernemers starten zelf. Logisch, Google maakt het laagdrempelig om te beginnen. Maar de echte vraag is niet "kan ik het zelf?", maar "wat kost het me als ik fouten maak?".'),
  p('Zelf doen levert lage directe kosten, volledige controle en de mogelijkheid om snel te starten. Daar staat tegenover dat het tijdsintensief is, fouten direct geld kosten, en je geen externe benchmark of geavanceerde optimalisatie hebt.'),
  p('Uitbesteden geeft je structuur vanaf dag één, continue optimalisatie, benchmarkdata en strategisch inzicht, tegen beheerkosten. Maar als een bureau jouw kosten per lead met 30% weet te verlagen, verdient het zichzelf meestal vanzelf terug.'),
  h2('Veelgemaakte fouten bij Google Ads'),
  p('We zien regelmatig accounts waar 20 tot 40% van het budget weglekt door slechte inrichting. De meest voorkomende oorzaken:'),
  li('Geen conversietracking, of verkeerd ingestelde tracking'),
  li('Te brede zoekwoorden zonder duidelijke afbakening'),
  li('Geen negatieve zoekwoorden ingesteld'),
  li('Campagnes zonder heldere structuur laten draaien'),
  li('Geen landingspagina-optimalisatie'),
  li('Beslissingen nemen op gevoel in plaats van op data'),
  h2('Google Ads per branche'),
  p('Elke branche reageert anders op Google Ads.'),
  p('**Bouw & installatie** kennen hogere klikprijzen, maar ook een hogere leadwaarde, met de focus vaak op lokale targeting. **Restaurants & hospitality** hebben doorgaans een lage CPC en hoge conversies, met sterk seizoensgebonden campagnes. **Retail** combineert search met shopping, waarbij promoties en acties een grote rol spelen. **E-commerce** draait vooral op data: feedoptimalisatie is cruciaal, en opschalen gebeurt meestal via Performance Max.'),
  h2('Wat is een goede ROAS of CPA?'),
  {
    _type: 'callout',
    variant: 'definition',
    label: 'Definitie',
    text: t('**ROAS** (Return On Ad Spend) is de omzet die je terugkrijgt per euro advertentiebudget. **CPA** (Cost Per Acquisition) is wat één nieuwe klant of lead je gemiddeld kost.'),
  },
  p('Dit verschilt sterk per branche, maar als grove richtlijn geldt voor leadgeneratie €15 tot €75 per lead, en voor e-commerce een ROAS van 3 tot 6 (dus 300% tot 600%) als startpunt.'),
  p('Belangrijker dan ROAS is uiteindelijk winstgevendheid. Je kunt een ROAS van 800% hebben en alsnog verlies draaien als je marges te laag zijn.'),
  h2('Hoe start je winstgevend met Google Ads?'),
  p('Bepaal eerst een duidelijk doel, richt daarna je tracking goed in, bouw een strakke campagnestructuur, stel een realistisch testbudget vast, optimaliseer minimaal dertig dagen, en analyseer voortdurend je data om bij te sturen.'),
  p('Google Ads is geen knop die je aanzet. Het is een systeem dat je continu optimaliseert.'),
  inlineCta('Wil je weten of Google Ads voor jou rendabel is?'),
  h2('Is Google Ads geschikt voor jouw bedrijf?'),
  p('Google Ads werkt vooral goed als je klanten actief zoeken naar jouw dienst, je marge gezond is, je website conversiegericht is, en je bereid bent minimaal drie maanden te testen voordat je resultaten beoordeelt.'),
];

const article = (
  slug: string,
  title: string,
  excerpt: string,
  category: string,
  author: string,
  minutes: number,
  extra: Record<string, unknown> = {},
) => ({
  _id: `article-${slug}`,
  _type: 'article',
  title,
  slug: { _type: 'slug', current: slug },
  excerpt,
  category: ref(`category-${category}`),
  author: ref(`team-${author}`),
  minutes,
  featured: false,
  ...extra,
});

export const articles = [
  article(
    'google-ads-voor-mkb',
    'Google Ads voor MKB: complete gids voor winstgevende campagnes in 2026',
    'Alles over budgetten, rendement, veelgemaakte fouten en wanneer het wel of niet loont om uit te besteden.',
    'google-ads',
    'dylan',
    14,
    {
      featured: true,
      publishedAt: '2026-08-02',
      updatedAt: '2026-09-18',
      crumbLabel: 'Complete gids',
      intro:
        'Wat kost Google Ads nou echt voor een MKB-bedrijf, wanneer is het rendabel, en kun je het beter zelf doen of uitbesteden? Deze gids neemt je mee van de basis tot een winstgevende structuur.',
      body: GUIDE_BODY,
      // ponytail: source links are '#' in the design; add the real URLs in the studio.
      sources: [
        ['Google Ads Help, officiële documentatie over campagnetypes en biedstrategieën', '#'],
        ['CBS, Kleinschalig ondernemerschap in Nederland, meest recente cijfers', '#'],
        ['Interne benchmarkdata Advertisr op basis van lopende klantcampagnes, 2025–2026', ''],
      ].map(([label, url]) => ({ label, url: url || undefined })),
      tags: ['Google Ads', 'MKB', 'Strategie', 'Budget', 'ROAS'],
      $faqs: GUIDE_FAQS,
      related: ['wat-kost-google-ads-per-maand', 'roas-vs-cpa', 'google-ads-of-seo'].map((s) => ref(`article-${s}`)),
      ctaTitle: 'Klaar om Google Ads winstgevend te maken?',
      ctaText: 'In je gratis groeiplan zien we waar jouw account het meeste rendement laat liggen.',
      seo: {
        title: 'Google Ads voor MKB: complete gids',
        description:
          'Wat kost Google Ads voor een MKB-bedrijf, wanneer is het rendabel en kun je het beter zelf doen of uitbesteden? De complete gids.',
      },
    },
  ),
  article('meta-ads-voor-lokale-ondernemers', 'Meta Ads voor lokale ondernemers: de complete gids', 'Van doelgroepopbouw tot creatives die scoren: alles om lokaal te groeien via Facebook en Instagram.', 'meta-ads', 'marc', 12, {
    featured: true,
    updatedAt: '2026-09-10',
  }),
  article('wat-kost-google-ads-per-maand', 'Wat kost Google Ads per maand voor een MKB-bedrijf?', 'Concrete budgetten per branche, plus een simpele rekenmethode om je eigen break-even te bepalen.', 'google-ads', 'dylan', 7),
  article('meta-ads-fouten', '5 fouten die je Meta Ads-budget stilletjes verspillen', 'Van te brede targeting tot ontbrekende retargeting: dit zijn de fouten die we het vaakst tegenkomen.', 'meta-ads', 'marc', 6),
  article('wat-is-geo', 'Wat is GEO en waarom moet je er nu al mee beginnen?', 'Zoekmachines zijn niet meer het enige startpunt. Zo zorg je dat AI-antwoorden ook naar jou verwijzen.', 'seo-geo', 'steve', 8),
  article('ga4-checklist', 'GA4 instellen zonder dataverlies: de checklist', 'De meest gemaakte fouten bij een GA4-migratie, en hoe je ze in tien minuten voorkomt.', 'data-analytics', 'steve', 9),
  article('crm-en-mailtool-koppelen', 'Waarom je CRM en mailtool met elkaar moeten praten', 'Dubbele invoer kost je leads. Zo richt je een koppeling in die dat voorkomt.', 'marketing-automation', 'jilles', 5),
  article('ai-leadopvolging', 'Hoe wij AI gebruiken om leadopvolging te automatiseren', 'Een kijkje in de workflow die ervoor zorgt dat geen enkele lead langer dan vijf minuten wacht.', 'ai', 'marc', 10),
  article('google-ads-of-seo', 'Google Ads of SEO: wat pak je als eerste aan?', 'Twee kanalen, twee tijdlijnen. Dit bepaalt welke volgorde voor jouw situatie het snelst resultaat geeft.', 'seo-geo', 'dylan', 7),
  article('roas-vs-cpa', 'ROAS vs. CPA: welke KPI stuurt jouw campagnes echt?', 'Waarom sturen op één KPI je juist verkeerde beslissingen kan laten nemen.', 'data-analytics', 'steve', 6),
  article('welkomstflow', 'Zo bouw je een welkomstflow die daadwerkelijk converteert', 'De opbouw, timing en inhoud van een welkomstreeks die verder gaat dan alleen "bedankt voor je aanmelding".', 'marketing-automation', 'jilles', 8),
];

// ---------------------------------------------------------------------------
// Pages
// ---------------------------------------------------------------------------

const COMPARE = {
  _type: 'compare',
  eyebrow: 'Waarom Advertisr.',
  title: t('Bureaus zetten er vaak een laag tussen. *Wij niet.*'),
  lead: 'Je wilt weten wat je marketing oplevert, en je wilt iemand kunnen bellen als het niet loopt. Daar is ons hele bureau op ingericht.',
  themLabel: 'Wat je vaak ziet',
  usLabel: 'Bij Advertisr.',
  themPrefix: 'Vaak:',
  rows: [
    ['Wie je spreekt', 'Een accountmanager die je vraag doorzet naar iemand anders.', 'De marketeer die je campagnes zelf bouwt en bijstuurt.'],
    ['Contract', 'Een jaarcontract, vooraf vastgelegd.', 'Maandelijks opzegbaar. We moeten het elke maand waarmaken.'],
    ['Opstarten', 'Een eenmalige setup-fee voordat er iets draait.', 'Geen opstartkosten voor Ads. De inrichting zit in de eerste maand.'],
    ['Rapportage', 'Een pdf vol grafieken zonder uitleg.', 'Elke maand een gesprek: wat leverde het op, en wat doen we nu.'],
    ['Eigendom', 'Accounts en data staan op naam van het bureau.', 'Advertentieaccounts, data en tracking blijven altijd van jou.'],
  ].map(([label, them, us]) => ({ label, them, us })),
};

const reviewsBlock = (title = 'Wat klanten zeggen op Google.', count = 6) => ({ _type: 'reviews', eyebrow: 'Wat klanten zeggen', title: t(title), count });
const logos = (title: string, note = 'Van horeca tot makelaardij.') => ({ _type: 'logos', eyebrow: 'Vertrouwd door', title: t(title), note });
const faqs = (title: string, list: [string, string][], soft = false) => ({ _type: 'faqs', eyebrow: 'Veelgestelde vragen', title: t(title), $faqs: list, soft });
const finalCta = (o: { eyebrow?: string; title?: string; lead: string; bullets?: string[]; form: Record<string, unknown>; dots?: boolean }) => ({
  _type: 'finalCta',
  anchor: 'groeiplan',
  eyebrow: o.eyebrow ?? 'Klaar om te groeien?',
  title: t(o.title ?? 'Ontvang je gratis groeiplan.'),
  lead: o.lead,
  bullets: o.bullets ?? ['Reactie binnen 1 werkdag', '15 minuten kennismaking, geen verkooppraatje', 'Concreet plan, geen vage belofte'],
  form: o.form,
  dots: o.dots ?? false,
});
const steps = (list: string[][]) => list.map(([title, text]) => ({ title, text }));

const home = {
  slug: 'home',
  title: 'Home',
  seo: {},
  content: [
    {
      _type: 'homeHero',
      eyebrow: 'Online marketingbureau in Haarlem',
      title: t('Marketing zonder gedoe. *Groei* met bewijs.'),
      lead: t(
        'Wij bouwen groeisystemen op Meta Ads, Google Ads en **AI Agent Workflows**. Geen ticketsysteem, geen managementlaag. Je schakelt direct met de marketeers die je campagnes draaien.',
      ),
      primaryCta: cta('Ontvang mijn groeiplan', '#groeiplan'),
      secondaryCta: cta('Bekijk onze resultaten', '/resultaten'),
      note: 'Geen standaard adviesgesprek. Wij bellen, duiken in je huidige marketing en sturen een concreet plan met kansen, kanalen en aanpak. Vrijblijvend.',
      image: img('/images/advertisr/het-team-van-advertisr-bouwt-automatiser.jpg', 'Het team van Advertisr aan het werk op kantoor'),
      image2: img('/images/advertisr/het-team-van-advertisr-bouwt-workflows-o.jpg', 'Twee marketeers bespreken campagnedata'),
      image3: img('/images/advertisr/het-team-van-advertisr-op-kantoor-in-haa.jpg', 'Het team van Advertisr'),
    },
    { _type: 'marquee', items: ['Meta Ads', 'Google Ads', 'AI Agent Workflows', 'Web development', 'Social media organisch', 'SEO & GEO', 'Data & analytics', 'Marketing automation'] },
    COMPARE,
    {
      _type: 'stages',
      anchor: 'diensten',
      eyebrow: 'Diensten',
      title: t('Eén groeisysteem. *Vier schakels.*'),
      lead: 'Losse kanalen die niet met elkaar praten, leveren zelden groei op. Wij kijken naar de hele route: van eerste zoekopdracht tot opvolging van de lead.',
      stages: [
        ['Gevonden worden', 'Bovenaan staan op het moment dat iemand zoekt.', [['Google Ads', '/google-ads'], ['SEO & GEO', '/seo-geo']]],
        ['Opvallen', 'In beeld komen bij mensen die je nog niet kennen.', [['Meta Ads', '/meta-ads'], ['Social media organisch', '/social-media-organisch']]],
        ['Overtuigen', 'Van bezoeker naar aanvraag of bestelling.', [['Web development', '/web-development'], ['Data & analytics', '/data-analytics']]],
        ['Opvolgen', 'Geen lead meer die blijft liggen.', [['Marketing automation', '/marketing-automation'], ['AI Agent Workflows', '/ai-agent-workflows', 'n8n']]],
      ].map(([title, text, links]) => ({
        title,
        text,
        links: (links as string[][]).map(([label, href, badge]) => ({ label, href, badge })),
      })),
      band: {
        text: t('Je hoeft niet alles af te nemen. **In je groeiplan staat welke schakel bij jou het meeste oplevert.**'),
        cta: cta('Ontdek waar jouw kans ligt →', '#groeiplan'),
      },
    },
    {
      _type: 'caseCards',
      anchor: 'cases',
      eyebrow: 'Resultaten',
      title: t('Cijfers, geen beloftes.'),
      lead: 'Drie klanten, drie startpunten, drie keer aantoonbare groei. Van lokale pizzeria tot Europese groothandel.',
      cases: cases.map((c) => ref(c._id)),
    },
    {
      _type: 'approach',
      anchor: 'aanpak',
      eyebrow: 'Onze aanpak',
      title: t('Vier stappen. Geen verrassingen.'),
      steps: steps([
        ['Gesprek', 'We bellen en duiken in je markt, doelen, marges en huidige cijfers. Wij stellen de vragen, jij hoeft niets voor te bereiden.'],
        ['Groeiplan', 'Je ontvangt een concreet plan: welke kanalen, welke volgorde, welke investering en wat je realistisch mag verwachten.'],
        ['Bouwen', 'Tracking, campagnestructuur, creatives en automations worden ingericht. Geen aparte opstartkosten voor Ads.'],
        ['Optimaliseren', 'Maandelijkse rapportage en afstemming. Maandelijks opzegbaar, we houden je klant omdat het werkt, niet door een contract.'],
      ]),
      closing: { title: 'Zo ziet jouw eerste stap eruit.', text: 'Wij bellen, jij hoeft niets voor te bereiden. Vrijblijvend.', cta: cta('Ontvang mijn groeiplan', '#groeiplan') },
    },
    {
      _type: 'statBand',
      stats: [
        ['5', ',0', 'gemiddelde Google-review'],
        ['130', 'K', 'maandelijkse impressies voor één klant'],
        ['6', '×', 'disciplines onder één dak'],
        ['1', 'mnd', 'opzegtermijn, geen jaarcontract'],
      ].map(([value, unit, label]) => ({ value, unit, label })),
    },
    {
      _type: 'homeTeam',
      anchor: 'team',
      image: img('/images/advertisr/het-team-van-advertisr-op-kantoor-in-haa.jpg', 'Het team van Advertisr op kantoor'),
      badge: { title: 'Direct contact met je marketeer', text: 'Geen accountmanager, geen ticketsysteem' },
      eyebrow: 'Het team',
      title: t('De mensen die je campagnes draaien, zijn de mensen die je spreekt.'),
      paragraphs: [
        'Bij de meeste bureaus praat je met een accountmanager die daarna doorgeeft wat jij bedoelde. Bij ons zit je direct aan tafel met de marketeers die het werk uitvoeren. Kort lijntje, snel schakelen, geen ruis.',
        'We werken hands-on en persoonlijk: we denken mee over je hele bedrijf, niet alleen over je advertentieaccount.',
      ],
      chips: ['Vast aanspreekpunt', 'Maandelijkse strategie', 'Transparante rapportage', 'Geen langlopende contracten'],
    },
    logos('Merken die hun marketing bij ons neerleggen.', 'Van horeca tot B2B-export.'),
    reviewsBlock('Waarom ze blijven.', 10),
    finalCta({
      lead: 'Wij bellen je, brengen je huidige marketing in kaart en sturen een concreet plan met kansen, kanalen en aanpak. Volledig vrijblijvend.',
      form: {},
    }),
  ],
};

const teamPage = {
  slug: 'team',
  title: 'Team',
  seo: {
    title: 'Team',
    description:
      'Social ads, Google Ads, content, websites en automatisering uit één team. Vier specialisten die zelf bouwen wat ze adviseren en elke maand laten zien wat het oplevert.',
  },
  content: [
    {
      _type: 'pageHero',
      crumb: 'Team',
      eyebrow: 'Over Advertisr',
      title: t('Een klein team, *dicht op het werk.*'),
      lead: 'Social ads, Google Ads, content, websites en automatisering uit één team. Vier specialisten die zelf bouwen wat ze adviseren en elke maand laten zien wat het oplevert.',
      primaryCta: cta('Ontvang mijn groeiplan', '#groeiplan'),
      secondaryCta: cta('Ontmoet het team', '#team'),
      image: img('/images/advertisr/het-team-van-advertisr-op-kantoor-in-haa-2.jpg', 'Het team van Advertisr lacht op kantoor'),
    },
    {
      _type: 'teamGrid',
      anchor: 'team',
      eyebrow: 'Het team',
      title: t('De mensen achter de campagnes.'),
      lead: 'Vier specialisten, elk met een eigen vak. Samen dekken ze je hele online marketing.',
      members: team.map((m) => ref(m._id)),
    },
    {
      _type: 'story',
      eyebrow: 'Het verhaal',
      title: t('Waarom Advertisr bestaat.'),
      uspTitle: 'Waarin we verschillen',
      usps: [
        ['Alle disciplines in huis.', 'Social ads, Google Ads, SEO, websites, content en automatisering.'],
        ['Zelf filmen en maken.', 'Wij komen op locatie en leveren de creatie, niet alleen de campagne.'],
        ['Tracking eerst.', 'Pas als de meting klopt, gaat het budget erin.'],
        ['Maandelijks opzegbaar.', 'Zonder opstartkosten voor Ads, dus we moeten het elke maand waarmaken.'],
        ['Alles blijft van jou.', 'Accounts, data en tracking staan altijd op jouw naam.'],
        ['Elke maand een gesprek.', 'Wat leverde het op, en wat doen we nu.'],
      ].map(([title, text]) => ({ title, text })),
      paragraphs: [
        'Advertisr begon met een simpel idee: marketing die je kunt doorrekenen, gemaakt door mensen die verstand hebben van hun vak. Geen rapporten vol grafieken zonder uitleg, maar campagnes waarvan je elke maand precies ziet wat ze opleveren.',
        'Daarom bouwen we alles zelf. Social en Google Ads, content en video, websites, SEO en automatisering komen uit één team, zodat strategie, creatie en techniek op elkaar aansluiten in plaats van langs elkaar heen te werken.',
        'En we werken zoals wij zelf ingehuurd zouden willen worden: eerlijk over wat haalbaar is, transparant over wat het kost en zonder langlopende verplichtingen. Dat houdt ons scherp, want je blijft alleen zolang het werkt.',
      ],
    },
    { _type: 'ctaBand', title: t('Zin om kennis te maken?'), text: 'Vertel waar je nu staat. Wij laten zien waar de kansen liggen.', cta: cta('Ontvang mijn groeiplan', '#groeiplan') },
    logos('Merken die met ons team werken.'),
    finalCta({
      eyebrow: 'Zin om kennis te maken?',
      lead: 'Je eerste gesprek voer je met Marc. Geen intake door een junior, geen script. Gewoon een eerlijk gesprek over wat wél en niet gaat werken.',
      form: { interesse: 'Team / Over ons', messagePlaceholder: 'Waar wil je hulp bij?' },
    }),
  ],
};

const results = {
  slug: 'resultaten',
  title: 'Resultaten',
  seo: { title: 'Resultaten', description: 'Drie klanten, drie totaal verschillende branches, één patroon: gerichte campagnes die zich terugverdienen.' },
  content: [
    {
      _type: 'pageHero',
      crumb: 'Resultaten',
      eyebrow: 'Resultaten',
      title: t('Cijfers, *geen beloftes.*'),
      lead: 'Dit is wat er gebeurt als strategie, uitvoering en optimalisatie bij hetzelfde team liggen. Drie klanten, drie totaal verschillende branches, één patroon: gerichte campagnes die zich terugverdienen.',
      stats: [
        ['€500', 'K+', 'omzet in één jaar voor Trockenblumengrosshandel'],
        ['164', '', 'leads in de beste maand voor PPExport'],
        ['14', '×', 'ROAS op de advertentiecampagnes van Trockenblumengrosshandel'],
        ['+30', '%', 'omzetgroei voor pizzeria Ciao Italia'],
      ].map(([value, unit, label]) => ({ value, unit: unit || undefined, label })),
    },
    {
      _type: 'caseList',
      cases: cases.map((c) => ref(c._id)),
      band: {
        title: t('Welke case wordt de jouwe?'),
        text: 'In je gratis groeiplan zie je welke resultaten voor jouw branche en budget realistisch zijn.',
        cta: cta('Ontvang mijn groeiplan', '#groeiplan'),
      },
    },
    reviewsBlock(),
    logos('Van horeca tot internationale groothandel.', '10+ klanten, allemaal met een eigen aanpak.'),
    faqs('Wat deze cijfers voor jou betekenen.', [
      ['Zijn deze resultaten representatief voor mijn branche?', 'Elke branche en elk startpunt is anders. Wat deze cases gemeen hebben, is de aanpak: eerst de basis op orde, dan gericht testen, dan opschalen wat werkt. In je gratis groeiplan rekenen we door wat realistisch is voor jouw situatie.'],
      ['Hoe snel zie ik dit soort resultaten?', 'Ciao Italia zag binnen dagen meer bestellingen. PPExport en Trockenblumengrosshandel groeiden over maanden naar jaren naar hun huidige cijfers. Structurele groei kost tijd, eerste signalen meestal niet.'],
      ['Rapporteren jullie dit soort cijfers ook voor mij?', 'Ja. Elke klant krijgt periodieke rapportage met de cijfers die er voor hun situatie toe doen, geen lege vanity metrics.'],
    ]),
    finalCta({
      eyebrow: 'Wil jij de volgende case worden?',
      lead: 'Wij bellen je, brengen je situatie in kaart en sturen een concreet plan met kansen en aanpak. Volledig vrijblijvend.',
      form: { interesse: 'Resultaten', messagePlaceholder: 'Waar wil je hulp bij?' },
    }),
  ],
};

// ponytail: phone, WhatsApp and booking link are placeholders from the design; fill them in the studio.
const PHONE = 'tel:+31600000000';
const contact = {
  slug: 'contact',
  title: 'Contact',
  seo: {
    title: 'Contact',
    description: 'Geen contactformulier dat in een wachtrij verdwijnt. Je krijgt binnen één werkdag een reactie van iemand die je vraag ook echt kan beantwoorden.',
  },
  content: [
    {
      _type: 'contactHero',
      crumb: 'Contact',
      eyebrow: 'Contact',
      title: t('Laten we *even bellen.*'),
      lead: 'Geen contactformulier dat in een wachtrij verdwijnt. Je krijgt binnen één werkdag een reactie van iemand die je vraag ook echt kan beantwoorden.',
      quick: [
        ['✉️', 'E-mail', 'info@advertisr.nl', 'mailto:info@advertisr.nl'],
        ['📞', 'Telefoon', '[telefoonnummer]', PHONE],
        ['📍', 'Kantoor', 'Haarlem, Noord-Holland', ''],
        ['⏱️', 'Reactietijd', 'Binnen 1 werkdag', ''],
      ].map(([icon, label, value, href]) => ({ icon, label, value, href: href || undefined })),
      ticks: ['Geen verkooppraatje', 'Vrijblijvend gesprek', 'Reactie van een mens, geen bot'],
      anchor: 'contactformulier',
      form: {
        interesse: 'Contactpagina',
        messageLabel: 'Waar kunnen we mee helpen?',
        messagePlaceholder: 'Vertel kort waar je tegenaan loopt of wat je zoekt...',
        submitLabel: 'Verstuur bericht',
        fine: 'Geen spam. Je gegevens worden alleen gebruikt om contact met je op te nemen.',
      },
    },
    {
      _type: 'contactMethods',
      eyebrow: 'Andere manieren',
      title: t('Kies wat het snelst werkt voor jou.'),
      methods: [
        ['📞', 'Bellen', '[telefoonnummer]', 'Direct een marketeer aan de lijn', PHONE],
        ['✉️', 'E-mail', 'info@advertisr.nl', 'Meestal reactie dezelfde dag', 'mailto:info@advertisr.nl'],
        ['💬', 'WhatsApp', '[whatsapp-nummer]', 'Voor een snelle vraag tussendoor', '#'],
        ['📅', 'Plan direct', 'Kies een moment', 'Boek meteen 15 minuten in de agenda', '#'],
      ].map(([icon, title, value, text, href]) => ({ icon, title, value, text, href })),
    },
    reviewsBlock(),
    {
      _type: 'infoCard',
      icon: '📍',
      title: 'Op kantoor in Haarlem',
      text: 'Liever even langskomen dan bellen? Kan, op afspraak. Stuur even een berichtje zodat we tijd voor je vrijmaken.',
      cta: cta('Stuur een bericht', '#contactformulier'),
    },
    faqs('Voordat je contact opneemt.', [
      ['Hoe snel krijg ik reactie?', 'Binnen één werkdag, meestal sneller. Je krijgt altijd reactie van iemand uit het team zelf, niet van een geautomatiseerd systeem.'],
      ['Is het eerste gesprek vrijblijvend?', 'Ja. We bellen om je situatie te begrijpen en te kijken of we iets voor elkaar kunnen betekenen. Geen verplichtingen, geen druk.'],
      ['Kan ik ook langskomen op kantoor?', 'Zeker, op afspraak. Stuur een bericht via het formulier of mail ons even, dan plannen we een moment dat schikt.'],
      ['Werken jullie ook buiten Haarlem?', 'Ja, we werken met klanten door heel Nederland. Vrijwel alles kan op afstand, en waar nodig komen we langs.'],
    ]),
  ],
};

const groeiplan = {
  slug: 'groeiplan',
  title: 'Gratis groeiplan',
  seo: {
    title: 'Gratis groeiplan',
    description:
      'Wij brengen je huidige marketing in kaart, laten precies zien waar de kansen liggen en sturen je een concreet plan. Geen sjabloon, geen verplichtingen, geen verkooppraatje.',
  },
  content: [
    {
      _type: 'groeiplanHero',
      badge: '100% gratis & vrijblijvend',
      title: t('Ontvang je *gratis groeiplan* voor meer klanten uit online marketing.'),
      lead: 'Wij brengen je huidige marketing in kaart, laten precies zien waar de kansen liggen en sturen je een concreet plan. Geen sjabloon, geen verplichtingen, geen verkooppraatje.',
      ticks: [
        'Persoonlijk gesprek van 15 minuten met een marketeer, niet een verkoper',
        'Concreet plan op maat voor jouw branche en situatie',
        'Geen verplichtingen. Jij beslist of we samen verdergaan',
      ],
      mini: [['5.0', 'score op Google reviews'], ['164', 'leads/maand voor PPExport'], ['+30%', 'omzetgroei bij Ciao Italia']].map(([value, label]) => ({ value, label })),
      anchor: 'plan',
      formIntro: 'Vraag hem hieronder aan',
      form: { messagePlaceholder: 'Waar wil je meer klanten uit halen? Meta Ads, Google Ads, SEO...', submitLabel: 'Ontvang mijn gratis groeiplan' },
      floatStats: [
        { value: '5,0', label: 'gemiddeld op Google', stars: true },
        { value: '15 min', label: 'persoonlijk gesprek', stars: false },
      ],
    },
    {
      _type: 'valueGrid',
      eyebrow: 'Wat krijg je',
      title: t('Geen algemeen advies. Een plan voor jouw situatie.'),
      lead: 'Elk groeiplan is anders, want elk bedrijf is anders. Dit is wat er altijd in zit.',
      items: steps([
        ['Analyse van je huidige situatie', 'We bekijken je website, kanalen en waar je nu al zichtbaar bent, inclusief een blik op de concurrentie.'],
        ['Concrete kansen per kanaal', 'Meta Ads, Google Ads, SEO of automation: we laten zien waar voor jou de meeste winst te halen valt.'],
        ['Een stappenplan met prioriteit', 'Niet alles tegelijk. We laten zien wat eerst moet gebeuren, en wat later kan volgen.'],
        ['Eerlijke verwachtingen', 'Geen opgeblazen beloftes. Een reële inschatting van wat haalbaar is, en binnen welke termijn.'],
      ]),
    },
    COMPARE,
    {
      _type: 'stepsMedia',
      image: img('/images/advertisr/het-team-van-advertisr-op-kantoor-in-haa-2.jpg', 'Het team van Advertisr op kantoor in Haarlem'),
      badge: { title: 'Gewoon een gesprek', text: 'Geen verkooppraatje, wel een eerlijk beeld' },
      eyebrow: 'Zo werkt het',
      title: t('Van aanvraag tot plan in vier stappen.'),
      steps: steps([
        ['Vul het formulier in', "Kost je zo'n twee minuten. Hoe meer je vertelt, hoe scherper het plan wordt."],
        ['Wij bellen je', 'Vijftien minuten, geen verkooppraatje. We willen gewoon begrijpen waar je nu staat.'],
        ['Je ontvangt je groeiplan', 'Binnen enkele werkdagen krijg je een concreet plan, geschreven voor jouw situatie.'],
        ['Jij beslist', 'Sluit het aan? Dan bespreken we hoe we starten. Zo niet, dan hou je gewoon een gratis plan over.'],
      ]),
      band: {
        title: t('Klaar voor je gratis groeiplan?'),
        text: 'Twee minuten invullen, daarna weet je waar jouw marketing de meeste winst laat liggen.',
        cta: cta('Ontvang mijn groeiplan', '#plan'),
      },
    },
    reviewsBlock(),
    logos('Bedrijven die al met ons groeien.'),
    {
      _type: 'quoteBand',
      quote: {
        image: img('/images/advertisr/marc-jonk-oprichter-van-advertisr.jpg', 'Marc Jonk, oprichter van Advertisr'),
        line: t('Een groeiplan dat je in een la legt, helpt niemand. Daarom maken we het *concreet genoeg om er morgen mee te beginnen.*'),
        signature: 'Marc Jonk, oprichter Advertisr.',
      },
    },
    faqs('Voordat je het formulier invult.', [
      ['Is het groeiplan echt helemaal gratis?', 'Ja. Geen addertje onder het gras. We investeren zelf de tijd in het gesprek en het plan, omdat we geloven dat het de beste manier is om te laten zien hoe we werken.'],
      ['Zit ik ergens aan vast na het gesprek?', 'Nee. Je ontvangt gewoon je plan, ook als je daarna besluit er zelf mee aan de slag te gaan of niet met ons verder te gaan.'],
      ['Hoe lang duurt het voordat ik mijn plan ontvang?', 'Meestal binnen enkele werkdagen na ons telefoongesprek, afhankelijk van hoe uitgebreid je situatie is.'],
      ['Werkt dit ook als ik nog geen website of tracking heb?', 'Zeker. Juist dan is het waardevol, want dan nemen we dat gelijk mee als onderdeel van het plan.'],
      ['Wat als ik na het plan niet met jullie verder wil?', 'Geen probleem. Er is geen verplichting. Het plan is en blijft van jou, ongeacht wat je ermee doet.'],
    ]),
    finalCta({
      title: 'Vraag nu je gratis groeiplan aan.',
      lead: 'Twee minuten invullen, wij nemen contact op. Geen verplichtingen, geen verkooppraatje.',
      bullets: ['Reactie binnen 1 werkdag', '15 minuten kennismaking', 'Concreet plan, geen vage belofte'],
      form: { hideMessage: true, submitLabel: 'Ontvang mijn gratis groeiplan' },
    }),
  ],
};

const shot = (file: string, alt: string) => img(`/images/advertisr/${file}`, alt);

const seoGeo = {
  slug: 'seo-geo',
  title: 'SEO & GEO',
  seo: {
    title: 'SEO & GEO',
    description:
      "Elke maand nieuwe blogs en landingspagina's op basis van echte zoekdata, in jouw tone of voice, zonder dat het jou tijd kost. En je ziet precies wat het oplevert, ook in ChatGPT en Gemini.",
  },
  content: [
    {
      _type: 'serviceHero',
      crumb: 'SEO & GEO',
      eyebrow: 'SEO & GEO met Blogr. en Pagr.',
      title: t('Gevonden worden in Google *én in AI*.'),
      lead: "Elke maand nieuwe blogs en landingspagina's op basis van echte zoekdata, in jouw tone of voice, zonder dat het jou tijd kost. En je ziet precies wat het oplevert, ook in ChatGPT en Gemini.",
      secondaryCta: cta('Bekijk Blogr. en Pagr.', '#tools'),
      ticks: ['Geen opstartkosten', 'Maandelijks opzegbaar', 'Jij houdt de regie'],
      visual: 'portal',
      image: shot('overzicht-van-het-advertisr-portaal.jpg', 'Overzicht van het Advertisr portaal'),
      browserUrl: 'portaal.advertisr.nl',
      caption: 'Voorbeeld van ons portaal, met een fictieve klant en voorbeeldcijfers.',
      floatStats: [
        { value: '4 blogs', label: 'per maand, standaard' },
        { value: 'Wekelijks', label: 'AI-meting in ChatGPT en Gemini' },
      ],
    },
    { _type: 'marquee', items: ['Blogr.', 'Pagr.', 'Zoekdata', 'Search Console', 'AI zichtbaarheid', 'ChatGPT en Gemini', 'WordPress', 'Maandrapport', "Landingspagina's", 'Merkprofiel'] },
    {
      _type: 'pain',
      eyebrow: 'Waarom dit nu speelt',
      title: t('Je klant zoekt niet meer alleen in Google.'),
      lead: 'Steeds meer mensen stellen hun vraag aan ChatGPT of Gemini. Wie daar niet genoemd wordt, bestaat voor die klant niet. Content die Google vertrouwt, is ook de content die AI aanhaalt. Maar er zijn drie problemen.',
      items: [
        ['Ik zou echt vaker moeten bloggen, maar ik kom er niet aan toe.', 'Goede content schrijven kost tijd, elke maand opnieuw. Dat is precies waar het meestal stokt.'],
        ['Ik heb ChatGPT een blog laten schrijven, maar het klinkt nergens naar ons.', 'Snelle AI-tekst kopieert wat er al is. Het mist jouw toon, jouw feiten en jouw verhaal.'],
        ['Geen idee of die blogs eigenlijk iets opleveren.', 'Zonder meting blijft het gokken. Niemand kijkt naar bezoek, aanvragen of zichtbaarheid in AI.'],
      ].map(([quote, text]) => ({ quote, text })),
    },
    {
      _type: 'toolCards',
      anchor: 'tools',
      eyebrow: 'Onze eigen tools',
      title: t('Twee tools die dit werk voor je doen.'),
      lead: 'We bouwden Blogr. en Pagr. om vindbaarheid betaalbaar, structureel en meetbaar te maken voor ons klanten. Samen met ons team, niet in plaats van.',
      tools: [
        {
          tag: 'Elke maand nieuwe content',
          name: 'Blogr',
          text: 'Maandelijks blogs op basis van zoekdata, geschreven in jouw toon en gecontroleerd op feiten. Klaargezet in WordPress als concept.',
          points: ['Standaard 4 blogs per maand', 'Onderwerpen gekozen op zoekdata en Search Console', 'Jouw tone of voice via merkprofiel en kennisdocument', 'Automatische kwaliteitscontrole voor publicatie'],
        },
        {
          tag: "Pagina's die aanvragen opleveren",
          name: 'Pagr',
          text: "Landingspagina's per dienst en per plaats, in de stijl van jouw website. Het plan baseren we op zoekdata en keuren we samen goed.",
          points: ['Pagina per dienst en werkgebied', 'Inclusief FAQ en kloppende bedrijfsgegevens', 'Live in WordPress, jij hoeft niets te doen', 'Plan voorgesteld door AI, goedgekeurd door ons'],
        },
      ],
      options: [
        ['Alleen Blogr.', 'Voor wie structureel wil groeien met content en nieuwe zoekvragen.'],
        ['Alleen Pagr.', 'Voor wie vooral gevonden wil worden op diensten en plaatsen.'],
        ['Beide samen', "Blogs en pagina's verwijzen naar elkaar en alles loopt via één portaal."],
      ].map(([title, text], i) => ({ title, text, highlight: i === 2 })),
    },
    {
      _type: 'stepCards',
      eyebrow: 'Zo werkt Blogr.',
      title: t('Van zoekdata tot blog in jouw WordPress.'),
      steps: steps([
        ['Onderwerpen kiezen', 'Op basis van zoekdata en Search Console kiezen we de vragen waar jouw klanten echt naar zoeken.'],
        ['Schrijven in jouw toon', 'Met je merkprofiel en kennisdocument klinkt elke blog als jouw bedrijf.'],
        ['Kwaliteitscontrole', 'Automatische controle op feiten en stijl, voordat jij er iets van ziet.'],
        ['Klaarzetten in WordPress', 'Met interne links, titel, omschrijving en afbeelding, als concept.'],
        ['Goedkeuren op jouw manier', 'In het portaal, of laat ons plaatsen. Jij beslist.'],
        ['Meten en bijsturen', 'We kijken wat werkt en sturen elke maand bij op basis van de cijfers.'],
      ]),
      band: {
        title: t('Benieuwd wat Blogr. en Pagr. voor jouw website kunnen doen?'),
        text: 'Plan een kennismaking. We laten het portaal zien en vertellen eerlijk wat we verwachten.',
        cta: cta('Ontvang mijn groeiplan', '#groeiplan'),
      },
    },
    {
      _type: 'features',
      browserUrl: 'portaal.advertisr.nl',
      items: [
        {
          eyebrow: 'Jij houdt de regie',
          title: 'Snel, maar nooit buiten jouw merk om.',
          points: [
            '**Merkprofiel en kennisdocument.** Daar staat in hoe jij klinkt en wat er waar is over je bedrijf.',
            '**Ideeën aandragen.** Heb je zelf een onderwerp? Zet het in het portaal.',
            '**Goedkeuren of laten plaatsen.** Jij bepaalt hoeveel je zelf wilt doen.',
          ],
          note: "**Bestaande pagina's blijven van jou.** We zetten geen verzonnen klantverhalen, cijfers of beloftes in een blog.",
          images: [shot('blogs-in-het-portaal.jpg', 'Blogs in het portaal')],
        },
        {
          eyebrow: 'Meten wat het oplevert',
          title: 'Per blog en per pagina zie je wat er gebeurt.',
          text: 'Geen vage rapporten. Via Search Console en Analytics volg je de weg van bezoek naar aanvraag.',
          points: ['Resultaten **per blog en per pagina**', 'Acties worden **na 28 dagen opnieuw gemeten**', 'Elke maand een **duidelijk maandrapport**'],
          images: [shot('google-resultaten-in-het-portaal.jpg', 'Google resultaten in het portaal')],
          flip: true,
        },
        {
          eyebrow: 'AI zichtbaarheid',
          title: 'Word je genoemd in ChatGPT en Gemini?',
          text: 'Elke week stellen we een vaste set kernvragen aan ChatGPT en Gemini. We tellen of je merk wordt genoemd, welke bron wordt gebruikt en waar kansen liggen.',
          note: '**Eerlijk over de cijfers.** AI-antwoorden verschillen per keer. Daarom kijken we naar de richting over meerdere weken, niet naar één losse meting.',
          images: [shot('ai-zichtbaarheid-in-het-portaal.jpg', 'AI zichtbaarheid in het portaal')],
        },
        {
          eyebrow: 'Pagr.',
          title: "Landingspagina's per dienst en plaats, zonder gedoe.",
          text: "AI stelt een plan voor op basis van zoekdata. Wij keuren het goed, bouwen de pagina's in de stijl van je website en zetten ze live in WordPress.",
          points: ['Een pagina per **dienst en werkgebied**', '**FAQ en kloppende gegevens** op elke pagina', 'Jij hoeft **niets te doen**'],
          images: [shot('landingspagina-s-in-het-portaal.jpg', "Landingspagina's in het portaal"), shot('pagr-plan-in-het-portaal.jpg', 'Pagr. plan in het portaal')],
          flip: true,
        },
      ].map((f) => ({
        ...f,
        points: f.points?.map((pt) => ({ text: t(pt) })),
        note: f.note ? t(f.note) : undefined,
        flip: !!f.flip,
      })),
    },
    {
      _type: 'funnel',
      anchor: 'aanpak',
      eyebrow: 'Het fundament',
      title: t('Eén fundament, twee uitkomsten.'),
      body: 'De content en structuur die Google vertrouwt, is dezelfde die een AI-zoekmachine aanhaalt. Blogr. en Pagr. draaien daarom op drie lagen, van technisch fundament tot zichtbaarheid.',
      layers: [
        ['Laag 1 · Fundament', 'Een technisch gezonde basis', 'Snelheid, indexering, mobielvriendelijkheid en structured data. Zonder gezond fundament heeft content geen effect.'],
        ['Laag 2 · Autoriteit', 'Topical content opbouwen', "Blogs en pagina's rond de vragen die jouw klanten echt stellen, met interne links die laten zien dat je het onderwerp beheerst."],
        ['Laag 3 · Zichtbaarheid', 'Verschijnen waar mensen zoeken', 'In Google en in AI-antwoorden van ChatGPT en Gemini, gemeten in het portaal.'],
      ].map(([tag, title, text]) => ({ tag, title, text })),
    },
    {
      _type: 'procSteps',
      eyebrow: 'Starten',
      title: t('Zo starten we samen.'),
      steps: steps([
        ['Kennismaking en intake', 'We bekijken je website en doelen.'],
        ['Strategie voor Google en AI', 'We bepalen waar de kansen liggen.'],
        ['Merkprofiel bevestigen', 'Jij checkt toon en feiten.'],
        ['Google koppelen', 'Search Console en Analytics aan het portaal.'],
        ['Eerste blog of pagina live', 'Je ziet direct resultaat in het portaal.'],
      ]),
    },
    reviewsBlock(),
    faqs(
      'Wat je waarschijnlijk wilt weten.',
      [
        ['Wat is het verschil tussen SEO en GEO?', "SEO zorgt dat je gevonden wordt in Google. GEO zorgt dat AI-tools als ChatGPT en Gemini jouw bedrijf noemen als bron of antwoord. Het fundament is grotendeels hetzelfde: duidelijke, betrouwbare pagina's en blogs over de vragen die je klanten echt stellen. Daarom pakken we beide in één aanpak op."],
        ['Moet ik kiezen tussen Blogr. en Pagr.?', "Nee. Je kunt starten met Blogr. voor maandelijkse blogs, met Pagr. voor landingspagina's per dienst en plaats, of met beide. Bij beide verwijzen blogs en pagina's naar elkaar en werk je vanuit één portaal."],
        ['Hoeveel blogs krijg ik per maand?', 'Standaard schrijven we vier blogs per maand. De onderwerpen kiezen we op basis van zoekdata en Search Console, en jij kunt zelf ook ideeën aandragen.'],
        ['Kan ik blogs eerst goedkeuren?', "Ja. Elke blog wordt als concept in WordPress klaargezet. Jij keurt goed op jouw manier, via het portaal of door het ons te laten plaatsen. Bestaande pagina's van jouw website blijven van jou."],
        ['Verzint AI geen dingen over mijn bedrijf?', 'We werken met een merkprofiel en een kennisdocument, waarin jouw tone of voice en feiten staan. Elke tekst krijgt een automatische kwaliteitscontrole en we zetten geen verzonnen klantverhalen, cijfers of beloftes in een blog.'],
        ['Welke cijfers krijg ik te zien?', 'Via Search Console en Analytics zie je per blog en per pagina wat er gebeurt, van bezoek tot aanvraag. Acties worden na 28 dagen opnieuw gemeten en je ontvangt elke maand een rapport. Daarnaast meten we wekelijks of je genoemd wordt in ChatGPT en Gemini.'],
        ['Kunnen jullie garanderen dat ik in ChatGPT genoemd word?', 'Nee, en dat zou niemand eerlijk kunnen beloven. AI-antwoorden verschillen per keer. Daarom kijken we naar de richting over meerdere weken: hoe vaak je genoemd wordt, welke bronnen worden gebruikt en waar kansen liggen.'],
        ['Hoe snel zie ik resultaat?', 'De eerste blog of pagina staat na de start snel live. Zoekresultaten bouwen daarna op, dus reken op een traject van maanden in plaats van weken. Wat er in die tijd gebeurt zie je steeds terug in het portaal.'],
        ['Werkt dit ook als mijn website niet in WordPress staat?', 'Blogr. en Pagr. zetten content nu klaar in WordPress. Draait jouw site op iets anders, vertel het ons in het kennismakingsgesprek. Dan kijken we eerlijk wat er mogelijk is.'],
        ['Zit ik ergens aan vast?', 'Nee. Er zijn geen opstartkosten en je kunt maandelijks opzeggen.'],
      ],
      true,
    ),
    logos('Merken die hun vindbaarheid bij ons neerleggen.'),
    finalCta({
      eyebrow: 'Klaar voor de volgende stap?',
      lead: 'We kijken eerlijk naar je website, laten het portaal zien en vertellen wat we verwachten van Blogr., Pagr. of beide. Volledig vrijblijvend.',
      bullets: ['Reactie binnen 1 werkdag', '15 minuten kennismaking, geen verkooppraatje', 'Eerlijk advies over wat het jou oplevert'],
      form: { interesse: 'SEO & GEO', messagePlaceholder: 'Waar wil je mee groeien? Meer vindbaarheid, meer aanvragen, zichtbaar in ChatGPT...' },
      dots: true,
    }),
  ],
};

const kennisbank = {
  slug: 'kennisbank',
  title: 'Kennisbank',
  seo: { title: 'Kennisbank', description: 'Praktische gidsen over online marketing, geschreven door de mensen die de campagnes ook echt beheren.' },
  content: [
    {
      _type: 'articleIndex',
      crumb: 'Kennisbank',
      eyebrow: 'Kennisbank',
      title: t('Alles wat je wilt weten over *online marketing.*'),
      lead: 'Praktische gidsen, geen vage theorie. Geschreven door de mensen die de campagnes ook echt beheren.',
      searchLabel: 'Zoek in de kennisbank',
      searchPlaceholder: "Zoek op onderwerp, bijvoorbeeld 'ROAS' of 'GA4'...",
      searchButton: 'Zoeken',
      allLabel: 'Alle artikelen',
      noResults: 'Geen artikelen gevonden. Probeer een ander woord of een andere categorie.',
      featured: { eyebrow: 'Uitgelicht', title: t('Onze complete gidsen.'), lead: 'Lange, diepgaande artikelen die één onderwerp compleet behandelen.' },
      latest: { eyebrow: 'Nieuwste artikelen', title: t('Praktisch, geen theorie.') },
      loadMoreLabel: 'Meer artikelen laden',
      band: {
        title: t('Wil je dit niet zelf uitzoeken?'),
        text: 'Laat ons in je gratis groeiplan zien waar jouw marketing de meeste winst laat liggen.',
        cta: cta('Ontvang mijn groeiplan', '/groeiplan'),
      },
      newsletter: {
        title: 'Blijf op de hoogte.',
        text: 'Eén keer per maand een nieuw artikel of praktische tip in je inbox. Geen spam, geen verkooppraatje.',
        interesse: 'Nieuwsbrief',
      },
    },
  ],
};

export const pages = [home, teamPage, results, contact, groeiplan, seoGeo, kennisbank];
