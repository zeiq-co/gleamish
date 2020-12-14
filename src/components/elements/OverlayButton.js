import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 1em;
  text-transform: uppercase;
  padding: 1.5rem 4rem !important;
  background: none;
  color: ${(props) => props.theme.mainBrandColor};
  position: relative;
  transition: color 0.25s ease;
  border: 1px solid white;
  :hover {
    color: ${(props) => props.theme.darkAccent};
  }
  :focus {
    color: ${(props) => props.theme.mainBrandColor};
  }

  ::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: white;
    transform-origin: left;
    transition: width 0.25s ease;
    z-index: -1;
  }

  :hover::after {
    width: 100%;
  }
`;

const HeroHeader = () => {
  return <Button className="button has-text-weight-bold">Button</Button>;
};
export default HeroHeader;
