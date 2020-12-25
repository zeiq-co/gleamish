import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { lighten } from 'polished';
import SocialIcon from './SocialIcon';
import { theme } from '../utils/theme';
import config from '../utils/config';

const Container = styled.footer`
  padding: 7rem 0;
  padding-bottom: 1rem;
  background-color: ${theme.darkAccent};
  li,
  p {
    margin-bottom: 1rem;
    font-size: ${(props) => props.theme.fontSizeSmall}px !important;
    color: #9b9b9b !important;
    :hover {
      color: #fff !important;
    }
  }
  p {
    color: #fff !important;
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
      color: ${lighten(0.6, theme.textColor)} !important;
    }
  }
  h1 {
    margin-bottom: 32px;
  }
`;

const LogoImg = styled.img`
  height: 100px;
  margin-top: -2rem;
`;

const Bottom = styled.div`
  padding: 2rem !important;
  background-color: ${theme.darkAccent};
`;

const Information = [
  { id: 1, name: 'Faq', url: '//' },
  { id: 2, name: 'Term and condition', url: '/' },
  { id: 3, name: 'Privacy Policy', url: '/' },
];
const Footer = ({ home }) => {
  console.log(home, 'home');
  return (
    <>
      <Container className="section">
        <div className="container">
          <div className="columns  ">
            <div className="column has-text-centered ">
              <h1 className="has-text-weight-normal has-text-white is-size-3">
                Contact Us
              </h1>
              <ul>
                <li>
                  Tel :<a href={`tel:${home.telephone}`}> {config.telephone}</a>
                </li>
                <li>
                  E-MAIL : {'                    '}
                  <a href={`mailto:${home.email}`}>{home.email}</a>
                </li>
                <li>
                  Address :<span>{home.address}</span>
                </li>
              </ul>
            </div>
            <div className="column has-text-centered is-5">
              <LogoImg
                src="/images/logo-dark.png"
                alt="footer-logo"
                className="mb-5"
              />
              <p className="has-text-white is-size-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                felis lorem, feugiat et aliquet sed, aliquet sed est.It is a
                long established fact that a reader will be distracted.
              </p>
            </div>
            <div className="column has-text-centered">
              <h1 className="has-text-weight-normal has-text-white is-size-4">
                Our Information
              </h1>
              <ul>
                {Information.map((item) => (
                  <li key={item.id}>
                    <Link to={item.url}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="has-text-centered is-flex  is-justify-content-center">
            <SocialIcon />
          </div>
        </div>
      </Container>
      <Bottom className="has-text-centered ">
        <h2 className="has-text-white">
          Copyright © 2020 - Midas-Paint | build by{' '}
          <a
            href="https://www.zeiq.co/"
            target="_blank"
            className="has-text-white"
          >
            Zeiq.co
          </a>
        </h2>
      </Bottom>
    </>
  );
};
export default Footer;
