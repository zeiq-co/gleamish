import React from 'react';
import styled from 'styled-components';
import config from '../utils/config';

const Section = styled.div`
  margin-bottom: 5rem;
  margin-top: 5rem;
  .column.right-image {
    position: relative;
    right: -8%;
    margin-top: -1.5rem;
  }
`;
const BoxWrapper = styled.div`
  padding-bottom: 6rem;
  padding-left: 4rem;
  padding-top: 5rem;
  padding-right: 2rem;
  background: #f1f5f7;

  /* @media screen and (min-width: 1400px) {
    padding: 7rem !important;
  }
  @media screen and (max-width: 600px) {
    padding: 2rem !important;
  } */
`;

const ContactAddress = () => {
  return (
    <Section className="section ">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-10">
            <div className="columns is-gapless">
              <div className="column right-image">
                <img src="http://3put9a43ycne3koyi63vujgg-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/restoration.jpg" />
              </div>
              <div className="column">
                <BoxWrapper>
                  <h2 className="title is-3 has-text-white is-family-primary ">
                    Midas Brush Decorating Ltd
                  </h2>
                  <div className="mb-6">
                    <h2 className="mb-2 is-size-6">
                      Midas Brush Decorating Ltd
                    </h2>
                    <h2 className="mb-2 is-size-6">
                      31 Chadbourn Street London E14 6QP
                    </h2>
                  </div>
                  <ul>
                    <li className="mb-2 is-size-6">
                      Tel :{' '}
                      <a href={`tel:${config.telephone}`}>{config.telephone}</a>
                    </li>
                    <li className="mb-2 is-size-6">
                      E-MAIL :
                      <a href={`mailto:${config.email}`}>{config.email}</a>
                    </li>
                  </ul>
                </BoxWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default ContactAddress;
