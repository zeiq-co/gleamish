import React from 'react';
import styled from 'styled-components';
import config from '../utils/config';

const Section = styled.div`
  /* background-color: ${(props) => props.theme.darkShades} !important; */
  padding: 10px 0px;
  .has-text-left {
    font-size: ${(props) => props.theme.fontSizeExtraSmall}px;
  }
  .mail-icon,
  .phone-icon {
    margin-right: ${(props) => props.theme.fontSize}px;
    font-size: ${(props) => props.theme.fontSize}px;
  }
  .mailWrapper {
    margin-right: 64px;
  }
  .social-icon {
    font-size: ${(props) => props.theme.fontSizeMedium}px;
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
              className="has-text-weight-normal has-text-black is-family-secondary mailWrapper"
            >
              <i className="far fa-envelope mail-icon" />
              {config.email}
            </a>
            <a
              href={`tel:${config.telephone}`}
              className="has-text-weight-normal has-text-black is-family-secondary "
            >
              <i className="fas fa-phone-volume phone-icon" />
              {config.telephone}
            </a>
          </div>
          <div className="has-text-left is-flex  is-justify-content-center">
            <div className="level">
              <div className="level-item mr-5">
                <a
                  href={config.twitter}
                  target="_blank"
                  className="social-icon"
                >
                  <i className="fab fa-twitter has-text-black" />
                </a>
              </div>
              <div className="level-item mr-5">
                <a
                  href={config.instagram}
                  target="_blank"
                  className="social-icon"
                >
                  <i className="fab fa-instagram has-text-black" />
                </a>
              </div>
              <div className="level-item mr-5">
                <a
                  href={config.facebook}
                  target="_blank"
                  className="social-icon"
                >
                  <i className="fab fa-facebook has-text-blackS" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeaderInformation;
