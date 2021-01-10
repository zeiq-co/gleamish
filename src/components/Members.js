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
`;

const Members = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
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
            <div key={item._key} className="column is-3 has-text-centered item">
              <Img
                fluid={item.image ? item.image.asset.fluid : ' '}
                alt={item.title}
              />
            </div>
          ))}
        </SliderContainer>
      </div>
    </div>
  );
};
export default Members;
