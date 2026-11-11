import { Footer } from '@/components/advertisr/Footer';
import { Nav } from '@/components/advertisr/Nav';
import { SiteEffects } from '@/components/advertisr/SiteEffects';
import { getSite } from '@/lib/site';

/** Chrome for the Advertisr. pages (everything except /groeiplan). */
export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const site = await getSite();
  return (
    <>
      <Nav site={site} />
      <main>{children}</main>
      <Footer site={site} />
      <SiteEffects />
    </>
  );
}
