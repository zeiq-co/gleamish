import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .box-container {
    padding: 5rem 0rem;
    border-width: ${(props) => props.border};
    border-style: dashed;
    border-color: #cccccc;
  }
  figure {
    margin: 0 auto;
  }
`;

const CategoryItem = ({ data }) => {
  return (
    <Wrapper className="column is-4" border={data.border}>
      <div className="box-container">
        <figure className="image is-96x96">
          <img src={data.image} alt="painting images" />
        </figure>
        <div className="title is-size-5 has-text-weight-normal has-text-centered mt-5">
          {data.title}
        </div>
      </div>
    </Wrapper>
  );
};
export default CategoryItem;
