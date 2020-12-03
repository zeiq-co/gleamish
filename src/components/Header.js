import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.div`
  font-family: ${(props) => props.theme.primaryFontFamily};
  .navbar {
    background: linear-gradient(
      to right,
      #00d39f 0%,
      #008bd3 25%,
      #d40063 75%,
      #d4be00 100%
    );
  }
  .navbar-brand {
    margin-right: 20px;
    .navbar-item img {
      max-height: 3.75rem;
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
`;

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Section>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src="/images/logo.jpg" alt="site logo" />
            </Link>
            <a
              href="#"
              role="button"
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
                className="navbar-item is-size-7 has-text-white has-text-weight-normal p-5"
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="navbar-item is-size-7 has-text-white has-text-weight-normal p-5"
              >
                ABOUT
              </Link>
              <Link
                to="/news"
                className="navbar-item is-size-7 has-text-white has-text-weight-normal p-5"
              >
                SERVICES
              </Link>
              <Link
                to="/news"
                className="navbar-item is-size-7 has-text-white has-text-weight-normal p-5"
              >
                PROJECTS
              </Link>
              <Link
                to="/news"
                className="navbar-item is-size-7 has-text-white has-text-weight-normal p-5"
              >
                NEWS
              </Link>
              <Link
                to="/contact"
                className="navbar-item is-size-7 has-text-white has-text-weight-normal p-5"
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
