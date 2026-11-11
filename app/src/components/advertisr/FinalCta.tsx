import type { ReactNode } from 'react';
import { LeadForm, type LeadFormProps } from './LeadForm';
import { Eyebrow, Wrap } from './ui';

type FinalCtaProps = LeadFormProps & {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  lead?: ReactNode;
  list?: string[];
  /** Extra background layer (seo-geo puts an ambient ring here). */
  backdrop?: ReactNode;
};

/** Closing "Ontvang je gratis groeiplan" band with the lead form. */
export function FinalCta({
  id = 'groeiplan',
  eyebrow = 'Klaar om te groeien?',
  title = 'Ontvang je gratis groeiplan.',
  lead = 'Wij bellen je, brengen je huidige marketing in kaart en sturen een concreet plan met kansen, kanalen en aanpak. Volledig vrijblijvend.',
  list = ['Reactie binnen 1 werkdag', '15 minuten kennismaking, geen verkooppraatje', 'Concreet plan, geen vage belofte'],
  backdrop,
  ...form
}: FinalCtaProps) {
  return (
    <section
      id={id}
      className="relative z-2 scroll-mt-20 overflow-hidden border-t border-line bg-soft py-30 before:pointer-events-none before:absolute before:-top-[200px] before:-right-[220px] before:size-[760px] before:bg-[radial-gradient(circle,rgba(255,57,81,.12),transparent_66%)] before:content-[''] max-sm:py-20"
    >
      {backdrop}
      <Wrap>
        <div className='relative z-2 grid grid-cols-[.85fr_1.15fr] items-center gap-15 max-dsk:grid-cols-1 max-dsk:gap-13'>
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className='rv mt-[18px] mb-5 text-[clamp(34px,4vw,50px)] tracking-[-.038em]'>{title}</h2>
            <p className='rv mb-7 max-w-115 text-[17px] text-dim'>{lead}</p>
            <div className='rv flex flex-col gap-3.5'>
              {list.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-[14.5px] text-dim before:size-[7px] before:shrink-0 before:rounded-full before:bg-red before:shadow-[0_0_0_4px_rgba(255,57,81,.16)] before:content-['']"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <LeadForm {...form} />
        </div>
      </Wrap>
    </section>
  );
}
