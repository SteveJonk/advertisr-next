import Link from 'next/link';
import { Nav } from '@/components/advertisr/Nav';
import { SiteEffects } from '@/components/advertisr/SiteEffects';
import { Arrow, Brand, btnRed, Wrap } from '@/components/advertisr/ui';
import { cn } from '@/lib/cn';

/** Stripped-down chrome for the /groeiplan landing page: no menu, a slim footer and a sticky CTA on phones. */
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='max-[820px]:pb-[70px]'>
      <Nav landing />
      <main>{children}</main>
      <footer className='border-t border-line bg-white pt-11 pb-[30px]'>
        <Wrap className='flex flex-wrap items-center justify-between gap-5'>
          <Brand />
          <div className='flex flex-wrap gap-[22px] text-[13px] text-dim'>
            <a href='mailto:info@advertisr.nl' className='hover:text-ink'>
              info@advertisr.nl
            </a>
            {/* ponytail: '#' placeholders from the design. */}
            <a href='#' className='hover:text-ink'>
              Haarlem, NH
            </a>
            <a href='#' className='hover:text-ink'>
              Algemene voorwaarden
            </a>
            <a href='#' className='hover:text-ink'>
              Privacyverklaring
            </a>
          </div>
          <div className='text-[12.5px] text-dim'>© 2026 Advertisr.</div>
        </Wrap>
      </footer>
      <div className='fixed inset-x-0 bottom-0 z-60 hidden items-center justify-center border-t border-line-2 bg-white/94 px-[18px] py-3 shadow-[0_-14px_30px_-20px_rgba(14,14,18,.25)] backdrop-blur-[14px] max-[820px]:flex'>
        <Link href='#plan' className={cn(btnRed, 'w-full justify-center')}>
          Gratis groeiplan aanvragen <Arrow />
        </Link>
      </div>
      <SiteEffects />
    </div>
  );
}
