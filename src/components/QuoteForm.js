import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const Section = styled.div`
  input,
  textarea {
    margin-top: 1rem;
    border-color: transparent;
    box-shadow: none;
    border-radius: 0;
    background-color: transparent;
    border-bottom: 1px solid #dbdbdb;
    padding: 0;
  }
  input:active,
  .input:focus,
  .input:hover,
  .textarea:active,
  .textarea:hover,
  .textarea:focus {
    border-color: transparent;
    box-shadow: none;
    border-bottom: 1px solid #dbdbdb;
  }
  input ::placeholder,
  textarea ::placeholder {
    color: ${(props) => props.theme.backgroundInputColor};
    font-size: ${(props) => props.theme.fontSizeSmall}px;
    font-weight: 400;
  }
  .send-buttton {
    margin-top: 5.5rem;
  }
`;

const ContactForm = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleSubmit,
  handleChange,
  handleBlur,
}) => {
  return (
    <Section>
      <form method="post" action="#" onSubmit={handleSubmit}>
        <div className="columns ">
          <div className="column">
            <input
              className="input is-medium"
              type="text"
              name="name"
              id="name"
              placeholder="Your name*"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && (
              <p className="help is-danger">{errors.name}</p>
            )}
            <input
              className="input is-medium"
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone number"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <p className="help is-danger">{errors.phoneNumber}</p>
            )}
            <div>
              <textarea
                className="textarea"
                name="message"
                id="message"
                placeholder="Message*"
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
          </div>

          <div className="column">
            <input
              className="input is-medium"
              type="text"
              name="email"
              id="email"
              placeholder="Your email*"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <p className="help is-danger">{errors.email}</p>
            )}
            <input
              className="input is-medium"
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.subject && touched.subject && (
              <p className="help is-danger">{errors.subject}</p>
            )}
            <div className="send-buttton">
              <button
                type="button"
                className="button is-secondary is-medium mt-5"
                onClick={handleSubmit}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </Section>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
    subject: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    phoneNumber: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required('A phone number is required'),
    subject: Yup.string().required('Your subject is required!'),
    message: Yup.string().required('Message is required!'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    console.log(values);
    // swal('Subscribed successfully, thank you!');
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
