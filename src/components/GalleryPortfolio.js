import React, { useState } from 'react';
import styled from 'styled-components';

import Heading from './elements/Heading';

const portfolioItem = [
  {
    id: 1,
    image: '/images/gallery1.jpg',
  },
  {
    id: 2,
    image: '/images/gallery2.jpg',
  },
  {
    id: 3,
    image: '/images/gallery3.jpg',
  },
  {
    id: 4,
    image: '/images/gallery4.jpg',
  },
  {
    id: 5,
    image: '/images/gallery5.jpg',
  },
  {
    id: 6,
    image: '/images/gallery6.jpg',
  },
  {
    id: 7,
    image: '/images/gallery7.jpg',
  },
  {
    id: 8,
    image: '/images/gallery8.jpg',
  },
  {
    id: 9,
    image: '/images/gallery8.jpg',
  },
];

const GalleryPortfolio = () => {
  return (
    <section className="section">
      <div className="container">
        <Heading hideBottomIcon>Gallery Portfolio</Heading>
        <div className="columns  is-centered is-gapless is-multiline">
          {portfolioItem.map((item) => (
            <div className="column is-4">
              <figure className="image is-square">
                <img
                  src="https://bulma.io/images/placeholders/480x480.png"
                  alt="gallery-portfolio"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default GalleryPortfolio;
