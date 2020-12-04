import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  border-radius: 0;
  box-shadow: none !important;
  .box {
    position: relative;
    top: -3rem;
    border-radius: 0;
    box-shadow: none !important;
  }
  h1 {
    font-size: ${(props) => props.theme.fontSizeLarge}px !important;
    line-height: 1.4;
  }
  p {
    line-height: 1.7;
  }
  .border-bottom{
    margin-top: 30px;
    border-top: 1px solid #e5e5e5;
    padding-top: 10px;
}
  }
`;

const NewsCard = ({ image, title, description }) => {
  return (
    <div className="column">
      <CardWrapper className="card">
        <div className="card-image">
          <figure className="image is-3by2">
            <img src={image} alt="gallery Image" />
          </figure>
          <div className="card-content">
            <div className="media-content">
              <div className="box">
                <h1 className="title is-4 has-text-weight-normal is-spaced">
                  {title}
                </h1>
                <p className="subtitle is-6">{description}</p>
                <div className="border-bottom" />
                <div className="comment-section is-flex is-justify-content-space-between">
                  <div className="comments is-size-7">Spray Paint</div>
                  <div className="comments is-size-7">11 Mar 2016</div>
                  <div className="comments is-size-7">1 Comment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};
export default NewsCard;
