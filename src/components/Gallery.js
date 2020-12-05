import React from 'react';
import styled from 'styled-components';
import GalleryCard from './GalleryCard';

const GalleryWrapper = styled.div`
  .button {
    box-shadow: none;
    border-radius: 0;
    background-color: #f1f5f7;
    border-color: #f1f5f7;
  }
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
      <section className="section">
        <div className="container">
          <h1 className="has-text-centered is-size-1 has-text-weight-light mb-6">
            Gallery{' '}
          </h1>
          <div className="columns  is-centered">
            <div className="column is-6">
              <div className="columns is-centered">
                <div className="column">
                  <button class="button is-medium is-fullwidth">
                    Filter - All
                  </button>
                </div>
                <div className="column">
                  <button class="button is-medium is-fullwidth">
                    Exterior
                  </button>
                </div>
                <div className="column">
                  <button class="button is-medium is-fullwidth">
                    Interior
                  </button>
                </div>
                <div className="column">
                  <button class="button is-medium is-fullwidth">
                    Stairwell
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="columns  is-multiline is-mobile">
            {GalleryItem.map((item) => (
              <GalleryCard key={item.id} image={item.image} />
            ))}
          </div>
        </div>
      </section>
    </GalleryWrapper>
  );
};
export default Gallery;
