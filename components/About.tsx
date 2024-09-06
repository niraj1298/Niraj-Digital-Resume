import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
<section id="about" className="py-20 px-4 md:px-0 bg-gray-100 text-gray-900 rounded-lg shadow-lg mb-20">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-extrabold text-center mb-10">About Me</h1>
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="relative overflow-hidden shadow-lg">
          <Image src="first.jpg" alt="niraj grad pic" width={384} height={384} className="md:w-112 md:h-112 object-contain" />
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="bg-white p-6 rounded-lg shadow-md mx-4 md:mx-0">
          <p className="text-lg leading-relaxed mb-4">
            👨🏽 <span className="font-bold">Here&#39;s a bit more about me!</span>
          </p>
          <ul className="list-inside space-y-4">
            {[
              "🎓 Recent Graduate in Computer Science & Cyber Security.",
              "📍 Currently working as an Analyst in a tech rotation program @ PNC.",
              "🥋 Volunteer at a nonprofit to teach karate to kids.",
              "✨ Interests: AI, Cybersecurity, Cloud Computing, etc.",
              "🚀 Always looking for new challenges."
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default About;
