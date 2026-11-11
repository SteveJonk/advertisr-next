import {DocumentIcon} from '@sanity/icons/Document'
import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {HelpCircleIcon} from '@sanity/icons/HelpCircle'
import {StarIcon} from '@sanity/icons/Star'
import {TagIcon} from '@sanity/icons/Tag'
import {TrendUpwardIcon} from '@sanity/icons/TrendUpward'
import {UserIcon} from '@sanity/icons/User'
import {UsersIcon} from '@sanity/icons/Users'
import {defineField, defineType, type ConditionalPropertyCallbackContext} from 'sanity'
import {img, list, num, refs, str, strings, txt} from './fields'

const slug = (source = 'title') =>
  defineField({name: 'slug', type: 'slug', options: {source}, validation: (r) => r.required()})

const sortOrder = num('sortOrder', {title: 'Sort order', description: 'Lower comes first. Empty goes last.'})

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    str('title', {required: true}),
    {...slug(), description: '"home" is the home page (/), "groeiplan" gets the landing-page layout.'},
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
    defineField({name: 'content', type: 'pageBuilder'}),
  ],
  preview: {select: {title: 'title', subtitle: 'slug.current'}},
})

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  icon: HelpCircleIcon,
  fields: [str('question', {required: true}), txt('answer', {required: true, rows: 5})],
  preview: {select: {title: 'question', subtitle: 'answer'}},
})

export const caseStudyType = defineType({
  name: 'caseStudy',
  title: 'Case study',
  type: 'document',
  icon: TrendUpwardIcon,
  fields: [
    str('name', {required: true}),
    {...slug('name'), description: 'The case page lives at /case/<slug>.'},
    str('category', {description: 'On the photo cards, e.g. "Groothandel, Google & Meta Ads".'}),
    str('badge', {description: 'On the photo in the results list, e.g. "Groothandel · Internationaal".'}),
    str('eyebrow', {description: 'Above the headline in the results list.'}),
    str('headline'),
    txt('summary', {rows: 5}),
    img('image', {required: true}),
    list('stats', [str('value'), str('label')], {description: 'The cards show the first two.'}),
    strings('tags', {title: 'Services'}),
    defineField({name: 'body', title: 'Full story', type: 'articleBody', description: 'Optional. Shown on the case page below the results.'}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
    defineField({name: 'url', title: 'Old website URL', type: 'url', description: 'Where this case lived on the old site; only kept for redirects.'}),
    sortOrder,
  ],
  orderings: [{title: 'Sort order', name: 'sort', by: [{field: 'sortOrder', direction: 'asc'}]}],
  preview: {select: {title: 'name', subtitle: 'category', media: 'image'}},
})

export const clientType = defineType({
  name: 'client',
  title: 'Client logo',
  type: 'document',
  icon: UsersIcon,
  fields: [str('name', {required: true}), img('logo', {required: true}), sortOrder],
  orderings: [{title: 'Sort order', name: 'sort', by: [{field: 'sortOrder', direction: 'asc'}]}],
  preview: {select: {title: 'name', media: 'logo'}},
})

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team member',
  type: 'document',
  icon: UserIcon,
  groups: [
    {name: 'team', title: 'Team page', default: true},
    {name: 'author', title: 'As author'},
  ],
  fields: [
    str('name', {required: true, group: 'team'}),
    str('role', {group: 'team'}),
    txt('bio', {group: 'team'}),
    img('photo', {group: 'team'}),
    str('authorTitle', {title: 'Title', group: 'author', description: 'Under the name on articles.'}),
    txt('authorBio', {title: 'Bio', group: 'author', rows: 4, description: '"Over de auteur" at the end of an article.'}),
    sortOrder,
  ],
  orderings: [{title: 'Sort order', name: 'sort', by: [{field: 'sortOrder', direction: 'asc'}]}],
  preview: {select: {title: 'name', subtitle: 'role', media: 'photo'}},
})

export const articleCategoryType = defineType({
  name: 'articleCategory',
  title: 'Article category',
  type: 'document',
  icon: TagIcon,
  fields: [
    str('title', {required: true}),
    defineField({name: 'color', type: 'string', description: 'Hex colour of the card art, e.g. #FF3951.'}),
    defineField({
      name: 'icon',
      type: 'string',
      description: 'Line icon on the card art.',
      options: {list: ['target', 'play', 'search', 'bars', 'nodes', 'spark']},
    }),
    sortOrder,
  ],
  orderings: [{title: 'Sort order', name: 'sort', by: [{field: 'sortOrder', direction: 'asc'}]}],
  preview: {select: {title: 'title', subtitle: 'color'}},
})

export const articleType = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'meta', title: 'Details'},
    {name: 'after', title: 'Below the article'},
  ],
  fields: [
    str('title', {required: true, group: 'content'}),
    {...slug(), group: 'meta'},
    txt('excerpt', {group: 'content', description: 'On the cards in the kennisbank.'}),
    txt('intro', {group: 'content', description: 'Under the title on the article page.'}),
    img('image', {title: 'Card image', group: 'content', description: 'On the kennisbank card. Empty = the category art.'}),
    defineField({name: 'body', type: 'articleBody', group: 'content', validation: (r) => r.required()}),
    defineField({name: 'category', type: 'reference', to: [{type: 'articleCategory'}], group: 'meta'}),
    defineField({name: 'author', type: 'reference', to: [{type: 'teamMember'}], group: 'meta'}),
    num('minutes', {title: 'Reading time (minutes)', group: 'meta'}),
    defineField({name: 'publishedAt', title: 'Published', type: 'date', group: 'meta'}),
    defineField({name: 'updatedAt', title: 'Last updated', type: 'date', group: 'meta'}),
    defineField({
      name: 'featured',
      title: 'Pillar guide',
      type: 'boolean',
      initialValue: false,
      group: 'meta',
      description: 'Shown under "Uitgelicht" in the kennisbank.',
    }),
    str('crumbLabel', {title: 'Breadcrumb label', group: 'meta', description: 'Last breadcrumb, e.g. "Complete gids". Empty = title.'}),
    list('sources', [str('label'), str('url')], {group: 'after'}),
    strings('tags', {group: 'after'}),
    refs('faqs', 'faq', {title: 'FAQs', group: 'after'}),
    defineField({name: 'related', title: 'Related articles', type: 'array', group: 'after', of: [{type: 'reference', to: [{type: 'article'}], weak: true}]}),
    str('ctaTitle', {title: 'Closing band title', group: 'after'}),
    txt('ctaText', {title: 'Closing band text', group: 'after', rows: 2}),
    defineField({name: 'seo', title: 'SEO', type: 'seo', group: 'meta'}),
  ],
  orderings: [{title: 'Newest', name: 'newest', by: [{field: 'publishedAt', direction: 'desc'}]}],
  preview: {select: {title: 'title', subtitle: 'category.title'}},
})

/** Fields the Google sync owns: read-only on a synced review, it would overwrite them anyway. */
const fromGoogle = ({document}: ConditionalPropertyCallbackContext) => document?.source === 'google'

export const reviewType = defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'source',
      type: 'string',
      options: {
        list: [
          {title: 'Manual', value: 'manual'},
          {title: 'Google', value: 'google'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'manual',
      readOnly: true,
      description: 'Google reviews are imported via "Google reviews".',
    }),
    defineField({name: 'hidden', title: 'Hide on the website', type: 'boolean', initialValue: false}),
    {...str('name', {required: true}), readOnly: fromGoogle},
    defineField({
      name: 'rating',
      type: 'number',
      readOnly: fromGoogle,
      initialValue: 5,
      options: {list: [5, 4, 3, 2, 1]},
      validation: (r) => r.required().min(1).max(5).integer(),
    }),
    defineField({name: 'publishedAt', title: 'Date', type: 'datetime', readOnly: fromGoogle}),
    {...txt('text', {required: true, rows: 4}), readOnly: fromGoogle},
    defineField({
      name: 'tone',
      title: 'Avatar colour',
      type: 'string',
      options: {list: ['pink', 'purple', 'red', 'green', 'dark', 'dim']},
      description: 'Empty picks one from the name.',
    }),
    sortOrder,
    defineField({
      name: 'google',
      type: 'object',
      readOnly: true,
      hidden: ({document}) => document?.source !== 'google',
      options: {collapsible: true, collapsed: true},
      fields: [
        str('reviewId'),
        defineField({name: 'authorUrl', type: 'url'}),
        defineField({name: 'authorPhotoUrl', type: 'url'}),
        defineField({name: 'reviewUrl', type: 'url'}),
        str('language'),
        defineField({name: 'syncedAt', type: 'datetime'}),
      ],
    }),
  ],
  orderings: [
    {title: 'Sort order', name: 'sort', by: [{field: 'sortOrder', direction: 'asc'}]},
    {title: 'Newest', name: 'newest', by: [{field: 'publishedAt', direction: 'desc'}]},
  ],
  preview: {
    select: {name: 'name', text: 'text', rating: 'rating', source: 'source', hidden: 'hidden'},
    prepare: ({name, text, rating, source, hidden}) => ({
      title: `${hidden ? '🚫 ' : ''}${name ?? '–'}`,
      subtitle: [rating ? '★'.repeat(rating) : null, source === 'google' ? 'Google' : null, text]
        .filter(Boolean)
        .join(' · '),
    }),
  },
})
