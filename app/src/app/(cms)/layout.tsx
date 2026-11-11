import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { siteJsonLd } from '@/lib/json-ld';
import { toLabeledHref, type SanityLabeledLink } from '@/lib/links';
import { SITE_URL, type FooterLinkGroup, type NavLink } from '@/lib/site';
import { safeFetch } from '@/sanity/client';
import { sanityCache } from '@/sanity/fetch';
import { FOOTER_QUERY, NAVIGATION_QUERY } from '@/sanity/queries';
import { getSiteInformation } from '@/sanity/site-information';

/**
 * Site-wide metadata defaults, from the `siteInformation` singleton.
 *
 * Per-page `seo` fields from the CMS layer on top of this (see
 * `src/sanity/metadata.ts`); anything a page leaves unset falls back here.
 * `metadataBase` is what turns a relative og:image path into an absolute URL,
 * so set NEXT_PUBLIC_SITE_URL in production or social previews will break —
 * the sitemap and robots routes read the same value.
 */
export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteInformation();

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: site.name,
      template: `%s - ${site.name}`,
    },
    description: site.description,
    openGraph: {
      type: 'website',
      siteName: site.name,
    },
  };
}

const options = sanityCache;

type SanityNavigation = {
  navLeft?: SanityLabeledLink[] | null;
  navRight?: SanityLabeledLink[] | null;
} | null;

type SanityFooter = {
  linkGroups?: Array<{
    title?: string | null;
    links?: SanityLabeledLink[] | null;
  } | null> | null;
  copyright?: string | null;
} | null;

function asNavLinks(links: SanityLabeledLink[] | null | undefined): NavLink[] {
  return (links ?? []).map((link) => toLabeledHref(link)).filter((link): link is NavLink => Boolean(link));
}

/** Chrome for the CMS-driven template pages (the [slug] route). */
export default async function CmsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Chrome only — a CMS outage leaves the header and footer bare rather than
  // failing every page. Page content is fetched with `client.fetch` and throws.
  const [site, navigation, footer] = await Promise.all([
    getSiteInformation(),
    safeFetch<SanityNavigation>(NAVIGATION_QUERY, {}, options),
    safeFetch<SanityFooter>(FOOTER_QUERY, {}, options),
  ]);

  const navLeft = asNavLinks(navigation?.navLeft);
  const navRight = asNavLinks(navigation?.navRight);

  const linkGroups: FooterLinkGroup[] = (footer?.linkGroups ?? [])
    .filter((group): group is { title: string; links?: SanityLabeledLink[] | null } => Boolean(group?.title))
    .map((group) => ({
      title: group.title,
      links: asNavLinks(group.links),
    }));

  return (
    <>
      {/* The organisation and the site belong on every page. */}
      <JsonLd data={siteJsonLd(site)} />
      <SiteHeader siteName={site.name} menuLabel={site.interfaceText.menuLabel} navLeft={navLeft} navRight={navRight} />
      {children}
      <SiteFooter site={site} linkGroups={linkGroups} copyright={footer?.copyright} />
    </>
  );
}
