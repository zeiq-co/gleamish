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
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/04/1-1.jpg',
  },
  {
    id: 2,
    bgImage:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/04/2.jpg',
  },
  {
    id: 3,
    bgImage:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/04/3.jpg',
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
