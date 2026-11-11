import { cache } from 'react';
import { safeFetch } from '@/sanity/client';
import { sanityCache } from '@/sanity/fetch';
import { SITE_QUERY } from '@/sanity/queries';
import type { SITE_QUERY_RESULT } from '@/sanity/sanity.types';

/**
 * The site's public origin, without a trailing slash. From the environment:
 * it differs per deploy and `metadataBase`, robots and the sitemap need it
 * without a CMS round trip.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

type Info = NonNullable<SITE_QUERY_RESULT['info']>;

/** Every interface string; one the CMS leaves empty renders as nothing. */
export type Ui = NonNullable<Info['interfaceText']>;

export type Link = { label: string; href: string };

export type Site = {
  name: string;
  defaultTitle: string;
  description: string;
  language: string;
  email: string;
  phone: string;
  city: string;
  address: string[];
  addressCountry: string;
  socialLinks: string[];
  logoUrl: string | null;
  ui: Ui;
  nav: { links: (Link & { match: string[] })[]; ctaLabel: string; landingCtaLabel: string };
  footer: { columns: { title: string; links: Link[] }[]; legal: Link[]; copyright: string };
  /** The Google score as the badges print it ("5,0"), or '' before the first sync. */
  rating: string;
};

const links = (items: { label?: string; href?: string }[] | null | undefined): Link[] =>
  (items ?? []).filter((l) => l.label).map((l) => ({ label: l.label!, href: l.href || '#' }));

/**
 * Site details, interface text, nav, footer and Google score in one request.
 *
 * All copy lives in Sanity; there are no fallback strings in code, so an empty
 * field renders empty. `cache` makes it one request per render however many
 * components ask; `safeFetch` keeps the chrome standing if the CMS is down.
 */
export const getSite = cache(async (): Promise<Site> => {
  const data = await safeFetch<SITE_QUERY_RESULT>(SITE_QUERY, {}, sanityCache);
  const info = data?.info;
  const rating = data?.google?.rating;

  return {
    name: info?.name ?? '',
    defaultTitle: info?.defaultTitle ?? info?.name ?? '',
    description: info?.description ?? '',
    language: info?.language || 'nl',
    email: info?.email ?? '',
    phone: info?.phone ?? '',
    city: info?.city ?? '',
    address: info?.address ?? [],
    addressCountry: info?.addressCountry ?? '',
    socialLinks: info?.socialLinks ?? [],
    logoUrl: info?.logoUrl ?? null,
    ui: info?.interfaceText ?? {},
    nav: {
      links: (data?.nav?.links ?? [])
        .filter((l) => l.label)
        .map((l) => ({ label: l.label!, href: l.href || '#', match: l.match ?? [] })),
      ctaLabel: data?.nav?.ctaLabel ?? '',
      landingCtaLabel: data?.nav?.landingCtaLabel ?? '',
    },
    footer: {
      columns: (data?.footer?.columns ?? []).map((c) => ({ title: c.title ?? '', links: links(c.links) })),
      legal: links(data?.footer?.legal),
      copyright: data?.footer?.copyright ?? '',
    },
    rating: rating ? rating.toFixed(1).replace('.', ',') : '',
  };
});

export function mailtoHref(email: string) {
  return `mailto:${email.trim()}`;
}
