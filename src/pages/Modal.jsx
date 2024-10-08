import React from 'react';

const Modal = ({ isOpen, onClose, title, description, link, githubLink }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <button className="text-gray-600 hover:text-gray-900" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="mt-4">
          <p className="text-gray-600">{description}</p>
        </div>
        <div className='mt-6 flex justify-evenly'>
        <a className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700' href={link} target="_blank" rel="noopener noreferrer">Live</a>
        <a className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700' href={githubLink} target="_blank" rel="noopener noreferrer">Github Link</a>
        </div>
        <div className="mt-8 flex justify-center">
          <button onClick={onClose} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
