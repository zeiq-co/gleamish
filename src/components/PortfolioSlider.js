import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  min-height: 26vh;
  background-size: cover;
`;

const PortfolioSlider = ({ image }) => {
  return (
    <div className="section">
      <div className="container">
        <Section bgImage={image} className="hero is-primary is-large">
          <div className="hero-body"></div>
        </Section>
      </div>
    </div>
  );
};

export default PortfolioSlider;
