import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Container = styled.section`
  .image {
    width: 300px;
    margin: auto;
  }
`;

const Members = ({ data }) => {
  return (
    <Container className="section">
      <div className="container">
        <div className="columns">
          {data.brands.map((item) => (
            <div
              key={item._key}
              className="column is-flex is-justify-content-center"
            >
              <figure className="image">
                <Img
                  fluid={item.image ? item.image.asset.fluid : ' '}
                  alt={item.title ? item.title : 'Members'}
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default Members;
