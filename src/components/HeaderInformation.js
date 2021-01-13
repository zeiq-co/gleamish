import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  padding: 10px 0px;
  .has-text-left {
    font-size: ${(props) => props.theme.fontSizeMedium}px;
  }
  .mail-icon,
  .phone-icon {
    margin-bottom: -0.8px;
    margin-right: 7px;
    font-size: ${(props) => props.theme.fontSizeMedium}px;
  }
  .mailWrapper {
    margin-right: 64px;
  }
  .social-icon {
    font-size: ${(props) => props.theme.fontSizeMedium}px;
  }
`;

const HeaderInformation = ({ home }) => {
  return (
    <Section className="is-hidden-mobile">
      <div className="container">
        <div className="is-flex is-justify-content-space-between is-align-items-center">
          <div className="has-text-left">
            {home.email && (
              <a
                href={`mailto:${home.email}`}
                className="has-text-weight-normal has-text-black is-family-secondary mailWrapper"
              >
                <i className="far fa-envelope mail-icon" />
                {home.email}
              </a>
            )}
            {home.telephone && (
              <a
                href={`tel:${home.telephone}`}
                className="has-text-weight-normal has-text-black is-family-secondary "
              >
                <i className="fas fa-phone-volume phone-icon" />
                {home.telephone}
              </a>
            )}
          </div>
          <div className="has-text-left is-flex  is-justify-content-center">
            <div className="level">
              {home.twitter && (
                <div className="level-item mr-5">
                  <a
                    href={home.twitter}
                    target="_blank"
                    className="social-icon"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter has-text-black" />
                  </a>
                </div>
              )}
              {home.instagram && (
                <div className="level-item mr-5">
                  <a
                    href={home.instagram}
                    target="_blank"
                    className="social-icon"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram has-text-black" />
                  </a>
                </div>
              )}
              {home.facebook && (
                <div className="level-item mr-2">
                  <a
                    href={home.facebook}
                    target="_blank"
                    className="social-icon"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook has-text-blackS" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeaderInformation;
