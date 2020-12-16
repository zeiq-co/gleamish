import React from 'react';
import styled from 'styled-components';

const serviceFeaturesItem = [
  {
    id: 1,
    title: 'Lorem ipsum',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    image:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2015/11/wall-paining.png',
  },
  {
    id: 2,
    title: 'Lorem ipsum',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    image:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2015/11/house-fix.png',
  },
  {
    id: 3,
    title: 'Lorem ipsum',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    image:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2015/11/new-make.png',
  },
  {
    id: 4,
    title: 'Lorem ipsum',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab dolore nisi sunt quamquam...',
    image:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2015/11/plumbing.png',
  },
];

const Section = styled.section``;

const ServiceFeatures = () => {
  return (
    <Section className="section mt-6">
      <div className="container">
        <div className="columns is-multiline">
          {serviceFeaturesItem.map((item) => (
            <div className="column is-6">
              <div className="media mb-5">
                <div className="media-left mr-6">
                  <div className=" is-size-5">
                    <figure className="image is-64x64">
                      <img src={item.image} alt="painting-photos" />
                    </figure>
                  </div>
                </div>
                <div className="media-content">
                  <p className="title is-size-4  has-text-weight-normal mb-3">
                    {item.title}
                  </p>
                  <p className="subtitle is-size-6 mt-1">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
export default ServiceFeatures;
