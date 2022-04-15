import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { graphql } from 'gatsby';

import config from '../utils/config';
import HeroSlider from '../components/HeroSlider';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Review from '../components/Review';
import Members from '../components/Members';
import ImagesGrid from '../components/ImagesGrid';
import ServicesBanners from '../components/ServicesBanners';
import AboutUs from '../components/AboutUs';
import HaircutPrices from '../components/HaircutPrices';
import Brands from '../components/Brands';

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

      servicesBanner {
        _key
        hasColor
        heading
        title
        description
      }

      haircutPrices {
        title
        description
        price
      }

      homeAbout {
        heading
        title
        description
        frontImage {
          asset {
            url
          }
        }
        backImage {
          asset {
            url
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

    allInstagramContent {
      edges {
        node {
          id
          localImage {
            url
            name
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const home = data.sanitySiteSettings;
  const brands = data.sanitySiteSettings;
  const review = data.allSanityReview.edges;
  const { haircutPrices } = data.sanitySiteSettings;
  const { homeAbout } = data.sanitySiteSettings;
  const { servicesBanner } = data.sanitySiteSettings;
  const instagram = data.allInstagramContent.edges;

  // console.log('haircutPrices', haircutPrices);
  // console.log('homeAbout', homeAbout);

  return (
    <Layout hideHeader>
      <Seo title={home.title} url={config.siteUrl} image={config.metaLogo} />
      <HeroSlider data={home} />
      <ServicesBanners home={servicesBanner} />
      <ImagesGrid home={home.homeGrid} />
      <AboutUs home={homeAbout} />
      <HaircutPrices pricesList={haircutPrices} />
      <Review review={review} home={home} />
      <Brands data={instagram} item={home} />
      <Members data={brands} />
    </Layout>
  );
};
export default IndexPage;
