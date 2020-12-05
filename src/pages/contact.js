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
const Level = styled.div`
  display: flex;
  align-items: center;
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
          <div className="columns is-vcentered is-variable is-8">
            <div className="column is-6">
              <OverlayBox className="box">
                <HomeSubscribeForm />
              </OverlayBox>
            </div>
            <div className="column is-6">
              <Heading centered>Contact Us</Heading>
              <Level className="mb-5">
                <div className="button is-warning mr-3">
                  <span className="icon is-small">
                    <i className="fas fa-envelope-open-text" />
                  </span>
                </div>
                <a href={`mailto:${config.email}`}>{config.email}</a>
              </Level>
              <Level className="mb-5">
                <div className="button is-warning mr-3">
                  <span className="icon is-small">
                    <i className="fas fa-phone" />
                  </span>
                </div>
                <a href={`tel:${config.telephone}`}>{config.telephone}</a>
              </Level>
              <Level className="mb-5">
                <div className="button is-warning mr-3">
                  <span className="icon is-small">
                    <i className="fas fa-map-marker-alt" />
                  </span>
                </div>{' '}
                <p>{config.address}</p>
              </Level>
            </div>
          </div>
        </div>
      </Parallax>
    </Container>
  </Layout>
);

export default Contact;
