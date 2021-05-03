import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-image: linear-gradient(
      rgba(12, 12, 12, 0.3),
      rgba(12, 12, 12, 0.3)
    ),
    url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .bottom-content {
    font-size: ${(props) => props.theme.fontSizeMedium}px;
  }
  a {
    :hover {
      color: ${(props) => props.theme.mainBrandColor};
    }
  }
`;

const HeroHeader = ({ heading, title, background }) => {
  return (
    <HeaderWrapper className="hero is-medium" background={background}>
      <div className="hero-body">
        <div className="container has-text-centered py-6">
          <h1 className="has-text-white is-size-1">{heading}</h1>
          {title && (
            <div className="bottom-content has-text-white mt-4 has-text-weight-normal">
              <a href="/" className="mr-1">
                Home
              </a>
              <span>/</span>
              <span className="ml-1">{title}</span>
            </div>
          )}
        </div>
      </div>
    </HeaderWrapper>
  );
};
export default HeroHeader;
