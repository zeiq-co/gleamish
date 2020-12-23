import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.h1`
  line-height: 1.2em;
  color: ${(props) =>
    props.primary
      ? props.theme.textColorLite
      : props.theme.darkAccent} !important;
`;

const Img = styled.img`
  height: 1.5rem;
`;

const Heading = ({ children, centered, hideBottomIcon, primary }) => (
  <div className={hideBottomIcon ? 'mb-2' : 'mb-6'}>
    <Text
      primary={primary}
      className={`is-size-2 has-text-weight-normal mb-4 is-size-4-mobile  ${
        centered ? 'has-text-centered' : ''
      }`}
    >
      {children}
    </Text>{' '}
    {!hideBottomIcon && (
      <div className="has-text-centered">
        <Img src="/images/paint-roller.png" alt="paint-roller" />
      </div>
    )}
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
