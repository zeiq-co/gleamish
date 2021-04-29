import React from 'react';
import styled from 'styled-components';

import ServicesCard from './ServicesCard';

const Section = styled.section`
  /* padding: 0rem 0rem; */
`;

const Prices = () => (
  <Section className="section">
    <div className="columns has-text-centered">
      <div className="column">
        <ServicesCard
          headline="Lovely"
          title="HAIRCUTS"
          subtitle="Products • New trends "
        />
      </div>
      <div className="column">
        <ServicesCard
          isMedium
          headline="Change"
          title="Coloring"
          subtitle="Experts • Innovations"
        />
      </div>
      <div className="column">
        <ServicesCard
          headline="Perfect"
          title="Hairstyles"
          subtitle="new york • since 2004"
        />
      </div>
    </div>
  </Section>
);
export default Prices;
