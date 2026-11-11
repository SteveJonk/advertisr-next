import { Check, Sec, SecHead, Wrap } from './ui';

const COMPARE = [
  [
    'Wie je spreekt',
    'Een accountmanager die je vraag doorzet naar iemand anders.',
    'De marketeer die je campagnes zelf bouwt en bijstuurt.',
  ],
  ['Contract', 'Een jaarcontract, vooraf vastgelegd.', 'Maandelijks opzegbaar. We moeten het elke maand waarmaken.'],
  ['Opstarten', 'Een eenmalige setup-fee voordat er iets draait.', 'Geen opstartkosten voor Ads. De inrichting zit in de eerste maand.'],
  ['Rapportage', 'Een pdf vol grafieken zonder uitleg.', 'Elke maand een gesprek: wat leverde het op, en wat doen we nu.'],
  ['Eigendom', 'Accounts en data staan op naam van het bureau.', 'Advertentieaccounts, data en tracking blijven altijd van jou.'],
];

/** "Bureaus zetten er vaak een laag tussen. Wij niet." comparison table. */
export function Compare() {
  return (
    <Sec id='verschil'>
      <Wrap>
        <SecHead
          eyebrow='Waarom Advertisr.'
          title={
            <>
              Bureaus zetten er vaak een laag tussen. <em>Wij niet.</em>
            </>
          }
          lead='Je wilt weten wat je marketing oplevert, en je wilt iemand kunnen bellen als het niet loopt. Daar is ons hele bureau op ingericht.'
        />
        <div className='rv border-t-[1.5px] border-ink' role='table' aria-label='Vergelijking'>
          <div
            className='grid grid-cols-[200px_1fr_1fr] gap-8 border-b border-line py-4 text-[11.5px] font-semibold tracking-[.14em] text-dim-2 uppercase max-sm:hidden'
            role='row'
          >
            <span role='columnheader' />
            <span role='columnheader'>Wat je vaak ziet</span>
            <span role='columnheader' className='text-red-ink'>
              Bij Advertisr.
            </span>
          </div>
          {COMPARE.map(([k, them, us]) => (
            <div
              key={k}
              className='grid grid-cols-[200px_1fr_1fr] items-start gap-8 border-b border-line py-[26px] max-sm:grid-cols-1 max-sm:gap-2.5 max-sm:py-[22px]'
              role='row'
            >
              <span className='font-display text-xl font-bold tracking-[-.02em]' role='rowheader'>
                {k}
              </span>
              <span
                className="text-[16.5px] text-dim max-sm:before:font-semibold max-sm:before:text-dim-2 max-sm:before:content-['Vaak:_']"
                role='cell'
              >
                {them}
              </span>
              <span className='flex items-start gap-3 text-[16.5px] font-medium text-ink' role='cell'>
                <Check className='mt-0.5' />
                <span>{us}</span>
              </span>
            </div>
          ))}
        </div>
      </Wrap>
    </Sec>
  );
}
