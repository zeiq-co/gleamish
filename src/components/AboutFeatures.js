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
    title: 'Lorem Ipsum',
    subtitle:
      'Lorem ipsum dolor consecte tur adipiscing sed do eiusmod tempor incididunt ut labore et dolore',
  },
  {
    id: 2,
    no: 2,
    title: 'Lorem Ipsum',
    subtitle:
      'Lorem ipsum dolor consecte tur adipiscing sed do eiusmod tempor incididunt ut labore et dolore',
  },
  {
    id: 3,
    no: 3,
    title: 'Lorem Ipsum',
    subtitle:
      'Lorem ipsum dolor consecte tur adipiscing sed do eiusmod tempor incididunt ut labore et dolore',
  },
  {
    id: 4,
    no: 4,
    title: 'Lorem Ipsum',
    subtitle:
      'Lorem ipsum dolor consecte tur adipiscing sed do eiusmod tempor incididunt ut labore et dolore',
  },
];

const AboutFeatures = () => {
  return (
    <Section className="section">
      <div className="container my-6">
        <Heading centered> Why Choose Us?</Heading>
        <div className="columns is-centered is-vcentered">
          <div className="column">
            {FeaturesItem.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="media is-flex-direction-row-reverse mb-5"
              >
                <div className="media-left ml-6">
                  <div className="counting is-size-5 has-text-white has-text-weight-semibold is-flex has-text-centered">
                    {item.id}
                  </div>
                </div>
                <div className="media-content">
                  <p className="title is-size-4 has-text-right has-text-weight-normal mb-3">
                    {' '}
                    {item.title}
                  </p>
                  <p
                    className="subtitle is-size-6  has-text-right mt-1
                "
                  >
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="column  ">
            <img src="/images/contactbg02.png" alt="about us" />
          </div>
          <div className="column ">
            {FeaturesItem.slice(2, 4).map((item) => (
              <div className="media " key={item.id}>
                <div className="media-left mr-6">
                  <div className="counting is-size-5 has-text-white has-text-weight-semibold is-flex has-text-centered">
                    {item.id}
                  </div>
                </div>
                <div className="media-content">
                  <p className="title is-size-4 has-text-weight-normal mb-3">
                    {item.title}
                  </p>
                  <p
                    className="subtitle is-size-6 mt-1
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
