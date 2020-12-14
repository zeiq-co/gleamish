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
import ImageAfterBefore from '../components/elements/ImageAfterBefore';

const Wrapper = styled.div`
  .slick-list {
    outline: none !important;
  }
  .slick-slide div {
    outline: none;
  }
  .slick-next {
    right: 0 !important;
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
    bgImage: '/images/banner01.jpg',
  },
  {
    id: 2,
    bgImage: '/images/banner02.jpg',
  },
  {
    id: 3,
    bgImage: '/images/banner03.jpg',
  },
];

const IndexPage = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    lazyLoad: true,
  };
  return (
    <Layout secondaryNav>
      <Seo title="Home" description="Midas Paint" />
      <Wrapper>
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
      <Gallery heading />
      <News />
      <ImageAfterBefore
        compareImage
        showButton
        title="OUR LATEST PROJECTS"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"
      />
    </Layout>
  );
};
export default IndexPage;
