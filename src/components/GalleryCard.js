import React from 'react';
import ModalImage from 'react-modal-image';
import styled from 'styled-components';

const Container = styled.div`
  .__react_modal_image__medium_img {
    height: 500px !important;
    max-width: 100% !important;
  }
`;

const GalleryCard = ({ src, alt }) => {
  return (
    <Container className="column is-4">
      <ModalImage
        large={src}
        alt={alt}
        small={src}
        className="modal_small_image"
      />
    </Container>
  );
};
export default GalleryCard;
