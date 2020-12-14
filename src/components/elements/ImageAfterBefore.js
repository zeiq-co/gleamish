import React from 'react';
import styled from 'styled-components';
import ReactCompareImage from 'react-compare-image';

const Section = styled.div`
  margin-bottom: 5.5rem;
  .column.is-6 {
    position: relative;
    margin: 1.3rem 0rem -2rem 0rem !important;
    right: 8%;
  }
`;
const BoxWrapper = styled.div`
  padding: 5rem 5rem 5rem 5rem !important;
  padding: 3rem 2rem;
  background: #f1f5f7;

  @media screen and (min-width: 1400px) {
    padding: 7rem !important;
  }
  @media screen and (max-width: 600px) {
    padding: 2rem !important;
  }
`;

const ImageBeforeAfter = ({
  title,
  description,
  compareImage,
  singleImage,
}) => {
  return (
    <Section className="section ">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-10">
            <div className="columns is-gapless">
              <div className="column is-7 ">
                <BoxWrapper>
                  <h2 className="title is-3 has-text-white is-family-primary ">
                    {title}
                  </h2>
                  <p className="mb-5 is-size-6">{description}</p>
                  {/* <button
                    type="button"
                    className="button is-secondary is-medium"
                  >
                    View More
                  </button> */}
                </BoxWrapper>
              </div>

              <div className="column is-6 left-column">
                {' '}
                {compareImage ? (
                  <ReactCompareImage
                    leftImage="/images/before.jpg"
                    rightImage="/images/after.jpg"
                  />
                ) : (
                  <img src={singleImage} alt="paint-images" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default ImageBeforeAfter;
