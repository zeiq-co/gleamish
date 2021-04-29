import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Container = styled.article``;

const Tile = ({ item }) => {
  if (!item) {
    return null;
  }
  return (
    <Container className="tile is-child ">
      <Img fluid={item.asset.fluid} className="image" alt={item.alternative} />
    </Container>
  );
};

export default Tile;
