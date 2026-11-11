import type { Metadata } from 'next';
import Image from 'next/image';
import { Compare } from '@/components/advertisr/Compare';
import { FinalCta } from '@/components/advertisr/FinalCta';
import { LeadForm } from '@/components/advertisr/LeadForm';
import { Logos } from '@/components/advertisr/Logos';
import { Reviews } from '@/components/advertisr/Reviews';
import { BridgeQuote, CtaBand, FaqList, FloatStat, frame } from '@/components/advertisr/service';
import { Ambient, Eyebrow, Sec, SecHead, Wrap } from '@/components/advertisr/ui';

export const metadata: Metadata = {
  title: 'Gratis groeiplan',
  description:
    'Wij brengen je huidige marketing in kaart, laten precies zien waar de kansen liggen en sturen je een concreet plan. Geen sjabloon, geen verplichtingen, geen verkooppraatje.',
};

const TICKS = [
  'Persoonlijk gesprek van 15 minuten met een marketeer, niet een verkoper',
  'Concreet plan op maat voor jouw branche en situatie',
  'Geen verplichtingen. Jij beslist of we samen verdergaan',
];

const MINI = [
  ['5.0', 'score op Google reviews'],
  ['164', 'leads/maand voor PPExport'],
  ['+30%', 'omzetgroei bij Ciao Italia'],
];

const VALUE = [
  [
    'Analyse van je huidige situatie',
    'We bekijken je website, kanalen en waar je nu al zichtbaar bent, inclusief een blik op de concurrentie.',
  ],
  ['Concrete kansen per kanaal', 'Meta Ads, Google Ads, SEO of automation: we laten zien waar voor jou de meeste winst te halen valt.'],
  ['Een stappenplan met prioriteit', 'Niet alles tegelijk. We laten zien wat eerst moet gebeuren, en wat later kan volgen.'],
  ['Eerlijke verwachtingen', 'Geen opgeblazen beloftes. Een reële inschatting van wat haalbaar is, en binnen welke termijn.'],
];

const STEPS = [
  ['Vul het formulier in', "Kost je zo'n twee minuten. Hoe meer je vertelt, hoe scherper het plan wordt."],
  ['Wij bellen je', 'Vijftien minuten, geen verkooppraatje. We willen gewoon begrijpen waar je nu staat.'],
  ['Je ontvangt je groeiplan', 'Binnen enkele werkdagen krijg je een concreet plan, geschreven voor jouw situatie.'],
  ['Jij beslist', 'Sluit het aan? Dan bespreken we hoe we starten. Zo niet, dan hou je gewoon een gratis plan over.'],
];

const FAQS = [
  {
    q: 'Is het groeiplan echt helemaal gratis?',
    a: 'Ja. Geen addertje onder het gras. We investeren zelf de tijd in het gesprek en het plan, omdat we geloven dat het de beste manier is om te laten zien hoe we werken.',
  },
  {
    q: 'Zit ik ergens aan vast na het gesprek?',
    a: 'Nee. Je ontvangt gewoon je plan, ook als je daarna besluit er zelf mee aan de slag te gaan of niet met ons verder te gaan.',
  },
  {
    q: 'Hoe lang duurt het voordat ik mijn plan ontvang?',
    a: 'Meestal binnen enkele werkdagen na ons telefoongesprek, afhankelijk van hoe uitgebreid je situatie is.',
  },
  {
    q: 'Werkt dit ook als ik nog geen website of tracking heb?',
    a: 'Zeker. Juist dan is het waardevol, want dan nemen we dat gelijk mee als onderdeel van het plan.',
  },
  {
    q: 'Wat als ik na het plan niet met jullie verder wil?',
    a: 'Geen probleem. Er is geen verplichting. Het plan is en blijft van jou, ongeacht wat je ermee doet.',
  },
];

export default function GrowthPlanPage() {
  return (
    <>
      <header className='relative overflow-hidden pt-[150px] pb-25'>
        <Ambient />
        <Wrap className='grid grid-cols-[1.05fr_.95fr] items-start gap-[70px] max-[980px]:grid-cols-1 max-[980px]:gap-14'>
          <div>
            <div className='rv inline-flex items-center gap-2 rounded-full border border-red/28 bg-red-tint px-3.5 py-[7px] font-display text-[12.5px] font-semibold text-red-ink'>
              <span className='size-1.5 rounded-full bg-red shadow-[0_0_0_4px_rgba(255,57,81,.15)]' />
              100% gratis &amp; vrijblijvend
            </div>
            <h1 className='rv mt-[18px] mb-5 text-[clamp(36px,4.6vw,58px)] leading-[1.03] tracking-[-.04em]'>
              Ontvang je <em>gratis groeiplan</em> voor meer klanten uit online marketing.
            </h1>
            <p className='rv mb-1.5 max-w-125 text-[18.5px] text-dim'>
              Wij brengen je huidige marketing in kaart, laten precies zien waar de kansen liggen en sturen je een concreet plan. Geen
              sjabloon, geen verplichtingen, geen verkooppraatje.
            </p>
            <div className='rv mt-7 flex flex-col gap-3'>
              {TICKS.map((t) => (
                <div key={t} className='flex items-center gap-3 text-[15px] text-ink'>
                  <span className='flex size-[22px] shrink-0 items-center justify-center rounded-full border border-[rgba(23,138,71,.35)] bg-[#E7F8EE] text-xs text-[#178A47]'>
                    ✓
                  </span>
                  {t}
                </div>
              ))}
            </div>
            <div className='rv mt-[38px] flex flex-wrap gap-[18px] max-mob:grid max-mob:grid-cols-3 max-mob:gap-2.5'>
              {MINI.map(([n, l]) => (
                <div
                  key={l}
                  className='rounded-[14px] border border-line bg-white px-[18px] py-3.5 shadow-[0_18px_34px_-26px_rgba(14,14,18,.35)] max-mob:px-2.5 max-mob:py-3'
                >
                  <div className='font-display text-[22px] font-bold tracking-[-.02em] text-ink max-mob:text-[19px]'>{n}</div>
                  <div className='text-[11.5px] text-dim max-mob:text-[10.5px]'>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <LeadForm
            id='plan'
            messagePlaceholder='Waar wil je meer klanten uit halen? Meta Ads, Google Ads, SEO...'
            submitLabel='Ontvang mijn gratis groeiplan'
            intro={
              <Eyebrow rv={false} className='mb-2.5'>
                Vraag hem hieronder aan
              </Eyebrow>
            }
          >
            <FloatStat
              value={
                <>
                  5,0 <span className='text-sm tracking-[1px] text-star'>★★★★★</span>
                </>
              }
              label='gemiddeld op Google'
              className='-top-7 right-[30px] max-[980px]:right-4'
            />
            <FloatStat value='15 min' label='persoonlijk gesprek' className='-right-[22px] -bottom-5 max-[980px]:-right-1.5' />
          </LeadForm>
        </Wrap>
      </header>

      <Sec className='pt-0!'>
        <Wrap>
          <SecHead
            eyebrow='Wat krijg je'
            title='Geen algemeen advies. Een plan voor jouw situatie.'
            lead='Elk groeiplan is anders, want elk bedrijf is anders. Dit is wat er altijd in zit.'
          />
          <div className='grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-mob:grid-cols-1'>
            {VALUE.map(([title, text], i) => (
              <div
                key={title}
                className='rv rounded-[18px] border border-line bg-white px-[22px] py-7 shadow-[0_20px_40px_-32px_rgba(14,14,18,.35)] hover:-translate-y-1 hover:border-red/45 hover:shadow-[0_28px_50px_-30px_rgba(255,57,81,.4)]'
              >
                <div className='font-display text-[13px] font-bold tracking-[.04em] text-red-ink'>0{i + 1}</div>
                <h3 className='mt-3 mb-2 text-lg tracking-[-.02em]'>{title}</h3>
                <p className='text-sm leading-[1.55] text-dim'>{text}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </Sec>

      <Compare />

      <Sec className='border-t border-line bg-soft'>
        <Wrap>
          <div className='grid grid-cols-2 items-center gap-[70px] max-dsk:grid-cols-1 max-dsk:gap-13'>
            <div className={frame}>
              <div className='relative z-2 h-[470px] overflow-hidden rounded-[18px] shadow-[0_40px_80px_-36px_rgba(14,14,18,.5)] max-[980px]:h-85'>
                <Image
                  src='/images/advertisr/het-team-van-advertisr-op-kantoor-in-haa-2.jpg'
                  alt='Het team van Advertisr op kantoor in Haarlem'
                  fill
                  sizes='(max-width:1080px) 100vw, 560px'
                  className='object-cover object-[center_40%]'
                />
                <div className='absolute bottom-5 left-5 z-3 rounded-xl border border-line bg-white/92 px-[17px] py-[13px] backdrop-blur-[14px]'>
                  <div className='font-display text-[14.5px] font-bold'>Gewoon een gesprek</div>
                  <div className='mt-0.5 text-xs text-dim'>Geen verkooppraatje, wel een eerlijk beeld</div>
                </div>
              </div>
            </div>
            <div>
              <Eyebrow>Zo werkt het</Eyebrow>
              {/* The design leaves this h2 at the browser default size (1.5em). */}
              <h2 className='rv text-2xl'>Van aanvraag tot plan in vier stappen.</h2>
              <div className='mt-[30px] flex flex-col'>
                {STEPS.map(([title, text], i) => (
                  <div
                    key={title}
                    className="rv relative grid grid-cols-[46px_1fr] gap-[18px] pb-[26px] last:pb-0 not-last:before:absolute not-last:before:top-12 not-last:before:bottom-0.5 not-last:before:left-[22px] not-last:before:w-[1.5px] not-last:before:bg-[repeating-linear-gradient(180deg,rgba(255,57,81,.5)_0,rgba(255,57,81,.5)_5px,transparent_5px,transparent_10px)] not-last:before:content-['']"
                  >
                    <div className='relative z-2 flex size-[46px] items-center justify-center rounded-full bg-red font-display text-[17px] font-bold text-white shadow-[0_0_0_6px_var(--color-soft)]'>
                      {i + 1}
                    </div>
                    <div>
                      <h3 className='mt-1 mb-[5px] text-[17px] tracking-[-.015em]'>{title}</h3>
                      <p className='text-[14.5px] leading-[1.55] text-dim'>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <CtaBand
            className='mt-14!'
            href='#plan'
            title='Klaar voor je gratis groeiplan?'
            sub='Twee minuten invullen, daarna weet je waar jouw marketing de meeste winst laat liggen.'
          />
        </Wrap>
      </Sec>

      <Reviews />
      <Logos title='Bedrijven die al met ons groeien.' />

      <Sec className='py-0!'>
        <Wrap>
          <BridgeQuote
            img='/images/advertisr/marc-jonk-oprichter-van-advertisr.jpg'
            alt='Marc Jonk, oprichter van Advertisr'
            line={
              <>
                Een groeiplan dat je in een la legt, helpt niemand. Daarom maken we het{' '}
                <em>concreet genoeg om er morgen mee te beginnen.</em>
              </>
            }
            sig='Marc Jonk, oprichter Advertisr.'
          />
        </Wrap>
      </Sec>

      <Sec>
        <Wrap>
          <SecHead eyebrow='Veelgestelde vragen' title='Voordat je het formulier invult.' />
          <FaqList items={FAQS} />
        </Wrap>
      </Sec>

      <FinalCta
        title='Vraag nu je gratis groeiplan aan.'
        lead='Twee minuten invullen, wij nemen contact op. Geen verplichtingen, geen verkooppraatje.'
        list={['Reactie binnen 1 werkdag', '15 minuten kennismaking', 'Concreet plan, geen vage belofte']}
        messagePlaceholder={null}
        submitLabel='Ontvang mijn gratis groeiplan'
      />
    </>
  );
}
