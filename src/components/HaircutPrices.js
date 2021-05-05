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

const HaircutPrices = ({ pricesList }) => {
  return (
    <Section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <div className="mr-2 has-text-right has-text-centered-mobile">
              <h1 className="heading has-text-weight-bold mb-0 is-size-1 is-uppercase">
                HairCut
              </h1>
              <h1 className="heading has-text-weight-bold  mb-0 is-size-1 is-uppercase">
                Prices
              </h1>
            </div>
          </div>
          <div className="column is-6">
            {pricesList &&
              pricesList.map((item) => (
                <div key={item.title} className="mb-4">
                  <div className="is-flex is-align-items-flex-end">
                    <h1 className="title is-size-5 mb-0">{item.title}</h1>
                    <Line />
                    <span>{item.price}$</span>
                  </div>
                  <h2 className="subtitle mt-2 is-size-6">
                    {item.description}
                  </h2>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
export default HaircutPrices;
