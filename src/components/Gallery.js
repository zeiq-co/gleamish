import React from 'react';
import styled from 'styled-components';
import GalleryCard from './GalleryCard';
import Heading from './elements/Heading';

const GalleryWrapper = styled.div`
  margin-top: 15px;
`;

const Gallery = ({ heading, data }) => {
  return (
    <section className="section">
      <div className="container">
        {heading && <Heading centered>Gallery</Heading>}

        <GalleryWrapper className="columns is-multiline">
          {data.map((item) => {
            return (
              <GalleryCard
                key={item.id}
                image={item.node.image ? item.node.image.asset.fluid : ' '}
              />
            );
          })}
        </GalleryWrapper>
      </div>
    </section>
  );
};
export default Gallery;
