import React from 'react';
import styled from 'styled-components';

const ServiceWrapper = styled.div`
  .card {
    box-shadow: none;
  }
  figure {
    margin-top: 2rem;
    margin-right: 1.5rem;
  }
`;

const serviceCategoryItem = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue risus vel scelerisque scelerisque. Nulla tempor leo dolor, at efficitur lectus lacinia nec. Fusce auctor varius condimentum.',
    image: 'https://bulma.io/images/placeholders/96x96.png',
  },
  {
    id: 2,
    title: 'Lorem Ipsum',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue risus vel scelerisque scelerisque. Nulla tempor leo dolor, at efficitur lectus lacinia nec. Fusce auctor varius condimentum.',
    image: 'https://bulma.io/images/placeholders/96x96.png',
  },
  {
    id: 3,
    title: 'Lorem Ipsum',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue risus vel scelerisque scelerisque. Nulla tempor leo dolor, at efficitur lectus lacinia nec. Fusce auctor varius condimentum.',
    image: 'https://bulma.io/images/placeholders/96x96.png',
  },
  {
    id: 4,
    title: 'Lorem Ipsum',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue risus vel scelerisque scelerisque. Nulla tempor leo dolor, at efficitur lectus lacinia nec. Fusce auctor varius condimentum.',
    image: 'https://bulma.io/images/placeholders/96x96.png',
  },
];

const ServiceCategories = () => {
  return (
    <ServiceWrapper>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-mobile">
            {serviceCategoryItem.map((item) => (
              <div className="column is-6" key={item.id}>
                <div className="card">
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img src={item.image} alt="Placeholder img" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <h3 className="title has-text-left is-size-4 ">
                          {item.title}
                        </h3>
                        <p className="subtitle has-text-left is-size-6">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceWrapper>
  );
};
export default ServiceCategories;
