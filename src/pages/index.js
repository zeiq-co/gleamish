import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeSlider from '../components/HomeSlider';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import News from '../components/News';
import Categories from '../components/Categories';
import ImageBeforeAfter from '../components/ImageBeforeAfter';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" description="paint" />
      <HomeSlider />
      <Features />
      <Categories />
      <Gallery />
      <News />
      {/* <Contact /> */}
      <ImageBeforeAfter />
    </Layout>
  );
};
export default IndexPage;
