import React from 'react';
import styled from 'styled-components';

import ContactUs from '../components/ContactUs';
import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HeroHeader from '../components/elements/HeroHeader';

const ContactFormWrapper = styled.div`
  background-color: #f0f4f7;
  width: 100%;
`;

const Contact = () => (
  <Layout>
    <Seo title="Contact Us" />
    <HeroHeader />
    <ContactFormWrapper>
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-6 my-6">
            <ContactUs />
          </div>
        </div>
      </div>
    </ContactFormWrapper>
  </Layout>
);

export default Contact;
