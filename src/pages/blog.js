import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import config from '../utils/config';
import HeroHeader from '../components/elements/HeroHeader';
import News from '../components/News';

export const blogQuery = graphql`
  query blog {
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

const NewsWrapper = styled.section`
  padding: 50px 0px;
  .columns {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
`;

const Blog = ({ data }) => {
  const { edges: aboutUs } = data.allSanityArticle;

  return (
    <Layout>
      <Seo
        title="Latest Projects"
        description={`Latest news at ${config.siteName}`}
        url={`${config.siteUrl}/account`}
      />
      <HeroHeader
        heading="Latest Projects"
        title="Latest Projects"
        background="/images/cantact.jpg"
      />
      <NewsWrapper className="section">
        <div className="container">
          <div className="columns is-multiline">
            {aboutUs.map(({ node }) => (
              <div className="column is-4">
                <News key={node._id} node={node} />
              </div>
            ))}
          </div>
        </div>
      </NewsWrapper>
    </Layout>
  );
};

export default Blog;
