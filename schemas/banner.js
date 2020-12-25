export default {
  title: 'Banner',
  name: 'banner',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'text',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      name: 'linkTo',
      type: 'string',
      title: 'Link to',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
};