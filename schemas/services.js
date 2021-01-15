import { GrServices } from 'react-icons/gr'

export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  icon:  GrServices,
  preview: {
    select: {
      title: 'title',
      subtitle: 'order',
    }
  },
  fields: [
    {
      title: 'Order',
      name: 'order',
      type: 'number'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'markdown',
      options: {
        minRows: 25,
      },
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'image',
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{type: 'image'}]
    },
  ],
};

