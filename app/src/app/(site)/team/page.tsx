import type { Metadata } from 'next';
import Image from 'next/image';
import { FinalCta } from '@/components/advertisr/FinalCta';
import { Logos } from '@/components/advertisr/Logos';
import { CtaBand, frame } from '@/components/advertisr/service';
import { Ambient, BtnGhost, BtnRed, Crumb, Eyebrow, Sec, SecHead, Wrap } from '@/components/advertisr/ui';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Social ads, Google Ads, content, websites en automatisering uit één team. Vier specialisten die zelf bouwen wat ze adviseren en elke maand laten zien wat het oplevert.',
};

const TEAM = [
  {
    name: 'Marc Jonk',
    role: 'Oprichter & Social Ads specialist',
    text: 'Bouwt en optimaliseert Meta Ads campagnes en zet de strategie uit voor klanten.',
    img: '/images/advertisr/marc-jonk-oprichter-van-advertisr.jpg',
  },
  {
    name: 'Dylan Arnold',
    role: 'Oprichter & Google Ads specialist',
    text: 'Bouwt en optimaliseert Google Ads campagnes, van zoekwoorden tot conversietracking.',
    img: '/images/advertisr/dylan-arnold.jpg',
  },
  {
    name: 'Steve Jonk',
    role: 'Webdevelopment',
    text: 'Bouwt websites en webshops die snel zijn en converteren.',
    img: '/images/advertisr/steve-jonk.jpg',
  },
  {
    name: 'Jilles Kaptein',
    role: 'Social media organisch & content',
    text: 'Filmt, monteert en plant de content die jouw kanalen vult.',
    img: '/images/advertisr/jilles-kaptein-2.jpg',
    pos: 'object-[center_30%]',
  },
];

const USPS = [
  ['Alle disciplines in huis.', 'Social ads, Google Ads, SEO, websites, content en automatisering.'],
  ['Zelf filmen en maken.', 'Wij komen op locatie en leveren de creatie, niet alleen de campagne.'],
  ['Tracking eerst.', 'Pas als de meting klopt, gaat het budget erin.'],
  ['Maandelijks opzegbaar.', 'Zonder opstartkosten voor Ads, dus we moeten het elke maand waarmaken.'],
  ['Alles blijft van jou.', 'Accounts, data en tracking staan altijd op jouw naam.'],
  ['Elke maand een gesprek.', 'Wat leverde het op, en wat doen we nu.'],
];

const STORY = [
  'Advertisr begon met een simpel idee: marketing die je kunt doorrekenen, gemaakt door mensen die verstand hebben van hun vak. Geen rapporten vol grafieken zonder uitleg, maar campagnes waarvan je elke maand precies ziet wat ze opleveren.',
  'Daarom bouwen we alles zelf. Social en Google Ads, content en video, websites, SEO en automatisering komen uit één team, zodat strategie, creatie en techniek op elkaar aansluiten in plaats van langs elkaar heen te werken.',
  'En we werken zoals wij zelf ingehuurd zouden willen worden: eerlijk over wat haalbaar is, transparant over wat het kost en zonder langlopende verplichtingen. Dat houdt ons scherp, want je blijft alleen zolang het werkt.',
];

export default function TeamPage() {
  return (
    <>
      <header className='relative overflow-hidden pt-[150px] pb-[90px]'>
        <div className='absolute inset-0 mask-[linear-gradient(#000_65%,transparent)]'>
          <Ambient />
        </div>
        <Wrap>
          <div className='grid grid-cols-2 items-center gap-[70px] max-[980px]:grid-cols-1 max-[980px]:gap-[54px]'>
            <div>
              <Crumb items={[['Team']]} />
              <Eyebrow>Over Advertisr</Eyebrow>
              <h1 className='rv mt-[18px] mb-5 text-[clamp(38px,5vw,66px)] leading-[1.03] tracking-[-.04em]'>
                Een klein team, <em>dicht op het werk.</em>
              </h1>
              <p className='rv mb-[34px] max-w-130 text-[18.5px] text-dim'>
                Social ads, Google Ads, content, websites en automatisering uit één team. Vier specialisten die zelf bouwen wat ze adviseren
                en elke maand laten zien wat het oplevert.
              </p>
              <div className='rv mb-[22px] flex flex-wrap items-center gap-[22px]'>
                <BtnRed href='#groeiplan'>Ontvang mijn groeiplan</BtnRed>
                <BtnGhost href='#team'>Ontmoet het team</BtnGhost>
              </div>
            </div>
            <div className={frame}>
              <div className='relative z-2 h-120 overflow-hidden rounded-[18px] shadow-[0_40px_80px_-36px_rgba(14,14,18,.5)] max-[980px]:h-85'>
                <Image
                  src='/images/advertisr/het-team-van-advertisr-op-kantoor-in-haa-2.jpg'
                  alt='Het team van Advertisr lacht op kantoor'
                  fill
                  priority
                  sizes='(max-width:980px) 100vw, 580px'
                  className='object-cover object-[center_45%]'
                />
              </div>
            </div>
          </div>
        </Wrap>
      </header>

      <Sec id='team' className='scroll-mt-10 pt-2.5!'>
        <Wrap>
          <SecHead
            eyebrow='Het team'
            title='De mensen achter de campagnes.'
            lead='Vier specialisten, elk met een eigen vak. Samen dekken ze je hele online marketing.'
          />
          <div className='grid grid-cols-4 gap-5 max-[960px]:grid-cols-2 max-mob:grid-cols-1'>
            {TEAM.map((m) => (
              <div
                key={m.name}
                className='group rv relative overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_24px_46px_-34px_rgba(14,14,18,.45)] hover:-translate-y-1.5 hover:border-red/40 hover:shadow-[0_34px_60px_-32px_rgba(255,57,81,.4)]'
              >
                <div className='relative aspect-[4/5] overflow-hidden bg-soft'>
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    sizes='(max-width:520px) 100vw, (max-width:960px) 50vw, 300px'
                    className={cn(
                      'object-cover transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-105',
                      m.pos,
                    )}
                  />
                </div>
                <div className='relative px-5 pt-[18px] pb-[22px]'>
                  <h3 className='text-lg tracking-[-.02em]'>{m.name}</h3>
                  <div className='mt-[3px] text-[12.5px] font-semibold text-red-ink'>{m.role}</div>
                  <p className='mt-2.5 text-[13.5px] leading-normal text-dim'>{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </Sec>

      <Sec className='pt-5!'>
        <Wrap>
          <div className='grid grid-cols-[.9fr_1.1fr] items-start gap-[70px] max-[980px]:grid-cols-1 max-[980px]:gap-10'>
            <div className='sticky top-30 max-[980px]:static'>
              <Eyebrow>Het verhaal</Eyebrow>
              <h2 className='rv mt-4 mb-[30px] text-[clamp(32px,3.7vw,50px)] tracking-[-.035em]'>Waarom Advertisr bestaat.</h2>
              <div className='rv rounded-[20px] border border-line bg-white px-7 pt-7 pb-[26px] shadow-[0_26px_50px_-34px_rgba(14,14,18,.4)]'>
                <div className='mb-4 text-[11.5px] font-semibold tracking-[.16em] text-red-ink uppercase'>Waarin we verschillen</div>
                <ul className='flex flex-col gap-3.5'>
                  {USPS.map(([b, text]) => (
                    <li key={b} className='relative pl-[30px] text-[14.5px] leading-normal text-dim'>
                      <svg className='absolute top-0.5 left-0 size-5' viewBox='0 0 22 22' aria-hidden='true'>
                        <circle cx='11' cy='11' r='11' fill='#FF3951' />
                        <path
                          d='M6.2 11.4l3.1 3.1 6.5-6.8'
                          fill='none'
                          stroke='#fff'
                          strokeWidth='2.2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      <b className='font-semibold text-ink'>{b}</b> {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              {STORY.map((p, i) => (
                <p key={i} className={cn('rv mb-5 text-lg leading-[1.75] text-dim', i === 0 && 'text-xl leading-[1.6] text-ink')}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Wrap>
      </Sec>

      <Sec className='pt-0!'>
        <Wrap>
          <CtaBand className='mt-0!' title='Zin om kennis te maken?' sub='Vertel waar je nu staat. Wij laten zien waar de kansen liggen.' />
        </Wrap>
      </Sec>

      <Logos title='Merken die met ons team werken.' />
      <FinalCta
        eyebrow='Zin om kennis te maken?'
        lead='Je eerste gesprek voer je met Marc. Geen intake door een junior, geen script. Gewoon een eerlijk gesprek over wat wél en niet gaat werken.'
        messagePlaceholder='Waar wil je hulp bij?'
        interesse='Team / Over ons'
      />
    </>
  );
}
