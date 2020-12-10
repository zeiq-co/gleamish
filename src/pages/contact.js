import React from 'react';
import styled from 'styled-components';

import ContactUs from '../components/ContactUs';
import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HeroHeader from '../components/elements/HeroHeader';

const Container = styled.div`
  background-color: #f0f4f7;
`;

const Contact = () => (
  <Layout>
    <Seo title="Contact Us" />
    <HeroHeader />
    <Container className="section">
      <div className="container ">
        <div className="columns is-centered ">
          <div className="column is-6 ">
            <ContactUs />
          </div>
        </div>
      </div>
    </Container>
  </Layout>
);

export default Contact;
