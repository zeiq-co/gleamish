import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeBanner from './HomeBanner';

const Wrapper = styled.div`
  .slick-list {
    outline: none !important;
  }
  .slick-slide div {
    outline: none;
  }
`;

const bannerItem = [
  {
    id: 1,
    bgImage:
      'http://prorange.ancorathemes.com/wp-content/uploads/2017/05/slide_1.jpg',
  },
  {
    id: 2,
    bgImage:
      'http://prorange.ancorathemes.com/wp-content/uploads/2017/05/slide_2.jpg',
  },
  {
    id: 3,
    bgImage:
      'http://prorange.ancorathemes.com/wp-content/uploads/2017/05/slide_3.jpg',
  },
];

const HomeSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    lazyLoad: true,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        {bannerItem.map((item) => (
          <div>
            <HomeBanner bgImage={item.bgImage} key={item.id} />
          </div>
        ))}
      </Slider>
    </Wrapper>
  );
};
export default HomeSlider;
