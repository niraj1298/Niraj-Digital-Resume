import React from 'react';
import Link from 'next/link';


const Footer: React.FC = () => {
  return (
<footer className="bg-gray-100 text-gray-900 py-20">
          <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center space-y-4">
            <p className="text-lg">© 2024 Niraj. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/niraj1298" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">GitHub</a>
              <a href="https://www.linkedin.com/in/nirajnepal01/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">LinkedIn</a>
            </div>
          </div>
        </footer>
  )
}

export default Footer
