import React from 'react';
import styled from 'styled-components';
import NewsCard from './NewsCard';
import Heading from './elements/Heading';

const NewsWrapper = styled.section`
  padding: 50px 0px;
`;

const NewsItem = [
  {
    id: 1,
    image: '/images/blog01.jpg',
    title: 'The Benefits of Quality Paint',
    description:
      'Phasellus aliquet, risus at blandit lobortis, tortor neque accumsan sem, in aliquet purus purus...',
  },
  {
    id: 2,
    image: '/images/blog02.jpg',
    title: 'House Painting',
    description:
      'Phasellus aliquet, risus at blandit lobortis, tortor neque accumsan sem, in aliquet purus purus...',
  },
  {
    id: 3,
    image: '/images/blog03.jpg',
    title: '3 Ways to Properly Store Paint',
    description:
      'Phasellus aliquet, risus at blandit lobortis, tortor neque accumsan sem, in aliquet purus purus...',
  },
];

const News = () => {
  return (
    <NewsWrapper className="section">
      <div className="container">
        <Heading centered>News & Blog</Heading>
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
