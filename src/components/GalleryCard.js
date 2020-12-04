import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  border-radius: 0;
`;

const GalleryCard = ({ image }) => {
  return (
    <div className="column is-3">
      <CardWrapper className="card">
        <div className="card-image">
          <figure className="image is-3by2">
            <img src={image} alt="gallery Image" />
          </figure>
        </div>
      </CardWrapper>
    </div>
  );
};
export default GalleryCard;
