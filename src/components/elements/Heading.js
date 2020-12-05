import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Text = styled.h3`
  padding-bottom: 2.4rem;
  line-height: 1.2em;
  position: relative;
  ::before {
    position: absolute;
    bottom: 0.75rem;
    content: '';
    left: 50%;
    transform: translateX(-50%);
    width: 84px;
    height: 2px;

    background: linear-gradient(
      to right,
      #e1e7eb 0%,
      #e1e7eb 25%,
      rgba(255, 255, 255, 0) 25%,
      rgba(255, 255, 255, 0) 75%,
      #e1e7eb 75%
    );
  }
  ::after {
    position: absolute;
    bottom: 0;
    content: '\e90a';
    font-family: Fontello, sans-serif;
    left: 50%;
    transform: translateX(-50%);
    font-size: 23px;
    line-height: 1;
  }
`;

const Heading = ({ children, centered, linkTo }) => (
  <>
    <Text
      className={`title is-2  has-text-weight-bold is-size-4-mobile is-family-primary ${
        centered ? 'has-text-centered' : ''
      }`}
    >
      {children}
      {linkTo && (
        <Link to={linkTo} className="icon is-small is-pulled-right">
          <img src="/images/arrow.svg" alt="icon" />
        </Link>
      )}
    </Text>
  </>
);

Heading.defaultProps = {
  centered: false,
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  centered: PropTypes.bool,
};

export default Heading;
