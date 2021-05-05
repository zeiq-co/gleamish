import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import swal from 'sweetalert';

import Heading from '../elements/Heading';
import OverlayButton from '../elements/OverlayButton';

const Section = styled.div`
  .columns {
    margin-left: -0.75rem !important;
    margin-right: -0.75rem !important;
  }
  input,
  textarea {
    margin-top: 1rem;
    border-color: #e8edf0;
    box-shadow: none;
    border-radius: 0;
  }
  input:active,
  .input:focus,
  .textarea:active,
  .textarea:focus {
    border-color: ${(props) => props.theme.backgroundInputColor};
    box-shadow: none;
  }
  input ::placeholder,
  textarea ::placeholder {
    color: ${(props) => props.theme.borderColor};
    font-size: ${(props) => props.theme.fontSizeSmall}px;
    font-weight: 400;
  }
`;

const ContactForm = ({
  values,
  touched,
  errors,
  handleSubmit,
  handleChange,
  handleBlur,
}) => {
  return (
    <Section>
      <Heading centered>Get in Touch</Heading>
      <form method="post" action="#" onSubmit={handleSubmit}>
        <div className="columns ">
          <div className="column">
            <input
              className="input is-medium"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && (
              <p className="help is-danger">{errors.name}</p>
            )}
          </div>
          <div className="column">
            <input
              className="input is-medium"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <p className="help is-danger">{errors.email}</p>
            )}
          </div>
        </div>
        <div>
          <textarea
            className="textarea"
            name="message"
            id="message"
            placeholder="Message"
            rows={6}
            defaultValue=""
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && touched.message && (
            <p className="help is-danger">{errors.message}</p>
          )}
        </div>
        <div className="mt-5">
          <OverlayButton linkTo="/" buttonText="Send Message" />
        </div>
      </form>
    </Section>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    message: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    message: Yup.string().required('Message is required!'),
  }),
  handleSubmit: () => {
    swal('Subscribed successfully, thank you!');
    // addToMailchimp(values.email)
    //   .then(() => {
    //     swal('Subscribed successfully, thank you!');
    //     setSubmitting(false);
    //   })
    //   .catch(() => {
    //     swal('Subscription failed, please try again.', 'error');
    //     setSubmitting(false);
    //   });
  },
  displayName: 'ContactForm', // helps with React DevTools
})(ContactForm);
