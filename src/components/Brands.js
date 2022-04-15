import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Heading from './elements/Heading';

const Container = styled.section`
  .section {
    padding-bottom: 1rem !important;
  }
  .slick-slide div {
    outline: none;
  }
  .slick-dots {
    bottom: -30px;
  }
  .slick-dots li button:before {
    color: ${(props) => props.theme.mainBrandColor} !important;
    font-size: 15px;
    line-height: 20px;
  }
  .post-image {
    height: 308px;
    width: 100%;
    object-fit: cover;
  }

  .card-content {
    padding: 0.5rem;
  }
  @media only screen and (max-width: 768px) {
    .head {
      line-height: 1;
    }
  }
`;

const Brands = ({ data, item }) => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 3500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: true,
          speed: 3500,
          autoplaySpeed: 3500,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <Container className="container">
      <div className="section pb-0">
        <div className="columns is-centered">
          <div className="column is-6 has-text-centered ">
            <Heading centered>Gleamish Beauty on Instagram</Heading>

            {item.instagramSubtitle && (
              <h1 className="is-size-7">{item.instagramSubtitle}</h1>
            )}
          </div>
        </div>
        <Slider {...settings}>
          {data.map(({ node: post }) => (
            <div className="card-content" key={post.id}>
              <img
                className="post-image"
                src={post && post.localImage ? post.localImage.url : ''}
                alt={post.name}
              />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};
export default Brands;
