import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import config from '../utils/config';

const Section = styled.div`
  font-family: ${(props) => props.theme.primaryFontFamily};
  .navbar {
    background: transparent;
  }
  .navbar-brand {
    margin-right: 20px;
    .navbar-item img {
      max-height: 4rem;
    }
  }
  .navbar-item {
    :hover {
      background-color: transparent;
    }
  }
  .navbar-menu {
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
  }
  .navbar-burger {
    color: ${(props) => props.theme.textColorLite};
    opacity: 0.6;
    border-radius: 4px;
  }
  .navbar-end {
    a {
      font-size: ${(props) => props.theme.fontSizeSmall}px;
      font-family: ${(props) => props.theme.secondaryFontFamily};
      color: ${(props) =>
        props.secondary ? props.theme.textColorLite : props.theme.textColor};
      :focus {
        background-color: transparent;
      }
    }
  }
  .animated-line {
    position: relative;
    padding: 0;
    &::before {
      transition: 300ms ease-out;
      height: 0.1rem;
      content: '';
      position: absolute;
      background-color: ${(props) => props.theme.textColorLite};
      width: 0%;
      bottom: 0.875rem;
    }
    &:hover::before {
      width: 65%;
    }
  }
  @media screen and (max-width: 700px) {
    .navbar-menu {
      background: ${(props) => props.theme.borderColor} !important;
    }
  }
`;
const Header = ({ secondary }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Section secondary={secondary}>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item ml-2" to="/">
              <img src="/images/logo.png" alt="site logo" />
            </Link>
            <a
              href="#"
              className={
                isActive
                  ? 'is-active navbar-burger has-text-black'
                  : 'navbar-burger has-text-black'
              }
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={() => setIsActive(!isActive)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-end">
              <Link
                to="/"
                className="navbar-item has-text-weight-semibold  p-5 animated-line"
              >
                HOME
              </Link>
              <Link
                to="/about-us"
                className="navbar-item has-text-weight-semibold  p-5 animated-line"
              >
                ABOUT
              </Link>
              <Link
                to="/#service"
                className="navbar-item has-text-weight-semibold  p-5 animated-line"
              >
                SERVICES
              </Link>
              <Link
                to="/gallery"
                className="navbar-item has-text-weight-semibold  p-5 animated-line"
              >
                GALLERY
              </Link>
              <Link
                to="/contact"
                className="navbar-item has-text-weight-semibold  p-5 animated-line"
              >
                CONTACT
              </Link>
              <Link
                href={`tel:${config.telephone}`}
                className="navbar-item has-text-weight-semibold  p-5 animated-line"
              >
                <i className="fas fa-phone-volume mr-3" />
                {config.telephone}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Section>
  );
};

export default Header;
