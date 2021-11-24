import React, { useState } from 'react';
import LogoIcon from '../../assets/fuerzaLogo.jpeg';
import Button from '../Button';
import { FiMenu, FiX } from 'react-icons/all';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ContactModal from '../ContactModal';

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className='sticky top-0 bg-white shadow'>
      <div className='container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8'>
        <div className='flex items-center text-2xl'>
          <div className='w-12 mr-3'>
            <img src={LogoIcon} alt='logo' />
          </div>
          Fúerza Fútbol
          <div onClick={() => setOpen(!open)} id="hamburger" className='px-4'>
            {open ? <FiX className='text-primary' /> : <FiMenu className='text-primary' />}
          </div>
        </div>
        <ul id={open ? 'open' : 'not-open'} className='h-screen pt-8'>
          <li className='py-4 text-2xl'>
            <AnchorLink href='#training' onClick={() => setOpen(false)}>
              Training
            </AnchorLink>
          </li>
          <li className='py-4 text-2xl'>
            <AnchorLink href='#competition' onClick={() => setOpen(false)}>
              Competition
            </AnchorLink>
          </li>
          <li className='py-4 text-2xl'>
            <AnchorLink href='#about' onClick={() => setOpen(false)}>
              About
            </AnchorLink>
          </li>
          <li className='py-4 text-2xl'>
            <AnchorLink href='#tryouts' onClick={() => setOpen(false)}>
              Tryouts
            </AnchorLink>
          </li>
          <li className='py-4 text-2xl'>
            <h3 onClick={() => setOpen(false)}>
              <a href={'https://youthsoccerrankings.us/'} target='_blank' rel='noopener noreferrer'>Rankings </a>
            </h3>
          </li>
          <li className='py-4 text-2xl'>
            <div className='md:block'>
              <ContactModal buttonText={"Contact"} buttonClass={"text-sm"} />
            </div>
          </li>
        </ul>
        <div id='full-menu' className='flex mt-4 sm:mt-0'>
          <AnchorLink className='px-4' href='#training' onClick={() => setOpen(false)}>
            Training
          </AnchorLink>
          <AnchorLink className='px-4' href='#competition' onClick={() => setOpen(false)}>
            Competition
          </AnchorLink>
          <AnchorLink className='px-4' href='#about' onClick={() => setOpen(false)}>
            About
          </AnchorLink>
          <AnchorLink className='px-4' href='#tryouts' onClick={() => setOpen(false)}>
            Tryouts
          </AnchorLink>
          <h3 className='px-4' onClick={() => setOpen(false)}>
            <a href={'https://youthsoccerrankings.us/'} target='_blank' rel='noopener noreferrer'>Rankings </a>
          </h3>
        </div>
        <div id="full-menu" className='md:block'>
          <ContactModal buttonText={"Contact"} buttonClass={"text-sm"} />
        </div>
      </div>
    </header>
  );
}



export default Header;
