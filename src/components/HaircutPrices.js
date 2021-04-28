import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: ${(props) => props.theme.backgroundInputColor};
`;

const HaircutPrices = () => (
  <Section className="section">
    <div className="columns">
      <div className="column is-5">
        <h1 className="title has-text-right">Hair cut Prices</h1>
      </div>
      <div className="column">
        <h1>two</h1>
      </div>
    </div>
  </Section>
);
export default HaircutPrices;
