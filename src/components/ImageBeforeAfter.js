import React from 'react';
import styled from 'styled-components';
import ReactCompareImage from 'react-compare-image';
import Heading from './elements/Heading';

const Section = styled.div`
  .column.is-6 {
    position: relative;
    right: 8%;
  }
`;
const BoxWrapper = styled.div`
  padding: 3rem 2rem;
  background: #406870;
  margin: -2rem 0rem 3rem 0rem;
`;

const ImageBeforeAfter = () => {
  return (
    <Section className="section">
      <div className="container">
        <div className="columns">
          <BoxWrapper className="column is-7">
            <div className="columns is-vcentered ">
              <div className="column is-9 is-offset-1 has-text-white">
                <Heading centered>Our Latest Projects</Heading>
                <p className="has-text-white mb-5">
                  ProRange quality is one of the most important aspects of
                  painting, we have stong procedures and processes in place to
                  ensure a high quality finish on a consistent basis.
                </p>
                <button type="button" className="button is-secondary is-medium">
                  View More
                </button>
              </div>
            </div>
          </BoxWrapper>
          <div className="column is-6 ">
            <ReactCompareImage
              leftImage="/images/before.jpg"
              rightImage="/images/after.jpg"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
export default ImageBeforeAfter;
