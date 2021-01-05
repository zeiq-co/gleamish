import React from 'react';
import styled from 'styled-components';
import GalleryCard from './GalleryCard';
import Heading from './elements/Heading';

const GalleryWrapper = styled.div`
  margin-top: 15px;
`;

const Gallery = ({ heading, data }) => {
  console.log('main', data);
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
                image={item.image ? item.image.asset.fluid : ' '}
              />
            );
          })}
        </GalleryWrapper>
      </div>
    </section>
  );
};
export default Gallery;
