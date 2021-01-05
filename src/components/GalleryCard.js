import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const CardWrapper = styled.div`
  border-radius: 0;
`;
const Image = styled(Img)`
  height: 270px !important;
  object-fit: cover;
`;

const GalleryCard = ({ image, alt }) => {
  return (
    <div className="column is-4">
      <CardWrapper className="card">
        <div className="card-image">
          <Image fluid={image} alt={alt} />
        </div>
      </CardWrapper>
    </div>
  );
};
export default GalleryCard;
