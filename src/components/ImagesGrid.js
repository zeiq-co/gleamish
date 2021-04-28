import React from 'react';

import styled from 'styled-components';
import OverlayButton from './elements/OverlayButton';

const Container = styled.section`
  background-color: ${(props) => props.theme.lightShades};
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const ImagesGrid = ({ gallery }) => {
  return (
    <Container classNameName="section">
      <div className="container py-4 mt-6">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <figure className="image">
              <img
                src={gallery[0].node.image.asset.fluid.src}
                alt={gallery[0].node.alternative}
              />
            </figure>
          </div>
          <div className="tile is-vertical">
            <div className="tile is-parent">
              <figure className="image">
                <img
                  src={gallery[1].node.image.asset.fluid.src}
                  alt={gallery[1].node.alternative}
                />
              </figure>
            </div>
            <div className="tile is-parent">
              <figure className="image">
                <img
                  src={gallery[2].node.image.asset.fluid.src}
                  alt={gallery[2].node.alternative}
                />
              </figure>
            </div>
          </div>
          <div className="tile is-parent is-vertical">
            <div className="tile is-parent">
              <figure className="image">
                <img
                  src={gallery[3].node.image.asset.fluid.src}
                  alt={gallery[3].node.alternative}
                />
              </figure>
            </div>
          </div>
        </div>
        <figure className="image is-3by1">
          <img
            src={gallery[4].node.image.asset.fluid.src}
            alt={gallery[4].node.alternative}
          />
        </figure>
        <div className="has-text-centered my-6">
          <OverlayButton linkTo="/gallery" buttonText="View more" />
        </div>
      </div>
    </Container>
  );
};

export default ImagesGrid;
