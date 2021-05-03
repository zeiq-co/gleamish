import React from 'react';
import { graphql } from 'gatsby';

import ReactGallery from '../components/ReactGallery';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroHeader from '../components/elements/HeroHeader';

export const query = graphql`
  query GalleryPageQuery {
    allSanityGallery {
      edges {
        node {
          _id
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
    sanitySiteSettings {
      coverImage {
        galleryImage {
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

const GalleryComponent = ({ data }) => {
  const galleryData = data.allSanityGallery.edges;

  const images = galleryData
    ? galleryData.map(({ node: o }) => ({
        src: o.image.asset.fluid.src,
        thumbnail: o.image.asset.fluid.src,
        caption: o.alternative,
      }))
    : [];

  const cover = data.sanitySiteSettings.coverImage;
  return (
    <Layout>
      <Seo title="Gallery" />
      <HeroHeader
        heading="Gallery"
        background={
          cover.galleryImage && cover.galleryImage.asset
            ? cover.galleryImage.asset.fluid.src
            : ''
        }
      />
      <ReactGallery images={images} />;
    </Layout>
  );
};
export default GalleryComponent;
