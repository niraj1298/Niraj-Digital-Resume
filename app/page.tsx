'use client';
import Link from 'next/link';
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="bg-black max-w-screen-xl mx-auto px-4">
      <nav>
        <div className="flex justify-between items-center py-4">
          <div className="text-xl text-white font-bold">
            <Link href='/'>
              N i r a j <span className="text-green-500">.</span> 
            </Link>
          </div>
        </div>
      </nav>

      <section className="min-h-screen py-32 flex flex-col items-center md:flex-row">
        <div className="md:w-1/2 text-left">
          <h1 className="text-5xl font-extrabold mb-10 animate-bounce">Hi👋 I'm Niraj</h1>
          <p className="text-xl leading-relaxed text-gray-300">
            I'm a <span className="text-green-400">Software Engineer</span> <br /> with a passion for <span className="text-green-400">cutting-edge technology</span>, <br /> a knack for <span className="text-green-400">problem-solving</span>, and a drive to
            <span className="text-green-400"> innovate</span> <br /> and adapt in any situation.{" "}
          </p>
          <p className="mt-10 text-lg text-green-400 animate-pulse">Click below to connect!</p>
          <div className="flex justify-start mt-5 text-green-500 w-full">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">Connect</button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 md:float-right">
          <div className="relative w-full h-full">
            {/* Animation elements */}
          </div>
        </div>
      </section>


  <section className="py-20 bg-black text-white rounded-lg shadow-lg mb-20">
  <div className="max-w-4xl mx-auto px-6">
    <h1 className="text-4xl font-extrabold text-center mb-10">About Me</h1>
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Profile Image */}
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg transform hover:scale-105 transition duration-500">
          <Image src="/H1.png" alt="Your Name" layout="fill" objectFit="contain" />
        </div>
      </div>
      {/* About Me Text */}
      <div className="md:w-1/2">
        <div className="bg-white text-green-900 w-[500px] p-6 rounded-lg shadow-md">
          <p className="text-lg leading-relaxed mb-4">
            👨🏽 <span className="font-bold">Here's a bit more about me!</span>
          </p>
          <ul className="list-inside space-y-4">
            <li>🎓 Recent Graduate in Computer Science & Cyber Security with a Minor in Mathematics.</li>
            <li>📍 Currently working as an Analyst in a 1-year tech rotation program @ PNC.</li>
            <li>🥋 Passionate about giving back through martial arts. I volunteer at a nonprofit to teach karate to kids in my community, focusing on their mental, physical, and spiritual well-being.</li>
            <li>✨ <span className="font-bold">Interests:</span> AI, Cybersecurity, Cloud Computing, Embedded Systems, Game, Mobile Development, and Robotics.</li>
            <li>🚀 Always looking for new challenges and opportunities to make an impact. Let's connect!</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>




    
      <section className="py-30">
        <h1 className="text-3xl font-bold text-center mb-10">Check out my Highlighted Projects</h1>

        <div className="flex flex-col md:flex-row justify-between gap-4">
          {[
            {
              title: "VerseNetwork",
              description: "A platform designed to foster community engagement among gamers.",
              skills: [<IoLogoJavascript />, <FaReact />, <FaNodeJs />, <SiExpress />, <DiMongodb />],
              link: "https://github.com/niraj1298/Verse-Network"
            },
            {
              title: "Secure Chatting App",
              description: "A Full-stack web app built for E2E Encrypted messaging.",
              skills: [<IoLogoJavascript />, <FaReact />, <FaNodeJs />, <SiExpress />, <TbBrandSocketIo />],
              link: "https://github.com/niraj1298/Verse-Network"
            },
            {
              title: "Python Detection",
              description: "A Python-based detection system for various use cases.",
              skills: [<IoLogoJavascript />, <FaReact />, <FaNodeJs />, <SiExpress />, <TbBrandSocketIo />],
              link: "https://github.com/niraj1298/Verse-Network"
            }
          ].map((project, index) => (
            <div key={index} className="bg-black border-2 text-white border-green-500 shadow-md rounded-lg p-6 w-full md:w-1/3 flex flex-col justify-center items-center text-center">
              <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
              <p className="text-white mb-4">{project.description}</p>
              <p className="mb-4">Skills Utilized</p>
              <div className="flex justify-center items-center text-green-500 space-x-4 mb-5"> 
                {project.skills.map((skill, idx) => <span key={idx}>{skill}</span>)}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 transition duration-300">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>
      
      <section className="my-40">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Work Experience</h1>
        </div>
      </section>

      <footer className="bg-black text-white py-20">
        <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center space-y-4">
          <p className="text-lg">© 2024 Niraj. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/niraj1298" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition duration-300">GitHub</a>
            <a href="https://linkedin.com/in/niraj1298" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition duration-300">LinkedIn</a>
            <a href="https://twitter.com/niraj1298" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition duration-300">Twitter</a>
          </div>
          <Link href="#contact">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">
              Contact Me
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
}
