import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { theme } from '../utils/theme';

const Section = styled.div`
  position: absolute;
  top: 0%;
  right: 0%;
  left: 0%;
  nav {
    background: transparent;
    padding: 0rem 2rem 0rem 2rem;
  }
  font-family: ${theme.primaryFontFamily};
  .navbar-brand {
    margin-left: -1.5rem !important;
    .navbar-item img {
      margin-top: 3px;
      margin-bottom: 3px;
      max-height: 5rem;
      width: 200px;
      height: 200px;
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
      background-color: ${theme.darkAccent} !important;
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
  }
  .navbar-burger {
    background: ${theme.mainBrandColor};
    color: ${theme.darkAccent};
    opacity: 0.5;
    border-radius: 4px;
  }
  .navbar-end {
    a {
      font-family: ${theme.primaryFontFamily};
      color: ${theme.textColorLite};
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
      background-color: ${theme.mainBrandColor} !important;
      width: 0%;
      bottom: 1.5rem;
    }
    &:hover::before {
      width: 65%;
    }
  }
  @media screen and (max-width: 700px) {
    .navbar-menu {
      background: transparent;
    }
  }
  button.is-secondary.is-normal {
    background: transparent !important;
  }
`;

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Section>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item ml-2" to="/">
              <img src="/images/logo.svg" alt="site logo" className="logo" />
            </Link>
            <button
              type="button"
              // href="#"
              className={
                isActive
                  ? 'is-active navbar-burger  mt-5'
                  : 'navbar-burger  mt-5'
              }
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={() => setIsActive(!isActive)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
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
