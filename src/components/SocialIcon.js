import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  margin-top: 2rem;
  width: 160px;
  min-height: 26px;
  .level-item {
    margin-right: 0.3rem;
    margin-left: 0.3rem;
    float: left;
    a {
      padding: 0 !important;
    }
  }
`;
const Icon = styled.i`
  color: ${(props) => (props.color ? props.color : '#8B8989')};
  font-size: 1.9rem;
`;

const SocialIcons = () => (
  <Container className="level">
    <div className="level-item">
      <a href="/" target="_blank">
        <Icon className="fab fa-facebook" color=" #fff"></Icon>
      </a>
    </div>
    <div className="level-item">
      <a href="/" target="_blank">
        <Icon className="fab fa-instagram" color=" #fff" />
      </a>
    </div>
    <div className="level-item">
      <a href="/" target="_blank">
        <Icon className="fab fa-twitter" color=" #fff" />
      </a>
    </div>
    <div className="level-item">
      <a href="/" target="_blank">
        <Icon className="fab fa-pinterest" color=" #fff" />
      </a>
    </div>
  </Container>
);

export default SocialIcons;
