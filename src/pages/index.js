import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeBanner from '../components/HomeBanner';

import Header from '../components/Header';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import News from '../components/News';
import Categories from '../components/Categories';
import ImageBeforeAfter from '../components/ImageBeforeAfter';

const Wrapper = styled.div`
  .slick-list {
    outline: none !important;
  }
  .slick-slide div {
    outline: none;
  }
  // properties used  to banners over navigation.
  .slick-slider {
    position: relative !important;
    bottom: 105px !important;
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

const IndexPage = () => {
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
    <Layout hideHeader>
      <Seo title="Home" description="paint" />
      <Wrapper>
        <Header />
        <Slider {...settings}>
          {bannerItem.map((item) => (
            <div>
              <HomeBanner bgImage={item.bgImage} key={item.id} />
            </div>
          ))}
        </Slider>
      </Wrapper>
      <Features />
      <Categories />
      <Gallery />
      <News />
      <ImageBeforeAfter />
    </Layout>
  );
};
export default IndexPage;
