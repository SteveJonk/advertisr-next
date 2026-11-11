import Image from 'next/image';
import type { ReactNode } from 'react';
import { Eyebrow, Wrap } from './ui';

/** "Vertrouwd door" band with the endless logo strip. */
export function Logos({
  eyebrow,
  title,
  note,
  logos,
}: {
  eyebrow?: string | null;
  title?: ReactNode;
  note?: string | null;
  logos: { src: string; alt: string }[];
}) {
  return (
    <section className='relative z-2 overflow-hidden border-y border-line bg-soft py-16'>
      <Wrap>
        <div className='rv mb-[34px] flex flex-wrap items-center justify-between gap-3.5'>
          <div>
            <Eyebrow rv={false}>{eyebrow}</Eyebrow>
            <h2 className='mt-3 text-[26px] tracking-[-.03em]'>{title}</h2>
          </div>
          <div className='text-[14.5px] text-dim-2'>{note}</div>
        </div>
      </Wrap>
      <div className="relative before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-3 before:w-[110px] before:bg-[linear-gradient(90deg,var(--color-soft),transparent)] before:content-[''] after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-3 after:w-[110px] after:bg-[linear-gradient(-90deg,var(--color-soft),transparent)] after:content-['']">
        <div className='flex w-max animate-logos gap-[18px] motion-reduce:animate-none'>
          {[0, 1].map((copy) =>
            logos.map((logo) => (
              <div
                key={`${copy}-${logo.src}`}
                aria-hidden={copy === 1 || undefined}
                className='h-20 w-[150px] shrink-0 overflow-hidden rounded-[14px] border border-line bg-white px-[18px] py-3.5 transition-[translate,border-color] duration-[250ms] hover:-translate-y-[3px] hover:border-red/45'
              >
                <Image src={logo.src} alt={copy ? '' : logo.alt} width={114} height={52} className='size-full object-contain' />
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
