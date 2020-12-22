import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  margin-top: 3.5rem;
  .subtitle {
    line-height: 30px;
  }
  h3 {
    color: ${(props) => props.theme.darkAccent} !important;
  }
  p {
    color: ${(props) => props.theme.textColorDark} !important;
  }
`;

const FeaturesItem = [
  {
    id: 1,
    title: 'Interior Painting',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    image: '/images/painting-02.jpg',
  },
  {
    id: 2,
    title: 'Residential',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    image: '/images/painting-03.jpg',
  },
  {
    id: 3,
    title: 'Commercial',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    image: '/images/painting-04.jpg',
  },
  {
    id: 4,
    title: 'Exterior Painting',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    image: '/images/painting.jpg',
  },
];

const Section = styled.section``;

const Features = () => {
  return (
    <Section className="section">
      <div className="container">
        <div className="columns">
          {FeaturesItem.map((item) => (
            <div key={item.id} className="column">
              <Card className="card p-4">
                <div className="card-image is-flex is-justify-content-center mb-5">
                  <figure className="image is-64x64">
                    <img src={item.image} alt="painting Images" />
                  </figure>
                </div>
                <h3 className="title has-text-centered is-family-primary  has-text-weight-normal is-size-4 mb-5 is-spaced">
                  {item.title}
                </h3>
                <p className="subtitle has-text-centered is-size-6 line-height">
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
