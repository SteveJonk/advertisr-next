import {defineArrayMember, defineField, defineType, type FieldDefinition} from 'sanity'
import {bool, cta, head, img, inline, list, num, obj, paragraphs, refs, stat, str, strings, txt} from './fields'

/**
 * Every section of the Advertisr. design is one block here. The renderer is
 * `app/src/components/PageBuilder.tsx`; field names mirror the component props.
 *
 * ADDING A BLOCK: add a `block(...)` below and to `BLOCKS`, project any
 * references in `app/src/sanity/queries.ts`, add a case to `PageBuilder.tsx`.
 */

type PT = {children?: {text?: string}[]}[] | string | undefined
const plain = (value: PT) =>
  typeof value === 'string' ? value : (value ?? []).flatMap((b) => b.children ?? []).map((c) => c.text).join('')

function block(name: string, title: string, fields: FieldDefinition[]) {
  return defineType({
    name,
    title,
    type: 'object',
    fields,
    preview: {
      select: {heading: 'title', eyebrow: 'eyebrow', crumb: 'crumb'},
      prepare: ({heading, eyebrow, crumb}) => ({title: plain(heading) || eyebrow || crumb || title, subtitle: title}),
    },
  })
}

const anchor = (initialValue: string) =>
  str('anchor', {initialValue, description: 'Id for #links to this section, without the #.'})

const badge = () => obj('badge', [str('title'), str('text')])
const band = () => obj('band', [inline('title'), txt('text', {rows: 2}), cta('cta', {description: 'Empty = the default "Ontvang mijn groeiplan" button.'})])
const steps = () => list('steps', [str('title'), txt('text')])
const quote = () => obj('quote', [img('image'), inline('line'), str('signature')])

/** A form from Forms; `interesse` fills a hidden field whose value is {{interesse}}. */
const formRef = () =>
  defineField({
    name: 'form',
    type: 'reference',
    to: [{type: 'form'}],
    description: 'The form to show. Its fields, buttons and confirmation are managed under Forms.',
    validation: (r) => r.required(),
  })
const form = () => [
  formRef(),
  str('interesse', {description: 'Sent along with the submission ({{interesse}} in a hidden field), e.g. "Meta Ads".'}),
]

export const BLOCKS = [
  // Openers
  block('homeHero', 'Home hero', [
    ...head(false),
    inline('lead'),
    cta('primaryCta'),
    cta('secondaryCta'),
    txt('note'),
    img('image', {title: 'Large photo'}),
    img('image2', {title: 'Middle photo'}),
    img('image3', {title: 'Small photo'}),
  ]),
  block('serviceHero', 'Service hero', [
    str('crumb', {title: 'Breadcrumb', description: 'After Home / Diensten.'}),
    ...head(),
    cta('primaryCta'),
    cta('secondaryCta'),
    strings('ticks'),
    defineField({
      name: 'visual',
      type: 'string',
      description: 'The animated illustration beside the text. "Portal" shows the screenshot below.',
      options: {list: ['phone', 'serp', 'site', 'dash', 'journey', 'flow', 'social', 'portal']},
    }),
    {...img('image', {title: 'Portal screenshot'}), hidden: ({parent}: {parent?: {visual?: string}}) => parent?.visual !== 'portal'} as FieldDefinition,
    {...str('browserUrl', {title: 'Address in the browser frame'}), hidden: ({parent}: {parent?: {visual?: string}}) => parent?.visual !== 'portal'} as FieldDefinition,
    {...str('caption'), hidden: ({parent}: {parent?: {visual?: string}}) => parent?.visual !== 'portal'} as FieldDefinition,
    {...list('floatStats', [str('value'), str('label')]), hidden: ({parent}: {parent?: {visual?: string}}) => parent?.visual !== 'portal'} as FieldDefinition,
  ]),
  block('pageHero', 'Page hero', [str('crumb', {title: 'Breadcrumb'}), ...head(), cta('primaryCta'), cta('secondaryCta'), img('image'), stat()]),
  block('contactHero', 'Contact hero', [
    str('crumb', {title: 'Breadcrumb'}),
    ...head(),
    list('quick', [str('icon', {description: 'An emoji.'}), str('label'), str('value'), str('href')], {title: 'Contact details', preview: {title: 'label', subtitle: 'value'}}),
    strings('ticks'),
    anchor('contactformulier'),
    ...form(),
  ]),
  block('groeiplanHero', 'Groeiplan hero', [
    str('badge'),
    inline('title'),
    txt('lead'),
    strings('ticks'),
    list('mini', [str('value'), str('label')], {title: 'Small figures'}),
    anchor('plan'),
    str('formIntro', {title: 'Above the form'}),
    ...form(),
    list('floatStats', [str('value'), str('label'), bool('stars')], {title: 'Figures on the form'}),
  ]),
  block('articleIndex', 'Kennisbank overview', [
    str('crumb', {title: 'Breadcrumb'}),
    ...head(),
    str('searchLabel'),
    str('searchPlaceholder'),
    str('searchButton'),
    str('allLabel', {title: 'All-categories pill'}),
    str('noResults', {title: 'No-results text', description: 'Shown when the search or category matches no article.'}),
    obj('featured', head(), {title: 'Pillar guides heading'}),
    obj('latest', head(false), {title: 'Latest articles heading'}),
    str('loadMoreLabel'),
    band(),
    obj('newsletter', [str('title'), txt('text', {rows: 2}), ...form()]),
  ]),

  // Shared sections
  block('marquee', 'Marquee', [strings('items')]),
  block('compare', 'Comparison', [
    ...head(),
    str('themLabel', {title: 'Left column'}),
    str('usLabel', {title: 'Right column'}),
    str('themPrefix', {title: 'Left prefix on phones'}),
    list('rows', [str('label'), txt('them', {rows: 2}), txt('us', {rows: 2})]),
  ]),
  block('pain', 'Herken je dit?', [...head(), list('items', [str('quote'), txt('text')]), quote()]),
  block('funnel', 'Funnel layers', [
    anchor('aanpak'),
    ...head(false),
    txt('body', {rows: 4}),
    str('ghostLabel', {title: 'Link under the text', description: 'Goes to the lead form.'}),
    list('layers', [str('tag'), str('title'), txt('text'), inline('kpi')], {preview: {title: 'title', subtitle: 'tag'}}),
  ]),
  block('deliverables', 'Deliverables', [...head(), obj('photo', [img('image'), str('title'), txt('text', {rows: 2})]), list('rows', [str('title'), txt('text')]), band()]),
  block('mediaChips', 'Photo with chips', [img('image'), badge(), ...head(false), paragraphs('paragraphs'), strings('chips'), bool('screenshot', {description: 'A website screenshot: shown uncropped.'})]),
  block('caseHighlight', 'Case highlight', [...head(false), img('image'), str('category'), str('name'), txt('text', {rows: 4}), list('stats', [str('value'), str('label')])]),
  block('procSteps', 'Steps in a row', [...head(false), steps()]),
  block('ctaBand', 'Dark CTA band', [inline('title'), txt('text', {rows: 2}), cta('cta')]),
  block('quoteBand', 'Founder quote', [quote()]),
  block('faqs', 'FAQ', [...head(false), refs('faqs', 'faq', {title: 'Questions'}), bool('soft', {title: 'On the grey band'})]),
  block('logos', 'Client logos', [...head(false), str('note')]),
  block('reviews', 'Reviews', [...head(false), num('count', {initialValue: 6, description: 'How many reviews to show.'})]),
  block('finalCta', 'Lead form section', [anchor('groeiplan'), ...head(), strings('bullets'), ...form(), bool('dots', {title: 'Dotted background'})]),

  // Home
  block('stages', 'Four stages', [
    anchor('diensten'),
    ...head(),
    list('stages', [str('title'), txt('text', {rows: 2}), list('links', [str('label'), str('href'), str('badge')], {preview: {title: 'label', subtitle: 'href'}}) as FieldDefinition]),
    obj('band', [inline('text'), cta('cta')]),
  ]),
  block('caseCards', 'Case cards', [anchor('cases'), ...head(), refs('cases', 'caseStudy')]),
  block('approach', 'Approach', [anchor('aanpak'), ...head(false), steps(), obj('closing', [str('title'), str('text'), cta('cta')])]),
  block('statBand', 'Figures', [stat()]),
  block('homeTeam', 'Team intro', [anchor('team'), img('image'), badge(), ...head(false), paragraphs('paragraphs'), strings('chips')]),

  // Other pages
  block('teamGrid', 'Team members', [anchor('team'), ...head(), refs('members', 'teamMember')]),
  block('story', 'Story', [...head(false), str('uspTitle', {title: 'Box title'}), list('usps', [str('title'), str('text')], {title: 'Box items'}), paragraphs('paragraphs')]),
  block('caseList', 'Results list', [refs('cases', 'caseStudy'), band()]),
  block('contactMethods', 'Contact options', [...head(false), list('methods', [str('icon', {description: 'An emoji.'}), str('title'), str('value'), str('text'), str('href')])]),
  block('infoCard', 'Info card', [str('icon', {description: 'An emoji.'}), str('title'), txt('text', {rows: 2}), cta('cta')]),
  block('valueGrid', 'Numbered cards', [...head(), list('items', [str('title'), txt('text')])]),
  block('stepsMedia', 'Photo with steps', [img('image'), badge(), ...head(false), steps(), band()]),
  block('toolCards', 'Tool cards', [
    anchor('tools'),
    ...head(),
    list('tools', [str('tag'), str('name'), txt('text'), strings('points')], {preview: {title: 'name', subtitle: 'tag'}}),
    list('options', [str('title'), txt('text', {rows: 2}), bool('highlight')]),
  ]),
  block('stepCards', 'Step cards', [...head(false), steps(), band()]),
  block('features', 'Feature rows', [
    str('browserUrl', {title: 'Address in the browser frame'}),
    list(
      'items',
      [
        str('eyebrow'),
        str('title'),
        txt('text'),
        list('points', [inline('text')], {preview: {title: 'text'}}) as FieldDefinition,
        inline('note', {title: 'Note box'}),
        defineField({name: 'images', type: 'array', of: [defineArrayMember({type: 'image', fields: [str('alt')]})], description: 'One screenshot, or two overlapping.'}),
        bool('flip', {title: 'Image on the left'}),
      ],
      {preview: {title: 'title', subtitle: 'eyebrow'}},
    ),
  ]),
  block('pillars', 'Icon cards', [...head(), list('items', [str('icon', {description: 'An emoji.'}), str('title'), txt('text', {rows: 2})])]),
  block('output', 'Figures grid', [...head(), list('items', [str('value'), str('label')])]),
]

/** The block list editors can insert on a page. */
export const pageBuilderType = defineType({
  name: 'pageBuilder',
  title: 'Content',
  type: 'array',
  of: BLOCKS.map((b) => defineArrayMember({type: b.name})),
  options: {insertMenu: {filter: true, views: [{name: 'list'}]}},
})
