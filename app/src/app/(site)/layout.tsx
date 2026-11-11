import { Footer } from '@/components/advertisr/Footer';
import { Nav } from '@/components/advertisr/Nav';
import { SiteEffects } from '@/components/advertisr/SiteEffects';

/** Chrome for the Advertisr. pages (everything except /groeiplan and the CMS routes). */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      <SiteEffects />
    </>
  );
}
