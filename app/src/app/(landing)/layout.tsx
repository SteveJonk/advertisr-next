import Link from 'next/link';
import { Nav } from '@/components/advertisr/Nav';
import { SiteEffects } from '@/components/advertisr/SiteEffects';
import { Arrow, Brand, btnRed, Wrap } from '@/components/advertisr/ui';
import { cn } from '@/lib/cn';
import { getSite, mailtoHref } from '@/lib/site';

/** Stripped-down chrome for the /groeiplan landing page: no menu, a slim footer and a sticky CTA on phones. */
export default async function LandingLayout({ children }: { children: React.ReactNode }) {
  const site = await getSite();
  return (
    <div className='max-[820px]:pb-[70px]'>
      <Nav site={site} landing />
      <main>{children}</main>
      <footer className='border-t border-line bg-white pt-11 pb-[30px]'>
        <Wrap className='flex flex-wrap items-center justify-between gap-5'>
          <Brand name={site.name} />
          <div className='flex flex-wrap gap-[22px] text-[13px] text-dim'>
            {site.email && (
              <a href={mailtoHref(site.email)} className='hover:text-ink'>
                {site.email}
              </a>
            )}
            {site.city && <span>{site.city}</span>}
            {site.footer.legal.map((l) => (
              <Link key={l.label} href={l.href} className='hover:text-ink'>
                {l.label}
              </Link>
            ))}
          </div>
          <div className='text-[12.5px] text-dim'>{site.footer.copyright}</div>
        </Wrap>
      </footer>
      <div className='fixed inset-x-0 bottom-0 z-60 hidden items-center justify-center border-t border-line-2 bg-white/94 px-[18px] py-3 shadow-[0_-14px_30px_-20px_rgba(14,14,18,.25)] backdrop-blur-[14px] max-[820px]:flex'>
        <Link href='#plan' className={cn(btnRed, 'w-full justify-center')}>
          {site.nav.landingCtaLabel} <Arrow />
        </Link>
      </div>
      <SiteEffects />
    </div>
  );
}
