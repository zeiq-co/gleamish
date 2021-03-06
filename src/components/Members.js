import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Img from 'gatsby-image';

const SliderContainer = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
  figure {
    width: 300px;
    height: auto !important;
    margin: 0 auto;
  }
`;

const Members = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="section">
      <div className="container">
        <SliderContainer {...settings}>
          {data.brands.map((item) => (
            <div key={item._key} className="columns">
              <div key={item._key} className="column">
                <figure className="image">
                  <Img
                    fluid={item.image ? item.image.asset.fluid : ' '}
                    alt={item.title ? item.title : 'Members'}
                  />
                </figure>
              </div>
            </div>
          ))}
        </SliderContainer>
      </div>
    </div>
  );
};
export default Members;
