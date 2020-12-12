import React from 'react';
import styled from 'styled-components';
import Heading from './elements/Heading';

const Section = styled.section`
  .counting {
    background: ${(props) => props.theme.mainBrandColor} !important;
    width: 65px !important;
    height: 65px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
  }
  .media + .media {
    border: none;
  }
`;

const FeaturesItem = [
  {
    id: 1,
    no: 1,
    title: 'Interior Painting',
    subtitle:
      'Lorem ipsum dolor consecte tur adipiscing sed do eiusmod tempor incididunt ut labore et dolore',
  },
  {
    id: 2,
    no: 2,
    title: 'Exterior Painting',
    subtitle:
      'Lorem ipsum dolor consecte tur adipiscing sed do eiusmod tempor incididunt ut labore et dolore',
  },
  {
    id: 3,
    no: 3,
    title: 'Flooring',
    subtitle:
      'Lorem ipsum dolor consecte tur adipiscing sed do eiusmod tempor incididunt ut labore et dolore',
  },
  {
    id: 4,
    no: 4,
    title: 'Flooring',
    subtitle:
      'Lorem ipsum dolor consecte tur adipiscing sed do eiusmod tempor incididunt ut labore et dolore',
  },
];

const AboutFeatures = () => {
  return (
    <Section className="section">
      <div className="container my-6">
        <Heading centered> Why Choose Us?</Heading>
        <div class="columns is-centered is-vcentered">
          <div class="column">
            {FeaturesItem.slice(0, 2).map((item) => (
              <div
                key={item.id}
                class="media is-flex-direction-row-reverse mb-5"
              >
                <div class="media-left ml-5">
                  <div class="counting is-size-5 has-text-white has-text-weight-semibold is-flex has-text-centered">
                    {item.no}
                  </div>
                </div>
                <div class="media-content">
                  <p class="title is-size-4 has-text-right has-text-weight-normal mb-3">
                    {' '}
                    {item.title}
                  </p>
                  <p
                    class="subtitle is-size-6  has-text-right mt-1
                "
                  >
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div class="column  ">
            <img src="/images/contactbg02.png" alt="about us" />
          </div>
          <div class="column ">
            {FeaturesItem.slice(2, 4).map((item) => (
              <div class="media " key={item.id}>
                <div class="media-left mr-5">
                  <div class="counting is-size-5 has-text-white has-text-weight-semibold is-flex has-text-centered">
                    {item.no}
                  </div>
                </div>
                <div class="media-content">
                  <p class="title is-size-4 has-text-weight-normal mb-3">
                    {item.title}
                  </p>
                  <p
                    class="subtitle is-size-6 mt-1
                "
                  >
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
export default AboutFeatures;
