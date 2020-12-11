import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroHeader from '../components/elements/HeroHeader';
import News from '../components/News';
import AboutUs from '../components/AboutUs';
import AboutFeatures from '../components/AboutFeatures';

const About = () => {
  return (
    <Layout>
      <Seo title="about" />
      <HeroHeader heading="About" title="About" />
      <AboutUs />
      <AboutFeatures />
      <News />
    </Layout>
  );
};
export default About;
