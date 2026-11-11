/** The slug of the page that renders at `/`. */
export const HOME_SLUG = 'home';

/** Turn a page slug into its path, mapping the home page onto `/`. */
export function pathForSlug(slug: string, type: string = 'page'): string {
  if (type === 'article') return `/kennisbank/${slug}`;
  return slug === HOME_SLUG ? '/' : `/${slug}`;
}

export type SanityLink = {
  label?: string | null;
  linkType?: 'internal' | 'external' | null;
  href?: string | null;
  internalLink?: { _type?: string | null; slug?: string | null } | null;
} | null | undefined;

/** A Sanity button to an href: a referenced page or article, else the typed URL. */
export function resolveHref(link: SanityLink): string | undefined {
  if (!link) return undefined;
  if (link.linkType === 'internal') {
    const slug = link.internalLink?.slug;
    return slug ? pathForSlug(slug, link.internalLink?._type ?? 'page') : undefined;
  }
  return link.href || undefined;
}
