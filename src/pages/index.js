import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeSlider from '../components/HomeSlider';
import Features from '../components/Features';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  text-align: center;
  h1 {
    color: ${(props) => props.theme.mainBrandColor} !important;
  }
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="paint" />
        <HomeSlider />
        <Features />
      </Layout>
    );
  }
}
