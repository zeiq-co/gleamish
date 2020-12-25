import React from 'react';

import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroHeader from '../components/elements/HeroHeader';
import News from '../components/News';
import AboutFeatures from '../components/AboutFeatures';
import ImageAfterBefore from '../components/elements/ImageAfterBefore';
import Heading from '../components/elements/Heading';

export const aboutQuery = graphql`
  query myBlog {
    allSanityArticle(sort: { fields: _createdAt, order: DESC }) {
      edges {
        node {
          _id
          title
          slug {
            current
          }
          description
          image {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

const About = ({ data }) => {
  const { edges: posts } = data.allSanityArticle;
  return (
    <Layout>
      <Seo title="about" />
      <HeroHeader heading="About" title="About" />
      <ImageAfterBefore
        title="Lorem Ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat eros eu mi eleifend, at consequat velit suscipit. Duis sed dignissim urna. Curabitur at placerat ligula. Etiam eu tempus nisl. Quisque id tortor ac diam.Lorem ipsum dolor sit amet"
        singleImage="https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/color-box.jpg"
      />
      <AboutFeatures />
      <div className="section">
        <div className="container">
          <Heading centered>News & Blog</Heading>
          <div className="columns is-multiline">
            {posts.map(({ node }) => (
              <div className="column is-4">
                <News key={node._id} node={node} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default About;
