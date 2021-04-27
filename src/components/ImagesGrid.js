import React from 'react';
import styled from 'styled-components';
import OverlayButton from './elements/OverlayButton';

const Container = styled.section`
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const ImagesGrid = () => {
  return (
    <Container classNameName="section">
      <div className="container pb-4">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <figure className="image">
              <img src="/images/img1.webp" alt="site logo" />
            </figure>
          </div>
          <div className="tile is-parent">
            <figure className="image">
              <img src="/images/img8.jpg" alt="site logo" />
            </figure>
          </div>
          <div className="tile is-vertical">
            <div className="tile is-parent">
              <figure className="image">
                <img src="/images/img2.webp" alt="site logo" />
              </figure>
            </div>
            <div className="tile">
              <div className="tile is-parent">
                <figure className="image">
                  <img src="/images/img3.webp" alt="site logo" />
                </figure>
              </div>
              <div className="tile is-parent">
                <figure className="image">
                  <img src="/images/gallery4.jpg" alt="site logo" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-2">
            <figure className="image">
              <img src="/images/img5.webp" alt="site logo" />
            </figure>
          </div>
          <div className="tile is-parent is-4">
            <figure className="image">
              <img src="/images/img4.webp" alt="site logo" />
            </figure>
          </div>
          <div className="tile is-parent is-6">
            <figure className="image">
              <img src="/images/img2.webp" alt="site logo" />
            </figure>
          </div>
        </div>
        <div className="has-text-centered my-6">
          <OverlayButton linkTo="/gallery" buttonText="View More" />
        </div>
      </div>
    </Container>
  );
};

export default ImagesGrid;
