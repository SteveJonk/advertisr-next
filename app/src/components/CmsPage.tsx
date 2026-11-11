import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import { PageBuilder } from '@/components/PageBuilder';
import { pageBreadcrumbLabel, pageFaqs, pageJsonLd } from '@/lib/json-ld';
import { HOME_SLUG, pathForSlug } from '@/lib/links';
import { getSite } from '@/lib/site';
import { client } from '@/sanity/client';
import { sanityCache } from '@/sanity/fetch';
import { seoImageUrl, seoMetadata } from '@/sanity/metadata';
import { PAGE_QUERY } from '@/sanity/queries';

/**
 * Every page is a `page` document rendered through the page builder; the
 * route files only say which slug. Page content uses `client.fetch`, so a CMS
 * outage fails loudly instead of rendering an empty page.
 */
const getPage = (slug: string) => client.fetch(PAGE_QUERY, { slug }, sanityCache);

export async function cmsMetadata(slug: string): Promise<Metadata> {
  const page = await getPage(slug);
  if (!page) return { title: (await getSite()).ui.notFoundMetaTitle, robots: { index: false } };
  // The home page keeps the layout's default title instead of "Home".
  return { ...seoMetadata(page.seo, slug === HOME_SLUG ? null : page.title), alternates: { canonical: pathForSlug(slug) } };
}

export async function CmsPage({ slug }: { slug: string }) {
  const [page, site] = await Promise.all([getPage(slug), getSite()]);
  if (!page) notFound();
  const path = pathForSlug(slug);
  const content = page.content ?? [];

  return (
    <>
      <JsonLd
        data={pageJsonLd({
          path,
          title: page.seo?.title || page.title,
          description: page.seo?.description,
          imageUrl: seoImageUrl(page.seo),
          faqs: pageFaqs(content),
          language: site.language,
          trail: slug === HOME_SLUG ? [] : [{ name: pageBreadcrumbLabel(content) ?? page.title, path }],
        })}
      />
      <PageBuilder content={content} site={site} />
    </>
  );
}
