import React from 'react';
import Card from '../Card';

const About = () => {
  return (
    <section id='about' className='text-center pt-40'>
      <h3 className='text-5xl font-semibold pb-10'>Who We Are</h3>
      <div className='py-64 bg-primary bg-opacity-25 bg-about-div-image'>
        <div className='container mx-auto text-center'>
          <div className='flex flex-col sm:flex-row sm:-mx-3 mt-12 items-center'>
            <div className='flex-1 px-3 my-5'>
              <Card className='bg-white bg-opacity-75 mt-5 mb-5'>
                <p className='lg:text-xl'>
                  Fúerza CF is an elite soccer team in the Des Moines area for ‘09
                  girls seeking to excel by training in a more intense and dynamic
                  environment & competing in highly competitive tournaments.
                </p>
              </Card>
            </div>
            <div className='flex-1 px-3'>
            </div>
            <div className='flex-1 px-3 my-5'>
              <Card className='bg-white bg-opacity-75 mt-5 mb-5'>
                <p className='lg:text-xl'>
                  It is a team oriented philosophy with a goal to compete against
                  top teams and divisions around the Midwest as well as national
                  tournaments against top ranked teams.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About