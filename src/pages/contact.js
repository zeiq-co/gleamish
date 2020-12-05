import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import HomeSubscribeForm from '../components/forms/HomeSubscribeForm';
import Heading from '../components/elements/Heading';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';

const Container = styled.div`
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

const Contact = () => (
  <Layout>
    <Seo title="Contact Us" />
    <Container className="mb-6">
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
            <div className="column is-6">
              <Heading centered>Head Office</Heading>
              {/* <a href={`mailto:${config.email}`}>{config.email}</a>
              <a href={`tel:${config.telephone}`}>{config.telephone}</a> */}
            </div>
          </div>
        </div>
      </Parallax>
    </Container>
  </Layout>
);

export default Contact;
