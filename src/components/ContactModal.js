import Button from './Button';
import Rodal from 'rodal';

const ContactModal = props => {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitterName, setSubmitterName] = useState("");
  let pathname = typeof window !== 'undefined' ? window.location.pathname : '';

  const form = (
    <form
      method='POST'
      name='contact-form'
      className='contactForm'
      data-netlify='true'>

      <input
        name='form-name'
        value='contact-form'
        type='hidden' />

      <input
        type="hidden"
        name="subject"
        value={`You've got mail from ${submitterName}`} />

      <input
        type='text'
        name='name'
        required={true}
        onChange={(e) => setSubmitterName(e.target.value)}
        placeholder='Enter your name' />

      <input
        type='email'
        name='email'
        required={true}
        placeholder='Enter your email' />

      <textarea
        name='message'
        required={true}
        placeholder='Message' />

      <Button action={() => setSubmitted(true)} type='submit'>Submit</Button>

    </form>
  );

  const submittedSuccess = (
    <div className={"flex items-center flex-col"}>
      <p className={"text-lg text-primary pt-32 pb-8"}>Submission Successful</p>
      <Button action={() => setVisible(false) & setSubmitted(false)}>Close Window</Button>
    </div>
  );

  return (
    <div>
      <Button className={props.buttonClass} action={() => setVisible(true)}>{props.buttonText}</Button>

      <Rodal
        enterAnimation='zoom'
        leaveAnimation='zoom'
        closeOnEsc
        visible={visible}
        onClose={() => setVisible(false) & setSubmitted(false)}
        dis
        height={425}
        width={pathname.innerWidth < 500 ? pathname.innerWidth - 5 : 400}
      >
        {submitted ? submittedSuccess : form}
      </Rodal>
    </div>
  );
};

import React, { useState } from 'react';

export default ContactModal;