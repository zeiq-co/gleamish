import React, { useState, useEffect } from 'react';
import HeroSlider, { Slide, Nav, OverlayContainer } from 'hero-slider';
import styled from 'styled-components';
import OverlayButton from './elements/OverlayButton';

const Section = styled.div`
  margin: 1rem 0;
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
`;

const Wrapper = styled.div`
  .heading {
    font-size: 48px !important;
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
const content = [
  {
    id: 1,
    bgImage: '/images/homebanner-01.jpg',
    title: 'Reliable Painters and Decorators',
    subtitle:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit   amet, consectetur, adipisci emit...',
  },
  {
    id: 2,
    bgImage: '/images/homebanner02.jpg',
    title: 'Reliable Painters and Decorators',
    subtitle:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit   amet, consectetur, adipisci emit...',
  },
];

const HomeSlider = () => {
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
          {content.map((item) => (
            <>
              <Slide
                background={{
                  backgroundImage: item.bgImage,
                  backgroundAnimation: 'zoom',
                }}
              >
                <OverlayContainers className="columns is-mobile is-centered">
                  <Wrapper className="column is-8 has-text-centered">
                    <h1 className="heading has-text-weight-normal has-text-white mb-4 is-family-primary ">
                      {item.title}
                    </h1>
                    <h1 className="subheading is-size-5 has-text-weight-normal has-text-white mb-5 is-family-secondary">
                      {item.subtitle}
                    </h1>

                    <OverlayButton buttonText="Get Started" />
                  </Wrapper>
                </OverlayContainers>
              </Slide>
            </>
          ))}
          <Nav />
        </HeroSlider>
      </div>
    </Section>
  );
};

export default HomeSlider;
