import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url('https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/04/1-1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;

const HomeHero = () => {
  return (
    <Section className="hero is-large">
      <div className="hero-body"></div>
    </Section>
  );
};
export default HomeHero;
