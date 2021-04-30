import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  box-shadow: none !important ;
  border-radius: 0rem;
  min-height: 806px;
  background: ${(props) =>
    props.isMedium
      ? props.theme.darkAccent
      : props.theme.textColorLite} !important;
  .card-box {
    box-shadow: none !important ;
    border-radius: 0rem;
    min-height: 770px;
    width: 94%;
    background: ${(props) =>
      props.isMedium
        ? props.theme.darkAccent
        : props.theme.textColorLite} !important;
    :hover {
    border: 2px solid;
    border-color: ${(props) => props.theme.mainBrandColor};

  }
  .headline {
    font-family: cursive;
    color: ${(props) => props.theme.mainBrandColor};
  }
  .title {
    color: ${(props) =>
      props.isMedium
        ? props.theme.textColorLite
        : props.theme.darkAccent} !important;
    font-size: ${(props) => props.theme.fontSizeLarge};
  }
  .subtitle {
    color: ${(props) =>
      props.isMedium
        ? props.theme.textColorLite
        : props.theme.darkAccent} !important;
    font-size: ${(props) => props.theme.fontSizeSmall};
  }
`;

const ServicesCard = ({ headline, title, subtitle, isMedium }) => {
  return (
    <Card
      className="card is-flex is-align-items-center is-justify-content-center"
      isMedium={isMedium}
    >
      <div className="card card-box is-flex is-align-items-center is-justify-content-center	">
        <div className="card-content">
          <div className="mb-3">
            <h1 className="headline is-size-1">{headline}</h1>
          </div>
          <div className="mb-3">
            <h2 className="title has-text-weight-bold is-uppercase">{title}</h2>
          </div>
          <div className="mb-3">
            <h3 className="subtitle has-text-weight-medium">{subtitle}</h3>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default ServicesCard;
