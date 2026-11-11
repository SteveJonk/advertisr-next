/** Kennisbank content. Only the Google Ads guide has a page so far; the rest link to '#' as in the design. */

export type Category = 'Google Ads' | 'Meta Ads' | 'SEO & GEO' | 'Data & Analytics' | 'Marketing Automation' | 'AI & Automatisering';

export const CATEGORIES: Category[] = [
  'Google Ads',
  'Meta Ads',
  'SEO & GEO',
  'Data & Analytics',
  'Marketing Automation',
  'AI & Automatisering',
];

export const AUTHORS = {
  dylan: { name: 'Dylan Arnold', img: '/images/advertisr/dylan-arnold.jpg' },
  marc: { name: 'Marc Jonk', img: '/images/advertisr/marc-jonk-oprichter-van-advertisr.jpg' },
  steve: { name: 'Steve Jonk', img: '/images/advertisr/steve-jonk.jpg' },
  jilles: { name: 'Jilles Kaptein', img: '/images/advertisr/jilles-kaptein.jpg' },
} as const;

export type Author = keyof typeof AUTHORS;

export type Article = {
  title: string;
  excerpt: string;
  cat: Category;
  author: Author;
  minutes: number;
  href: string;
  updated?: string;
};

export const PILLARS: Article[] = [
  {
    title: 'Google Ads voor MKB: complete gids voor winstgevende campagnes in 2026',
    excerpt: 'Alles over budgetten, rendement, veelgemaakte fouten en wanneer het wel of niet loont om uit te besteden.',
    cat: 'Google Ads',
    author: 'dylan',
    minutes: 14,
    href: '/kennisbank/google-ads-voor-mkb',
    updated: '18 sep 2026',
  },
  {
    title: 'Meta Ads voor lokale ondernemers: de complete gids',
    excerpt: 'Van doelgroepopbouw tot creatives die scoren: alles om lokaal te groeien via Facebook en Instagram.',
    cat: 'Meta Ads',
    author: 'marc',
    minutes: 12,
    href: '#',
    updated: '10 sep 2026',
  },
];

export const ARTICLES: Article[] = [
  {
    title: 'Wat kost Google Ads per maand voor een MKB-bedrijf?',
    excerpt: 'Concrete budgetten per branche, plus een simpele rekenmethode om je eigen break-even te bepalen.',
    cat: 'Google Ads',
    author: 'dylan',
    minutes: 7,
    href: '#',
  },
  {
    title: '5 fouten die je Meta Ads-budget stilletjes verspillen',
    excerpt: 'Van te brede targeting tot ontbrekende retargeting: dit zijn de fouten die we het vaakst tegenkomen.',
    cat: 'Meta Ads',
    author: 'marc',
    minutes: 6,
    href: '#',
  },
  {
    title: 'Wat is GEO en waarom moet je er nu al mee beginnen?',
    excerpt: 'Zoekmachines zijn niet meer het enige startpunt. Zo zorg je dat AI-antwoorden ook naar jou verwijzen.',
    cat: 'SEO & GEO',
    author: 'steve',
    minutes: 8,
    href: '#',
  },
  {
    title: 'GA4 instellen zonder dataverlies: de checklist',
    excerpt: 'De meest gemaakte fouten bij een GA4-migratie, en hoe je ze in tien minuten voorkomt.',
    cat: 'Data & Analytics',
    author: 'steve',
    minutes: 9,
    href: '#',
  },
  {
    title: 'Waarom je CRM en mailtool met elkaar moeten praten',
    excerpt: 'Dubbele invoer kost je leads. Zo richt je een koppeling in die dat voorkomt.',
    cat: 'Marketing Automation',
    author: 'jilles',
    minutes: 5,
    href: '#',
  },
  {
    title: 'Hoe wij AI gebruiken om leadopvolging te automatiseren',
    excerpt: 'Een kijkje in de workflow die ervoor zorgt dat geen enkele lead langer dan vijf minuten wacht.',
    cat: 'AI & Automatisering',
    author: 'marc',
    minutes: 10,
    href: '#',
  },
  {
    title: 'Google Ads of SEO: wat pak je als eerste aan?',
    excerpt: 'Twee kanalen, twee tijdlijnen. Dit bepaalt welke volgorde voor jouw situatie het snelst resultaat geeft.',
    cat: 'SEO & GEO',
    author: 'dylan',
    minutes: 7,
    href: '#',
  },
  {
    title: 'ROAS vs. CPA: welke KPI stuurt jouw campagnes echt?',
    excerpt: 'Waarom sturen op één KPI je juist verkeerde beslissingen kan laten nemen.',
    cat: 'Data & Analytics',
    author: 'steve',
    minutes: 6,
    href: '#',
  },
  {
    title: 'Zo bouw je een welkomstflow die daadwerkelijk converteert',
    excerpt: 'De opbouw, timing en inhoud van een welkomstreeks die verder gaat dan alleen "bedankt voor je aanmelding".',
    cat: 'Marketing Automation',
    author: 'jilles',
    minutes: 8,
    href: '#',
  },
];
