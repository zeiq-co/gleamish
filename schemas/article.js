import { GiNewspaper } from 'react-icons/gi'
export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  icon:  GiNewspaper,

  fields: [
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
        minRows: 20,
      },
    },
    {
      name: 'image',
      title: 'image',
      type: 'image',
    },
    {
      name: 'otherImages',
      title: 'Other Images',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    },
  ],
};
