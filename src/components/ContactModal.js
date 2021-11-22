import Button from './Button';
import Rodal from 'rodal';
import React, { useState } from 'react';

const ContactModal = props => {
  const [visible, setVisible] = useState(false);
  let pathname = typeof window !== "undefined" ? window.location.pathname : ""

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
        height={425}
        width={pathname.innerWidth < 500 ? pathname.innerWidth - 5 : 400}
      >
        <form
          method='POST'
          name='contactform'
          className='contactForm'
          data-netlify="true">

          <input
            name="form-name"
            value="contactform"
            type="hidden" />

          <input
            type='text'
            name='name'
            placeholder='Enter your name' />

          <input
            type='email'
            name='email'
            placeholder='Enter your email' />

          <textarea
            name='message'
            placeholder='Message' />

          <Button action={() => setVisible(false)} type='submit'>Submit</Button>

        </form>
        <form name='contactForm' netlify hidden>
          <input type='text' name='name' />
          <input type='email' name='email' />
          <textarea name='message' />
        </form>
      </Rodal>
    </div>
  )
}

export default ContactModal