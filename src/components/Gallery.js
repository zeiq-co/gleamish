import React from 'react';
import styled from 'styled-components';
import GalleryCard from './GalleryCard';

const GalleryWrapper = styled.div`
  padding: 50px 0px;
`;

const GalleryItem = [
  {
    id: 1,
    image:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/gallery1.jpg',
  },
  {
    id: 2,
    image:
      ' https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/gallery2.jpg',
  },
  {
    id: 3,
    image:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/gallery3.jpg',
  },
  {
    id: 4,
    image:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/gallery4.jpg',
  },
  {
    id: 5,
    image:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/gallery5.jpg',
  },
  {
    id: 6,
    image:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/gallery6.jpg',
  },
  {
    id: 7,
    image:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/gallery7.jpg',
  },
  {
    id: 8,
    image:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/gallery8.jpg',
  },
];

const Gallery = () => {
  return (
    <GalleryWrapper>
      <h1 className="has-text-centered is-size-1 has-text-weight-light mb-6">
        Gallery{' '}
      </h1>
      <div className="columns is-gapless is-multiline is-mobile">
        {GalleryItem.map((item) => (
          <GalleryCard key={item.id} image={item.image} />
        ))}
      </div>
    </GalleryWrapper>
  );
};
export default Gallery;
