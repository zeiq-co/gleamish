import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Section = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  height: 100vh;
  .heading {
    font-size: 70px !important;
    line-height: 5rem;
  }
  .subheading {
    font-size: 18px !important;
    line-height: 27px;
  }
  button {
    padding: 1.2rem 4rem;
    border-radius: 0;
  }
  .columns {
    flex: 1;
  }
`;

const HomeBanner = ({ bgImage }) => {
  return (
    <Section className="" bgImage={bgImage}>
      <div className="columns is-centered is-vcentered">
        <div className="column is-5 has-text-centered">
          <h1 class="heading has-text-weight-normal has-text-white mb-4">
            Lorem Ipsum
          </h1>
          <h1 class="subheading is-size-5 has-text-weight-normal has-text-white mb-5">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </h1>
          <button class="button is-medium">Get Started</button>
        </div>
      </div>
    </Section>
  );
};

export default HomeBanner;
