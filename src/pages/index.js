import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { graphql } from 'gatsby';
import config from '../utils/config';
import HeroSlider from '../components/HeroSlider';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Features from '../components/Features';
import HomeCategories from '../components/HomeCategories';
import Review from '../components/Review';
import Members from '../components/Members';
// import ImageAfterBefore from '../components/elements/ImageAfterBefore';
// import Gallery from '../components/Gallery';
// import Categories from '../components/Categories';

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
    }
  }
`;

const IndexPage = ({ data }) => {
  const home = data.sanitySiteSettings;
  return (
    <Layout>
      <Seo
        title={home.title}
        description={home.description}
        url={config.siteUrl}
      />
      <HeroSlider data={home} />
      <HomeCategories />
      <Features />
      <Review />
      <Members />
      {/* <Categories />
      <Gallery heading />
      <ImageAfterBefore
        compareImage
        showButton
        title="OUR LATEST PROJECTS"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"
      /> */}
    </Layout>
  );
};
export default IndexPage;
