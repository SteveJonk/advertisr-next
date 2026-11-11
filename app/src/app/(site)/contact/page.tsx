import type { Metadata } from 'next';
import { LeadForm } from '@/components/advertisr/LeadForm';
import { Reviews } from '@/components/advertisr/Reviews';
import { FaqList } from '@/components/advertisr/service';
import { Ambient, BtnRed, Crumb, Eyebrow, Sec, SecHead, Wrap } from '@/components/advertisr/ui';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Geen contactformulier dat in een wachtrij verdwijnt. Je krijgt binnen één werkdag een reactie van iemand die je vraag ook echt kan beantwoorden.',
};

// ponytail: phone, WhatsApp and booking link are placeholders in the design itself; fill in when known.
const PHONE_HREF = 'tel:+31600000000';

const QUICK = [
  { icon: '✉️', label: 'E-mail', value: 'info@advertisr.nl', href: 'mailto:info@advertisr.nl' },
  { icon: '📞', label: 'Telefoon', value: '[telefoonnummer]', href: PHONE_HREF },
  { icon: '📍', label: 'Kantoor', value: 'Haarlem, Noord-Holland' },
  { icon: '⏱️', label: 'Reactietijd', value: 'Binnen 1 werkdag' },
];

const METHODS = [
  { icon: '📞', title: 'Bellen', value: '[telefoonnummer]', text: 'Direct een marketeer aan de lijn', href: PHONE_HREF },
  { icon: '✉️', title: 'E-mail', value: 'info@advertisr.nl', text: 'Meestal reactie dezelfde dag', href: 'mailto:info@advertisr.nl' },
  { icon: '💬', title: 'WhatsApp', value: '[whatsapp-nummer]', text: 'Voor een snelle vraag tussendoor', href: '#' },
  { icon: '📅', title: 'Plan direct', value: 'Kies een moment', text: 'Boek meteen 15 minuten in de agenda', href: '#' },
];

const FAQS = [
  {
    q: 'Hoe snel krijg ik reactie?',
    a: 'Binnen één werkdag, meestal sneller. Je krijgt altijd reactie van iemand uit het team zelf, niet van een geautomatiseerd systeem.',
  },
  {
    q: 'Is het eerste gesprek vrijblijvend?',
    a: 'Ja. We bellen om je situatie te begrijpen en te kijken of we iets voor elkaar kunnen betekenen. Geen verplichtingen, geen druk.',
  },
  {
    q: 'Kan ik ook langskomen op kantoor?',
    a: 'Zeker, op afspraak. Stuur een bericht via het formulier of mail ons even, dan plannen we een moment dat schikt.',
  },
  {
    q: 'Werken jullie ook buiten Haarlem?',
    a: 'Ja, we werken met klanten door heel Nederland. Vrijwel alles kan op afstand, en waar nodig komen we langs.',
  },
];

const value = 'font-display text-[15.5px] font-semibold text-ink';

export default function ContactPage() {
  return (
    <>
      <header className='relative overflow-hidden pt-[150px] pb-[90px]'>
        <div className='absolute inset-0 mask-[linear-gradient(#000_65%,transparent)]'>
          <Ambient />
        </div>
        <Wrap className='grid grid-cols-2 items-start gap-[70px] max-[980px]:grid-cols-1 max-[980px]:gap-12'>
          <div>
            <Crumb items={[['Contact']]} />
            <Eyebrow>Contact</Eyebrow>
            <h1 className='rv mt-4 mb-5 text-[clamp(36px,4.6vw,58px)] leading-[1.03] tracking-[-.04em]'>
              Laten we <em>even bellen.</em>
            </h1>
            <p className='rv mb-[34px] max-w-115 text-[18.5px] text-dim'>
              Geen contactformulier dat in een wachtrij verdwijnt. Je krijgt binnen één werkdag een reactie van iemand die je vraag ook echt
              kan beantwoorden.
            </p>
            <div className='rv mt-9 flex flex-col'>
              {QUICK.map((q) => (
                <div key={q.label} className='flex items-center gap-3.5 border-t border-line px-1 py-3.5 first:border-t-0'>
                  <div className='flex size-[38px] shrink-0 items-center justify-center rounded-[10px] border border-line bg-white text-base shadow-[0_10px_20px_-14px_rgba(14,14,18,.4)]'>
                    {q.icon}
                  </div>
                  <div>
                    <div className='text-[11px] tracking-[.06em] text-dim uppercase'>{q.label}</div>
                    {q.href ? (
                      <a href={q.href} className={`${value} hover:text-red-ink`}>
                        {q.value}
                      </a>
                    ) : (
                      <span className={value}>{q.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className='rv mt-[30px] flex flex-wrap gap-x-[22px] gap-y-2 text-[13.5px] text-dim'>
              {['Geen verkooppraatje', 'Vrijblijvend gesprek', 'Reactie van een mens, geen bot'].map((t) => (
                <span key={t} className="flex items-center gap-2 before:size-[5px] before:rounded-full before:bg-red before:content-['']">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <LeadForm
            id='contactformulier'
            interesse='Contactpagina'
            messageLabel='Waar kunnen we mee helpen?'
            messagePlaceholder='Vertel kort waar je tegenaan loopt of wat je zoekt...'
            submitLabel='Verstuur bericht'
            fine='Geen spam. Je gegevens worden alleen gebruikt om contact met je op te nemen.'
          />
        </Wrap>
      </header>

      <Sec className='pt-0!'>
        <Wrap>
          <SecHead eyebrow='Andere manieren' title='Kies wat het snelst werkt voor jou.' className='mb-0!' />
          <div className='mt-11 grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-mob:grid-cols-1'>
            {METHODS.map((m) => (
              <a
                key={m.title}
                href={m.href}
                className='rv block rounded-2xl border border-line bg-white px-5 py-6 shadow-[0_20px_40px_-32px_rgba(14,14,18,.4)] hover:-translate-y-1 hover:border-red/35 hover:shadow-[0_28px_50px_-30px_rgba(255,57,81,.4)]'
              >
                <div className='mb-3.5 flex size-10 items-center justify-center rounded-[10px] bg-red-tint text-[17px]'>{m.icon}</div>
                <h3 className='text-[15px] text-ink'>{m.title}</h3>
                <div className='mt-1.5 text-sm font-semibold text-red-ink'>{m.value}</div>
                <p className='mt-1.5 text-[12.5px] leading-normal text-dim'>{m.text}</p>
              </a>
            ))}
          </div>
        </Wrap>
      </Sec>

      <Reviews />

      <Sec className='pt-0!'>
        <Wrap>
          <div className='rv relative overflow-hidden rounded-[20px] border border-line bg-[radial-gradient(ellipse_at_20%_0%,#FFF1F3,transparent_60%),#fff] p-11 shadow-[0_30px_60px_-40px_rgba(14,14,18,.4)]'>
            <div
              className='pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(rgba(14,14,18,.13)_1px,transparent_1.4px)] bg-size-[26px_26px] opacity-50 mask-[radial-gradient(ellipse_70%_60%_at_70%_30%,#000_0%,transparent_75%)]'
              aria-hidden='true'
            />
            <div className='relative z-2 flex flex-wrap items-center justify-between gap-10'>
              <div>
                <div className='mb-4 flex size-[52px] items-center justify-center rounded-[14px] border border-red/30 bg-red-tint text-[22px]'>
                  📍
                </div>
                <h3 className='text-[22px] tracking-[-.02em]'>Op kantoor in Haarlem</h3>
                <p className='mt-1.5 max-w-130 text-[14.5px] text-dim'>
                  Liever even langskomen dan bellen? Kan, op afspraak. Stuur even een berichtje zodat we tijd voor je vrijmaken.
                </p>
              </div>
              <BtnRed href='#contactformulier'>Stuur een bericht</BtnRed>
            </div>
          </div>
        </Wrap>
      </Sec>

      <Sec>
        <Wrap>
          <SecHead eyebrow='Veelgestelde vragen' title='Voordat je contact opneemt.' />
          <FaqList items={FAQS} />
        </Wrap>
      </Sec>
    </>
  );
}
