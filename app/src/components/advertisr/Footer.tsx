import Link from 'next/link';
import type { Site } from '@/lib/site';
import { Brand, Wrap } from './ui';

export function Footer({ site }: { site: Site }) {
  return (
    <footer className='border-t border-line bg-white pt-14 pb-10'>
      <Wrap>
        <div className='grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 max-sm:grid-cols-2'>
          <div>
            <Brand name={site.name} className='mb-4' />
            <p className='mt-3.5 max-w-70 text-[14.5px] text-dim'>{site.description}</p>
          </div>
          {site.footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className='mb-4 font-sans text-xs font-semibold tracking-[.13em] text-dim-2 uppercase'>{col.title}</h4>
              <ul className='flex flex-col gap-2.5 text-[14.5px] text-dim'>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className='hover:text-red-ink'>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='mt-13 flex flex-wrap justify-between gap-4 border-t border-line pt-[26px] text-[13px] text-dim-2'>
          <div>{site.footer.copyright}</div>
          <div>
            {site.footer.legal.map((l, i) => (
              <span key={l.label}>
                {i > 0 && ' · '}
                <Link href={l.href} className='hover:text-red-ink'>
                  {l.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </Wrap>
    </footer>
  );
}
