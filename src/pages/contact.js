import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HeroHeader from '../components/elements/HeroHeader';
import ImageAfterBefore from '../components/elements/ImageAfterBefore';

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Contact = () => (
  <Layout>
    <Seo title="Contact Us" />
    <HeroHeader heading="Contact" title="contact" />
    <ImageAfterBefore
      title="Lorem Ipsum"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat eros eu mi eleifend, at consequat velit suscipit. Duis sed dignissim urna. Curabitur at placerat ligula. Etiam eu tempus nisl. Quisque id tortor ac diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat eros eu mi eleifend, at consequat velit suscipit. Duis sed dignissim urna. Curabitur at placerat ligula. Etiam eu tempus nisl. Quisque id tortor ac diam."
      singleImage="http://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/restoration.jpg"
    />
    <Container className="section">
      <div className="container ">
        <div className="columns is-centered ">
          <div className="column is-6 ">
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  </Layout>
);

export default Contact;
