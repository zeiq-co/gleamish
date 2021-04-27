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

const ImagesGrid = () => {
  return (
    <Container classNameName="section">
      <div className="container py-4 mt-6">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <figure className="image">
              <img src="/images/img1.webp" alt="site-logo" />
            </figure>
          </div>
          <div className="tile is-vertical">
            <div className="tile is-parent">
              <figure className="image">
                <img src="/images/img8.jpg" alt="site-logo" />
              </figure>
            </div>
            <div className="tile is-parent">
              <figure className="image">
                <img src="/images/img2.webp" alt="site-logo" />
              </figure>
            </div>
          </div>
          <div className="tile is-parent is-vertical">
            <div className="tile is-parent">
              <figure className="image">
                <img src="/images/img3.webp" alt="site-logo" />
              </figure>
            </div>
          </div>
        </div>
        <figure className="image is-3by1">
          <img src="/images/img6.webp" alt="site-logo" />
        </figure>
        <div className="has-text-centered my-6">
          <OverlayButton linkTo="/gallery" buttonText="View more" />
        </div>
      </div>
    </Container>
  );
};

export default ImagesGrid;
