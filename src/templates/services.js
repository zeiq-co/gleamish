import React from 'react';
import { graphql } from 'gatsby';
import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';

export const serviceQuery = graphql`
  query servicePageQuery($slug: String!) {
    sanityServices(slug: { current: { eq: $slug } }) {
      _id
      title
      slug {
        current
      }
      description
      images {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

const Services = ({ data }) => {
  const service = data.sanityServices;

  return (
    <Layout>
      <Seo
        title={service.title}
        description={`Read news & updates about ${service.title}`}
        url={`${config.siteUrl}/page/${service.slug.current}`}
      />
      <section className="section">
        <div className="container">
          <p>dd</p>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
