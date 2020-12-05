import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.footer`
  padding-top: 3rem;
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
`;

const LogoImg = styled.img`
  height: 70px;
`;

const NavItems = [
  { id: 1, name: 'Commercial Fitouts ', url: '/' },
  { id: 2, name: ' Residential Repaints', url: '/' },
  { id: 3, name: ' Graffili Removal ', url: '/' },
  { id: 4, name: '  Lead Removal', url: '/' },
  { id: 5, name: ' Texture Caotings ', url: '/' },
];

const Information = [
  { id: 1, name: 'Faq', url: '//' },
  {
    id: 2,
    name: 'About Us',
    url: '/page/about',
  },
  { id: 3, name: 'Term of Use', url: '/' },
  { id: 4, name: 'Privacy Policy', url: '/' },
  { id: 5, name: 'Careers', url: '/' },
];
const Footer = () => {
  return (
    <Container className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column">
            <LogoImg
              src="/images/logo.png"
              alt="footer-logo"
              className="mb-2"
            />
            <p className="has-text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              felis lorem, feugiat et aliquet sed, aliquet sed est.
            </p>
          </div>
          <div className="column">
            <h1 className="has-text-weight-normal has-text-white mb-5 is-size-4 ">
              Our Services
            </h1>
            <ul>
              {NavItems.map((item) => (
                <li key={item.id}>
                  <Link to={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="column">
            <h1 className="has-text-weight-normal has-text-white mb-5 is-size-4 ">
              Links
            </h1>
            <ul>
              {Information.map((item) => (
                <li key={item.id}>
                  <Link to={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="column">
            <h1 className="has-text-weight-normal has-text-white mb-5 is-size-4 ">
              Contact US
            </h1>
            <ul>
              <li>
                ADDRESS :
                <span> 58, Thomson Street, Edison Avenue, Baltimore, USA</span>
              </li>
              <li>
                PHONE :<a href="/">7 87 753 780</a>{' '}
              </li>
              <li>
                E-MAIL :<a href="/">painting123@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Footer;
