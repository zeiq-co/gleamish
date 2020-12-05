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
        <h1></h1>
      </div>
    </Section>
  );
};

export default HomeBanner;
