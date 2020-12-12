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
        <div className="columns is-centered is-vcentered">
          <div className="column is-5">
            {' '}
            <Heading hideBottomIcon> Lorem Ipsum</Heading>
            <p className="subtitle is-6">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
            <p className="subtitle is-6">
              Looking for a company you can trust to complete your painting job?
              You don’t have to look anymore! ProRange Painters are here to
              answer your questions, help you define your goals, and provide top
              services to complete whatever painting job you have in mind.
            </p>
          </div>
          <div className="column is-6 is-offset-1 ">
            <img src="/images/aboutbg.png" alt="about us" />
          </div>
        </div>
      </div>
    </Section>
  );
};
export default AboutUs;
