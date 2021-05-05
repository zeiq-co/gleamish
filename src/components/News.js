import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { truncate } from 'lodash';

const CardWrapper = styled(Link)`
  border-radius: 0;
  box-shadow: none !important;
  .box {
    position: relative;
    top: -3rem;
    border-radius: 0;
    box-shadow: none !important;
  }
  .border-bottom {
    margin-top: 30px;
    border-top: 1px solid #e5e5e5;
    padding-top: 10px;
  }
  @media screen and (max-width: 700px) {
    .box {
      position: unset;
      top: 0rem;
      border-radius: 0;
      box-shadow: none !important;
    }
    .card-content {
      padding: 0rem;
    }
  }
`;

const Image = styled(Img)`
  height: 300px;
  object-fit: cover;
`;

const News = ({ node }) => {
  return (
    <CardWrapper
      key={node._id}
      to={`/article/${node.slug ? node.slug.current : ''}`}
      className="card"
    >
      <div className="card-image">
        {node.image && (
          <Image
            fluid={node.image ? node.image.asset.fluid : ''}
            alt={node.title ? node.title : 'Past Projects'}
            className="blog-img"
          />
        )}

        <div className="card-content">
          <div className="media-content">
            <div className="box">
              <h1 className="title is-size-4 has-text-weight-normal is-spaced is-family-primary">
                {node.title}
              </h1>
              <p className="subtitle is-6">
                {truncate(node.description, {
                  length: 160,
                })}
              </p>
              <div className="border-bottom" />
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
export default News;
