import type { Metadata } from 'next';
/*
 * FONTS — Bricolage Grotesque (headings) and Inter (body), as in the
 * Advertisr. designs. Keep the `variable` names: globals.css reads them.
 */
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import { TrackingScriptsBody, TrackingScriptsHead } from '@/components/TrackingScripts';
import { getSite, SITE_URL } from '@/lib/site';
import './globals.css';

const display = Bricolage_Grotesque({
  variable: '--font-display-src',
  subsets: ['latin'],
  // Variable font + optical-size axis, like the designs (opsz 12..96): large headings get the narrower display cut.
  axes: ['opsz'],
});

const sans = Inter({
  variable: '--font-sans-src',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

/** Site-wide defaults from Site information; each page's `seo` layers on top. */
export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: site.defaultTitle, template: `%s | ${site.name}` },
    description: site.description,
    openGraph: { type: 'website', siteName: site.name },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { language } = await getSite();
  return (
    <html lang={language} data-scroll-behavior='smooth' className={`${display.variable} ${sans.variable} h-full antialiased`}>
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
