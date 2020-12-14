import React from 'react';
import styled from 'styled-components';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HeroHeader from '../components/elements/HeroHeader';
import ServiceSlider from '../components/ServiceSlider';

const Details = () => {
  return (
    <Layout>
      <Seo title="services" />
      <HeroHeader heading="Lorem Ipsum" title="Services" />
      <ServiceSlider />
    </Layout>
  );
};
export default Details;
