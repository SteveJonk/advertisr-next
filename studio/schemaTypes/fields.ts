import {defineArrayMember, defineField, type FieldDefinition} from 'sanity'

/**
 * Short-hands for the field shapes every block repeats. They return plain
 * `defineField` results, so anything Sanity accepts can still be spread over
 * them (`{...str('x'), hidden: …}`).
 */

type Opts = {
  title?: string
  description?: string
  required?: boolean
  group?: string
  fieldset?: string
  initialValue?: unknown
  rows?: number
}

const rules = (o: Opts) => (o.required ? {validation: (r: {required: () => unknown}) => r.required()} : {})
const common = ({title, description, group, fieldset, initialValue}: Opts) => ({
  ...(title ? {title} : {}),
  ...(description ? {description} : {}),
  ...(group ? {group} : {}),
  ...(fieldset ? {fieldset} : {}),
  ...(initialValue !== undefined ? {initialValue} : {}),
})

export const str = (name: string, o: Opts = {}) =>
  defineField({name, type: 'string', ...common(o), ...rules(o)} as FieldDefinition)

export const txt = (name: string, o: Opts = {}) =>
  defineField({name, type: 'text', rows: o.rows ?? 3, ...common(o), ...rules(o)} as FieldDefinition)

/** One line with an italic/bold button: titles with a highlighted phrase. */
export const inline = (name: string, o: Opts = {}) =>
  defineField({name, type: 'inlineText', ...common(o), ...rules(o)} as FieldDefinition)

export const img = (name: string, o: Opts = {}) =>
  defineField({
    name,
    type: 'image',
    options: {hotspot: true},
    fields: [defineField({name: 'alt', title: 'Alternative text', type: 'string'})],
    ...common(o),
    ...(o.required ? {validation: (r: {required: () => unknown}) => r.required()} : {}),
  } as FieldDefinition)

/**
 * Where a link goes: a document on this site, or a typed URL. Items saved
 * before `linkType` existed have only `href`; they show and render as a URL.
 */
export const linkFields = [
  defineField({
    name: 'linkType',
    title: 'Link to',
    type: 'string',
    options: {
      list: [
        {title: 'A page', value: 'internal'},
        {title: 'URL or #anchor', value: 'external'},
      ],
      layout: 'radio',
      direction: 'horizontal',
    },
    initialValue: 'external',
  }),
  defineField({
    name: 'internalLink',
    title: 'Page',
    type: 'reference',
    to: [{type: 'page'}, {type: 'article'}, {type: 'caseStudy'}],
    hidden: ({parent}) => parent?.linkType !== 'internal',
  }),
  defineField({
    name: 'href',
    title: 'URL',
    type: 'string',
    description: '/contact, #groeiplan, https://…, tel: or mailto:',
    hidden: ({parent}) => parent?.linkType === 'internal',
  }),
] as FieldDefinition[]

export const cta = (name: string, o: Opts = {}) =>
  defineField({name, type: 'cta', ...common(o), ...rules(o)} as FieldDefinition)

export const bool = (name: string, o: Opts = {}) =>
  defineField({name, type: 'boolean', initialValue: false, ...common(o)} as FieldDefinition)

export const num = (name: string, o: Opts = {}) =>
  defineField({name, type: 'number', ...common(o), ...rules(o)} as FieldDefinition)

/** A list of plain strings (ticks, chips, marquee items). */
export const strings = (name: string, o: Opts = {}) =>
  defineField({name, type: 'array', of: [defineArrayMember({type: 'string'})], ...common(o)} as FieldDefinition)

/** A list of paragraphs. */
export const paragraphs = (name: string, o: Opts = {}) =>
  defineField({name, type: 'array', of: [defineArrayMember({type: 'text', rows: 4})], ...common(o)} as FieldDefinition)

/** A list of small objects, previewed by their first field. */
export const list = (name: string, fields: FieldDefinition[], o: Opts & {preview?: {title: string; subtitle?: string}} = {}) =>
  defineField({
    name,
    type: 'array',
    of: [
      defineArrayMember({
        type: 'object',
        name: `${name}Item`,
        fields,
        preview: {select: o.preview ?? {title: fields[0].name, subtitle: fields[1]?.name}},
      }),
    ],
    ...common(o),
  } as FieldDefinition)

/** References to documents of one type. */
export const refs = (name: string, to: string, o: Opts = {}) =>
  defineField({name, type: 'array', of: [defineArrayMember({type: 'reference', to: [{type: to}]})], ...common(o)} as FieldDefinition)

export const obj = (name: string, fields: FieldDefinition[], o: Opts = {}) =>
  defineField({name, type: 'object', fields, options: {collapsible: true}, ...common(o)} as FieldDefinition)

/** Every section starts with these. */
export const head = (lead = true) => [str('eyebrow'), inline('title'), ...(lead ? [txt('lead')] : [])]

export const stat = () => list('stats', [str('value', {description: 'Digits in it count up on screen, e.g. €500K or +30%.'}), str('unit', {description: 'Optional, shown in red after the value.'}), str('label')], {preview: {title: 'value', subtitle: 'label'}})
