import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import config from '../utils/config';
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
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

const MarkdownContainer = styled.div`
  ul {
    list-style: disc outside;
    margin-left: 2em;
    margin-top: 1em;
  }
`;

const PageView = ({ data }) => {
  const page = data.sanityPage;

  return (
    <Layout>
      <Seo
        title={page.title}
        description={`Read news & updates about ${page.title}`}
        url={`${config.siteUrl}/page/${page.slug ? page.slug.current : ''}`}
      />
      <section className="section">
        <div className="container">
          <Heading centered>{page.title}</Heading>
          <MarkdownContainer>
            <div className="markdown-container">
              <ReactMarkdown source={page.description} />
            </div>
          </MarkdownContainer>
        </div>
      </section>
    </Layout>
  );
};

export default PageView;
