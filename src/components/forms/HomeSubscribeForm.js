import React from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const Container = styled.form`
  margin-top: 1rem;
  input,
  textarea {
    background-color: ${(props) => props.theme.borderColor};
    border: 1px solid #d7dce2;
    color: #696969;

    margin: 5px 0;
    background-color: #fff;
  }
  p {
    font-size: 10px;
    line-height: 16px;
    margin-bottom: 2px !important;
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
    <>
      <h1 className="subtitle is-3 has-text-centered">bchjschsdgcvjhk</h1>
      <p className="subtitle is-6">acjhsc</p>
      <Container onSubmit={handleSubmit}>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded">
                <input
                  className="input is-medium is-shadowless"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="First Name"
                />
                {errors.firstName && touched.firstName && (
                  <p className="help is-danger mt-0">{errors.firstName}</p>
                )}
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded">
                <input
                  className="input is-medium is-shadowless"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Last Name"
                />
                {errors.lastName && touched.lastName && (
                  <p className="help is-danger mt-0">{errors.lastName}</p>
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
                  className="input is-medium is-shadowless"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Phone Number"
                />
                {errors.phone && touched.phone && (
                  <p className="help is-danger mt-0">{errors.phone}</p>
                )}
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded">
                <input
                  className="input is-medium is-shadowless"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Email"
                />
                {errors.email && touched.email && (
                  <p className="help is-danger mt-0">{errors.email}</p>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <textarea
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              className="textarea"
              placeholder="Address"
            />
            {errors.address && touched.address && (
              <p className="help is-danger mt-0">{errors.address}</p>
            )}
          </div>
        </div>

        <div className="field mt-4 ">
          <div className="control">
            <button
              type="submit"
              disabled={isSubmitting}
              className="button is-secondary is-fullwidth is-medium"
            >
              Subscribe
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    firstName: Yup.string().required('First Name is required!'),

    lastName: Yup.string().required('Last Name is required!'),
    phone: Yup.string().required('Phone is required!'),
    address: Yup.string().required('Address is required!'),
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
