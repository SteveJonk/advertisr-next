import {BlockElementIcon} from '@sanity/icons/BlockElement'
import {CogIcon} from '@sanity/icons/Cog'
import {EnvelopeIcon} from '@sanity/icons/Envelope'
import {ImagesIcon} from '@sanity/icons/Images'
import {MenuIcon} from '@sanity/icons/Menu'
import {RefreshIcon} from '@sanity/icons/Refresh'
import {StarIcon} from '@sanity/icons/Star'
import type {StructureResolver} from 'sanity/structure'
import {ClearCache} from './tools/ClearCache'
import {MediaLibrary} from './tools/MediaTool'

/**
 * Documents that exist exactly once. They get a fixed `_id` and a top-level
 * menu entry, and are left out of the generic list so they cannot be created
 * twice.
 */
export const SINGLETONS = ['siteInformation', 'navigation', 'footer', 'googleReviews', 'formGeneralSettings']

const LISTED = ['page', 'article', 'articleCategory', 'faq', 'caseStudy', 'review', 'client', 'teamMember', 'form']

export const structure: StructureResolver = (S) => {
  const singleton = (id: string, title: string, icon: typeof CogIcon) =>
    S.listItem().title(title).id(id).icon(icon).child(S.document().schemaType(id).documentId(id).title(title))

  return S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('page').title('Pages'),
      S.documentTypeListItem('article').title('Articles'),
      S.documentTypeListItem('articleCategory').title('Article categories'),
      S.documentTypeListItem('faq').title('FAQs'),
      S.divider(),
      S.documentTypeListItem('caseStudy').title('Case studies'),
      S.documentTypeListItem('teamMember').title('Team'),
      S.documentTypeListItem('client').title('Client logos'),
      S.documentTypeListItem('review').title('Reviews'),
      singleton('googleReviews', 'Google reviews', StarIcon),
      S.divider(),
      S.documentTypeListItem('form').title('Forms').icon(EnvelopeIcon),
      singleton('formGeneralSettings', 'Form settings', CogIcon),
      S.divider(),
      singleton('siteInformation', 'Site information', CogIcon),
      singleton('navigation', 'Navigation', MenuIcon),
      singleton('footer', 'Footer', BlockElementIcon),
      S.divider(),
      // Not a document type but a panel: Sanity's asset browser only opens
      // from an image field, so without this the media library is invisible.
      S.listItem().title('Media').id('media').icon(ImagesIcon).child(S.component(MediaLibrary).title('Media').id('media')),
      S.listItem()
        .title('Refresh website')
        .id('clearCache')
        .icon(RefreshIcon)
        .child(S.component(ClearCache).title('Refresh website').id('clearCache')),
      ...S.documentTypeListItems().filter((item) => !!item.getId() && ![...LISTED, ...SINGLETONS].includes(item.getId()!)),
    ])
}
