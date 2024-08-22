'use client';
import Link from 'next/link';
import { FaChevronDown } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";
import { Chrono } from "react-chrono";

import React from 'react';

export default function HomePage() {

  const events = [ 
    {
      title: "2019",
      cardTitle: "Web Developer",
      cardSubtitle: "Web Developer",
      cardDetailedText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
      }
    },
    {
      title: "2020",
      cardTitle: "Web Developer",
      cardSubtitle: "Web Developer",
      cardDetailedText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
      }
    },
    {
      title: "2021",
      cardTitle: "Web Developer",

    }
  ];

  return (
    <div className="bg-black container mx-auto px-4">
      <nav>
        <div className='container mx-auto flex justify-between items-center py-4 px-4'>
            <div className='text-xl text-white font-bold'>
              <Link href='/'>
                N i r a j <span className='text-green-500'>.</span> 
              </Link>
            </div>

          {/* <ul className="flex text-white text-md space-x-6"> 
            <li className='hover:text-green-500'>Home</li>
            <li className='hover:text-green-500'>Service</li>
            <li className='hover:text-green-500'>Contact </li>
          </ul> */}
        </div>
      </nav>

      <section className='py-32'>
        <div className='container mx-auto text-center mb-20'>
          <h1 className='text-4xl font-bold mb-8'>
            Hi👋 I'm Niraj!
          </h1>
          <p className='text-lg'>Software Engineer </p>
          <p>Check below to learn more about me!</p>
        </div>
        <div className='flex justify-center  text-green-500'><FaChevronDown size={40} className='hover:text-white' /></div>
      </section>
    
      <section className="py-30">
        <h1 className='flex justify-center mb-10 text-3xl font-bold'>Check out my Highlighted Projects</h1>

        <div className="container mx-auto">
          <div className="flex flex-col m-3 sm:m-0 justify-center md:flex-row md:justify-between gap-4 text-black">

          <div className="bg-black border-2 text-white border-green-500 shadow-md rounded-lg p-6 w-full md:w-1/3 flex flex-col justify-center items-center text-center">
              <h2 className="text-2xl font-bold mb-4">VerseNetwork</h2>
              <p className="text-white  mb-4">A platform designed to foster community engagement among gamers.</p>
              <p className="mb-4 ">Skills Utilized</p>
              <div className="flex justify-center items-center space-x-4 text-green-500  mb-5"> 
                <IoLogoJavascript /> 
                <FaReact /> 
                <FaNodeJs />
                <SiExpress />
                <DiMongodb />
              </div>
                <a href="https://github.com/niraj1298/Verse-Network" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 transition duration-300">
                      View on GitHub
                </a>
           </div>


           <div className="bg-black border-2 text-white border-green-500 shadow-md rounded-lg p-6 w-full md:w-1/3 flex flex-col justify-center items-center text-center">
              <h2 className="text-2xl font-bold mb-4">Secure Chatting App</h2>
              <p className="text-white  mb-4">A Full-stack web app built for E2E Ecrypted messaging.</p>
              <p className="mb-4">Skills Utilized</p>
              <div className="flex justify-center items-center text-green-500 space-x-4 mb-5"> 
                <IoLogoJavascript /> 
                <FaReact /> 
                <FaNodeJs />
                <SiExpress />
                <TbBrandSocketIo />
              </div>
                <a href="https://github.com/niraj1298/Verse-Network" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 transition duration-300">
                      View on GitHub
                </a>
           </div>

           <div className="bg-black border-2 text-white border-green-500 shadow-md rounded-lg p-6 w-full md:w-1/3 flex flex-col justify-center items-center text-center">
              <h2 className="text-2xl font-bold mb-4">Python Detection</h2>
              <p className="text-white  mb-4">A Full-stack web app built for E2E Ecrypted messaging.</p>
              <p className="mb-4">Skills Utilized</p>
              <div className="flex justify-center items-center text-green-500 space-x-4 mb-5"> 
                <IoLogoJavascript /> 
                <FaReact /> 
                <FaNodeJs />
                <SiExpress />
                <TbBrandSocketIo />
              </div>
                <a href="https://github.com/niraj1298/Verse-Network" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 transition duration-300">
                      View on GitHub
                </a>
           </div>
           
          </div>
        </div>
      </section>
      
      <section className='my-40'>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center'>
            <h1 className='text-3xl font-bold mb-4'>Work Experience</h1>
            <Chrono items={events}  mode="VERTICAL_ALTERNATING" disableToolbar 
            theme={{
              primary: '#22C55E',
              secondary: 'black',
              cardBgColor: 'white',
              titleColor: 'white',
              titleColorActive: '#22C55E',
            }}
            />

          </div>
        </div>
</section>

      <footer className='bg-black text-white py-20'>
        <div className='container mx-auto flex flex-col justify-center items-center space-y-4'>
          <p className='text-lg'>© 2024 Niraj. All rights reserved.</p>
          <div className='flex space-x-4'>
            <a href="https://github.com/niraj1298" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 transition duration-300">GitHub</a>
            <a href="https://linkedin.com/in/niraj1298" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 transition duration-300">LinkedIn</a>
            <a href="https://twitter.com/niraj1298" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 transition duration-300">Twitter</a>
            
          </div>
          <button className='bg-green-500 text-black px-4 py-2 rounded hover:bg-green-700 transition duration-300'>
            <a href="#contact">Contact Me</a>
          </button>
        </div>
      </footer>

    </div>
  );
}
