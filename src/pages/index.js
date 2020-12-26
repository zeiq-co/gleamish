import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { graphql } from 'gatsby';
import config from '../utils/config';
import HeroSlider from '../components/HeroSlider';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Features from '../components/Features';
import HomeAboutUs from '../components/HomeAboutUs';
import Review from '../components/Review';
import Members from '../components/Members';

export const query = graphql`
  query HomePageQuery {
    sanitySiteSettings {
      title
      description
      keywords
      homeHero {
        _key
        title
        subtitle
        linkTo
        image {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      homeFeatures {
        title
        subtitle
        image {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      brands {
        image {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      whyChoose {
        description
        image {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
        featuresList
      }
    }
    allSanityReview {
      edges {
        node {
          personName
          comment
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const home = data.sanitySiteSettings;
  const homeFeatures = data.sanitySiteSettings.homeFeatures;
  const brands = data.sanitySiteSettings.brands;
  const homeAboutUs = data.sanitySiteSettings.whyChoose;
  const review = data.allSanityReview.edges;
  return (
    <Layout>
      <Seo
        title={home.title}
        description={home.description}
        url={config.siteUrl}
      />
      <HeroSlider data={home} />
      <HomeAboutUs data={homeAboutUs} />
      <Features data={homeFeatures} />
      <Review review={review} />
      <Members data={brands} />
    </Layout>
  );
};
export default IndexPage;
