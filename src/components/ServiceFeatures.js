import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import ReactMarkdown from 'react-markdown';
import OverlayButton from './elements/OverlayButton';

const Wrapper = styled.div`
  flex-direction: ${(props) => (props.secondary ? 'row-reverse' : '')};
`;

const ServiceFeatures = ({ secondary, node }) => {
  return (
    <section className="section">
      <div className="container">
        <Wrapper
          secondary={secondary}
          className="columns is-vcentered is-variable is-6"
        >
          <div className="column content has-text-centered">
            <h3 className="title is-family-primary has-text-weight-normal is-size-4 mb-5 is-spaced has-text-centered">
              {node.title}
            </h3>
            <p className="subtitle is-size-6 line-height mb-5 has-text-centered react-markdown">
              <ReactMarkdown source={node.description} />
            </p>
            <Link className="has-text-centered" to="/details">
              <OverlayButton
                linkTo={node.slug.current}
                buttonText="View Details"
              />
            </Link>
          </div>
          <div className="column">
            <Img
              fluid={node.images[0] ? node.images[0].asset.fluid : ''}
              alt="service-img"
            />
          </div>
        </Wrapper>
      </div>
    </section>
  );
};
export default ServiceFeatures;
