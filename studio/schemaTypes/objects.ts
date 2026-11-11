import {defineArrayMember, defineField, defineType} from 'sanity'
import {cta, inline, list, str, txt} from './fields'

const marks = {
  decorators: [
    {title: 'Highlight (red underline / italic)', value: 'em'},
    {title: 'Bold', value: 'strong'},
  ],
  annotations: [],
}

/**
 * A line of text where a phrase can be highlighted. In headings `em` is the
 * red-underlined or red phrase from the design, in body copy it stays italic.
 */
export const inlineTextType = defineType({
  name: 'inlineText',
  title: 'Text',
  type: 'array',
  of: [defineArrayMember({type: 'block', styles: [], lists: [], marks})],
  validation: (r) => r.max(1).warning('One paragraph: the rest is not shown.'),
})

export const ctaType = defineType({
  name: 'cta',
  title: 'Button',
  type: 'object',
  fields: [
    str('label'),
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
      to: [{type: 'page'}, {type: 'article'}],
      hidden: ({parent}) => parent?.linkType !== 'internal',
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'string',
      description: '/contact, #groeiplan, https://…, tel: or mailto:',
      hidden: ({parent}) => parent?.linkType === 'internal',
    }),
  ],
  preview: {select: {title: 'label', subtitle: 'href'}},
})

export const seoType = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {collapsible: true, collapsed: true},
  fields: [
    defineField({
      name: 'title',
      title: 'Meta title',
      type: 'string',
      validation: (r) => r.max(65).warning('May be truncated in search results'),
    }),
    defineField({
      name: 'description',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      validation: (r) => r.max(160).warning('May be truncated in search results'),
    }),
    defineField({name: 'ogImage', title: 'Social image', type: 'image'}),
    defineField({name: 'noIndex', title: 'Hide from search engines', type: 'boolean', initialValue: false}),
  ],
})

/** Long-form article text: headings, lists, links and the design's boxes. */
export const articleBodyType = defineType({
  name: 'articleBody',
  title: 'Body',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Paragraph', value: 'normal'},
        {title: 'Heading (in table of contents)', value: 'h2'},
        {title: 'Subheading', value: 'h3'},
      ],
      marks: {
        decorators: [
          {title: 'Bold', value: 'strong'},
          {title: 'Italic', value: 'em'},
        ],
        annotations: [
          defineArrayMember({
            name: 'link',
            type: 'object',
            fields: [defineField({name: 'href', type: 'string', title: 'URL'})],
          }),
        ],
      },
    }),
    defineArrayMember({
      name: 'callout',
      title: 'Box',
      type: 'object',
      fields: [
        defineField({
          name: 'variant',
          type: 'string',
          options: {
            list: [
              {title: 'Short answer (pink)', value: 'answer'},
              {title: 'Definition (grey)', value: 'definition'},
            ],
          },
          initialValue: 'answer',
        }),
        str('label'),
        inline('text'),
      ],
      preview: {select: {title: 'label', subtitle: 'variant'}},
    }),
    defineArrayMember({
      name: 'pullQuote',
      title: 'Quote',
      type: 'object',
      fields: [txt('text')],
      preview: {select: {title: 'text'}, prepare: ({title}) => ({title, subtitle: 'Quote'})},
    }),
    defineArrayMember({
      name: 'statGrid',
      title: 'Figures',
      type: 'object',
      fields: [list('stats', [str('value'), str('label')])],
      preview: {prepare: () => ({title: 'Figures'})},
    }),
    defineArrayMember({
      name: 'inlineCta',
      title: 'Call to action',
      type: 'object',
      fields: [str('eyebrow'), str('title'), txt('text', {rows: 2}), cta('cta')],
      preview: {select: {title: 'title'}, prepare: ({title}) => ({title, subtitle: 'Call to action'})},
    }),
  ],
})
