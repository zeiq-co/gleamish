import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: ${(props) => props.theme.backgroundInputColor};
  .heading {
    color: ${(props) => props.theme.menuTintColor} !important;
  }
`;

const Line = styled.div`
  height: 1px;
  flex: 1;
  background-color: ${(props) => props.theme.borderColor};
`;

const ServiceItem = [
  {
    id: 1,
    title: 'HAIR CUT WITH BLOW DRY',
    subtitle: 'Lorem ipsum dolor sit amet adipiscing',
    price: '35',
  },
  {
    id: 2,
    title: 'BLOW DRY & CURL',
    subtitle: 'Lorem ipsum dolor sit amet',
    price: '35',
  },
  {
    id: 3,
    title: 'SHAMPOO & SET',
    subtitle: 'Lorem ipsum dolor sit amet adipiscing',
    price: '38',
  },
  {
    id: 4,
    title: 'COLOR & HIGHLIGHT',
    subtitle: 'Lorem ipsum dolor sit amet',
    price: '66',
  },
  {
    id: 5,
    title: 'OMBRÉ COLOR',
    subtitle: 'Lorem ipsum dolor sit amet',
    price: '44',
  },
];

const HaircutPrices = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-4">
          <div className="mr-2 has-text-right">
            <h1 className="heading has-text-weight-bold mb-0 is-size-1 is-uppercase">
              HairCut
            </h1>
            <h1 className="heading has-text-weight-bold  mb-0 is-size-1 is-uppercase">
              Prices
            </h1>
          </div>
        </div>
        <div className="column is-6">
          {ServiceItem &&
            ServiceItem.map((item) => (
              <div key={item.id} className="mb-4">
                <div className="is-flex is-align-items-flex-end">
                  <h1 className="title is-size-5 mb-0">{item.title}</h1>
                  <Line />
                  <span>{item.price}$</span>
                </div>
                <h2 className="subtitle mt-2 is-size-6">{item.subtitle}</h2>
              </div>
            ))}
        </div>
      </div>
    </div>
  </Section>
);
export default HaircutPrices;
