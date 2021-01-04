import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import ReactMarkdown from 'react-markdown';
import { truncate } from 'lodash';
import OverlayButton from './elements/OverlayButton';

const Wrapper = styled.div`
  flex-direction: ${(props) => (props.isSecondary ? 'row-reverse' : '')};
`;

const ServiceFeatures = ({ item, number }) => {
  const isSecondary = number % 2 === 0;

  return (
    <section className="section">
      <div className="container">
        <Wrapper
          isSecondary={isSecondary}
          className="columns is-vcentered is-variable is-6"
        >
          <div className="column content">
            <h3 className="title is-family-primary has-text-weight-normal is-size-4 mb-5 is-spaced has-text-centered">
              {item.title}
            </h3>
            <p className="subtitle is-size-6 line-height mb-5 react-markdown">
              <ReactMarkdown
                source={truncate(item.description, {
                  length: 300,
                })}
              />
            </p>
            <Link className="has-text-centered" to="/details">
              <OverlayButton
                linkTo={item.slug ? item.slug.current : '#'}
                buttonText="View Details"
              />
            </Link>
          </div>
          <div className="column">
            <Img
              fluid={item.images[0] ? item.images[0].asset.fluid : ''}
              alt="service-img"
            />
          </div>
        </Wrapper>
      </div>
    </section>
  );
};
export default ServiceFeatures;
