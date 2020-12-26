export default {
  title: 'Home Features',
  name: 'homeFeatures',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required().max(30)
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'text',
      validation: Rule => Rule.required().max(200)

    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
  ],
};