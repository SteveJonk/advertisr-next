import { CmsPage, cmsMetadata } from '@/components/CmsPage';
import { HOME_SLUG } from '@/lib/links';

export const generateMetadata = () => cmsMetadata(HOME_SLUG);

export default function HomePage() {
  return <CmsPage slug={HOME_SLUG} />;
}
