import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs, FaGitAlt, FaPython} from "react-icons/fa";
import { SiExpress, SiJest, SiTensorflow, SiOpencv } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbBrandSocketIo } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";


const projects = [
  {
    title: "VerseNetwork",
    description: "A platform designed to foster community engagement among gamers.",
    skills: [
      <IoLogoJavascript key="js" />,
      <FaReact key="react" />,
      <FaNodeJs key="node" />,
      <SiExpress key="express" />,
      <DiMongodb key="mongodb" />,
      <BiLogoTailwindCss key="tailwind" />,
      <SiJest key="jest" />,
      <FaGitAlt key="git"/>
    ],
    link: "https://github.com/niraj1298/Verse-Network",
  },
  {
    title: "Secure Chatting App",
    description: "A Full-stack web app built for E2E Encrypted messaging.",
    skills: [
      <IoLogoJavascript key="js" />,
      <FaReact key="react" />,
      <FaNodeJs key="node" />,
      <SiExpress key="express" />,
      <TbBrandSocketIo key="socket" />,
      <FaGitAlt key="git"/>
    ],
    link: "https://github.com/niraj1298/E2E-Chat-App",
  },
  {
    title: "Python Object Detection",
    description: "A Python-based object detection system for human detection.",
    skills: [
      <FaPython key="python"/>,
      <SiTensorflow key="tensorflow"/>,
      <SiOpencv key="opencv"/>,
      <FaGitAlt key="git"/>
    ],
    link: "https://github.com/niraj1298/Object-Detection-Python",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-16">
    <h1 className="text-3xl font-bold text-center mb-12">Highlighted Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 shadow-md rounded-lg p-6 flex flex-col justify-center items-center text-center"
        >
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <p className="font-semibold mb-4">Skills Utilized</p>
          <div className="flex flex-wrap justify-center items-center text-blue-500 gap-4 mb-5">
            {project.skills.map((skill) => skill)}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition duration-300"
          >
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
