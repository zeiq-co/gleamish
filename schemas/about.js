import { SiAcademia } from 'react-icons/si'
export default {
  name: 'about',
  title: 'About Us',
  type: 'document',
  icon:  SiAcademia,
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish',
  ],
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title',
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
    {
      title: 'Services',
      name: 'services',
      type: 'array',
      of: [{type: 'aboutServices'}]
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
    },
  ],
};
