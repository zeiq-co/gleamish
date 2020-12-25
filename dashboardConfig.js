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
            buildHookId: '',
            name: '-',
          },
        ],
      },
    },
  ],
};
