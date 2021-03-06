import React from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/all';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Fúerza Fútbol</h2>
        <p className="mt-5">Elite Training, Elite Competition, and Elite Players</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Follow us on Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.facebook.com/F%C3%BAerza-CF-101598635190001/"><BsFacebook className="inline-flex"/> Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/explore/locations/616545761741900/united-states/urbandale-iowa/fuerza-futbol-fitness/"><BsInstagram className="inline-flex"/> Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
