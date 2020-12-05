import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.h1`
  line-height: 1.2em;
`;

const Img = styled.img`
  height: 1.5rem;
`;

const Heading = ({ children, centered }) => (
  <div className="mb-6">
    <Text
      className={`is-size-1 has-text-weight-normal mb-4 is-size-4-mobile  ${
        centered ? 'has-text-centered' : ''
      }`}
    >
      {children}
    </Text>
    <div className="has-text-centered">
      <Img src="/images/paint-roller.png" alt="paint-roller" />
    </div>
  </div>
);

Heading.defaultProps = {
  centered: false,
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  centered: PropTypes.bool,
};

export default Heading;
