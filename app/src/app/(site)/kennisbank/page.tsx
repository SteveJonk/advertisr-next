import { CmsPage, cmsMetadata } from '@/components/CmsPage';

// A route of its own because `kennisbank/[slug]` claims the segment.
export const generateMetadata = () => cmsMetadata('kennisbank');

export default function KennisbankPage() {
  return <CmsPage slug='kennisbank' />;
}
