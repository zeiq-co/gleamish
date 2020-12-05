import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Section = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  .heading {
    font-size: 70px !important;
  }
  .subheading {
    font-size: 18px !important;
  }
  button{
    padding: 1.2rem 4rem;
    border-radius: 0;
}
  }
`;

const HomeBanner = ({ bgImage }) => {
  return (
    <Section
      className="hero is-large is-large-widescreen is-large-fullhd"
      bgImage={bgImage}
    >
      <div className="hero-body">
        <div className="columns is-centered">
          <div className="column is-5 has-text-centered">
            <h1 class="heading has-text-weight-normal has-text-white mb-5">
              Proven Reliability
            </h1>
            <h1 class="subheading is-size-5 has-text-weight-normal has-text-white mb-5">
              We Value Work Ethic & Industry Standard
            </h1>
            <button class="button is-medium">Get Started</button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HomeBanner;
