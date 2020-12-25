const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allSanityPage {
        edges {
          node {
            _id
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    return reporter.panicOnBuild('🚨 ERROR: Loading "createPages" query');
  }

  const pages = result.data.allSanityPage.edges || [];

  pages.forEach(({ node }) => {
    createPage({
      path: `page/${node.slug.current}`,
      component: path.resolve(`src/templates/pageView.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });
};
