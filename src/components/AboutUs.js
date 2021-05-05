import React from 'react';
import styled from 'styled-components';

import OverlayButton from './elements/OverlayButton';

const Container = styled.section`
  background-image: url(/images/hairs-img.jpg);
  background-repeat: 'no-repeat' !important;
  background-size: 'cover' !important;
  min-height: 578px;
  .image-box {
    width: 300px;
    position: relative;
  }
  .overlay-image {
    position: absolute;
    width: 300px;
    left: 8rem;
    top: 8rem;
  }

  .title {
    color: ${(props) => props.theme.textColorLite} !important;
  }
  .subtitle {
    color: ${(props) => props.theme.textColorLite} !important;
    margin-bottom: 1.5rem !important;
  }
  .paragraph {
    color: ${(props) => props.theme.textColorLite} !important;
  }
  @media screen and (max-width: 768px) {
    .headline {
      margin-top: 0rem !important;
    }
    .hair-dreiser {
      width: 210px;
      margin-top: 2rem;
    }
    .overlay-image {
      width: 210px;
      position: absolute;
      left: 4.5rem;
      top: 5rem;
    }
  }
`;

const AboutUS = ({ home }) => (
  <Container className="hero section">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <div className="my-6 has-text-centered headline">
              <h3 className="is-size-6 is-uppercase has-text-weight-semibold subtitle">
                {home.heading}
              </h3>
              <h1 className="title is-size-1 mb-4 has-text-weight-semibold">
                {home.title}
              </h1>
              <p className="paragraph">{home.description}</p>
            </div>
            <div className="has-text-centered">
              <OverlayButton linkTo="/gallery" buttonText="View more" />
            </div>
          </div>
          <div className="column is-6 is-offset-1 ">
            <div className="image-box">
              <figure className="hair-dreiser">
                <img
                  src={home.frontImage.asset.url}
                  className=""
                  alt="background-png"
                />
              </figure>
              <figure className="overlay-image">
                <img
                  src={home.backImage.asset.url}
                  className=""
                  alt="home-png"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);
export default AboutUS;
