'use client';
import React, { useState } from 'react';
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaGitAlt, FaJava } from "react-icons/fa";
import { SiMui, SiJest, SiGradle } from "react-icons/si";
import { TbBrandNextjs, TbBrandTypescript, TbBrandDjango, TbSql } from "react-icons/tb";
import { BiLogoTailwindCss, BiLogoSpringBoot } from "react-icons/bi";
import { RiFirebaseFill } from "react-icons/ri";

interface TimelineItem {
  date: string;
  title: string;
  company: string;
  description: JSX.Element;
}

const timelineData: TimelineItem[] = [
  {
    date: 'August 2024 - Present',
    title: 'TDP Analyst',
    company: 'PNC',
    description: (
      <div>
        <p className="mb-2">Technology Development Program</p>
        <ul className="list-disc ml-5 space-y-2">
          <li>Rotation 1 - Security Engineer<br /> Bullet Points coming soon..</li>
        </ul>
        <hr className="mt-2" />
        <div className="flex flex-col mt-4">
          <h2 className="font-bold mb-2">Skills</h2>
          <div className="flex space-x-4">
            <FaJava size={24} />
            <BiLogoSpringBoot size={24} />
            <SiGradle size={24} />
            <TbSql size={24} />
            <FaGitAlt size={24} />
          </div>
        </div>
      </div>
    ),
  },
  {
    date: 'March 2024 - August 2024',
    title: 'Chief Technology Officer',
    company: 'Clean Plate Innovations',
    description: (
      <div>
        <p className="mb-2">AI Vision and Machine Learning company</p>
        <ul className="list-disc ml-5 space-y-2">
          <li><span className="font-bold">Leadership &amp; Strategy: </span> Spearhead AI vision technology strategies, aligning with company goals, and mentor tech teams in innovation and collaboration.</li>
          <li><span className="font-bold">Dual Role Leadership:</span> Serve as CTO and Lead Engineer, balancing strategic oversight with hands-on technical involvement in AI and software projects.</li>
          <li><span className="font-bold">Scaling Teams: </span>Drive growth of engineering and AI teams, focusing on talent recruitment, skill development, and fostering an inclusive work environment.</li>
          <li><span className="font-bold">Technical Excellence: </span>Oversee AI-driven vision systems&#39; design and deployment, ensuring adherence to best practices and security protocols.</li>
          <li><span className="font-bold">AI Vision Innovation: </span>Lead groundbreaking AI vision projects, integrating cutting-edge technologies into scalable, robust solutions.</li>
        </ul>
        <hr className="mt-2" />
        <div className="flex flex-col mt-4">
          <h2 className="font-bold mb-2">Skills</h2>
          <div className="flex space-x-4">
            <IoLogoJavascript size={24} />
            <TbBrandTypescript size={24} />
            <FaReact size={24} />
            <TbBrandNextjs size={24} />
            <BiLogoTailwindCss size={24} />
            <RiFirebaseFill size={24} />
            <FaGitAlt size={24} />
          </div>
        </div>
      </div>
    )
  },
  {
    date: 'March 2024 - April 2024',
    title: 'Front-End Developer',
    company: 'Greetings',
    description: (
      <div>
        <p className="mb-2">Frontend Developer for a Networking Start-up</p>
        <ul className="list-disc ml-5 space-y-2">
          <li>Developed web applications using Next.js, leveraging SSR, SSG, and API routes.</li>
          <li>Wrote clean, maintainable code, adhering to best practices for Next.js development.</li>
          <li>Collaborated with cross-functional teams to create a cohesive user experience.</li>
          <li>Optimized web applications for performance, compatibility, and responsiveness.</li>
        </ul>
        <hr className="mt-2" />
        <div className="flex flex-col mt-4">
          <h2 className="font-bold mb-2">Skills</h2>
          <div className="flex space-x-4">
            <IoLogoJavascript size={24} />
            <TbBrandTypescript size={24} />
            <FaReact size={24} />
            <TbBrandDjango size={24} />
            <TbBrandNextjs size={24} />
            <BiLogoTailwindCss size={24} />
            <SiJest size={24} />
            <FaGitAlt size={24} />
          </div>
        </div>
      </div>
    ),
  },
  {
    date: 'May 2023 - August 2023',
    title: 'Software Engineer',
    company: 'PNC',
    description: (
      <div>
        <p className="mb-2">Software Engineering Intern</p>
        <ul className="list-disc ml-5 space-y-2">
          <li>Designed web app wireframes to streamline UI and user flows.</li>
          <li>Delivered timely projects in an agile environment with adaptable solutions.</li>
          <li>Implemented novel React features for improved functionality and UX.</li>
          <li>Collaborated with team to convert requirements into efficient code.</li>
          <li>Exhibited strong software development principles including testing and version control.</li>
          <li>Debugged complex issues for smooth functionality and optimal performance.</li>
          <li>Prioritized high-quality code via meticulous reviews and coding standard adherence.</li>
          <li>Integrated APIs for real-time access to company data.</li>
        </ul>
        <hr className="mt-2" />
        <div className="flex flex-col mt-4">
          <h2 className="font-bold mb-2">Skills</h2>
          <div className="flex space-x-4">
            <IoLogoJavascript size={24} />
            <FaReact size={24} />
            <TbBrandNextjs size={24} />
            <BiLogoTailwindCss size={24} />
            <RiFirebaseFill size={24} />
            <SiMui size={24} />
            <SiJest size={24} />
            <FaGitAlt size={24} />
          </div>
        </div>
      </div>
    )
  },
];

const Experience: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="my-40">
  <h1 className="text-3xl font-bold text-center mb-12">Work Experience</h1>
  <div className="relative wrap overflow-hidden p-10 h-full">
    <div className="absolute h-full border border-blue-500 left-1/2 transform -translate-x-1/2"></div>
    {timelineData.map((item, index) => (
      <div
        key={index}
        className={`mb-8 lg:mb-12 xl:mb-16 flex justify-between items-center w-full cursor-pointer ${
          index % 2 === 0 ? "flex-row-reverse" : "flex-row"
        }`}
        onClick={() => setSelectedIndex(index)}
      >
        <div className="w-5/12"></div>
        <div
          className={`relative bg-blue-500 rounded-lg w-5/12 px-6 py-4 transition-shadow duration-300 ${
            selectedIndex === index
              ? "shadow-2xl border-2 border-white"
              : "shadow-lg"
          }`}
        >
          <h3 className="mb-2 font-bold text-white text-xl">
            {item.title}
          </h3>
          <p className="text-sm leading-snug tracking-wide text-white">
            {item.date}
          </p>
          <p className="text-sm leading-snug tracking-wide text-white">
            {item.company}
          </p>
          <div className="mt-2 text-sm leading-snug tracking-wide text-white">
            {item.description}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default Experience;
