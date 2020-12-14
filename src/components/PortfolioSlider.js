import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Section = styled.div`
  ul {
    list-style: disc;
  }
`;

const PortfolioSlider = () => {
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
    <Section className="section mt-6">
      <div className="container ">
        <div className="columns is-centered ">
          <div className="column is-three-fifths ">
            <Slider {...settings}>
              <div>
                <img
                  src="http://prorange.ancorathemes.com/wp-content/uploads/2017/03/image-45.jpg"
                  alt="service-imade"
                />
              </div>
              <div>
                <img
                  src="http://prorange.ancorathemes.com/wp-content/uploads/2017/03/image-46.jpg"
                  alt="service-imade"
                />
              </div>
              <div>
                <img
                  src="http://prorange.ancorathemes.com/wp-content/uploads/2017/03/image-47.jpg"
                  alt="service-imade"
                />
              </div>
            </Slider>

            <h2 className="has-text-centered is-size-3 mb-5 mt-5">
              Bring Back the Charm to Your Restoration Project
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

export default PortfolioSlider;
