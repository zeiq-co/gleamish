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

      homeGrid {
        asset {
          fluid(maxWidth: 1600) {
            ...GatsbySanityImageFluid
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
  }
`;

const IndexPage = ({ data }) => {
  const home = data.sanitySiteSettings;
  // const homeFeatures = data.sanitySiteSettings;
  const brands = data.sanitySiteSettings;
  // const homeAboutUs = data.sanitySiteSettings.whyChoose;
  const review = data.allSanityReview.edges;
  return (
    <Layout hideHeader>
      <Seo title={home.title} url={config.siteUrl} image={config.metaLogo} />
      <HeroSlider data={home} />
      {/* <HomeAboutUs data={homeAboutUs} home={home} /> */}
      <Prices home={home} />
      <ImagesGrid home={home.homeGrid} />
      <AboutUs />
      <HaircutPrices />
      {/* <Features data={homeFeatures} /> */}
      <Review review={review} home={home} />
      <Members data={brands} />
    </Layout>
  );
};
export default IndexPage;
