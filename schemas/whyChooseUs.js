export default {
  title: 'Why Choose Us',
  name: 'whyChooseUs',
  type: 'object',
  fields: [
    {
      title: 'Description',
      name: 'description',
      type: 'string',
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