import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Section = styled.div`
  margin-top: 5rem;
  ul {
    list-style: disc;
  }
  .slick-list {
    outline: none !important;
  }
  .slick-slide div {
    outline: none !important;
  }
  .image.is-1by1 {
    padding-top: 50%;
  }
  h2 {
    line-height: 1.2;
  }
  .slick-dots {
    bottom: 26px;
  }
  .slick-dots li.slick-active button:before {
    color: #fff !important;
    font-size: 10px;
  }
`;

const serviceItem = [
  {
    id: 1,
    bgImage: 'https://bulma.io/images/placeholders/480x480.png',
  },
  {
    id: 2,

    bgImage: 'https://bulma.io/images/placeholders/480x480.png',
  },
  {
    id: 3,
    bgImage: 'https://bulma.io/images/placeholders/480x480.png',
  },
];

const ServiceSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    lazyLoad: true,
  };
  return (
    <Section className="section ">
      <div className="container ">
        <div className="columns is-centered ">
          <div className="column is-three-fifths ">
            <Slider {...settings}>
              {serviceItem.map((item) => (
                <figure className="image is-1by1">
                  <img src={item.bgImage} key={item.id} alt="service-images" />
                </figure>
              ))}
            </Slider>
            <h2 className="has-text-centered is-size-3 mb-5 mt-5">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit...
            </h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              in libero eros. Cras interdum et turpis in varius. Vivamus euismod
              eros vitae nulla condimentum aliquam. Phasellus ultrices vel diam
              non volutpat. Ut egestas odio egestas libero aliquam porttitor.
              Mauris aliquam neque fringilla dolor euismod laoreet. Proin lacus
              dui, faucibus eget iaculis in, lobortis quis ligula. Suspendisse
              bibendum metus sed facilisis tempus.
            </p>
            <p className=" mb-5">
              Praesent tristique dictum lacinia. Aliquam erat volutpat. Aenean
              in purus id leo tincidunt porttitor ac nec dui. Sed sed pulvinar
              metus, nec placerat tortor. Maecenas vel leo ligula. Aliquam erat
              volutpat. Vivamus eleifend, urna nec varius ornare, orci eros
              sodales mi, id faucibus sem lacus id enim. Nulla sagittis nisl
              vitae eros sagittis tempus. Sed et mi viverra, volutpat quam vel,
              ultricies urna. In risus velit.
            </p>
            <h2 className="mb-5">Our restoration services include:</h2>
            <ul className="ml-4">
              <li className="mb-3">Coating Removal</li>
              <li className="mb-3">Decorative Plaster</li>
              <li className="mb-3">Faux Finishing</li>
              <li className="mb-3">Stenciling</li>
              <li className="mb-3">Wood Refinishing</li>
            </ul>
            <button type="button" className="button is-secondary mt-5">
              GET A QUOTE
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ServiceSlider;
