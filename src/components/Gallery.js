import React, { useState } from 'react';
import styled from 'styled-components';
import GalleryCard from './GalleryCard';
import TabButton from './TabButtons';
import Heading from './elements/Heading';

const GalleryWrapper = styled.div`
  margin-top: 15px;
`;
const Pagination = styled.div`
  .pagination-link.is-current {
    background-color: ${(props) => props.theme.mainBrandColor} !important;
    border-color: ${(props) => props.theme.mainBrandColor} !important;
  }
  .pagination-link,
  .pagination-next,
  .pagination-previous {
    background-color: #f1f5f7;
    :hover {
      border-color: ${(props) => props.theme.mainBrandColor} !important;
    }
  }
`;

const GalleryItem = [
  {
    id: 1,
    image: '/images/gallery1.jpg',
    category: 'Exterior',
  },
  {
    id: 2,
    image: '/images/gallery2.jpg',
    category: 'Exterior',
  },
  {
    id: 3,
    image: '/images/gallery3.jpg',
    category: 'Exterior',
  },
  {
    id: 4,
    image: '/images/gallery4.jpg',
    category: 'Interior',
  },
  {
    id: 5,
    image: '/images/gallery5.jpg',
    category: 'Interior',
  },
  {
    id: 6,
    image: '/images/gallery6.jpg',
    category: 'Interior',
  },
  {
    id: 7,
    image: '/images/gallery7.jpg',
    category: 'Stairwell',
  },
  {
    id: 8,
    image: '/images/gallery8.jpg',
    category: 'Stairwell',
  },
  {
    id: 9,
    image: '/images/gallery9.jpg',
    category: 'Stairwell',
  },
];

const Gallery = () => {
  const [category, setCategory] = useState('All');
  return (
    <section className="section">
      <div className="container">
        <Heading centered>Gallery</Heading>
        <div className="columns  is-centered">
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
        <GalleryWrapper className="columns  is-multiline is-mobile">
          {GalleryItem.map((item) => {
            if (category !== 'All' && category !== item.category) {
              return null;
            }
            return <GalleryCard key={item.id} image={item.image} />;
          })}
        </GalleryWrapper>
        <Pagination>
          <nav
            className="pagination has-text-centered"
            role="navigation"
            aria-label="pagination"
          >
            <ul className="pagination-list is-flex is-justify-content-center">
              <li>
                <a
                  className="pagination-link is-current has-text-white"
                  aria-label="Page 1"
                  aria-current="page"
                  href="/"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  className="pagination-link"
                  aria-label="Goto page 2"
                  href="/"
                >
                  2
                </a>
                <a
                  className="pagination-link"
                  aria-label="Goto page 2"
                  href="/"
                >
                  3
                </a>
              </li>
              <li>
                <a className="pagination-next" href="/">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </Pagination>
      </div>
    </section>
  );
};
export default Gallery;
