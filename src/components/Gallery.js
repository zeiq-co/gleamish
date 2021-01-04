import React, { useState } from 'react';
import styled from 'styled-components';
import GalleryCard from './GalleryCard';
import TabButton from './TabButtons';
import Heading from './elements/Heading';

const GalleryWrapper = styled.div`
  margin-top: 15px;
`;

const Gallery = ({ heading, data }) => {
  const [category, setCategory] = useState('All');
  return (
    <section className="section">
      <div className="container">
        {heading && <Heading centered>Gallery</Heading>}
        <div className="columns is-centered">
          <div className="column is-6">
            <div className="columns is-centered">
              <TabButton
                title="All"
                onClick={() => setCategory('All')}
                active={category}
              />
              <TabButton
                title="Exterior"
                onClick={() => setCategory('Exterior')}
                active={category}
              />
              <TabButton
                title="Interior"
                onClick={() => setCategory('Interior')}
                active={category}
              />
              <TabButton
                title="Stairwell"
                onClick={() => setCategory('Stairwell')}
                active={category}
              />
            </div>
          </div>
        </div>
        <GalleryWrapper className="columns is-multiline">
          {data.map((item) => {
            if (category !== 'All' && category !== item.node.category) {
              return null;
            }
            return (
              <GalleryCard key={item.id} image={item.node.image.asset.fluid} />
            );
          })}
        </GalleryWrapper>
      </div>
    </section>
  );
};
export default Gallery;
