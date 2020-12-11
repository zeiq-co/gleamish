import React from 'react';
import styled from 'styled-components';
import Heading from './elements/Heading';

const Section = styled.section`
  background-color: ${(props) => props.theme.backgroundColor};
`;

const AboutUs = () => {
  return (
    <Section className="section">
      <div className="container my-6">
        <div class="columns is-centered is-vcentered">
          <div class="column is-5">
            {' '}
            <Heading hideBottomIcon> Why Choose Us?</Heading>
            <p className="subtitle is-6">
              Looking for a company you can trust to complete your painting job?
              You don’t have to look anymore! ProRange Painters are here to
              answer your questions, help you define your goals, and provide top
              services to complete whatever painting job you have in mind.
            </p>
            <p className="subtitle is-6">
              Looking for a company you can trust to complete your painting job?
              You don’t have to look anymore! ProRange Painters are here to
              answer your questions, help you define your goals, and provide top
              services to complete whatever painting job you have in mind.
            </p>
          </div>
          <div class="column is-6 is-offset-1 ">
            <img src="/images/aboutbg.png" alt="about us" />
          </div>
        </div>
      </div>
    </Section>
  );
};
export default AboutUs;
