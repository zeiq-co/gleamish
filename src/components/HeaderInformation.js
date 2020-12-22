import React from 'react';
import styled from 'styled-components';
import config from '../utils/config';

const Section = styled.div`
  background-color: ${(props) => props.theme.darkShades} !important;
  padding: 10px 0px;
  a {
    font-size: ${(props) => props.theme.fontSizeSmall}px !important;
  }
  .has-text-left,
  .has-text-right {
    flex: 1;
  }
`;

const HeaderInformation = () => {
  return (
    <Section className="is-hidden-mobile">
      <div className="container">
        <div className="is-flex is-justify-content-space-between is-align-items-center">
          <div className="has-text-left">
            <a
              href={`mailto:${config.email}`}
              className="has-text-weight-normal has-text-white is-family-secondary"
            >
              <i className="far fa-envelope mr-3" />
              {config.email}
            </a>
          </div>
          <div className="has-text-centered is-flex  is-justify-content-center">
            <div className="level">
              <div className="level-item mr-5">
                <a href={config.twitter} target="_blank">
                  <i className="fab fa-twitter has-text-white" />
                </a>
              </div>
              <div className="level-item mr-5">
                <a href={config.instagram} target="_blank">
                  <i className="fab fa-instagram has-text-white" />
                </a>
              </div>
              <div className="level-item mr-5">
                <a href={config.facebook} target="_blank">
                  <i className="fab fa-facebook has-text-white" />
                </a>
              </div>
            </div>
          </div>
          <div className="has-text-right">
            <a
              href={`tel:${config.telephone}`}
              className="has-text-weight-normal has-text-white is-family-secondary"
            >
              <i className="fas fa-phone-volume mr-3" />
              {config.telephone}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeaderInformation;
