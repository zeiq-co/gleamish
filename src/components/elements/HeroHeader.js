import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-image: url('http://prorange.ancorathemes.com/wp-content/uploads/2017/05/slide_3.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeroHeader = () => {
  return (
    <HeaderWrapper className="hero is-medium is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="has-text-white is-size-1">Contact</h1>
          <div className="has-text-white mt-4">
            <a href="/">Home </a>
            <span>Contact</span>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};
export default HeroHeader;
