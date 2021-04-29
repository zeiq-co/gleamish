import React from 'react';
import styled from 'styled-components';

import Tile from './elements/Tile';

const Container = styled.section`
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const ImagesGrid = ({ gallery }) => {
  return (
    <Container className="section">
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            {gallery[0] && <Tile item={gallery[0]} />}
          </div>
          <div className="tile is-vertical">
            <div className="tile is-parent">
              {gallery[1] && <Tile item={gallery[1]} />}
            </div>
            <div className="tile">
              <div className="tile is-parent">
                {gallery[2] && <Tile item={gallery[2]} />}
              </div>
              <div className="tile is-parent is-vertical">
                {gallery[3] && <Tile item={gallery[3]} />}
                {gallery[4] && <Tile item={gallery[4]} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ImagesGrid;
