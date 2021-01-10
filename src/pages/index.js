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
      information
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
        _key
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
        _key
        title
        image {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      whyChoose {
        _key
        title
        description
        image {
          asset {
            fluid(maxWidth: 700) {
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
          _id
          personName
          comment
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const home = data.sanitySiteSettings;
  const homeFeatures = data.sanitySiteSettings;
  const brands = data.sanitySiteSettings;
  const homeAboutUs = data.sanitySiteSettings.whyChoose;
  const review = data.allSanityReview.edges;
  return (
    <Layout>
      <Seo
        title={home.title}
        description={home.description}
        url={config.siteUrl}
        image={config.logo}
      />
      <HeroSlider data={home} />
      <HomeAboutUs data={homeAboutUs} home={home} />
      <Features data={homeFeatures} />
      <Review review={review} />
      <Members data={brands} />
    </Layout>
  );
};
export default IndexPage;
