import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Heading from '../components/elements/Heading';

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
          <Heading centered>{page.title}</Heading>
          <div className="markdown-container">
            <ReactMarkdown source={page.description} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PageView;
