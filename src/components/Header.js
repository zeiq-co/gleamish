import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import HeaderInformation from './HeaderInformation';

const Section = styled.div`
  font-family: ${(props) => props.theme.primaryFontFamily};
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
    color: ${(props) => props.theme.textColorLite};
    opacity: 0.5;
    border-radius: 4px;
  }
  .navbar-end {
    @media screen and (min-width: 769px) {
      background-image: url(/images/icons/nav-backg-2.png);
      background-size: 100% 77%;
      background-position-y: 13px;
      background-repeat: no-repeat;
    }
    a {
      font-size: ${(props) => props.theme.fontSizeMedium}px;
      font-family: ${(props) => props.theme.primaryFontFamily};
      color: ${(props) => props.theme.textColor};
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
      background-color: ${(props) => props.theme.darkShades};
      width: 0%;
      bottom: 1.5rem;
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
  button.is-secondary.is-normal {
    background: transparent !important;
  }
  .empty-padding {
    padding: 3rem 4rem !important;
  }
`;

const ButtonStyle = styled(Link)`
  background-color: transparent !important;
  border: 1px solid ${(props) => props.theme.textColorDark} !important;
  :hover {
    color: ${(props) => props.theme.textColorLite} !important;
  }
`;

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Section>
      <HeaderInformation />
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
                className="is-hidden-mobile navbar-item has-text-weight-normal is-size-4 p-5 empty-padding"
              />
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
              <div className="navbar-item has-text-weight-normal is-size-4 p-5 ">
                <ButtonStyle
                  to="/quote"
                  type="button"
                  className="button is-secondary is-normal"
                >
                  Get a Quote
                </ButtonStyle>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Section>
  );
};

export default Header;
