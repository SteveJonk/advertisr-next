/**
 * The site's public origin, without a trailing slash. From the environment:
 * it differs per deploy and metadataBase, robots and the sitemap need it
 * without a CMS round trip.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');
