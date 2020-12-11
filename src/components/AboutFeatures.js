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
    title: 'Interior Painting',
    subtitle:
      'We produce a higher level of residential and commercial professional painting services',
  },
  {
    id: 2,
    title: 'Exterior Painting',
    subtitle:
      'We produce a higher level of residential and commercial professional painting services',
  },
  {
    id: 3,
    title: 'Flooring',
    subtitle:
      'We produce a higher level of residential and commercial professional painting services',
  },
  {
    id: 4,
    title: 'Flooring',
    subtitle:
      'We produce a higher level of residential and commercial professional painting services',
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
                    2
                  </div>
                </div>
                <div class="media-content">
                  <p class="title is-4 has-text-right">John Smith</p>
                  <p
                    class="subtitle is-6 has-text-right
                "
                  >
                    @johnsmith
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div class="column  ">
            <img src="/images/aboutbg.png" alt="about us" />
          </div>
          <div class="column ">
            {FeaturesItem.slice(2, 4).map((item) => (
              <div class="media " key={item.id}>
                <div class="media-left mr-5">
                  <div class="counting is-size-5 has-text-white has-text-weight-semibold is-flex has-text-centered">
                    2
                  </div>
                </div>
                <div class="media-content">
                  <p class="title is-4 ">John Smith</p>
                  <p
                    class="subtitle is-6
                "
                  >
                    @johnsmith
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
