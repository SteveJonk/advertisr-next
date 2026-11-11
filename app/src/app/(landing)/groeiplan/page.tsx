import { CmsPage, cmsMetadata } from '@/components/CmsPage';

// The `groeiplan` page document, in the landing layout of this route group.
export const generateMetadata = () => cmsMetadata('groeiplan');

export default function GroeiplanPage() {
  return <CmsPage slug='groeiplan' />;
}
