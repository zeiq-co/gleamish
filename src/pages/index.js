import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeroSlider from '../components/HeroSlider';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Features from '../components/Features';
// import Gallery from '../components/Gallery';
// import Categories from '../components/Categories';
import Review from '../components/Review';
// import ImageAfterBefore from '../components/elements/ImageAfterBefore';
import Members from '../components/Members';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" description="Midas Paint" />
      <HeroSlider />
      <Features />
      {/* <Categories />
      <Gallery heading /> */}
      <Review />
      {/* <ImageAfterBefore
        compareImage
        showButton
        title="OUR LATEST PROJECTS"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"
      /> */}
      <Members />
    </Layout>
  );
};
export default IndexPage;
