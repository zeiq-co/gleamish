import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Img from 'gatsby-image';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Heading from '../components/elements/Heading';
import config from '../utils/config';

export const pageQuery = graphql`
  query ArticlePage($slug: String!) {
    sanityArticle(slug: { current: { eq: $slug } }) {
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
`;

const PageView = ({ data }) => {
  const news = data.sanityArticle;

  return (
    <Layout>
      <Seo
        title={news.title}
        description={`Read blog post about ${news.title}`}
        url={`${config.siteUrl}/article/${news.slug ? news.slug.current : ''}`}
      />
      <section className="section">
        <div className="container">
          <Heading centered>{news.title}</Heading>
          <div className="mb-5 mt-5">
            <Img
              fluid={
                news.image && news.image.asset ? news.image.asset.fluid : ''
              }
            />
          </div>
          <div className="markdown-container">
            <ReactMarkdown source={news.description} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PageView;
