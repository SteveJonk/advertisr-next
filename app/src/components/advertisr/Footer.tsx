import Link from 'next/link';
import { CONTACT, SERVICES } from '@/lib/advertisr/nav';
import { Brand, Wrap } from './ui';

const COLUMNS = [
  { title: 'Diensten', links: SERVICES },
  {
    title: 'Bureau',
    links: [
      { label: 'Over ons', href: '/team' },
      { label: 'Resultaten', href: '/resultaten' },
      { label: 'Kennisbank', href: '/kennisbank' },
      { label: 'Gratis groeiplan', href: '/groeiplan' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: CONTACT.email, href: `mailto:${CONTACT.email}` },
      // ponytail: '#' placeholders straight from the design; real URLs still to come.
      { label: CONTACT.city, href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Instagram', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer className='border-t border-line bg-white pt-14 pb-10'>
      <Wrap>
        <div className='grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 max-sm:grid-cols-2'>
          <div>
            <Brand className='mb-4' />
            <p className='mt-3.5 max-w-70 text-[14.5px] text-dim'>Online marketingbureau uit Haarlem. Marketing zonder gedoe.</p>
          </div>
          {COLUMNS.map((col) => (
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
          <div>© 2026 Advertisr. Alle rechten voorbehouden.</div>
          <div>Algemene voorwaarden · Privacyverklaring</div>
        </div>
      </Wrap>
    </footer>
  );
}
