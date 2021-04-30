import React from 'react';
import styled from 'styled-components';

import Img from 'gatsby-image';

const Container = styled.section`
  /*  */
`;

const Members = ({ data }) => {
  return (
    <Container className="section">
      <div className="columns is-vcentered">
        {data.brands.map((item) => (
          <div key={item._key} className="column is-3 has-text-centered">
            <figure className="image is-128x128">
              <Img
                fluid={item.image ? item.image.asset.fluid : ' '}
                alt={item.title ? item.title : 'Members'}
              />
            </figure>
          </div>
        ))}
      </div>
    </Container>
  );
};
export default Members;
