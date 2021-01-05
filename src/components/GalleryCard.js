import React from 'react';
import ModalImage from 'react-modal-image';

const GalleryCard = ({ src, alt }) => {
  return (
    <div className="column is-4">
      <ModalImage
        large={src}
        alt={alt}
        small={src}
        className="modal_small_image"
      />
    </div>
  );
};
export default GalleryCard;
