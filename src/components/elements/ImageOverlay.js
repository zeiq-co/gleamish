import React from 'react';
import styled from 'styled-components';
import BeforeAfterSlider from 'react-before-after-slider';
// import Image from 'gatsby-image';
import Heading from './Heading';

const Section = styled.div``;
const ImageOverlay = ({ Image }) => {
  const before = '/images/before.jpg';
  const after = '/images/after.jpg';

  return (
    <Section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-7">
            <div className="box">
              <Heading centered>relative</Heading>
            </div>
          </div>
          <div className="column is-5">
            {Image && (
              <BeforeAfterSlider
                before={before}
                after={after}
                width={640}
                height={480}
              />
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};
export default ImageOverlay;
