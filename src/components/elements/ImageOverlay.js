import React from 'react';
import styled from 'styled-components';
import ReactCompareImage from 'react-compare-image';
import Heading from './Heading';

const Section = styled.div`
  .column.is-6 {
    position: relative;
    right: 10%;
  }
`;
const Box = styled.div`
  background: #789499;
`;

const ImageOverlay = () => {
  return (
    <Section className="section">
      <div className="container">
        <div className="columns">
          <Box className="column is-7">
            <div className="columns ">
              <div className="column is-9 is-offset-1">
                <Heading centered>Our Latest Projects</Heading>
                <p>
                  ProRange quality is one of the most important aspects of
                  painting, we have stong procedures and processes in place to
                  ensure a high quality finish on a consistent basis.
                </p>
                <button type="button" className="button is-secondary is-medium">
                  svcjakc
                </button>
              </div>
            </div>
          </Box>
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
export default ImageOverlay;
