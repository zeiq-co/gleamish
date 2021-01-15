import React, { useState, useEffect } from 'react';
import HeroSlider, { Slide, Nav, OverlayContainer } from 'hero-slider';
import styled from 'styled-components';
import OverlayButton from './elements/OverlayButton';

const Section = styled.div`
  .slide-button-container {
    :hover {
      background: transparent !important;
    }
  }
  svg {
    height: 40px;
    width: 40px;
  }
  .slide-button-button-svg:hover svg {
    opacity: 1;
    width: 40px;
    height: 40px;
    color: #ffffff;
  }
  .fCJHue .slide-button-button-svg svg {
    width: 40px;
    height: 40px;
  }
  .slide-wrapper {
    background: rgba(0, 0, 0, 0.3);
  }
  .sc-AxmLO {
    display: none !important;
  }
`;

const Wrapper = styled.div`
  .heading {
    line-height: 4rem;
  }
  .subheading {
    font-size: ${(props) => props.theme.fontSizeMedium}px !important;
    line-height: 27px;
  }
`;

const OverlayContainers = styled(OverlayContainer)`
  display: flex;
  align-items: center;
`;

const HomeSlider = ({ data }) => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    setCount(1);
  }, [count]);
  return (
    <Section className="">
      <div className="">
        <HeroSlider
          slidingAnimation="left_to_right"
          orientation="horizontal"
          initialSlide={1}
          onBeforeChange={(previousSlide, nextSlide) =>
            console.log('onBeforeChange', previousSlide, nextSlide)
          }
          onChange={(nextSlide) => console.log('onChange', nextSlide)}
          onAfterChange={(nextSlide) => console.log('onAfterChange', nextSlide)}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.33)',
          }}
          settings={{
            shouldSlideOnArrowKeypress: false,
            slidingDelay: 50,
            shouldAutoplay: true,
            shouldDisplayButtons: true,
            height: '90vh',
          }}
        >
          {data.homeHero.map((item) => (
            <div key={item._key}>
              <Slide
                background={{
                  backgroundImage: item.image
                    ? item.image.asset.fluid.src
                    : ' ',
                  backgroundAnimation: 'zoom',
                }}
              >
                <OverlayContainers className="columns is-mobile is-centered">
                  <Wrapper className="column is-8 has-text-centered">
                    {' '}
                    {item.title && (
                      <h1 className="heading is-size-1 is-size-3-mobile has-text-weight-normal has-text-white mb-4 is-family-primary ">
                        {item.title}
                      </h1>
                    )}
                    {item.subtitle && (
                      <h1 className="subheading is-size-5 has-text-weight-normal has-text-white mb-5">
                        {item.subtitle}
                      </h1>
                    )}
                    <OverlayButton
                      linkTo={`/${item.linkTo}`}
                      buttonText="Get a Quote"
                    />
                  </Wrapper>
                </OverlayContainers>
              </Slide>
            </div>
          ))}
          <Nav />
        </HeroSlider>
      </div>
    </Section>
  );
};

export default HomeSlider;
