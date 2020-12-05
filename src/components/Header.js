import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.div`
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
  /* .navbar-end {
    a {
      :hover {
        text-decoration: underline;
      }
    }
  } */
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
      font-family: ${(props) => props.theme.primaryFontFamily};
      color: ${(props) => props.theme.darkAccent};
    }
  }
`;

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Section>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src="/images/logo.png" alt="site logo" />
            </Link>
            <a
              href="#"
              className={isActive ? 'is-active navbar-burger' : 'navbar-burger'}
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
                className="navbar-item is-size-7  has-text-weight-normal p-5"
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="navbar-item is-size-7  has-text-weight-normal p-5"
              >
                ABOUT
              </Link>
              <Link
                to="/news"
                className="navbar-item is-size-7  has-text-weight-normal p-5"
              >
                SERVICES
              </Link>
              <Link
                to="/news"
                className="navbar-item is-size-7  has-text-weight-normal p-5"
              >
                PROJECTS
              </Link>
              <Link
                to="/news"
                className="navbar-item is-size-7 has-text-weight-normal p-5"
              >
                NEWS
              </Link>
              <Link
                to="/contact"
                className="navbar-item is-size-7  has-text-weight-normal p-5"
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
