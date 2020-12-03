import React from 'react';
import styled from 'styled-components';
import FeaturesCard from './FeaturesCard';

const FeaturesItem = [
  {
    id: 1,
    title: 'Interior Painting',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    image:
      'http://exqute.egemenerd.com/wp-content/uploads/2019/01/059-paint-roller.png',
  },
  {
    id: 2,
    title: 'Exterior Painting',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    image:
      ' http://exqute.egemenerd.com/wp-content/uploads/2019/01/008-building.png',
  },
  {
    id: 3,
    title: 'Flooring',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    image:
      'http://exqute.egemenerd.com/wp-content/uploads/2019/01/025-hammer-1.png',
  },
];

const Section = styled.section``;

const Features = () => {
  return (
    <Section className="section">
      <div className="container">
        <div className="columns">
          {FeaturesItem.map((item) => (
            <FeaturesCard
              key={item.id}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
export default Features;
