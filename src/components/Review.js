import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Heading from './elements/Heading';

const reviewItem = [
  {
    id: 1,
    reviews:
      '   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    title: 'John Doe',
    subtitle: 'Unknwon',
    image: '/images/paintbrush (2).png',
  },
  {
    id: 2,
    reviews:
      '   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    title: 'John Doe',
    subtitle: 'Unknwon',
    image: '/images/paintbrush (2).png',
  },
  {
    id: 3,
    reviews:
      '   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    title: 'John Doe',
    subtitle: 'Unknwon',
    image: '/images/paintbrush (2).png',
  },
  {
    id: 4,
    reviews:
      '   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    title: 'John Doe',
    subtitle: 'Unknwon',
    image: '/images/paintbrush (2).png',
  },
  {
    id: 5,
    reviews:
      '   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    title: 'John Doe',
    subtitle: 'Unknwon',
    image: '/images/paintbrush (2).png',
  },
  {
    id: 6,
    reviews:
      '   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    title: 'John Doe',
    subtitle: 'Unknwon',
    image: '/images/paintbrush (2).png',
  },
];

const Section = styled.section`
  padding-bottom: 5rem;
  .card {
    box-shadow: none;
  }
  .card-content {
    padding: 0;
  }
  .slick-list {
    outline: none !important;
  }
  .slick-slide div {
    outline: none;
  }
  .slick-dots {
    bottom: -3rem;
  }
  .slick-dots li.slick-active button:before {
    color: ${(props) => props.theme.mainBrandColor};
    font-size: 10px;
  }
  .review-section {
    line-height: 1.3 !important;
    color: ${(props) => props.theme.textColorDark} !important;
  }
  .reviews-name {
    color: ${(props) => props.theme.darkAccent} !important;
  }
`;

const Icon = styled.div`
  color: ${(props) => props.theme.mainBrandColor};
`;

const Review = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <Section className="section">
      <div className="container">
        <Heading centered>Client Reviews</Heading>
        <Slider {...settings}>
          {reviewItem.map((item) => (
            <div className="columns">
              <div className="column">
                <Icon className="fas fa-quote-left is-size-3 mb-2" />
                <div className="card" key={item.id}>
                  <div className="card-content">
                    <p className="review-section is-family-primary mb-4">
                      {' '}
                      {item.reviews}
                    </p>
                    <div className="media">
                      <div className="media-content">
                        <p className="title reviews-name is-size-6 has-text-weight-normal">
                          {' '}
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
};
export default Review;
