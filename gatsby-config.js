const config = require('./src/utils/config.js');

module.exports = {
  siteMetadata: {
    title: config.siteName,
    author: config.author,
    description: config.description,
    siteUrl: config.siteUrl,
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: config.sanityId,
        dataset: 'production',
        watchMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#e9bd16`,
        showSpinner: false,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalytics,
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalytics,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://app.us1.list-manage.com/subscribe/post?u=e94f8fc2aae3b640dcead8182&amp;id=0af354cdbf',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteName,
        short_name: config.siteName,
        start_url: config.siteUrl,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: './static/images/logo.svg',
      },
    },
    `gatsby-plugin-offline`,
  ],
};
