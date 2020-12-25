import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Seo from '../components/Seo';
import Layout from '../components/Layout';

export const pageQuery = graphql`
  query PageByPath($slug: String!) {
    sanityPage(slug: { current: { eq: $slug } }) {
      _id
      title
      slug {
        current
      }
      description
      image {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

const PageView = ({ data }) => {
  const page = data.sanityPage;

  return (
    <Layout>
      <Seo title={page.title} />
      <section className="section">
        <div className="container">
          <div className="markdown-container">
            <ReactMarkdown source={page.description} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PageView;
