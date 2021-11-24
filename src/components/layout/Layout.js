import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Helmet } from 'react-helmet';
import favicon16 from '../../assets/favicon16.png';
import favicon32 from '../../assets/favicon32.png';
import favicon192 from '../../assets/favicon192.png';
import favicon512 from '../../assets/favicon512.png';
import favicon from '../../assets/favicon.ico';


const Layout = ({ children }) => {
  return (
    <>
      <Helmet
        title={'Elite Des Moines Soccer Program – Fuerza Fútbol'}
        meta={[
          {
            name: 'description',
            content: 'Des Moines area\'s own elite \'09 Girls soccer team that competes ' +
              'against top teams and divisions around the Midwest as well as national ' +
              'tournaments against top ranked teams.'
          },
          {
            name: 'keywords',
            content: 'Des Moines Soccer Team, ' +
              'Des Moines Girls Soccer Team, ' +
              'Des Moines Girls Futbol Team, ' +
              'Des Moines Elite Soccer Team,' +
              'Elite Girls Soccer Team,' +
              'Competitive Girls Soccer,' +
              'Competitive Girls Futbol,' +
              'Competitve Soccer Des Moines,' +
              'Fuerza Futbol,' +
              'Fuerza Soccer Team,' +
              'Soccer,' +
              'Girls,' +
              'Futbol,' +
              'Des Moines,' +
              'Competitive,' +
              'Sports,' +
              'Training,' +
              'Tournaments,' +
              'Intense,' +
              'Dynamic,' +
              'Tryouts,' +
              'Youth Soccer Rankings,' +
              'Youth,' +
              'Soccer,' +
              'Rankings,' +
              'Iowa,' +
              '\'09 Girls'
          }
        ]}
        link={[
          { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${favicon16}` },
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${favicon32}` },
          { rel: 'icon', type: 'image/png', sizes: '192x192', href: `${favicon192}` },
          { rel: 'icon', type: 'image/png', sizes: '512x512', href: `${favicon512}` },
          { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
        ]}
      />
      <Header />
      <main className='text-gray-900'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
