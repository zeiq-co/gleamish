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
  color: ${(props) => props.theme.darkAccent};
  font-size: 1.9rem;
  background: #eac343 !important;
  width: 57px !important;
  height: 57px;
  border-radius: 50%;
  text-align: center;
  padding: 18px;
  :hover {
    color: #fff;
  }
`;

const SocialIcon = () => (
  <Container className="level">
    <div className="level-item">
      <a href={config.twitter} target="_blank">
        <Icon className="fab fa-twitter" />
      </a>
    </div>
    <div className="level-item">
      <a href={config.instagram} target="_blank">
        <Icon className="fab fa-instagram" />
      </a>
    </div>
    <div className="level-item">
      <a href={config.facebook} target="_blank">
        <Icon className="fab fa-facebook" />
      </a>
    </div>
  </Container>
);

export default SocialIcon;
