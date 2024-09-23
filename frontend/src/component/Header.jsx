/* eslint-disable no-unused-vars */
import React from 'react';

const Header = () => {
  return (
    <header className="bg-green-900 p-4 text-white">
      <h1 className="text-2xl font-bold">Milk Uber</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/services" className="hover:underline">Services</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
