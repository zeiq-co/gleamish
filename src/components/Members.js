import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const OurLogo = [
  {
    id: 0,
    image: '/images/brand01.png',
  },
  {
    id: 1,
    image: '/images/brand01.png',
  },
  {
    id: 2,
    image: '/images/brand01.png',
  },
  {
    id: 3,
    image: '/images/brand01.png',
  },
  {
    id: 4,
    image: '/images/brand01.png',
  },
  {
    id: 5,
    image: '/images/brand01.png',
  },
  {
    id: 6,
    image: '/images/brand01.png',
  },
];

const SliderContainer = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
  img {
    border-radius: 10px;
    margin: 0 auto;
  }
`;
const Members = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
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
          {OurLogo.map((item) => (
            <div className="column is-3 has-text-centered item">
              <img src={item.image} alt="brands" />
            </div>
          ))}
        </SliderContainer>
      </div>
    </div>
  );
};
export default Members;
