import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
<nav className="px-4 py-4 border-b border-gray-200 sticky top-0 bg-white z-50">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <Link href="/">
                N i r a j <span className="text-blue-500">.</span>
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-lg text-gray-700 hover:text-blue-500 transition duration-300"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-lg text-gray-700 hover:text-blue-500 transition duration-300"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-lg text-gray-700 hover:text-blue-500 transition duration-300"
              >
                Projects
              </Link>
              <Link
                href="#experience"
                className="text-lg text-gray-700 hover:text-blue-500 transition duration-300"
              >
                Experience
              </Link>
            </div>
          </div>
        </nav>
  )
}

export default NavBar
