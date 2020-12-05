import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Text = styled.h3`
  line-height: 1.2em;
  position: relative;
  ::after {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAALCAYAAAAeEY8BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI3NDcxRUYxREY3RjExRTVBRTIyRDdGMzcwRjc5NUVDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI3NDcxRUYyREY3RjExRTVBRTIyRDdGMzcwRjc5NUVDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Mjc0NzFFRUZERjdGMTFFNUFFMjJEN0YzNzBGNzk1RUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Mjc0NzFFRjBERjdGMTFFNUFFMjJEN0YzNzBGNzk1RUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6R3leIAAAA+UlEQVR42sySTYrCQBSEy6Ao/oSkXXoAd95glh5B5jKz9DAuZC4guPQIOYGCzGgc1HT+TNrX8AQJUXRo0IKPhqrq5tHdFfUNSNXAQTXxpzrwlY2NcggXP5rcxW8usMkdbIldZmN/auOYtRCndZzSGioJUIuBRpihFaawwxhOEMGVEiKQ6EpNAEGr9pwoRCeK0E4SWHixLgP0iAmxZCbs3ZKxfpXoEwtCXG34JIbEB+EVDjPa1zcwLoQXCc6KMtq3eJJbGj7o/bv/Fp9wfieflXhG+3qAL8IvCX3OijLat/jXDogpsWam7HklG432q1xaEaMnns5Y/yzAAChac7iG6QFgAAAAAElFTkSuQmCC)
      no-repeat;
    bottom: -15px;
    content: '';
    height: 10px;
    left: 0;
    position: absolute;
    width: 32px;
    right: 0;
    margin: auto;
  }
`;

const Heading = ({ children, centered, linkTo }) => (
  <>
    <Text
      className={`is-size-1 has-text-weight-normal mb-6 is-size-4-mobile  ${
        centered ? 'has-text-centered' : ''
      }`}
    >
      {children}
      {linkTo && (
        <Link to={linkTo} className="icon is-small is-pulled-right">
          <img src="/images/arrow.svg" alt="icon" />
        </Link>
      )}
    </Text>
  </>
);

Heading.defaultProps = {
  centered: false,
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  centered: PropTypes.bool,
};

export default Heading;
