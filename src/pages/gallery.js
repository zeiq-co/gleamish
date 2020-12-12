import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroHeader from '../components/elements/HeroHeader';
import GalleryImage from '../components/Gallery';

const Gallery = () => {
  return (
    <Layout>
      <Seo title="Gallery" />
      <HeroHeader heading="Gallery" title="Gallery" />
      <GalleryImage />
    </Layout>
  );
};
export default Gallery;
