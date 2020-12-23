import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import HeaderInformation from './HeaderInformation';
import { theme } from '../utils/theme';

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
    cursor: default !important;
  }
`;

const ButtonStyle = styled(Link)`
  button {
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    background: transparent;
    color: ${theme.textColorDark};
    border: 1px solid ${theme.textColorDark};
    padding: 0.5rem 2rem !important;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  button:hover {
    color: ${theme.textColorLite};
  }
  button::after {
    content: '';
    background: ${theme.darkAccent};
    position: absolute;
    z-index: -1;
    padding: 0.85em 0.75em;
    display: block;
  }
  button[class^='slide']::after {
    transition: all 0.35s;
  }
  button[class^='slide']:hover::after {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: all 0.35s;
  }
  button.slide_from_left::after {
    top: 0;
    bottom: 0;
    left: -100%;
    right: 100%;
  }
  button.slide_from_right::after {
    top: 0;
    bottom: 0;
    left: 100%;
    right: -100%;
  }
  button.slide_from_top::after {
    left: 0;
    right: 0;
    top: -100%;
    bottom: 100%;
  }
  button.slide_from_bottom::after {
    left: 0;
    right: 0;
    top: 100%;
    bottom: -100%;
  }
  button[class^='grow']::after {
    transition: all 0.3s ease;
  }
  button[class^='grow']:hover::after {
    transition: all 0.3s ease-out;
  }
  button.grow_box::after {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transform: scale(0, 0);
  }
  button.grow_box:hover::after {
    transform: scale(1, 1);
  }
  button.grow_ellipse::after {
    border-radius: 50%;
    left: -50%;
    right: -50%;
    top: -150%;
    bottom: -150%;
    line-height: 8.34em;
    transform: scale(0, 0);
  }
  button.grow_ellipse:hover::after {
    transform: scale(1, 1);
  }
  button.grow_skew_forward::after {
    left: -20%;
    right: -20%;
    top: 0;
    bottom: 0;
    transform: skewX(-45deg) scale(0, 1);
  }
  button.grow_skew_forward:hover::after {
    transform: skewX(-45deg) scale(1, 1);
  }
  button.grow_skew_backward::after {
    left: -20%;
    right: -20%;
    top: 0;
    bottom: 0;
    transform: skewX(45deg) scale(0, 1);
  }
  button.grow_skew_backward:hover::after {
    transform: skewX(45deg) scale(1, 1);
  }
  button.grow_spin::after {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transform: scale(0, 0) rotate(-180deg);
  }
  button.grow_spin:hover::after {
    transform: scale(1, 1) rotate(0deg);
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
                  className=" is-secondary is-normal"
                >
                  <button type="button" className="grow_skew_backward">
                    Get a Quote
                  </button>
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
