import { BtnRed, Eyebrow, Wrap } from '@/components/advertisr/ui';
import { getSite } from '@/lib/site';

export default async function NotFound() {
  const { ui } = await getSite();
  return (
    <main className='flex min-h-[70vh] items-center py-32 max-sm:py-24'>
      <Wrap className='w-full max-w-160'>
        <Eyebrow>{ui.notFoundEyebrow}</Eyebrow>
        <h1 className='mt-4 mb-5 text-[clamp(2.2rem,4vw,3.4rem)] tracking-[-.04em]'>{ui.notFoundTitle}</h1>
        <p className='mb-9 max-w-[36ch] text-[17px] leading-[1.7] text-dim'>{ui.notFoundBody}</p>
        <BtnRed href='/'>{ui.notFoundButtonLabel}</BtnRed>
      </Wrap>
    </main>
  );
}
