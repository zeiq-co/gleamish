import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import HomeSubscribeForm from './forms/HomeSubscribeForm';

const Container = styled.div`
  background-image: url(http://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/speckle-man.png);
  background-repeat: no-repeat;
  background-position: right bottom;
  background-color: #f3f4f6;
  float: left;
  width: 100%;
  clear: both;
  position: relative;
`;

const OverlayBox = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  padding: 8rem 2rem 8rem 2rem;
  border-radius: 0;
`;

const Contact = () => {
  return (
    <Container>
      <Parallax
        strength={600}
        bgImage="http://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/speckle-blur.png"
      >
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <OverlayBox className="box">
                <HomeSubscribeForm />
              </OverlayBox>
            </div>
            <div className="column is-6" />
          </div>
        </div>
      </Parallax>
    </Container>
  );
};
export default Contact;
