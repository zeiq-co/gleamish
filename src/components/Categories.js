import React from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import Heading from './elements/Heading';

const Section = styled.div`
  .columns {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
`;

const Category = [
  {
    id: 1,
    image: '/images/category01.png',
    title: 'Faux Finishes',
    subtitle: 'Lorem Ipsum is simply dummy text.',
    border: ' 0 1px 1px 0',
  },
  {
    id: 2,
    image: '/images/category02.png',
    title: 'Water Proofing',
    subtitle: 'Lorem Ipsum is simply dummy text.',
    border: ' 0 1px 1px 0',
  },
  {
    id: 3,
    image: '/images/category03.png',
    title: 'Pre-Paint Demo',
    subtitle: 'Lorem Ipsum is simply dummy text.',
    border: ' 0 0px 1px 0',
  },
  {
    id: 4,
    image: '/images/category04.png',
    title: 'Mildew Removal',
    subtitle: 'Lorem Ipsum is simply dummy text.',
    border: ' 0 1px 0px 0',
  },
  {
    id: 5,
    image: '/images/category05.png',
    title: 'Color Proof',
    subtitle: 'Lorem Ipsum is simply dummy text.',
    border: ' 0 1px 0px 0',
  },
  {
    id: 6,
    image: '/images/category06.png',
    title: 'Window Washing',
    subtitle: 'Lorem Ipsum is simply dummy text.',
    border: ' 0 0 0 0',
  },
];

const Categories = () => {
  return (
    <Section className="section">
      <div className="container">
        <Heading centered> Why Choose Us?</Heading>
        {/* <h1 className="has-text-centered is-size-1 has-text-weight-light mb-6">
          Why Choose Us?{' '}
        </h1> */}
        <div className="columns is-gapless is-multiline ">
          {Category.map((item) => (
            <CategoryItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </Section>
  );
};
export default Categories;
