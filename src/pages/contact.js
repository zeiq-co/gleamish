import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import ContactForm from '../components/ContactForm';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HeroHeader from '../components/elements/HeroHeader';
import Information from '../components/elements/Information';

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const query = graphql`
  query ContactPageQuery {
    sanitySiteSettings {
      contact {
        title
        description
        image {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      coverImage {
        contactPage {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

const Contact = ({ data }) => {
  const contact = data.sanitySiteSettings;
  return (
    <Layout>
      <Seo title="Contact Us" />
      <HeroHeader
        heading="Contact"
        title="contact"
        background={
          contact && contact.coverImage && contact.coverImage.contactPage
            ? contact.coverImage.contactPage.asset.fluid.src
            : ''
        }
      />
      <Information
        title={contact.contact.title}
        description={contact.contact.description}
        image={
          contact && contact.contact.image
            ? contact.contact.image.asset.fluid
            : ' '
        }
      />
      <Container className="section">
        <div className="container ">
          <div className="columns is-centered">
            <div className="column is-6 ">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
export default Contact;
