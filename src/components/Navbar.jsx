import React, { useState } from "react";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
   

    <nav className="bg-white shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#home" className="text-2xl font-bold text-gray-800">
            Front End Developer || React Developer
          </a>
        </div>

        {/* Hamburger Menu (for small screens) */}
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Navbar links (hidden on small screens) */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#home" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="#about" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">About</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
          <a href="#skills" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Skills</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" className="block text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#about" className="block text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#projects" className="block text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium">Projects</a>
          <a href="#skills" className="block text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium">Skills</a>
          <a href="#contact" className="block text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    )}
  </nav>


  );
}

export default Navbar;
