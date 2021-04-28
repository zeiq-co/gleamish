import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { graphql } from 'gatsby';

import config from '../utils/config';
import HeroSlider from '../components/HeroSlider';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
// import Features from '../components/Features';
// import HomeAboutUs from '../components/HomeAboutUs';
import Review from '../components/Review';
import Members from '../components/Members';
import ImagesGrid from '../components/ImagesGrid';
import Prices from '../components/Prices';
import AboutUs from '../components/AboutUs';
import HaircutPrices from '../components/HaircutPrices';

export const query = graphql`
  query HomePageQuery {
    sanitySiteSettings {
      title
      description
      keywords
      informationTitle
      information

      homeHero {
        _key
        title
        subtitle
        linkTo
        image {
          asset {
            fluid(maxWidth: 1600) {
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
            fluid(maxWidth: 600) {
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
            fluid(maxWidth: 800) {
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
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        featuresList
      }
      reviewBackground {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
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
    allSanityGallery(limit: 5, sort: { fields: _createdAt, order: DESC }) {
      edges {
        node {
          alternative
          image {
            asset {
              fluid(maxWidth: 1200) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const home = data.sanitySiteSettings;
  // const homeFeatures = data.sanitySiteSettings;
  const brands = data.sanitySiteSettings;
  // const homeAboutUs = data.sanitySiteSettings.whyChoose;
  const gallery = data.allSanityGallery.edges;

  const review = data.allSanityReview.edges;
  return (
    <Layout hideHeader>
      <Seo title={home.title} url={config.siteUrl} image={config.metaLogo} />
      <HeroSlider data={home} />
      {/* <HomeAboutUs data={homeAboutUs} home={home} /> */}
      <Prices home={home} />
      <ImagesGrid gallery={gallery} />
      <AboutUs />
      <HaircutPrices />
      {/* <Features data={homeFeatures} /> */}
      <Review review={review} home={home} />
      <Members data={brands} />
    </Layout>
  );
};
export default IndexPage;
