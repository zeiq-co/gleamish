import React from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const Container = styled.form`
  margin-top: 1rem;
  input {
    background-color: ${(props) => props.theme.borderColor};
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid ${(props) => props.theme.textColorDark};
    border-radius: 0px;
  }
`;

const HomeSubscribeForm = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleSubmit,
  handleChange,
  handleBlur,
}) => {
  return (
    <Container onSubmit={handleSubmit}>
      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <p className="control is-expanded">
              <input
                className="input is-shadowless"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your email"
              />
              {errors.email && touched.email && (
                <p className="help is-danger">{errors.email}</p>
              )}
            </p>
          </div>
          <div className="field">
            <p className="control is-expanded">
              <input
                className="input is-shadowless"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your email"
              />
              {errors.email && touched.email && (
                <p className="help is-danger">{errors.email}</p>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <p className="control is-expanded">
              <input
                className="input is-shadowless"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your email"
              />
              {errors.email && touched.email && (
                <p className="help is-danger">{errors.email}</p>
              )}
            </p>
          </div>
          <div className="field">
            <p className="control is-expanded">
              <input
                className="input is-shadowless"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your email"
              />
              {errors.email && touched.email && (
                <p className="help is-danger">{errors.email}</p>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <textarea
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="textarea"
            placeholder="Explain how we can help you"
          />
          {errors.email && touched.email && (
            <p className="help is-danger">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="field">
        <div className="control">
          <button
            type="submit"
            disabled={isSubmitting}
            className="button is-black is-shadowless"
          >
            Subscribe
          </button>
        </div>
      </div>
    </Container>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    addToMailchimp(values.email)
      .then(() => {
        swal('Subscribed successfully, thank you!');
        setSubmitting(false);
      })
      .catch(() => {
        swal('Subscription failed, please try again.', 'error');
        setSubmitting(false);
      });
  },
  displayName: 'HomeSubscribeForm', // helps with React DevTools
})(HomeSubscribeForm);
