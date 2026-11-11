import type { Metadata } from 'next';
import { ArticleCard, PillarCard } from '@/components/advertisr/ArticleCard';
import { NewsletterForm, Pills } from '@/components/advertisr/kennisbank';
import { CtaBand } from '@/components/advertisr/service';
import { Ambient, BtnGhost, Crumb, Eyebrow, Sec, SecHead, Wrap } from '@/components/advertisr/ui';
import { ARTICLES, CATEGORIES, PILLARS } from '@/lib/advertisr/articles';

export const metadata: Metadata = {
  title: 'Kennisbank',
  description: 'Praktische gidsen over online marketing, geschreven door de mensen die de campagnes ook echt beheren.',
};

export default function KnowledgeBasePage() {
  return (
    <>
      <header className='relative overflow-hidden pt-[150px] pb-[50px]'>
        <div className='absolute inset-0 mask-[linear-gradient(#000_65%,transparent)]'>
          <Ambient />
        </div>
        <Wrap>
          <div className='max-w-190'>
            <Crumb items={[['Kennisbank']]} />
            <Eyebrow>Kennisbank</Eyebrow>
            <h1 className='rv mt-4 mb-[18px] text-[clamp(34px,4.6vw,54px)] tracking-[-.04em] text-ink'>
              Alles wat je wilt weten over <em>online marketing.</em>
            </h1>
            <p className='rv max-w-[530px] text-[18.5px] text-dim'>
              Praktische gidsen, geen vage theorie. Geschreven door de mensen die de campagnes ook echt beheren.
            </p>
            {/* ponytail: search is visual only, as in the design; wire it up once articles come from a CMS. */}
            <div className='rv mt-[30px] flex max-w-130 items-center gap-3 rounded-full border border-line-2 bg-white py-2 pr-2 pl-[22px] shadow-[0_18px_36px_-26px_rgba(14,14,18,.35)]'>
              <input
                type='text'
                aria-label='Zoek in de kennisbank'
                placeholder="Zoek op onderwerp, bijvoorbeeld 'ROAS' of 'GA4'..."
                className='flex-1 border-none bg-transparent font-sans text-[14.5px] text-ink outline-none placeholder:text-dim-2'
              />
              <button
                type='button'
                className='shrink-0 cursor-pointer rounded-full border-none bg-red px-5 py-[11px] font-display text-[13.5px] font-semibold text-white'
              >
                Zoeken
              </button>
            </div>
            <Pills items={['Alle artikelen', ...CATEGORIES]} />
          </div>
        </Wrap>
      </header>

      <Sec className='pt-[34px]!'>
        <Wrap>
          <SecHead
            eyebrow='Uitgelicht'
            title='Onze complete gidsen.'
            lead='Lange, diepgaande artikelen die één onderwerp compleet behandelen.'
            className='mb-0!'
          />
          <div className='mt-11 grid grid-cols-2 gap-[18px] max-[860px]:grid-cols-1'>
            {PILLARS.map((a) => (
              <PillarCard key={a.title} a={a} />
            ))}
          </div>
        </Wrap>
      </Sec>

      <Sec className='pt-3.5!'>
        <Wrap>
          <SecHead eyebrow='Nieuwste artikelen' title='Praktisch, geen theorie.' className='mb-0!' />
          <div className='mt-5 grid grid-cols-3 gap-5 max-[980px]:grid-cols-2 max-[600px]:grid-cols-1'>
            {ARTICLES.map((a) => (
              <ArticleCard key={a.title} a={a} />
            ))}
          </div>
          <div className='rv mt-11 flex justify-center'>
            <BtnGhost href='#'>
              Meer artikelen laden <span>↓</span>
            </BtnGhost>
          </div>
        </Wrap>
      </Sec>

      <Sec className='pb-0!'>
        <Wrap>
          <CtaBand
            className='mt-0!'
            href='/groeiplan'
            title='Wil je dit niet zelf uitzoeken?'
            sub='Laat ons in je gratis groeiplan zien waar jouw marketing de meeste winst laat liggen.'
          />
        </Wrap>
      </Sec>

      <Sec>
        <Wrap>
          <div className='rv relative mt-5 overflow-hidden rounded-[22px] border border-line bg-[linear-gradient(135deg,#fff,var(--color-soft))] p-11 shadow-[0_30px_60px_-40px_rgba(14,14,18,.35)]'>
            <div
              className='pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(rgba(14,14,18,.13)_1px,transparent_1.4px)] bg-size-[26px_26px] opacity-50 mask-[radial-gradient(ellipse_70%_60%_at_70%_30%,#000_0%,transparent_75%)]'
              aria-hidden='true'
            />
            <div className='relative z-2 flex flex-wrap items-center justify-between gap-[30px]'>
              <div>
                <h3 className='text-2xl tracking-[-.02em]'>Blijf op de hoogte.</h3>
                <p className='mt-2 max-w-100 text-[14.5px] text-dim'>
                  Eén keer per maand een nieuw artikel of praktische tip in je inbox. Geen spam, geen verkooppraatje.
                </p>
              </div>
              <NewsletterForm />
            </div>
          </div>
        </Wrap>
      </Sec>
    </>
  );
}
