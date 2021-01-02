import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroHeader from '../components/elements/HeroHeader';
import GalleryImage from '../components/Gallery';

export const query = graphql`
  query GalleryPageQuery {
    allSanityGallery {
      edges {
        node {
          id
          image {
            asset {
              fluid(maxWidth: 1200) {
                ...GatsbySanityImageFluid
              }
            }
          }
          category
        }
      }
    }
  }
`;

const Gallery = ({ data }) => {
  const galleryData = data.allSanityGallery.edges;
  return (
    <Layout>
      <Seo title="Gallery" />
      <HeroHeader heading="Gallery" title="Gallery" />
      <GalleryImage data={galleryData} />
    </Layout>
  );
};
export default Gallery;
