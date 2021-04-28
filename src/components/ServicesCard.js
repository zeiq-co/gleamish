import React from 'react';
import styled from 'styled-components';

import OverlayButton from './elements/OverlayButton';

const Card = styled.div`
  background-color: #fff;
  padding: 10rem 0rem;
  box-shadow: rgb(0 0 0 / 0%) 0px 7px 18px;
  border-radius: 0rem;
  background: ${(props) =>
    props.isMedium
      ? props.theme.darkAccent
      : props.theme.textColorLite} !important;
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
    <Card className="card" isMedium={isMedium}>
      <div className="card-content">
        <div className="mb-3">
          <h1 className="headline is-size-1">{headline}</h1>
        </div>
        <div className="mb-3">
          <h2 className="title has-text-weight-bold">{title}</h2>
        </div>
        <div className="mb-3">
          <h3 className="subtitle has-text-weight-medium">{subtitle}</h3>
        </div>
      </div>
    </Card>
  );
};
export default ServicesCard;
