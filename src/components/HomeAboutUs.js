import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Heading from './elements/Heading';
import OverlayButton from './elements/OverlayButton';

const Section = styled.div`
  .info-section {
    line-height: 24px;
  }
`;

const Icon = styled.i`
  color: ${(props) => props.theme.mainBrandColor};
`;

const Image = styled(Img)`
  object-fit: cover;
`;

const HomeAboutUs = ({ data }) => {
  return (
    <Section className="section">
      <div className="container">
        <Heading centered>{data.title}</Heading>
        <div className="columns is-centered">
          <div className="column is-7">
            <p className="mb-5 has-text-centered">{data.subtitle}</p>
          </div>
        </div>

        <div className="columns is-variable is-6">
          <div className="column">
            <Image
              fluid={data.image ? data.image.asset.fluid : ' '}
              alt="placeholder-img"
            />
          </div>
          <div className="column ">
            <h1 className="mb-4 ml-3 is-size-6 info-section">
              {data.description}
            </h1>
            <div className="columns is-multiline ">
              {data.featuresList.map((item) => (
                <div
                  key={item._key}
                  className="column is-6 is-flex is-align-items-center "
                >
                  <Icon className="far fa-check-circle mr-4" />
                  <p className="">{item}</p>
                </div>
              ))}
            </div>
            <OverlayButton
              marginTop
              marginLeft
              linkTo="/service"
              buttonText=" View More"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
export default HomeAboutUs;
