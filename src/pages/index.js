import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeroSlider from '../components/HeroSlider';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Review from '../components/Review';
import Categories from '../components/Categories';
import ImageAfterBefore from '../components/elements/ImageAfterBefore';
import Members from '../components/Members';

const Wrapper = styled.div`
  .slick-list {
    outline: none !important;
  }
  .slick-slide div {
    outline: none;
  }
  .slick-next {
    right: 100px !important;
  }
  .slick-prev {
    left: 100px;
    z-index: 1;
  }
  .slick-prev:before {
    font-size: 32px;
    width: 70px;
    height: 70px;
    background-size: cover;
    content: '' !important;
    position: absolute;
    background-size: 50%;
    background-image: url('/images/right-scroll.png');
    background-repeat: no-repeat;
  }

  .slick-next:before {
    font-size: 32px;
    width: 70px;
    height: 70px;
    background-size: cover;
    content: '' !important;
    position: absolute;
    background-size: 50%;
    background-image: url('/images/left-scroll.png');
    background-repeat: no-repeat;
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" description="Midas Paint" />
      {/* <Wrapper>
        <Slider {...settings}>
          {bannerItem.map((item) => (
            <div>
              <HomeBanner bgImage={item.bgImage} key={item.id} />
            </div>
          ))}
        </Slider>
      </Wrapper> */}

      <HeroSlider />
      <Features />
      <Categories />
      <Gallery heading />
      <Review />
      <ImageAfterBefore
        compareImage
        showButton
        title="OUR LATEST PROJECTS"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"
      />
      <Members />
    </Layout>
  );
};
export default IndexPage;
