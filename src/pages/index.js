import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeBanner from '../components/HomeBanner';
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

const bannerItem = [
  {
    id: 1,
    bgImage: '/images/homebanner02.jpg',
  },
  {
    id: 2,
    bgImage: '/images/homebanner-01.jpg',
  },
];

const reviewItem = [
  {
    id: 1,
    reviews:
      '   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    title: 'Residential',
    subtitle: 'Lorem ipsum',
    image: '/images/paintbrush (2).png',
  },
  {
    id: 2,
    reviews:
      '   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    title: 'Residential',
    subtitle: 'Lorem ipsum',
    image: '/images/paintbrush (2).png',
  },
  {
    id: 3,
    reviews:
      '   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    title: 'Residential',
    subtitle: 'Lorem ipsum',
    image: '/images/paintbrush (2).png',
  },
];

const IndexPage = () => {
  const settings = {
    dots: false,
    arrows: true,
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
    <Layout>
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
