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
import {formType} from './form'
import {formFieldType} from './formField'
import {formGeneralSettingsType} from './formSettings'
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
  formType,
  // Singletons
  siteInformationType,
  navigationType,
  footerType,
  googleReviewsType,
  formGeneralSettingsType,
  // Objects
  inlineTextType,
  ctaType,
  seoType,
  articleBodyType,
  formFieldType,
  pageBuilderType,
  ...BLOCKS,
]
