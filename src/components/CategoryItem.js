import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';

const Wrapper = styled.div`
  :hover {
    .hovered-text {
      visibility: visible;
      transition: 0.6s;
      color: #e9bd16;
    }
    .box-inside {
      margin-top: -2rem;
      transition: 0.6s;
    }
  }
  .box-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 350px;
    border-width: ${(props) => props.border};
    border-style: dashed;
    border-color: #cccccc;
  }
  figure {
    margin: 0 auto;
  }
  .hovered-text {
    visibility: hidden;
  }
  .title {
    color: ${(props) => props.theme.darkAccent} !important;
  }
  h2 {
    font-size: ${(props) => props.theme.fontSizeSmall}px !important;
  }
`;

const CategoryItem = ({ data }) => {
  return (
    <Wrapper className="column is-4" border={data.border}>
      <div className="box-container">
        <div className="box-inside">
          <figure className="image is-96x96">
            <a>
              <img src={data.image} alt="painting images" />
            </a>
          </figure>
          <a href="/details">
            <div className="title is-size-5 has-text-weight-normal has-text-centered mt-5 mb-0 is-family-primary">
              {data.title}
            </div>
            <h2 className="hovered-text has-text-centered mt-5">View Detail</h2>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};
export default CategoryItem;
