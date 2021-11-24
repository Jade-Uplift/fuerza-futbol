import React from 'react';
import Layout from '../components/layout/Layout';
import "rodal/lib/rodal.css";
import Contact from '../components/sections/Contact';
import Tryouts from '../components/sections/Tryouts';
import About from '../components/sections/About';
import Competition from '../components/sections/Competition';
import Training from '../components/sections/Training';


const Index = () => {

  return (
    <Layout>
      <section id='top' className='pt-40 md:pt-64 bg-main-div-image'>
        <div>
          <div className='py-40'>
          </div>
          <div className='text-center lg:text-left bg-white bg-opacity-50 p-10 mb-0'>
            <h1 className='text-4xl lg:text-5xl xl:text-6xl font-bold leading-none'>
              Fúerza Fútbol
            </h1>
            <p className='mt-4'>Elite Training, Elite Competition, and Elite Players</p>
          </div>
        </div>
      </section>
      <Training />
      <Competition />
      <About />
      <Tryouts />
      <Contact />
    </Layout>
  );
}

export default Index;
