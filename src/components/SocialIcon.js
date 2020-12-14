import React from 'react';
import styled from 'styled-components';
import config from '../utils/config';

const Container = styled.section`
  margin-top: 2rem;
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
  background: ${(props) => props.theme.mainBrandColor} !important;
  width: 57px !important;
  height: 57px;
  border-radius: 50%;
  text-align: center;
  padding: 18px;
  :hover {
    color: ${(props) => props.theme.darkShades};
  }
`;

const SocialIcon = () => (
  <Container className="level">
    <div className="level-item">
      <a href={config.twitter} target="_blank">
        <Icon className="fab fa-twitter" color="#fff" />
      </a>
    </div>
    <div className="level-item">
      <a href={config.instagram} target="_blank">
        <Icon className="fab fa-instagram" color="#fff" />
      </a>
    </div>
    <div className="level-item">
      <a href={config.facebook} target="_blank">
        <Icon className="fab fa-facebook" color="#fff" />
      </a>
    </div>
  </Container>
);

export default SocialIcon;
