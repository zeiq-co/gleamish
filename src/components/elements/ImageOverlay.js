import React from 'react';
import styled from 'styled-components';
import ReactCompareImage from 'react-compare-image';
import Heading from './Heading';

const Section = styled.div``;

const ImageOverlay = () => {
  return (
    <Section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <div className="box">
              <Heading centered>relative</Heading>
            </div>
          </div>
          <div className="column is-6">
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
