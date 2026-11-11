import { permanentRedirect } from 'next/navigation';
import { CmsPage, cmsMetadata } from '@/components/CmsPage';
import { HOME_SLUG } from '@/lib/links';
import { safeFetch } from '@/sanity/client';
import { sanityCache } from '@/sanity/fetch';
import { PAGE_SLUGS_QUERY } from '@/sanity/queries';
import type { PAGE_SLUGS_QUERY_RESULT } from '@/sanity/sanity.types';

type Props = { params: Promise<{ slug: string }> };

/** Pages with a route of their own: the home page, the kennisbank and the landing page. */
const OWN_ROUTE = [HOME_SLUG, 'kennisbank', 'groeiplan'];

export async function generateStaticParams() {
  const pages = (await safeFetch<PAGE_SLUGS_QUERY_RESULT>(PAGE_SLUGS_QUERY, {}, sanityCache)) ?? [];
  return pages.filter((p) => !OWN_ROUTE.includes(p.slug)).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  return cmsMetadata((await params).slug);
}

/** Every other page document. Publish a page in the studio and it is live here. */
export default async function Page({ params }: Props) {
  const { slug } = await params;
  // /home is the same document as /, so keep one canonical URL.
  if (slug === HOME_SLUG) permanentRedirect('/');
  return <CmsPage slug={slug} />;
}
