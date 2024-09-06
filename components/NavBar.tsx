import React, { useState } from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-4 py-4 border-b border-gray-200 sticky top-0 bg-white z-50 w-full">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <span>Niraj</span> <span className="text-blue-500">.</span>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-4 ">
          <Link href="#" className="text-lg text-gray-700 hover:text-blue-500 transition duration-300">
            Home
          </Link>
          <Link href="#about" className="text-lg text-gray-700 hover:text-blue-500 transition duration-300">
            About
          </Link>
          <Link href="#projects" className="text-lg text-gray-700 hover:text-blue-500 transition duration-300">
            Projects
          </Link>
          <Link href="#experience" className="text-lg text-gray-700 hover:text-blue-500 transition duration-300">
            Experience
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col items-center space-y-4">
            <Link href="#" className="text-lg text-gray-700 hover:text-blue-500 transition duration-300">
              Home
            </Link>
            <Link href="#about" className="text-lg text-gray-700 hover:text-blue-500 transition duration-300">
              About
            </Link>
            <Link href="#projects" className="text-lg text-gray-700 hover:text-blue-500 transition duration-300">
              Projects
            </Link>
            <Link href="#experience" className="text-lg text-gray-700 hover:text-blue-500 transition duration-300">
              Experience
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
