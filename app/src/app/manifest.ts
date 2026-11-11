import type { MetadataRoute } from 'next';
import { getSite } from '@/lib/site';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const site = await getSite();
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    icons: [],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
  };
}
