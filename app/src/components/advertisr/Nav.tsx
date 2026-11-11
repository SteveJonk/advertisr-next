'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, type MouseEvent } from 'react';
import { cn } from '@/lib/cn';
import type { Site } from '@/lib/site';
import { Brand } from './ui';

/**
 * Fixed top bar; frosted once the page scrolls past 20px. Links hide below
 * 760px, as in the design. `landing` swaps the links for the Google score and
 * points the CTA at the hero form (/groeiplan). Elsewhere the CTA goes to
 * /groeiplan, or scrolls to the page's own #groeiplan form when it has one.
 */
export function Nav({ site, landing = false }: { site: Pick<Site, 'name' | 'nav' | 'rating' | 'ui'>; landing?: boolean }) {
  const path = usePathname();
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toForm = (e: MouseEvent) => {
    const form = document.getElementById('groeiplan');
    if (!form) return;
    e.preventDefault();
    form.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', '#groeiplan');
  };

  const isActive = (l: Site['nav']['links'][number]) =>
    l.match.includes(path) || (!l.href.includes('#') && l.href !== '/' && path.startsWith(l.href));

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-100 border-b border-transparent transition-[background,backdrop-filter,border-color] duration-300',
        stuck && 'border-line bg-white/86 backdrop-blur-[14px] backdrop-saturate-160',
      )}
    >
      <div className='mx-auto flex max-w-page items-center justify-between gap-6 px-10 py-5 max-sm:px-[22px]'>
        <Brand name={site.name} />
        {landing ? (
          site.rating && (
            <div className='flex items-center gap-2 font-display text-[13px] font-semibold text-dim max-[700px]:hidden'>
              <span className='tracking-[1px] text-star'>★★★★★</span> {site.rating} {site.ui.onGoogle}
            </div>
          )
        ) : (
          <div className='flex gap-[30px] text-[14.5px] font-medium text-dim max-dsk:gap-5 max-sm:hidden'>
            {site.nav.links.map((n) => (
              <Link
                key={n.href}
                href={path === '/' ? n.href.replace('/#', '#') : n.href}
                className={cn(
                  'relative py-1 transition-colors hover:text-ink',
                  "after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-red after:transition-[width] after:duration-[280ms] after:ease-rv after:content-[''] hover:after:w-full",
                  isActive(n) && 'text-ink',
                )}
              >
                {n.label}
              </Link>
            ))}
          </div>
        )}
        <Link
          href={landing ? '#plan' : '/groeiplan'}
          onClick={landing ? undefined : toForm}
          className='rounded-full bg-ink px-5 py-[11px] text-sm font-semibold whitespace-nowrap text-white transition-[translate,box-shadow,background] duration-200 hover:-translate-y-px hover:bg-red hover:shadow-[0_10px_24px_-10px_rgba(255,57,81,.7)] max-sm:px-4 max-sm:py-2.5 max-sm:text-[13px]'
        >
          {landing ? site.nav.landingCtaLabel : site.nav.ctaLabel}
        </Link>
      </div>
    </nav>
  );
}
