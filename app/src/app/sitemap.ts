import type { MetadataRoute } from 'next';
import { pathForSlug } from '@/lib/links';
import { SITE_URL } from '@/lib/site-url';
import { safeFetch } from '@/sanity/client';
import { sanityCache } from '@/sanity/fetch';
import { ARTICLE_SLUGS_QUERY, CASE_SLUGS_QUERY, PAGE_SLUGS_QUERY } from '@/sanity/queries';
import type { ARTICLE_SLUGS_QUERY_RESULT, CASE_SLUGS_QUERY_RESULT, PAGE_SLUGS_QUERY_RESULT } from '@/sanity/sanity.types';

/**
 * Every page, case study and article with a body, straight from the CMS, with
 * `lastModified` from the document. An unreachable CMS gives an empty sitemap
 * instead of failing the build. Served at `/sitemap.xml`.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pages, articles, cases] = await Promise.all([
    safeFetch<PAGE_SLUGS_QUERY_RESULT>(PAGE_SLUGS_QUERY, {}, sanityCache),
    safeFetch<ARTICLE_SLUGS_QUERY_RESULT>(ARTICLE_SLUGS_QUERY, {}, sanityCache),
    safeFetch<CASE_SLUGS_QUERY_RESULT>(CASE_SLUGS_QUERY, {}, sanityCache),
  ]);
  const entry = (path: string, updatedAt: string, priority: number) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified: new Date(updatedAt),
    changeFrequency: 'monthly' as const,
    priority,
  });
  return [
    ...(pages ?? []).map((p) => entry(pathForSlug(p.slug), p._updatedAt, p.slug === 'home' ? 1 : 0.8)),
    ...(articles ?? []).map((a) => entry(pathForSlug(a.slug, 'article'), a._updatedAt, 0.6)),
    ...(cases ?? []).map((c) => entry(pathForSlug(c.slug, 'caseStudy'), c._updatedAt, 0.6)),
  ];
}
