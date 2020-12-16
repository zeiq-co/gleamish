import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Categories from '../components/Categories';
import HeroHeader from '../components/elements/HeroHeader';
import ServiceFeatures from '../components/ServiceFeatures';

const Service = () => {
  return (
    <Layout>
      <Seo title="Service" />
      <HeroHeader heading="Service" title="Service" />
      <ServiceFeatures />
      <Categories />
    </Layout>
  );
};
export default Service;
