import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import SocialIcon from './SocialIcon';
import config from '../utils/config';

const Container = styled.footer`
  padding: 7rem 0;
  background-color: #406870;
  li,
  p {
    margin-bottom: 1rem;
    font-size: ${(props) => props.theme.fontSizeSmall}px !important;
    color: #fff;
  }
  .container {
    position: inherit !important;
  }
  span {
    line-height: 25px;
  }
  a {
    :hover {
      transition: 0.4s !important;
    }
  }
`;

const LogoImg = styled.img`
  height: 70px;
  margin-top: -2rem;
`;

const Information = [
  { id: 1, name: 'Faq', url: '//' },
  { id: 2, name: 'Term and condition', url: '/' },
  { id: 3, name: 'Privacy Policy', url: '/' },
];
const Footer = () => {
  return (
    <Container className="section">
      <div className="container">
        <div className="columns is-variable is-6 ">
          <div className="column has-text-right ">
            <Fade left>
              <h1 className="has-text-weight-normal has-text-white mb-5 is-size-4 ">
                Contact US
              </h1>
              <ul>
                <li>
                  Tel :{' '}
                  <a href={`tel:${config.telephone}`}>{config.telephone}</a>
                </li>
                <li>
                  E-MAIL :<a href={`mailto:${config.email}`}>{config.email}</a>
                </li>
                <li>
                  <span>{config.address}</span>
                </li>
              </ul>
            </Fade>
          </div>
          <div className="column has-text-centered is-5">
            <Fade top>
              <LogoImg
                src="/images/logo.png"
                alt="footer-logo"
                className="mb-5"
              />
              <p className="has-text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                felis lorem, feugiat et aliquet sed, aliquet sed est.It is a
                long established fact that a reader will be distracted.
              </p>
            </Fade>
          </div>

          <div className="column">
            <Fade right>
              <h1 className="has-text-weight-normal has-text-white mb-5 is-size-4 ">
                Our Information
              </h1>
              <ul>
                {Information.map((item) => (
                  <li key={item.id}>
                    <Link to={item.url}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </Fade>
          </div>
        </div>
        <div className="has-text-centered is-flex  is-justify-content-center">
          <SocialIcon />
        </div>
      </div>
    </Container>
  );
};
export default Footer;
