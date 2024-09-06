import React from 'react';
import Link from 'next/link';


const Footer: React.FC = () => {
  return (
<footer className="bg-gray-100 text-gray-900 py-20">
  <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center space-y-4">
    <p className="text-lg">© 2024 Niraj. All rights reserved.</p>
    <div className="flex space-x-4">
      {['GitHub', 'LinkedIn'].map((platform, index) => (
        <a key={index} href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
          {platform}
        </a>
      ))}
    </div>
  </div>
</footer>


  )
}

export default Footer
