import type { MetadataRoute } from 'next';
import { HOME_SLUG, pathForSlug } from '@/lib/links';
import { SITE_URL } from '@/lib/site';
import { STATIC_PATHS } from '@/lib/advertisr/nav';
import { safeFetch } from '@/sanity/client';
import { sanityCache } from '@/sanity/fetch';
import { PAGE_SLUGS_QUERY } from '@/sanity/queries';
import type { PAGE_SLUGS_QUERY_RESULT } from '@/sanity/sanity.types';

const options = sanityCache;

/**
 * The static Advertisr. routes, plus every CMS page listed from the CMS itself.
 *
 * CMS pages need no per-page route files: publish one in the studio and it
 * appears here, with `lastModified` from the document's own `_updatedAt`.
 * A CMS page whose path a static route already owns (the home page, say) is
 * left out, since the static route is what visitors get. An unreachable CMS
 * leaves the static routes standing instead of failing the build.
 *
 * Served at `/sitemap.xml`; `robots.ts` points at it.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = (await safeFetch<PAGE_SLUGS_QUERY_RESULT>(PAGE_SLUGS_QUERY, {}, options)) ?? [];

  const fixed = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : 0.8,
  }));

  const cms = pages
    .filter((page) => page.slug !== HOME_SLUG && !STATIC_PATHS.includes(pathForSlug(page.slug)))
    .map((page) => ({
      url: `${SITE_URL}${pathForSlug(page.slug)}`,
      lastModified: new Date(page._updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

  return [...fixed, ...cms];
}
