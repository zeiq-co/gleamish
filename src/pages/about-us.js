import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroHeader from '../components/elements/HeroHeader';
import News from '../components/News';
import AboutFeatures from '../components/AboutFeatures';
import ImageAfterBefore from '../components/elements/ImageAfterBefore';
import Heading from '../components/elements/Heading';
import config from '../utils/config';

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
    sanityAbout {
      _id
      heroTitle
      heroDescription
      featuredImage {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      services {
        _key
        title
        description
      }
    }
  }
`;

const AboutUs = ({ data }) => {
  const { edges: posts } = data.allSanityArticle;
  const aboutUs = data.sanityAbout;
  return (
    <Layout>
      <Seo title="about" description={`about  ${config.siteName}`} />
      <HeroHeader heading="About" title="About" />
      <ImageAfterBefore
        title={aboutUs.heroTitle}
        description={aboutUs.heroDescription}
        image={aboutUs.image ? aboutUs.image.asset.fluid : ''}
      />
      <AboutFeatures data={aboutUs} />
      <div className="section">
        <div className="container">
          <Heading centered>Latest Projects</Heading>
          <div className="columns is-multiline">
            {posts.map(({ node: post }) => (
              <div className="column is-4" key={post._id}>
                <News node={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default AboutUs;
