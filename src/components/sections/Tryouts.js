import React from 'react';
import Card from '../Card';
import LabelText from '../LabelText';

const Tryouts = () => {
  return (
    <section id='tryouts' className='py-40'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row md:-mx-3'>
          <Card className='mb-8 bg-primary'>
            <LabelText className='mb-8 text-white text-center text-3xl'>Tryouts</LabelText>
            <p className='text-white'>Fuerza CF is an invite only team that continuously seeks athletes who
              are interested in training and competing at the highest level of competition
              on a regional and national stage. We do not have a traditional tryout where
              large groups pay a fee to tryout, rather athletes are evaluated and selected
              on an individual basis. If interested in joining please utilize the
              <a className='text-white' href={'#contact'}> contact us</ a> section at any point in the year and
              athletes will be invited to train at 2-3 sessions with the current team.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Tryouts