export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish',
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description:
        'Describe your portfolio for search engines and social media.',
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your portfolio.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      title: 'Home Hero',
      name: 'homeHero',
      type: 'array',
      of: [{type: 'banner'}]
    },
    {
      title: 'Home Features',
      name: 'homeFeatures',
      type: 'array',
      of: [{type: 'homeFeatures'}]
    },
    {
      title: 'Why Choose Us',
      name: 'whyChoose',
      type: 'whyChooseUs',
    },
    {
      name: 'contact',
      title: 'Contact Us',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Hero Image',
          type: 'image',
        },

      ],
    },
    {
      title: 'Brands',
      name: 'brands',
      type: 'array',
      of: [{type: 'brands'}]
    },
    {
      name: 'footerDescription',
      type: 'string',
      title: 'Footer Description',
    },
    {
      name: 'facebook',
      type: 'string',
      title: 'Facebook URL',
    },
    {
      name: 'twitter',
      type: 'string',
      title: 'Twitter URL',
    },
    {
      name: 'instagram',
      type: 'string',
      title: 'Instagram URL',
    },
    {
      name: 'telephone',
      type: 'string',
      title: 'Telephone',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
    },
  ],
};
