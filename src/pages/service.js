import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroHeader from '../components/elements/HeroHeader';
import ServiceFeatures from '../components/ServiceFeatures';

const Wrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export const query = graphql`
  query servicePageQueries {
    allSanityServices {
      edges {
        node {
          _id
          title
          slug {
            current
          }
          description
          images {
            asset {
              fluid(maxWidth: 1000) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

const Service = ({ data }) => {
  const service = data.allSanityServices.edges;
  return (
    <Layout>
      <Seo title="Service" />
      <HeroHeader heading="Service" title="Service" />
      <Wrapper>
        {service.map(({ node }) => (
          <ServiceFeatures node={node} />
        ))}
      </Wrapper>
    </Layout>
  );
};
export default Service;
