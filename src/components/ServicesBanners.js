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
        {home.map((item) => {
          return (
            <div className="column">
              <ServicesCard item={item} />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default ServicesBanners;
