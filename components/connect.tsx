import React from 'react'

const skills = [
    { name: 'JavaScript', level: '80%' },
    { name: 'React', level: '70%' },
    {name: 'NextJS', level: '70%'},
    { name: 'HTML/CSS', level: '90%' },
    {name: 'Python', level: '60%'},
    {name: 'Java', level: '70%'},
];

const Connect: React.FC = () => {
    return (
      <section id="skills" className="py-20 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-lg mb-20">
          <div className='max-w-4xl mx-auto'>
          <h1 className="text-4xl font-extrabold text-center mb-12">My Skills</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="w-full p-4 bg-white text-black rounded-lg shadow-md transform transition duration-500 hover:scale-105">
                  <h2 className="text-2xl font-bold mb-2">{skill.name}</h2>
                  <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
                      <div className="bg-blue-500 h-4 rounded-full" style={{ width: skill.level }}></div>
                  </div>
                  <p className="text-sm">Proficiency: {skill.level}</p>
                </div>
              ))}
          </div>
          </div>
      </section>
    )
}

export default Connect;