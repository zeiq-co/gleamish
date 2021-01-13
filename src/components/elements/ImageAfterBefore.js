import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import OverlayButton from './OverlayButton';

const Section = styled.div`
  margin-top: 3rem;
  .column.is-6 {
    position: relative;
    // margin: 2rem 0rem -1rem 0rem !important;
    right: 9%;
  }
  p {
    color: ${(props) => props.theme.textColorDark} !important;
  }
  @media screen and (max-width: 600px) {
    .column.is-6 {
      right: 0;
    }
  }
`;
const BoxWrapper = styled.div`
  padding: 5rem 8rem 3rem 5rem !important;
  background: #f1f5f7;
  @media screen and (min-width: 1400px) {
    padding: 10rem 10rem 10rem 5rem !important;
  }
  @media screen and (max-width: 600px) {
    padding: 2rem !important;
  }
`;

const ImageAfterBefore = ({ title, description, image, showButton }) => {
  return (
    <Section className="section ">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-10">
            <div className="columns is-gapless is-vcentered">
              <div className="column is-8">
                <BoxWrapper>
                  <h2 className="title is-3 has-text-white is-family-primary">
                    {title}
                  </h2>
                  <p className="mb-5 is-size-6">{description}</p>
                  {showButton && (
                    <OverlayButton linkTo="/details" buttonText="View More" />
                  )}
                </BoxWrapper>
              </div>
              <div className="column is-6">
                {image && <Img fluid={image} alt={title} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default ImageAfterBefore;
