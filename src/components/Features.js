import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';

const Card = styled.div`
  border-radius: 0rem;
  background-color: ${theme.darkAccent};
  .subtitle {
    line-height: 30px;
  }
`;

const FeaturesItem = [
  {
    id: 1,
    title: 'Interior Painting',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus luctus nec ullamcorper mattis leo. Ab dolore nisi sunt quamquam...',
    image: '/images/interior-painting.png',
  },
  {
    id: 2,
    title: 'Residential',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus luctus nec ullamcorper mattis leo. Ab dolore nisi sunt quamquam...',
    image: '/images/Residential.png',
  },
  {
    id: 3,
    title: 'Commercial',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus luctus nec ullamcorper mattis leo. Ab dolore nisi sunt quamquam...',
    image: '/images/Commercial.png',
  },
  {
    id: 4,
    title: 'Exterior Painting',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus luctus nec ullamcorper mattis leo. Ab dolore nisi sunt quamquam...',
    image: '/images/exterior.png',
  },
];

const Section = styled.section``;

const Features = ({ data }) => {
  return (
    <Section className="section">
      <div className="container">
        <div className="columns">
          {data.map((item) => (
            <div key={item.id} className="column">
              <Card className="card p-4">
                <div className="card-image is-flex is-justify-content-center mb-5">
                  <figure className="image is-64x64">
                    <img
                      src={item.image.asset.fluid.src}
                      alt="painting Images"
                    />
                  </figure>
                </div>
                <h3 className="has-text-centered is-family-primary has-text-weight-normal is-size-4 mb-5 is-spaced has-text-white">
                  {item.title}
                </h3>
                <p className="has-text-centered is-size-6 line-height has-text-white">
                  {item.subtitle}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
export default Features;
