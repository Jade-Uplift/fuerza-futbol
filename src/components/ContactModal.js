import React, { useState } from 'react';
import Button from './Button';
import Rodal from 'rodal';
import {
  Formik,
  Form,
  Field,
  ErrorMessage
} from 'formik';

const ContactModal = (props) => {
  const [visible, setVisible] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  return (
    <div>
      <Button className={props.buttonClass} action={() => setVisible(true)}>{props.buttonText}</Button>

      <Rodal
        enterAnimation='zoom'
        leaveAnimation='zoom'
        closeOnEsc
        visible={visible}
        onClose={() => setVisible(false)}
        dis
        height={425}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: ''
          }}
          onSubmit={(values, actions) => {
            fetch('/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: encode({ 'form-name': 'contact-form', ...values })
            })
              .then(() => {
                alert('Success');
                actions.resetForm();
              })
              .catch(() => {
                alert('Error');
              })
              .finally(() => {
                actions.setSubmitting(false);
                setVisible(false);
              });
          }}
          validate={values => {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            const errors = {};
            if (!values.name) {
              errors.name = 'Name Required';
            }
            if (!values.email || !emailRegex.test(values.email)) {
              errors.email = 'Valid Email Required';
            }
            if (!values.message) {
              errors.message = 'Message Required';
            }
            return errors;
          }}
        >
          {({ errors, touched }) => (
            <Form id='form' name='contact-form' data-netlify={true}>
              <label className='hidden' htmlFor='name'> </label>
              <Field id='form-field' placeholder='Enter Name' name='name' className={touched.name && errors.name ? 'error-field' : ''} />

              <label className='hidden' htmlFor='email'> </label>
              <Field id='form-field' placeholder='Enter Email' name='email' className={touched.email && errors.email ? 'error-field' : ''} />

              <label className='hidden' htmlFor='message'><ErrorMessage name={'message'} /></label>
              <Field id='form-textarea' placeholder='Enter Message' name='message' component='textarea' className={touched.message && errors.message ? 'error-field' : ''} />

              <Button type='submit'>Send</Button>
            </Form>
          )}
        </Formik>
      </Rodal>
    </div>
  );
};

export default ContactModal;