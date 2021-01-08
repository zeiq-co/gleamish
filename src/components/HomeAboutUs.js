import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import ReactMarkdown from 'react-markdown';
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

const HomeAboutUs = ({ data, home }) => {
  return (
    <Section className="section">
      <div className="container">
        {home.information && (
          <div className="columns is-centered">
            <div className="column is-7">
              <div className="markdown-container has-text-centered">
                <ReactMarkdown source={home.information} />
              </div>
            </div>
          </div>
        )}
        <Heading centered>{data.title}</Heading>
        <div className="columns is-variable is-6">
          <div className="column">
            <Image
              fluid={data.image ? data.image.asset.fluid : ' '}
              alt={data.title}
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
