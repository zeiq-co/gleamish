import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { truncate } from 'lodash';
import dayjs from 'dayjs';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

import config from '../utils/config';
import Heading from '../components/elements/Heading';

export const pageQuery = graphql`
  query blog {
    allSanityArticle(sort: { fields: _createdAt, order: DESC }) {
      edges {
        node {
          _id
          title
          slug {
            current
          }
          description
          image {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

const Container = styled(Link)`
  .title {
    margin-top: 0.6rem;
    margin-bottom: 0.5rem;
  }
  a {
    color: ${(props) => props.theme.darkAccent};
  }
`;

const Blog = ({ data }) => {
  const { edges: posts } = data.allSanityArticle;

  return (
    <Layout>
      <Seo
        title="News & Updates"
        description={`Latest news at ${config.siteName}`}
        url={`${config.siteUrl}/account`}
      />
      <section className="section">
        <Container className="container">
          <Heading centered>News & Updates</Heading>
          <div className="columns is-multiline">
            {posts.map(({ node: post }) => (
              <div className="column is-4">
                <div className="card">
                  <Container to={`/article/${post.slug.current}`}>
                    <div className="card-image">
                      {post.image.asset && (
                        <Img
                          fluid={post.image.asset.fluid}
                          alt={post.title}
                          className="blog-img"
                        />
                      )}
                    </div>
                    <div className="card-content">
                      <span className="is-uppercase is-size-6">
                        {dayjs(post._createdAt).format('MMMM YYYY')}
                      </span>{' '}
                      <h3 className="title is-3 has-text-weight-bold">
                        {post.title}
                      </h3>
                      <p className="is-size-6 has-text-weight-normal ">
                        {truncate(post.description, {
                          length: 150,
                        })}
                      </p>
                    </div>
                  </Container>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Blog;
