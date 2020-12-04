import React from 'react';
import styled from 'styled-components';
import NewsCard from './NewsCard';

const NewsWrapper = styled.section`
  padding: 50px 0px;
`;

const NewsItem = [
  {
    id: 1,
    image:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2015/04/blog-3.jpg',
    title: 'The Benefits of High-Quality Paint',
    description:
      'Phasellus aliquet, risus at blandit lobortis, tortor neque accumsan sem, in aliquet purus purus...',
  },
  {
    id: 2,
    image:
      ' https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2015/04/blog-4.jpg',
    title: 'House Painting',
    description:
      'Phasellus aliquet, risus at blandit lobortis, tortor neque accumsan sem, in aliquet purus purus...',
  },
  {
    id: 3,
    image:
      'https://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2015/04/blog5.jpg',
    title: '3 Ways to Properly Store Paint',
    description:
      'Phasellus aliquet, risus at blandit lobortis, tortor neque accumsan sem, in aliquet purus purus...',
  },
];

const News = () => {
  return (
    <NewsWrapper className="section">
      <div className="container">
        <h1 className="has-text-centered is-size-1 has-text-weight-light mb-6">
          News{' '}
        </h1>
        <div className="columns ">
          {NewsItem.map((item) => (
            <NewsCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </NewsWrapper>
  );
};
export default News;
