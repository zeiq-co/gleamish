import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import OverlayButton from './elements/OverlayButton';

const Wrapper = styled.div`
  flex-direction: ${(props) => (props.secondary ? 'row-reverse' : '')};
`;

const ServiceFeatures = ({ title, subtitle, secondary, image }) => {
  return (
    <section className="section">
      <div className="container">
        <Wrapper secondary={secondary} className="columns is-variable is-6">
          <div className="column content">
            {' '}
            <h3 className="title has-text-left is-family-primary has-text-weight-normal is-size-4 mb-5 is-spaced">
              {title}
            </h3>
            <p className="subtitle has-text-left is-size-6 line-height mb-5">
              {subtitle}
            </p>
            <Link to="/details">
              <OverlayButton buttonText="View Details" />
            </Link>
          </div>
          <div className="column">
            <img src={image} alt="service-img" />
          </div>
        </Wrapper>
      </div>
    </section>
  );
};
export default ServiceFeatures;
