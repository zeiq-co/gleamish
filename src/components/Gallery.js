import React, { useState } from 'react';
import styled from 'styled-components';
import GalleryCard from './GalleryCard';
import TabButton from './TabButtons';
import Heading from './elements/Heading';

const GalleryWrapper = styled.div`
  margin-top: 15px;
`;

const GalleryItem = [
  {
    id: 1,
    image:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/gallery1.jpg',
    category: 'Exterior',
  },
  {
    id: 2,
    image:
      ' https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/gallery2.jpg',
    category: 'Exterior',
  },
  {
    id: 3,
    image:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/gallery3.jpg',
    category: 'Exterior',
  },
  {
    id: 4,
    image:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/gallery4.jpg',
    category: 'Interior',
  },
  {
    id: 5,
    image:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/gallery5.jpg',
    category: 'Interior',
  },
  {
    id: 6,
    image:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/gallery6.jpg',
    category: 'Interior',
  },
  {
    id: 7,
    image:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/gallery7.jpg',
    category: 'Stairwell',
  },
  {
    id: 8,
    image:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/gallery8.jpg',
    category: 'Stairwell',
  },
  {
    id: 9,
    image:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/gallery8.jpg',
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
      </div>
    </section>
  );
};
export default Gallery;
