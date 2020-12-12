import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroHeader from '../components/elements/HeroHeader';
import News from '../components/News';
import AboutFeatures from '../components/AboutFeatures';
import ImageAfterBefore from '../components/elements/ImageAfterBefore';

const About = () => {
  return (
    <Layout>
      <Seo title="about" />
      <HeroHeader heading="About" title="About" />
      <ImageAfterBefore
        title="Lorem Ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat eros eu mi eleifend, at consequat velit suscipit. Duis sed dignissim urna. Curabitur at placerat ligula. Etiam eu tempus nisl. Quisque id tortor ac diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat eros eu mi eleifend, at consequat velit suscipit. Duis sed dignissim urna. Curabitur at placerat ligula. Etiam eu tempus nisl. Quisque id tortor ac diam."
        singleImage="https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/color-box.jpg"
      />

      <AboutFeatures />
      <News />
    </Layout>
  );
};
export default About;
