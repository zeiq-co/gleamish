import React from 'react';
import styled from 'styled-components';
import HomeSubscribeForm from './forms/HomeSubscribeForm';

const Container = styled.div`
  background-image: url(http://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/speckle-man.png);
  background-repeat: no-repeat;
  background-position: right bottom;
  background-color: #f3f4f6;
`;

const Contact = () => {
  return (
    <Container className="section hero is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <div className="box">
                <HomeSubscribeForm />
              </div>
            </div>
            <div className="column is-6" />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Contact;
