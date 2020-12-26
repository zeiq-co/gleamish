import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ReactMarkdown from 'react-markdown';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import OverlayButton from '../components/elements/OverlayButton';
import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HeroHeader from '../components/elements/HeroHeader';

const Section = styled.div`
  margin-top: 3.5rem;
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

export const serviceQuery = graphql`
  query servicePageQuery($slug: String!) {
    sanityServices(slug: { current: { eq: $slug } }) {
      _id
      title
      slug {
        current
      }
      description
      images {
        _key
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

const Services = ({ data }) => {
  const service = data.sanityServices;
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
  };
  return (
    <Layout>
      <Seo
        title={service.title}
        description={`Read news & updates about ${service.title}`}
        url={`${config.siteUrl}/page/${service.slug.current}`}
      />
      <HeroHeader heading={service.title} title={service.slug.current} />
      <Section className="section ">
        <div className="container ">
          <div className="columns is-centered ">
            <div className="column is-three-fifths ">
              <Slider {...settings}>
                {service.images.map((item) => (
                  <Img
                    fluid={item.asset ? item.asset.fluid : ''}
                    key={item._key}
                    alt={service.title}
                  />
                ))}
              </Slider>
              <ReactMarkdown source={service.description} />
              <div className="mt-5">
                <OverlayButton linkTo="/contact" buttonText="GET A QUOTE" />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Services;
