import React from 'react';
import ContactModal from '../ContactModal';

const Contact = () => {


  return (
    <section id='contact' className='py-5 lg:py-10 bg-gray-200'>
      <div className='container mx-auto my-15 py-20 rounded-lg text-center'>
        <h3 className='text-5xl font-semibold'>Ready to get involved?</h3>
        <p className='mt-8 text-xl font-light'>
          Yellow card center-half defender UEFA European Championship World Cup hat trick halftime soccer red card
          three-five-two forward.
        </p>
        <p className='mt-8'>
          <div>
            <ContactModal buttonText={"Contact Us to Get Started"} buttonClass={"text-xl"} />
          </div>
        </p>
      </div>
    </section>
  );
};

export default Contact;