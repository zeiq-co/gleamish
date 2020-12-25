import React from 'react';
import styled from 'styled-components';
import Heading from './elements/Heading';

const Section = styled.div`
  .columns {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
`;

const Wrapper = styled.div`
  :hover {
    .hovered-text {
      visibility: visible;
      transition: 0.6s;
      color: ${(props) => props.theme.mainBrandColor};
    }
    .box-inside {
      margin-top: -2rem;
      transition: 0.6s;
    }
  }
  .box-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 350px;
    border-width: ${(props) => props.border};
    border-style: dashed;
    border-color: #cccccc;
  }

  @media only screen and (max-width: 600px) {
    .box-container {
      border-color: transparent;
    }
  }
  figure {
    margin: 0 auto;
  }
  .hovered-text {
    visibility: hidden;
  }
  .title {
    color: ${(props) => props.theme.darkAccent} !important;
  }
  .subtitle {
    color: ${(props) => props.theme.textColorDark} !important;
  }
  h2 {
    font-size: ${(props) => props.theme.fontSizeSmall}px !important;
  }
`;

const Category = [
  {
    id: 1,
    image: '/images/category01.png',
    title: 'Faux Finishes',
    subtitle: 'Lorem Ipsum is simply dummy text.',
    border: ' 0 1px 1px 0',
  },
  {
    id: 2,
    image: '/images/category02.png',
    title: 'Water Proofing',
    subtitle: 'Lorem Ipsum is simply dummy text.',
    border: ' 0 1px 1px 0',
  },
  {
    id: 3,
    image: '/images/category03.png',
    title: 'Pre-Paint Demo',
    subtitle: 'Lorem Ipsum is simply dummy text.',
    border: ' 0 0px 1px 0',
  },
  {
    id: 4,
    image: '/images/category04.png',
    title: 'Mildew Removal',
    subtitle: 'Lorem Ipsum is simply dummy text.',
    border: ' 0 1px 0px 0',
  },
  {
    id: 5,
    image: '/images/category05.png',
    title: 'Color Proof',
    subtitle: 'Lorem Ipsum is simply dummy text.',
    border: ' 0 1px 0px 0',
  },
  {
    id: 6,
    image: '/images/category06.png',
    title: 'Window Washing',
    subtitle: 'Lorem Ipsum is simply dummy text.',
    border: ' 0 0 0 0',
  },
];

const Categories = () => {
  return (
    <Section className="section">
      <div className="container">
        <Heading centered> Why Choose Us?</Heading>
        <div className="columns is-gapless is-multiline ">
          {Category.map((item) => (
            <Wrapper className="column is-4" border={item.border}>
              <div className="box-container">
                <div className="box-inside">
                  <figure className="image is-96x96">
                    <div>
                      <img src={item.image} alt="painting images" />
                    </div>
                  </figure>
                  <a href="/details">
                    <div className="title is-size-5 has-text-weight-normal has-text-centered mt-5 mb-5 is-family-primary">
                      {item.title}
                    </div>
                    <div className="subtitle is-size-6 has-text-weight-normal has-text-centered  is-family-primary">
                      {item.subtitle}
                    </div>
                    <h2 className="hovered-text has-text-centered mt-5">
                      View Detail
                    </h2>
                  </a>
                </div>
              </div>
            </Wrapper>
          ))}
        </div>
      </div>
    </Section>
  );
};
export default Categories;
