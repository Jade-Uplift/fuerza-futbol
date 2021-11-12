import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Fuerza Futbol</h2>
        <p className="mt-5">This should be your tagline again.</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Follow us on Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href=""><FacebookIcon />     Facebook</a>
          </li>
          <li>
            <a href=""><TwitterIcon />    Twitter</a>
          </li>
          <li>
            <a href=""><InstagramIcon />      Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
