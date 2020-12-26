export default {
  title: 'About Services',
  name: 'aboutServices',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required().max(30),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: Rule => Rule.required().max(150),
    },
  ],
};