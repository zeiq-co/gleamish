import React from 'react';
import styled from 'styled-components';
import { GraphQLClient, gql } from 'graphql-request';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HeroHeader from '../components/elements/HeroHeader';
import QuoteForm from '../components/QuoteForm';

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 5rem 1.5rem; !important;
`;

const quoteMutation = gql`
  mutation quote($email: String!, $name: String!, $message: message!) {
    contact(input: { email: $email, name: $name, message: $message }) {
      email
    }
  }
`;

const QuoteFormPage = () => {
  // const [executeMutation, { data, loading, error }] = useMutation(
  //   quoteMutation,
  // );
  const endpoint = 'http://192.168.100.153:4000/api';
  return (
    <Layout>
      <Seo title="Quote" />
      <HeroHeader heading="Get a Quote " title="Quote" />
      <Container className="section">
        <div className="container ">
          <div className="columns is-centered ">
            <div className="column is-6 ">
              <QuoteForm
              // onSubmit={(formData) =>
              //   executeMutation({ variables: formData })
              // }
              />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
export default QuoteFormPage;
