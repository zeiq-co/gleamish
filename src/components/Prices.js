import React from 'react';
import styled from 'styled-components';

const Section = styled.section``;

const Prices = () => (
  <Section className="section">
    <div className="container has-text-centered">
      <div className="columns">
        <div className="column">First column</div>
        <div className="column">Second column</div>
        <div className="column">Third column</div>
      </div>
    </div>
  </Section>
);
export default Prices;
