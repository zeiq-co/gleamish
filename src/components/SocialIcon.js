import React from 'react';
import styled from 'styled-components';
import config from '../utils/config';

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

const SocialIcon = () => (
  <Container className="level">
    <div className="level-item">
      <a href={config.twitter} target="_blank">
        <Icon className="fab fa-twitter mr-5" color="#fff" />
      </a>
    </div>
    <div className="level-item">
      <a href={config.instagram} target="_blank">
        <Icon className="fab fa-instagram mr-5" color="#fff" />
      </a>
    </div>
    <div className="level-item">
      <a href={config.facebook} target="_blank">
        <Icon className="fab fa-facebook mr-5" color="#fff" />
      </a>
    </div>
  </Container>
);

export default SocialIcon;
