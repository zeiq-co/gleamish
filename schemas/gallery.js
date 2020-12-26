export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',

  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Exterior', 'Interior', 'Stairwell'],
        layout: 'dropdown',
      },
    },
  ],
};

