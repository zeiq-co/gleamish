import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Heading from './elements/Heading';

const reviewItem = [
  {
    id: 1,
    reviews:
      '   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    title: 'Mr. Nobody',
    subtitle: 'Unknwon',
    image: '/images/paintbrush (2).png',
  },
  {
    id: 2,
    reviews:
      '   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    title: 'Mr. Nobody',
    subtitle: 'Unknwon',
    image: '/images/paintbrush (2).png',
  },
  {
    id: 3,
    reviews:
      '   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    title: 'Mr. Nobody',
    subtitle: 'Unknwon',
    image: '/images/paintbrush (2).png',
  },
];

const Section = styled.section`
  .card {
    box-shadow: none;
  }
  .card-content {
    padding: 0;
  }
`;

const Icon = styled.div`
  margin-left: -1rem;
  color: ${(props) => props.theme.mainBrandColor};
`;

const Review = () => {
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
    <Section className="section">
      <div className="container">
        <Heading centered>Client Reviews</Heading>
        <div className="columns">
          {reviewItem.map((item) => (
            <div className="column is-4">
              <Icon className="fas fa-quote-left is-size-3 mb-2" />
              <div className="card">
                <div className="card-content">
                  <p className="mb-5"> {item.reviews}</p>
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img
                          className="is-rounded"
                          src="https://bulma.io/images/placeholders/96x96.png"
                          alt="Reviws"
                        />
                      </figure>
                    </div>
                    <div className="media-content mt-2">
                      <p className="title is-5"> {item.title}</p>
                      <p className="subtitle is-6"> {item.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Review;
