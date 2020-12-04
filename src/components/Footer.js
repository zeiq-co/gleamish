import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import SocialIcon from './SocialIcon';

const Container = styled.footer`
  background-color: #31aabf;
  position: relative;
  li,
  p {
    margin-bottom: 1rem;
    font-size: ${(props) => props.theme.fontSizeSmall}px !important;
    color: #fff;
  }
`;
const Bottom = styled.div`
     margin-top: 5rem;
     .has-addons{
  justify-content:flex-end !important;
     }
  }
`;

const BorderBottom = styled.div`
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 1.5rem;
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
    <Container>
      <div className="section container">
        <div className="columns is-multiline ">
          <div className="column">
            <LogoImg
              src="/images/logo.jpg"
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
        <Bottom>
          <div>
            <BorderBottom />
            <div className="columns has-text-white">
              <div className="column">
                <p className="has-text-white">Follow Us On Social Icons </p>
                <SocialIcon />
              </div>
              <div className="column has-text-right is-hidden-mobile">
                <p className="has-text-white">Subscribe On Our Newsletter </p>
                <div className="field has-addons">
                  <div className="control has-icons-right">
                    <input
                      className="input is-rounded"
                      type="email"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="control">
                    <button type="submit" className="button is-rounded">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Bottom>
      </div>
    </Container>
  );
};
export default Footer;
