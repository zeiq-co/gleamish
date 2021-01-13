export default {
  title: 'Address',
  name: 'address',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'markdown',
      options: {
        minRows: 10,
      },
    },
    {
      name: 'image',
      title: 'Hero Image',
      type: 'image',
    },
  ]
}
