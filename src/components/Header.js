import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.div`
  .container {
    background: ${(props) => props.theme.backgroundColor} !important;
    border-radius: 10px;
    padding-right: 2rem;
    padding-left: 2rem;
  }
  font-family: ${(props) => props.theme.primaryFontFamily};
  .navbar {
    background: transparent;
  }
  .navbar-brand {
    margin-right: 20px;
    .navbar-item img {
      max-height: 3.5rem;
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
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
  }
  .navbar-end {
    a {
      font-size: ${(props) => props.theme.fontSizeSmall}px;
      font-family: ${(props) => props.theme.secondaryFontFamily};
      color: ${(props) => props.theme.darkShades};
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
      background-color: ${(props) => props.theme.darkShades};
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

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Section>
      <nav
        className="navbar py-4"
        role="navigation"
        aria-label="main navigation"
      >
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
                to="/"
                className="navbar-item has-text-weight-semibold  p-5 animated-line"
              >
                ABOUT
              </Link>
              <Link
                to="/"
                className="navbar-item has-text-weight-semibold  p-5 animated-line"
              >
                SERVICES
              </Link>
              <Link
                to="/"
                className="navbar-item has-text-weight-semibold  p-5 animated-line"
              >
                GALLERY
              </Link>
              <Link
                to="/"
                className="navbar-item has-text-weight-semibold  p-5 animated-line"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Section>
  );
};

export default Header;
