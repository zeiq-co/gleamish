import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import styled from 'styled-components';

const GalleryWrapper = styled.div`
  img {
    width: 400px;
    height: 400px;
    object-fit: cover;
  }
  .modal_small_image {
    width: 100% !important;
  }
`;

function ReactGallery(props) {
  const { images } = props;

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { images, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="section">
      <div className="container">
        <GalleryWrapper className="columns is-multiline">
          <div className="column">
            <Gallery photos={images} onClick={openLightbox} />
          </div>
        </GalleryWrapper>
      </div>

      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
export default ReactGallery;
