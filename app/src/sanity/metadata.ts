import type { SanityImageSource } from '@sanity/image-url';
import type { Metadata } from 'next';
import { urlFor } from '@/sanity/image';

export type SanitySeo = {
  title?: string | null;
  description?: string | null;
  ogImage?: SanityImageSource | null;
  noIndex?: boolean | null;
} | null;

/** The OG image for a `seo` object, sized for social cards. */
export function seoImageUrl(seo: SanitySeo | undefined): string | null {
  if (!seo?.ogImage) return null;
  return urlFor(seo.ogImage)?.width(1200).height(630).fit('crop').url() ?? null;
}

/**
 * A document's `seo` object as Next metadata.
 *
 * Next merges metadata by KEY PRESENCE: `{ title: undefined }` deletes the
 * layout's title instead of inheriting it, so every optional key is added
 * with a conditional spread and is absent when the field is empty.
 */
export function seoMetadata(seo: SanitySeo | undefined, fallbackTitle?: string | null, type: 'website' | 'article' = 'website'): Metadata {
  const title = seo?.title || fallbackTitle || null;
  const description = seo?.description || null;
  const image = seoImageUrl(seo);
  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    ...(seo?.noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type,
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      ...(image ? { images: [{ url: image, width: 1200, height: 630 }] } : {}),
    },
    ...(image ? { twitter: { card: 'summary_large_image' as const } } : {}),
  };
}
