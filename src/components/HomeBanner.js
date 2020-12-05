import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Section = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
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
            <h1 class="title is-1 has-text-weight-normal has-text-white is-spaced">
              Proven Reliability
            </h1>
            <h1 class="subtitle is-6 has-text-weight-normal has-text-white">
              Proven Reliability
            </h1>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HomeBanner;
