/** Every service page, in the footer's order. */
export const SERVICES = [
  { label: 'Meta Ads', href: '/meta-ads' },
  { label: 'Google Ads', href: '/google-ads' },
  { label: 'AI Agent Workflows', href: '/ai-agent-workflows' },
  { label: 'Social media organisch', href: '/social-media-organisch' },
  { label: 'Web development', href: '/web-development' },
  { label: 'SEO & GEO', href: '/seo-geo' },
  { label: 'Data & analytics', href: '/data-analytics' },
  { label: 'Marketing automation', href: '/marketing-automation' },
] as const;

export const NAV = [
  { label: 'Diensten', href: '/#diensten' },
  { label: 'Resultaten', href: '/resultaten' },
  { label: 'Aanpak', href: '/#aanpak' },
  { label: 'Team', href: '/team' },
  { label: 'Kennisbank', href: '/kennisbank' },
] as const;

/** Pages without their own #groeiplan form section: the nav CTA goes to /groeiplan. */
export const NO_FORM_PATHS = ['/contact', '/kennisbank'];

export const CONTACT = {
  email: 'info@advertisr.nl',
  city: 'Haarlem, NH',
};

/** Every static Advertisr. route, for the sitemap. */
export const STATIC_PATHS = [
  '/',
  ...SERVICES.map((s) => s.href),
  '/resultaten',
  '/team',
  '/kennisbank',
  '/kennisbank/google-ads-voor-mkb',
  '/contact',
  '/groeiplan',
];
