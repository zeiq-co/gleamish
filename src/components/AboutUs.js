import React from 'react';
import styled from 'styled-components';

import OverlayButton from './elements/OverlayButton';

const Container = styled.section`
  background-color: ${(props) => props.theme.backgroundInputColor};
  .image-box {
    position: relative;
  }
  .home-bg {
    /* width: 349px; */
  }
  .programer-image {
    position: absolute;
    top: 10rem;
    right: 0;
  }
  @media screen and (max-width: 768px) {
    .home-bg {
      padding-top: 2.75rem;
      width: 65%;
    }
    .programer-image {
      position: absolute;
      left: 1.5rem;
    }
  }
`;

const AboutUS = () => (
  <Container className="hero is-large">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <div className="my-6 has-text-centered">
              <h3 className="is-size-4 mb-4 is-uppercase">
                new york • since 2004{' '}
              </h3>
              <h1 className="is-size-1 mb-4 has-text-weight-semibold">
                READY TO IMPRESS
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="has-text-centered">
              <OverlayButton linkTo="/gallery" buttonText="View more" />
            </div>
          </div>
          <div className="column is-6 is-offset-1 ">
            <div className="image-box">
              <figure className="home-bg">
                <img
                  src="/images/imgone.jpg"
                  className=""
                  alt="background-png"
                />
              </figure>

              <figure className="programer-image">
                <img src="/images/imgtwo.jpg" className="" alt="home-png" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);
export default AboutUS;
