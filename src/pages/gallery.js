import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroHeader from '../components/elements/HeroHeader';
import GalleryPortfolio from '../components/GalleryPortfolio';

const Gallery = () => {
  return (
    <Layout>
      <Seo title="Gallery" />
      <HeroHeader heading="Gallery" title="Gallery" />
      <GalleryPortfolio />
    </Layout>
  );
};
export default Gallery;
