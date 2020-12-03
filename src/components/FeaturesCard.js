import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  .subtitle {
    line-height: 30px;
  }
`;

const FeaturesCard = ({ title, subtitle, image }) => {
  return (
    <div className="column">
      <Card className="card p-6">
        <div className="card-image is-flex is-justify-content-center">
          <figure className="image is-96x96">
            <img src={image} alt="Placeholder image" />
          </figure>
        </div>
        <h3 className="title has-text-centered is-size-4 mb-4 is-spaced">
          {title}
        </h3>
        <p className="subtitle has-text-centered is-size-6">{subtitle}</p>
      </Card>
    </div>
  );
};
export default FeaturesCard;
