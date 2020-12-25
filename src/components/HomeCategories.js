import React from 'react';
import styled from 'styled-components';
import Heading from './elements/Heading';
import OverlayButton from './elements/OverlayButton';

const Section = styled.div`
  .info-section {
    line-height: 24px;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 104%;
`;
const Icon = styled.i`
  color: ${(props) => props.theme.mainBrandColor};
`;

const categorySubItem = [
  {
    id: 1,
    title: 'Lorem ipsum',
  },
  {
    id: 2,
    title: 'Lorem ipsum',
  },
  {
    id: 3,
    title: 'Lorem ipsum',
  },
  {
    id: 4,
    title: 'Lorem ipsum',
  },
  {
    id: 5,
    title: 'Lorem ipsum',
  },
  {
    id: 6,
    title: 'Lorem ipsum',
  },
  {
    id: 7,
    title: 'Lorem ipsum',
  },
  {
    id: 8,
    title: 'Lorem ipsum',
  },
  {
    id: 9,
    title: 'Lorem ipsum',
  },
  {
    id: 10,
    title: 'Lorem ipsum',
  },
];

const HomeCategories = () => {
  return (
    <Section className="section">
      <div className="container">
        <Heading centered> Why Choose Us?</Heading>
        <div className="columns is-variable is-6">
          <div className="column">
            <Img
              src="https://demo.voidcoders.com/htmldemo/we-paintV2/wepaint-yellow/assets/images/project/about.png"
              alt="placeholder-img"
            />
          </div>
          <div className="column ">
            <h1 className="mb-4 ml-3 is-size-6 info-section">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus luctus nec
              ullamcorper mattis leo. Ab dolore nisi sunt quamquam...
            </h1>
            <div className="columns is-multiline ">
              {categorySubItem.map((item) => (
                <div className="column is-6 is-flex is-align-items-center ">
                  <Icon className="far fa-check-circle mr-4" />
                  <p className="">{item.title}</p>
                </div>
              ))}
              <OverlayButton
                marginTop
                marginLeft
                linkTo="/"
                buttonText=" View More"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default HomeCategories;
