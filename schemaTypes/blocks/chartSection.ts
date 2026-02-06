import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'chartSection',
  title: 'Chart Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Chart Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Chart Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
     defineField({
      name: 'chartType',
      title: 'Chart Type',
      type: 'string',
      options: {
        list: [
          {title: 'Image Only', value: 'image'},
          {title: 'Bar Chart', value: 'bar'},
          {title: 'Line Chart', value: 'line'},
          {title: 'Pie Chart', value: 'pie'},
          {title: 'Area Chart', value: 'area'},
          {title: 'Scatter Plot', value: 'scatter'},
        ],
        layout: 'dropdown',
      }
    }),
    defineField({
      name: 'data',
      title: 'Chart Data (JSON)',
      type: 'text',
      description: 'Enter chart data in JSON format',
    }),
    defineField({
      name: 'chartImage',
      title: 'Chart Image',
      type: 'image',
      description: 'Upload a chart image as an alternative to JSON data',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'source',
      title: 'Chart Source',
      type: 'string',
      description: 'Where the chart data or image originates',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'chartImage',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Chart',
        subtitle: subtitle || 'Chart Section',
      }
    },
  },
})
