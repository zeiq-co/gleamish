import React from 'react';
import styled from 'styled-components';

import ServicesCard from './ServicesCard';

const Section = styled.section`
  .column {
    padding: 0rem;
  }
`;

const ServicesBanners = ({ home }) => {
  return (
    <Section className="section">
      <div className="columns has-text-centered">
        {home.map((item) => (
          <div className="column">
            <ServicesCard item={item} key={item._key} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ServicesBanners;
