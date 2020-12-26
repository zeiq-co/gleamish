export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish',
  ],
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
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{type: 'image'}]
    },
  ],
};

