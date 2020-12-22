import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroHeader from '../components/elements/HeroHeader';
import ServiceFeatures from '../components/ServiceFeatures';

const Service = () => {
  return (
    <Layout>
      <Seo title="Service" />
      <HeroHeader heading="Service" title="Service" />
      <ServiceFeatures
        title=" Lorem Ipsum is simply dummy text of the printing and typesetting
              industry."
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab
              dolore nisi sunt quamquam..."
      />
      <ServiceFeatures
        secondary
        title=" Lorem Ipsum is simply dummy text of the printing and typesetting
              industry."
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab
              dolore nisi sunt quamquam..."
      />
      <ServiceFeatures
        title=" Lorem Ipsum is simply dummy text of the printing and typesetting
              industry."
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab
              dolore nisi sunt quamquam..."
      />
      <ServiceFeatures
        secondary
        title=" Lorem Ipsum is simply dummy text of the printing and typesetting
              industry."
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab
              dolore nisi sunt quamquam..."
      />
      <ServiceFeatures
        title=" Lorem Ipsum is simply dummy text of the printing and typesetting
              industry."
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab
              dolore nisi sunt quamquam..."
      />
      <ServiceFeatures
        secondary
        title=" Lorem Ipsum is simply dummy text of the printing and typesetting
              industry."
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab
              dolore nisi sunt quamquam..."
      />
    </Layout>
  );
};
export default Service;
