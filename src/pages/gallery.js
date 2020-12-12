import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroHeader from '../components/elements/HeroHeader';
import GalleryImage from '../components/Gallery';
import PortfolioSlider from '../components/PortfolioSlider';

const Wrapper = styled.div`
  .slick-list {
    outline: none !important;
  }
  .slick-slide div {
    outline: none;
  }
`;

const portfolioSliderItem = [
  {
    id: 1,
    image: '/images/gallery1.jpg',
    category: 'Exterior',
  },
  {
    id: 2,
    image: '/images/gallery2.jpg',
    category: 'Exterior',
  },
  {
    id: 3,
    image: '/images/gallery3.jpg',
    category: 'Exterior',
  },
  {
    id: 4,
    image: '/images/gallery4.jpg',
    category: 'Interior',
  },
  {
    id: 5,
    image: '/images/gallery5.jpg',
    category: 'Interior',
  },
  {
    id: 6,
    image: '/images/gallery6.jpg',
  },
  {
    id: 7,
    image: '/images/gallery7.jpg',
    category: 'Stairwell',
  },
  {
    id: 8,
    image: '/images/gallery8.jpg',
    category: 'Stairwell',
  },
  {
    id: 9,
    image: '/images/gallery9.jpg',
    category: 'Stairwell',
  },
];

const Gallery = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    lazyLoad: true,
  };
  return (
    <Layout>
      <Seo title="Gallery" />
      <HeroHeader heading="Gallery" title="Gallery" />
      <Wrapper>
        <Slider {...settings}>
          {portfolioSliderItem.map((item) => (
            <div>
              <PortfolioSlider image={item.image} key={item.id} />
            </div>
          ))}
        </Slider>
      </Wrapper>
      <GalleryImage />
    </Layout>
  );
};
export default Gallery;
