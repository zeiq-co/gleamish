import React from 'react';
import styled from 'styled-components';

import Tile from './elements/Tile';
import OverlayButton from './elements/OverlayButton';

const Container = styled.section`
  background-color: ${(props) => props.theme.backgroundInputColor};
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const ImagesGrid = ({ home }) => {
  if (!home) {
    return null;
  }
  return (
    <Container className="section">
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            {home[0] && <Tile item={home[0]} />}
          </div>
          <div className="tile is-vertical">
            <div className="tile is-parent">
              {home[1] && <Tile item={home[1]} />}
            </div>
            <div className="tile">
              <div className="tile is-parent">
                {home[2] && <Tile item={home[2]} />}
              </div>
              <div className="tile is-parent is-vertical">
                {home[3] && <Tile item={home[3]} />}
                {home[4] && <Tile item={home[4]} />}
              </div>
            </div>
          </div>
        </div>
        <div className="has-text-centered mt-6">
          <OverlayButton linkTo="/gallery" buttonText="View more" />
        </div>
      </div>
    </Container>
  );
};
export default ImagesGrid;
