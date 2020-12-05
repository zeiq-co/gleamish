import React from 'react';
import styled from 'styled-components';
import BeforeAfterSlider from 'react-before-after-slider';

const Section = styled.div``;
const ImageOverlay = () => {
  const before =
    'http://prorange.ancorathemes.com/wp-content/uploads/2017/03/a2.jpg';
  const after =
    'http://prorange.ancorathemes.com/wp-content/uploads/2017/03/a1-1.jpg';

  return (
    <Section className="section">
      <div className="container">
        <div className="columns is-centered ">
          <div className="column is-6">
            <BeforeAfterSlider
              before={before}
              after={after}
              width={640}
              height={480}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
export default ImageOverlay;
