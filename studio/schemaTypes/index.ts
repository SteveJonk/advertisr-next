import {BLOCKS, pageBuilderType} from './blocks'
import {
  articleCategoryType,
  articleType,
  caseStudyType,
  clientType,
  faqType,
  pageType,
  reviewType,
  teamMemberType,
} from './documents'
import {articleBodyType, ctaType, inlineTextType, seoType} from './objects'
import {footerType, googleReviewsType, navigationType, siteInformationType} from './singletons'

/** Every schema type the studio knows about. Blocks live in `blocks.ts`. */
export const schemaTypes = [
  // Documents
  pageType,
  articleType,
  articleCategoryType,
  faqType,
  caseStudyType,
  reviewType,
  clientType,
  teamMemberType,
  // Singletons
  siteInformationType,
  navigationType,
  footerType,
  googleReviewsType,
  // Objects
  inlineTextType,
  ctaType,
  seoType,
  articleBodyType,
  pageBuilderType,
  ...BLOCKS,
]
