import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HeroHeader from '../components/elements/HeroHeader';
import QuoteForm from '../components/QuoteForm';

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 5rem 1.5rem; !important;
`;

const Contact = () => (
  <Layout>
    <Seo title="Quote" />
    <HeroHeader heading="Get a Quote " title="Quote" />
    <Container className="section">
      <div className="container ">
        <div className="columns is-centered ">
          <div className="column is-6 ">
            <QuoteForm />
          </div>
        </div>
      </div>
    </Container>
  </Layout>
);

export default Contact;
