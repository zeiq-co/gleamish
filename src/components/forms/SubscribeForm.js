import React from 'react';

import addToMailchimp from 'gatsby-plugin-mailchimp';
import { useFormik } from 'formik';
import swal from 'sweetalert';

const SubscribeForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },

    onSubmit: (values) => {
      addToMailchimp(values.email).then((data) => {
        if (data.result === 'error') {
          swal('Oops', 'Something went wrong!', 'error');
        } else {
          swal({
            title: 'Good job!',
            text: 'You clicked the button!',
            icon: 'success',
            button: 'Aww yiss!',
          });
        }
      });
    },
  });

  console.log(formik.values);

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        className="input is-medium"
        id="email"
        name="email"
        type="email"
        placeholder="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default SubscribeForm;
