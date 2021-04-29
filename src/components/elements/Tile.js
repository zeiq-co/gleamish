import React from 'react';
import styled from 'styled-components';

const Container = styled.article``;

const Tile = ({ item }) => {
  return (
    <Container className="tile is-child ">
      <img
        src={item.node.image.asset.fluid.src}
        className="image"
        alt={item.node.alternative}
      />
    </Container>
  );
};

export default Tile;
