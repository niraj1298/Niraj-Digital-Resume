import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen py-32 flex flex-col items-center md:flex-row">
      <div className="md:w-1/2 text-left">
        <h1 className="text-5xl font-extrabold mb-10">Hi👋 I&#39;m Niraj</h1>
        <p className="text-xl leading-relaxed text-gray-700">
          I&#39;m a <span className="text-blue-500">Software Engineer</span> <br />
          with a passion for <span className="text-blue-500">cutting-edge technology</span>, <br />
          a knack for <span className="text-blue-500">problem-solving</span>, and a drive to
          <span className="text-blue-500"> innovate</span> <br /> and adapt in any situation.
        </p>
        <p className="mt-10 text-lg text-blue-500">Click below to connect!</p>
        <div className="flex justify-start mt-5">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Connect
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div className="relative w-[500px] h-[500px] md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
          <Image src="/H1.png" alt="Niraj" layout="fill" objectFit="contain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
