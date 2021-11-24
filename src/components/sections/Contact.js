import React from 'react';
import ContactModal from '../ContactModal';

const Contact = () => {


  return (
    <section id='contact' className='py-5 lg:py-10 bg-gray-200'>
      <div className='container mx-auto my-15 py-20 rounded-lg text-center'>
        <h3 className='text-5xl font-semibold'>Ready to get involved?</h3>
        <p className='mt-8 text-xl font-light'>
          Click below if interested in training and competing at a higher level!
        </p>
        <div className='mt-8'>
          <ContactModal buttonText={'Contact Us to Get Started'} buttonClass={'text-xl'} />
        </div>
      </div>
    </section>
  );
};

export default Contact;