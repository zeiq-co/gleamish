export default {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    {
      name: 'personName',
      title: 'Person Name',
      type: 'string',
    },

    {
      title: 'Rating',
      name: 'rating',
      type: 'number',
    },
    {
      name: 'image',
      title: 'image',
      type: 'image',
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'markdown',
      options: {
        minRows: 20,
      },
    },
  ],
};
