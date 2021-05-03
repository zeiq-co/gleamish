import React from 'react';
import styled from 'styled-components';

const Container = styled.article``;

const Tile = ({ item }) => {
  if (!item) {
    return null;
  }
  return (
    <Container className="tile is-child">
      <img
        src={item.asset.fluid.src}
        className="image"
        alt={item.alternative}
      />
    </Container>
  );
};

export default Tile;
