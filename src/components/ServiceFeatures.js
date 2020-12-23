import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  flex-direction: ${(props) => (props.secondary ? 'row-reverse' : '')};
  .content {
    padding: 5rem 6rem;
  }
`;

const ServiceFeatures = ({ title, subtitle, secondary, image }) => {
  return (
    <section className="section">
      <div className="container">
        <Wrapper secondary={secondary} className="columns ">
          <div className="column content">
            {' '}
            <h3 className="title has-text-left is-family-primary has-text-weight-normal is-size-4 mb-5 is-spaced">
              {title}
            </h3>
            <p className="subtitle has-text-left is-size-6 line-height mb-5">
              {subtitle}
            </p>
            <Link
              to="/details"
              type="button"
              className="button is-secondary is-normal"
            >
              View Details
            </Link>
          </div>
          <div className="column">
            <img src={image} alt="service-img" />
            {/* <figure className="image is-128x128">

            </figure> */}
          </div>
        </Wrapper>
      </div>
    </section>
  );
};
export default ServiceFeatures;
