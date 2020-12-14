import React from 'react';
import styled from 'styled-components';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HeroHeader from '../components/elements/HeroHeader';
import PortfolioSlider from '../components/PortfolioSlider';

const Details = () => {
  return (
    <Layout>
      <Seo title="services" />
      <HeroHeader heading="Paint Removal and Cleaning" title="Services" />
      <PortfolioSlider />
    </Layout>
  );
};
export default Details;
