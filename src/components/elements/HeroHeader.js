import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-image: url('/images/cantact.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .bottom-content {
    font-size: ${(props) => props.theme.fontSizeMedium}px;
  }
`;

const HeroHeader = ({ heading, title }) => {
  return (
    <HeaderWrapper className="hero ">
      <div className="hero-body">
        <div className="container has-text-centered py-6">
          <h1 className="has-text-white is-size-1">{heading}</h1>
          <div className="bottom-content has-text-white mt-4 has-text-weight-normal">
            <a href="/" className="mr-1">
              Home
            </a>
            <span>/</span>
            <span className="ml-1">{title}</span>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};
export default HeroHeader;
