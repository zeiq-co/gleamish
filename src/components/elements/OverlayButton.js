import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/theme';

const Button = styled.button`
  padding: 1.2rem 3.2rem !important;
  background: none;
  color: ${theme.textColorLite};
  position: relative;
  transition: color 0.25s ease;
  border: 1px solid ${theme.textColorLite};
  :hover,
  :focus {
    color: #363636;
  }

  ::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${theme.mainBrandColor};
    transform-origin: left;
    transition: width 0.25s ease;
    z-index: -1;
  }

  :hover::after {
    width: 100%;
  }
`;

const HeroHeader = () => {
  return (
    <Button className="button has-text-weight-normal is-size-5">
      Get Started
    </Button>
  );
};
export default HeroHeader;
