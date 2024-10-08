import React, { useState } from 'react';
import Modal from './Modal';



function Projects() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({ title: '', description: '', live: '', githubLink: '' });

  const projects = [
    { title: 'Amazon UI Clone', description: 'In this project, I utilized react for the front end, tailwind CSS for style, and the redux toolkit for state and cart management. Although I used Google Firebase for the backend, it is also hosted, through Firebase on the web. In this, users can sign up using both Google and Facebook. Following signup, the user will be sent to the home page. The home page contains a few products that the visitor may add to their basket.', live: 'https://clone-20607.web.app/', githubLink: 'https://github.com/prakash751321/Amazon_clone.git' },
    { title: 'Theme Switcher', description: 'In this project i have used react for the front-end portion and tailwind css for designing purpose although i have used redux for the theme state managment.', githubLink: 'https://github.com/prakash751321/themeswitcher' },
    { title: 'Todo Maker', description: 'Anytime a user wants to add a task, they just need to click the Add button in the user interface and provide the task name. There will be a pen sign for updating and a rubbish icon for deleting tasks, respectively. I utilized Tailwind CSS for style and React for the front end of this project. ', githubLink: 'https://github.com/prakash751321/React_Todo' },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">My Projects</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3
                className="text-xl font-semibold text-blue-600 cursor-pointer"
                onClick={() => openModal(project)}
              >
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600">{project.description.slice(0, 30)}...</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Project Details */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedProject.title}
        description={selectedProject.description}
        link={selectedProject.live}
        githubLink={selectedProject.githubLink}
      />
    </section>
  );
};




export default Projects