import React from 'react';
import styled from 'styled-components';

import OverlayButton from './elements/OverlayButton';

const Container = styled.section`
  background-color: ${(props) => props.theme.backgroundInputColor};
  padding: 150px 25px;
}
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const ImagesGrid = ({ gallery }) => {
  return (
    <Container classNameName="section">
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <figure className="image">
              <img
                src={
                  gallery[0] &&
                  gallery[0].node &&
                  gallery[0].node.image &&
                  gallery[0].node.image.asset
                    ? gallery[0].node.image.asset.fluid.src
                    : ''
                }
                alt={gallery[0].node.alternative}
              />
            </figure>
          </div>
          <div className="tile is-vertical">
            <div className="tile is-parent">
              <figure className="image">
                <img
                  src={
                    gallery[1] &&
                    gallery[1].node &&
                    gallery[1].node.image &&
                    gallery[1].node.image.asset
                      ? gallery[1].node.image.asset.fluid.src
                      : ''
                  }
                  alt={gallery[1].node.alternative}
                />
              </figure>
            </div>
            <div className="tile is-parent">
              <figure className="image">
                <img
                  src={
                    gallery[2] &&
                    gallery[2].node &&
                    gallery[2].node.image &&
                    gallery[2].node.image.asset
                      ? gallery[2].node.image.asset.fluid.src
                      : ''
                  }
                  alt={gallery[2].node.alternative}
                />
              </figure>
            </div>
          </div>
          <div className="tile is-parent is-vertical">
            <div className="tile is-parent">
              <figure className="image">
                <img
                  src={
                    gallery[3] &&
                    gallery[3].node &&
                    gallery[3].node.image &&
                    gallery[3].node.image.asset
                      ? gallery[3].node.image.asset.fluid.src
                      : ''
                  }
                  alt={gallery[3].node.alternative}
                />
              </figure>
            </div>
          </div>
        </div>
        <figure className="image is-3by1">
          <img
            src={
              gallery[4] &&
              gallery[4].node &&
              gallery[4].node.image &&
              gallery[4].node.image.asset
                ? gallery[4].node.image.asset.fluid.src
                : ''
            }
            alt={gallery[4].node.alternative}
          />
        </figure>
        <div className="has-text-centered mt-4">
          <OverlayButton linkTo="/gallery" buttonText="View more" />
        </div>
      </div>
    </Container>
  );
};

export default ImagesGrid;
