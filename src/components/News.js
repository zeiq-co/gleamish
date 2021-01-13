import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { truncate } from 'lodash';
import dayjs from 'dayjs';

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
              <div className="comment-section is-flex is-justify-content-space-between">
                <div className="comments is-size-7" />
                <div className="comments is-size-7">
                  {dayjs(node._createdAt).format('MMMM YYYY')}
                </div>
                <div className="comments is-size-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
export default News;
