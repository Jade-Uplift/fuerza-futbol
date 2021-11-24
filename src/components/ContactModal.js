import React, { useState } from 'react';
import Button from './Button';
import Rodal from 'rodal';
import {
  Formik,
  Form,
  Field
} from 'formik';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactModal = (props) => {
  const [visible, setVisible] = useState(false);

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
          validate={values => {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            const errors = {};
            if(!values.name) {
              errors.name = 'Name Required'
            }
            if(!values.email || !emailRegex.test(values.email)) {
              errors.email = 'Valid Email Required'
            }
            if(!values.message) {
              errors.message = 'Message Required'
            }
            return errors;
          }}
          onSubmit={
            (values, actions) => {
              console.log("YOU MADE IT")
              fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "fuerza-contact", ...values })
              })
                .then(() => {
                  actions.resetForm()
                })
                .finally(() => {
                  actions.setSubmitting(false);
                  setVisible(false);
                })
            }
          }
        >
          {({ errors, touched}) => (
            <Form id='form' name='fuerza-contact' data-netlify={true}>
              <label className='hidden' htmlFor='name'>Name: </label>
              <Field id='form-field' placeholder='Enter Name' name='name' className={touched.name && errors.name ? 'error-field' : ''}/>

              <label className='hidden' htmlFor='email'>Email: </label>
              <Field id='form-field' placeholder='Enter Email' name='email' className={touched.email && errors.email ? 'error-field' : ''}/>

              <label className='hidden' htmlFor='message'>Message: </label>
              <Field id='form-textarea' placeholder='Enter Message' name='message' component='textarea' className={touched.message && errors.message ? 'error-field' : ''}/>

              <button className={'bg-primary hover:bg-primary-darker rounded text-white py-3 px-8'} type='submit'>Send</button>
            </Form>
          )}
        </Formik>
      </Rodal>
    </div>
  );
};

export default ContactModal;