import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import HeaderInformation from './HeaderInformation';
import { theme } from '../utils/theme';

const Section = styled.div`
  font-family: ${theme.primaryFontFamily};
  .navbar-brand {
    margin-left: -1.5rem !important;
    .navbar-item img {
      max-height: 5.5rem;
    }
  }
  .navbar-item {
    :hover {
      background-color: transparent;
    }
  }
  .navbar-menu {
    margin-right: -1.5rem !important;
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
  }
  .navbar-burger {
    color: ${theme.textColorLite};
    opacity: 0.5;
    border-radius: 4px;
  }
  .navbar-end {
    a {
      font-size: ${theme.fontSizeMedium}px;
      font-family: ${theme.primaryFontFamily};
      color: ${theme.textColor};
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
      background-color: ${theme.darkShades};
      width: 0%;
      bottom: 1.5rem;
    }
    &:hover::before {
      width: 65%;
    }
  }
  @media screen and (max-width: 700px) {
    .navbar-menu {
      background: ${theme.borderColor} !important;
    }
  }
  button.is-secondary.is-normal {
    background: transparent !important;
  }
`;

const Header = ({ home }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Section>
      <HeaderInformation home={home} />
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
                  ? 'is-active navbar-burger has-text-black mt-3'
                  : 'navbar-burger has-text-black mt-3'
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
              {' '}
              <Link
                to="/"
                className="navbar-item has-text-weight-normal is-size-4 p-5 animated-line"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="navbar-item has-text-weight-normal is-size-4  p-5 animated-line"
              >
                About
              </Link>
              <Link
                to="/service"
                className="navbar-item has-text-weight-normal is-size-4  p-5 animated-line"
              >
                Services
              </Link>
              <Link
                to="/gallery"
                className="navbar-item has-text-weight-normal is-size-4 p-5 animated-line"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="navbar-item has-text-weight-normal is-size-4  p-5 animated-line"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Section>
  );
};

export default Header;
