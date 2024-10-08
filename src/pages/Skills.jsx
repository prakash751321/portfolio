import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiGit, SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { IoLogoFirebase } from "react-icons/io5";



function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-600" /> },
    { name: "Node js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express js", icon: <SiExpress className="text-black" /> },
    { name: "RestAPIs", icon: <AiFillApi className="text-purple-600" /> },
    { name: "Mongo Db", icon: <SiMongodb className="text-green-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
    { name: "Git", icon: <SiGit className="text-orange-500" /> },
    { name: "Firebase", icon: <IoLogoFirebase className="text-orange-500" /> },
  ];

  return (
    <section id='skills' className="bg-gray-100 py-10">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-medium">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
