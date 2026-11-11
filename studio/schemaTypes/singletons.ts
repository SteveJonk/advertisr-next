import {BlockElementIcon} from '@sanity/icons/BlockElement'
import {CogIcon} from '@sanity/icons/Cog'
import {MenuIcon} from '@sanity/icons/Menu'
import {StarIcon} from '@sanity/icons/Star'
import {defineArrayMember, defineField, defineType, type FieldDefinition} from 'sanity'
import {GoogleReviewsSync} from '../tools/GoogleReviewsSync'
import {list, str, strings, txt} from './fields'

const link = (name: string, title?: string) =>
  list(name, [str('label'), str('href', {title: 'URL', description: '/page, /#anchor, https://…, mailto:'})], {
    title,
    preview: {title: 'label', subtitle: 'href'},
  })

/** One fieldset per area of the site, so the long list stays findable. */
const UI: Record<string, [name: string, title: string][]> = {
  general: [
    ['ctaLabel', 'Default red button ("Ontvang mijn groeiplan")'],
    ['crumbHome', 'Breadcrumb: home'],
    ['crumbServices', 'Breadcrumb: services'],
    ['crumbKennisbank', 'Breadcrumb: kennisbank (on articles)'],
    ['stepPrefix', 'Step label ("Stap" → STAP 01)'],
    ['caseCardLink', 'Case card link'],
    ['caseListLink', 'Results list link'],
    ['ratedOnGoogle', 'Rating card under the score'],
    ['onGoogle', 'After the score in badges ("op Google")'],
    ['googleReview', 'After a reviewer\'s name ("Google review")'],
  ],
  form: [
    ['formName', 'Name label'],
    ['formNamePlaceholder', 'Name placeholder'],
    ['formCompany', 'Company label'],
    ['formCompanyPlaceholder', 'Company placeholder'],
    ['formEmail', 'E-mail label'],
    ['formEmailPlaceholder', 'E-mail placeholder'],
    ['formPhone', 'Phone label'],
    ['formPhonePlaceholder', 'Phone placeholder'],
    ['formWebsite', 'Website label'],
    ['formWebsitePlaceholder', 'Website placeholder'],
    ['formMessage', 'Message label'],
    ['formMessagePlaceholder', 'Message placeholder'],
    ['formSubmit', 'Submit button'],
    ['formSending', 'While sending'],
    ['formFine', 'Small print under the button'],
    ['formSuccessTitle', 'Sent: title'],
    ['formSuccessBody', 'Sent: text'],
    ['formError', 'Sending failed'],
    ['newsletterButton', 'Newsletter button'],
    ['newsletterSuccess', 'Newsletter: signed up'],
    ['newsletterError', 'Newsletter: failed'],
  ],
  articles: [
    ['pillarBadge', 'Pillar guide badge'],
    ['readingTime', 'After the minutes ("min leestijd")'],
    ['updated', 'Card: "Bijgewerkt"'],
    ['toc', 'Table of contents'],
    ['published', 'Article: "Gepubliceerd"'],
    ['lastUpdated', 'Article: "Laatst bijgewerkt"'],
    ['shareLinkedIn', 'Share on LinkedIn (screen readers)'],
    ['copyLink', 'Copy link (screen readers)'],
    ['linkCopied', 'Link copied'],
    ['sources', 'Sources heading'],
    ['aboutAuthor', 'About the author heading'],
    ['faqEyebrow', 'FAQ eyebrow'],
    ['faqTitle', 'FAQ title'],
    ['relatedEyebrow', 'Related articles eyebrow'],
    ['relatedTitle', 'Related articles title'],
  ],
  notFound: [
    ['notFoundMetaTitle', '404 browser tab title'],
    ['notFoundEyebrow', '404 eyebrow'],
    ['notFoundTitle', '404 title'],
    ['notFoundBody', '404 text'],
    ['notFoundButtonLabel', '404 button'],
  ],
}

export const UI_KEYS = Object.values(UI).flatMap((fields) => fields.map(([name]) => name))

export const siteInformationType = defineType({
  name: 'siteInformation',
  title: 'Site information',
  type: 'document',
  icon: CogIcon,
  groups: [
    {name: 'identity', title: 'Identity', default: true},
    {name: 'contact', title: 'Contact'},
    {name: 'interface', title: 'Interface text'},
  ],
  fields: [
    str('name', {title: 'Site name', group: 'identity', required: true}),
    str('defaultTitle', {title: 'Browser title of the home page', group: 'identity'}),
    txt('description', {group: 'identity', description: 'Footer tagline and the default meta description.'}),
    str('language', {group: 'identity', initialValue: 'nl', description: 'BCP 47, e.g. nl.'}),
    defineField({name: 'logo', type: 'image', group: 'identity', description: 'Structured data only; the visible logo is a component.'}),
    str('email', {group: 'contact'}),
    str('phone', {group: 'contact'}),
    str('city', {group: 'contact', description: 'Short, e.g. "Haarlem, NH".'}),
    defineField({
      name: 'address',
      type: 'array',
      group: 'contact',
      of: [defineArrayMember({type: 'string'})],
      description: 'One line per row. The last line is read as postcode + city.',
    }),
    str('addressCountry', {title: 'Country code', group: 'contact', initialValue: 'NL'}),
    strings('socialLinks', {title: 'Social profile URLs', group: 'contact'}),
    defineField({
      name: 'interfaceText',
      title: 'Interface text',
      type: 'object',
      group: 'interface',
      description: 'The fixed copy around the content: buttons, form labels, badges.',
      fieldsets: Object.keys(UI).map((name) => ({name, title: name, options: {collapsible: true, collapsed: true}})),
      fields: Object.entries(UI).flatMap(([fieldset, fields]) =>
        fields.map(([name, title]) => str(name, {title, fieldset}) as FieldDefinition),
      ),
    }),
  ],
  preview: {prepare: () => ({title: 'Site information'})},
})

export const navigationType = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: MenuIcon,
  fields: [
    list(
      'links',
      [
        str('label'),
        str('href', {title: 'URL'}),
        strings('match', {title: 'Also active on', description: 'Paths that light this link up, e.g. every service page.'}),
      ],
      {preview: {title: 'label', subtitle: 'href'}},
    ),
    str('ctaLabel', {title: 'Button'}),
    str('landingCtaLabel', {title: 'Button on the landing page'}),
  ],
  preview: {prepare: () => ({title: 'Navigation'})},
})

export const footerType = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  icon: BlockElementIcon,
  fields: [
    list('columns', [str('title'), link('links') as FieldDefinition], {preview: {title: 'title'}}),
    link('legal', 'Legal links'),
    str('copyright'),
  ],
  preview: {prepare: () => ({title: 'Footer'})},
})

/**
 * Settings for the Google reviews sync, plus what the last run wrote back
 * (score, count, status). The sync itself is the app's `/api/google-reviews`;
 * a daily cron calls it and the panel on top of this page can too.
 *
 * The API key and the sync secret are NOT stored here: a public dataset can be
 * read by anyone with the project id. They live in the app's environment.
 */
export const googleReviewsType = defineType({
  name: 'googleReviews',
  title: 'Google reviews',
  type: 'document',
  icon: StarIcon,
  groups: [
    {name: 'settings', title: 'Settings', default: true},
    {name: 'status', title: 'Last sync'},
  ],
  fields: [
    defineField({name: 'sync', title: 'Sync', type: 'string', group: 'settings', components: {field: GoogleReviewsSync}}),
    str('placeId', {
      title: 'Google Place ID',
      group: 'settings',
      description: 'Usually starts with "ChIJ". Find it with https://developers.google.com/maps/documentation/places/web-service/place-id',
    }),
    str('languageCode', {title: 'Language', group: 'settings', initialValue: 'nl'}),
    defineField({
      name: 'enabled',
      title: 'Fetch daily',
      type: 'boolean',
      group: 'settings',
      initialValue: true,
      description: 'Off = the scheduled run does nothing. Syncing from here still works.',
    }),
    defineField({
      name: 'siteUrl',
      title: 'Website address',
      type: 'url',
      group: 'settings',
      description: 'Where the buttons above call the sync. Empty = SANITY_STUDIO_SITE_URL.',
    }),
    ...[
      str('placeName', {title: 'Name on Google', group: 'status'}),
      defineField({name: 'rating', title: 'Average score', type: 'number', group: 'status', description: 'Shown in the review badges. Over all Google reviews.'}),
      defineField({name: 'userRatingCount', title: 'Number of reviews', type: 'number', group: 'status'}),
      defineField({name: 'googleMapsUri', title: 'Google Maps', type: 'url', group: 'status'}),
      defineField({
        name: 'lastSync',
        type: 'object',
        group: 'status',
        fields: [
          defineField({name: 'at', type: 'datetime'}),
          str('trigger'),
          defineField({name: 'ok', type: 'boolean'}),
          str('message'),
          defineField({name: 'created', type: 'number'}),
          defineField({name: 'updated', type: 'number'}),
        ],
      }),
    ].map((field) => ({...field, readOnly: true})),
  ],
  preview: {prepare: () => ({title: 'Google reviews'})},
})
