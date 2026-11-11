import type { Metadata } from 'next';
/*
 * FONTS — Bricolage Grotesque (headings) and Inter (body), as in the
 * Advertisr. designs. Keep the `variable` names: globals.css reads them.
 */
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import { TrackingScriptsBody, TrackingScriptsHead } from '@/components/TrackingScripts';
import { SITE_URL } from '@/lib/site';
import './globals.css';

const display = Bricolage_Grotesque({
  variable: '--font-display-src',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
});

const sans = Inter({
  variable: '--font-sans-src',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Advertisr. | Marketing zonder gedoe.',
    template: '%s | Advertisr.',
  },
  description: 'Online marketingbureau in Haarlem. Groeisystemen op Meta Ads, Google Ads en AI Agent Workflows.',
  openGraph: { type: 'website', siteName: 'Advertisr.', locale: 'nl_NL' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='nl' data-scroll-behavior='smooth' className={`${display.variable} ${sans.variable} h-full antialiased`}>
      <head>
        <TrackingScriptsHead />
      </head>
      <body className='min-h-full'>
        {/* Vendor-specified position: first element inside <body>. */}
        <TrackingScriptsBody />
        {children}
      </body>
    </html>
  );
}
