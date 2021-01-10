import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { theme } from '../utils/theme';

const Card = styled.div`
  border-radius: 0rem;
  background-color: ${theme.darkAccent};
  .subtitle {
    line-height: 30px;
  }
`;

const Features = ({ data }) => {
  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          {data.homeFeatures.map((item) => (
            <div key={item._key} className="column is-flex">
              <Card className="card p-4">
                <div className="card-image is-flex is-justify-content-center mb-5">
                  <figure className="image is-64x64">
                    <Img
                      fluid={item.image ? item.image.asset.fluid : ' '}
                      alt={item.title ? item.title : 'Features'}
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
    </div>
  );
};
export default Features;
