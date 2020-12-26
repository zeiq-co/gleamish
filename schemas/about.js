export default {
  name: 'about',
  title: 'About Us',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      validation: Rule => Rule.required().max(30)
    },

    {
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'string',
      validation: Rule => Rule.required().max(300)
    },
    {
      name: 'image',
      title: 'Hero Image',
      type: 'image',
    },
    {
      title: 'Services',
      name: 'services',
      type: 'array',
      of: [{type: 'aboutServices'}]
    },
  ],
};
