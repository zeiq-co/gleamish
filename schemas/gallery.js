import { GrGallery } from 'react-icons/gr'
export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  icon:  GrGallery,

  preview: {
    select: {
      media:"image",
      title:"alternative",
    }
  },
  fields: [
    {
      name: 'alternative',
      type: 'string',
      title: 'ALternative',
       description:
        'Describe your images for search engines and social media',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
  ],
};

