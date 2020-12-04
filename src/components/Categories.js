import React from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';

const Category = [
  {
    id: 1,
    image:
      'http://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/faux.png',
    title: 'Faux Finishes',
    border: ' 0 1px 1px 0',
  },
  {
    id: 2,
    image:
      'http://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/water-proofing.png',
    title: 'Water Proofing',
    border: ' 0 1px 1px 0',
  },
  {
    id: 3,
    image:
      'http://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/pre-paint.png',
    title: 'Pre-Paint Demo',
    border: ' 0 0px 1px 0',
  },
  {
    id: 4,
    image:
      'http://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/removeal.png',
    title: 'Mildew Removal',
    border: ' 0 1px 0px 0',
  },
  {
    id: 5,
    image:
      'http://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/color-proof.png',
    title: 'Color Proof',
    border: ' 0 1px 0px 0',
  },
  {
    id: 6,
    image:
      'http://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/window-washing.png',
    title: 'Window Washing',
    border: ' 0 0 0 0',
  },
];

const Section = styled.section``;

const Categories = () => {
  return (
    <Section className="section">
      <div className="container">
        <h1 className="has-text-centered is-size-1 has-text-weight-light mb-6">
          Why Choose Us?{' '}
        </h1>
        <div className="columns is-gapless is-multiline is-mobile">
          {Category.map((item) => (
            <CategoryItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </Section>
  );
};
export default Categories;
