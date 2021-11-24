import React, { useState } from 'react';
import Button from './Button';
import Rodal from 'rodal';
import {
  Formik,
  Form,
  Field
} from 'formik';

const ContactModal = (props) => {
  const [visible, setVisible] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

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
          onSubmit={
            (values, actions) => {
              fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...values })
              })
                .then(() => {
                  alert('Success');
                  actions.resetForm()
                })
                .catch(() => {
                  alert('Error');
                })
                .finally(() => {
                  actions.setSubmitting(false);
                  setVisible(false);
                })
            }
          }
        >
          {() => (
            <Form id='form' name='contact' data-netlify={true}>
              <label className='hidden' htmlFor='name'>Name: </label>
              <Field id='form-field' placeholder='Enter Name' name='name' />

              <label className='hidden' htmlFor='email'>Email: </label>
              <Field id='form-field' placeholder='Enter Email' name='email' />

              <label className='hidden' htmlFor='message'>Message: </label>
              <Field id='form-textarea' placeholder='Enter Message' name='message' component='textarea' />

              <Button type='submit'>Send</Button>
            </Form>
          )}
        </Formik>
      </Rodal>
    </div>
  );
};

export default ContactModal;