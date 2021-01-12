import React from 'react';
import styled from 'styled-components';
import GalleryCard from './GalleryCard';
import Heading from './elements/Heading';

const GalleryWrapper = styled.div`
  margin-top: 15px;
  img {
    height: 280px;
    object-fit: cover;
  }
  .modal_small_image {
    width: 100% !important;
  }
`;

const Gallery = ({ heading, data }) => {
  return (
    <section className="section">
      <div className="container">
        {heading && <Heading centered>Gallery</Heading>}

        <GalleryWrapper className="columns is-multiline">
          {data.map(({ node: item }) => {
            return (
              <GalleryCard
                key={item._id}
                alt={item.alternative}
                src={item.image ? item.image.asset.fluid.src : ' '}
              />
            );
          })}
        </GalleryWrapper>
      </div>
    </section>
  );
};
export default Gallery;
