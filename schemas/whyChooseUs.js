export default {
  title: 'Why Choose Us',
  name: 'whyChooseUs',
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
      type: 'string',
    },

    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Features List',
      name: 'featuresList',
      type: 'array',
      of: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
      ]
    },
  ],
};