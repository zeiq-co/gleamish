export default {
  widgets: [
    {
      name: 'project-info',
    },
    {
      name: 'project-users',
    },
    {
      name: 'notes',
      layout: {
        width: 'medium',
      },
    },
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Paint Sanity Studio',
            apiId: '',
            buildHookId: 'https://api.netlify.com/build_hooks/5ffd3f7e495938b3f6f21e81',
            name: 'midasbrush-decorating.',
          },
        ],
      },
    },
  ],
};
