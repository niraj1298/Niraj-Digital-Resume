import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-gray-900 rounded-lg shadow-lg mb-20">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center mb-10">About Me</h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
            <Image src="/first.png" alt="Your Name" layout="fill" objectFit="contain" />
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-md mx-4 md:mx-0">
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
  )
}

export default About
