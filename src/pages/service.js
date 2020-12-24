import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroHeader from '../components/elements/HeroHeader';
import ServiceFeatures from '../components/ServiceFeatures';

const Wrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const Service = () => {
  return (
    <Layout>
      <Seo title="Service" />
      <HeroHeader heading="Service" title="Service" />
      <Wrapper>
        <ServiceFeatures
          image="/images/service-painting.jpg"
          title="Faux Finishes"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab
              dolore nisi sunt quamquam..."
        />
        <ServiceFeatures
          secondary
          image="/images/service-painting.jpg"
          title="Water Proofing"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab
              dolore nisi sunt quamquam..."
        />
        <ServiceFeatures
          image="/images/service-painting.jpg"
          title=" Pre-Paint Demo"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab
              dolore nisi sunt quamquam..."
        />
        <ServiceFeatures
          secondary
          image="/images/service-painting.jpg"
          title="Mildew Removal"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab
              dolore nisi sunt quamquam..."
        />
        <ServiceFeatures
          title="Color Proof"
          image="/images/service-painting.jpg"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab
              dolore nisi sunt quamquam..."
        />
        <ServiceFeatures
          secondary
          image="/images/service-painting.jpg"
          title=" Window Washing"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab
              dolore nisi sunt quamquam..."
        />
      </Wrapper>
    </Layout>
  );
};
export default Service;
