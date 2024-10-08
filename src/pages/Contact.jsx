import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";


function Contact() {
  return (
                                    // Contact Page 

    <section id="contact" className="bg-gray-50 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center">Contact Me</h2>
      <p className="mt-4 text-lg text-gray-600 text-center">Feel free to reach out if you'd like to collaborate or just say hello!</p>
      <div className="mt-8 flex justify-center">
        <a href="mailto:jyotiprakash751321@gmail.com" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
          Email Me
        </a>
      </div>
    </div>
    <div className="mt-8 flex justify-center space-x-4">
        <a href="https://www.linkedin.com/in/jyoti-prakash-nayak-0bb486154" aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="h-10 w-10 text-blue-600 hover:text-blue-800" />
        </a>
        <a href="https://github.com/prakash751321?tab=repositories" aria-label="GitHub profile" target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-10 w-10 text-gray-800 hover:text-gray-600" />
        </a>
        <a href="https://www.instagram.com/prakash__gudu?igsh=eGpzZ2Z3ZW1jbDM1" aria-label="Instagram profile" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="h-10 w-10 text-pink-600 hover:text-pink-800" />
        </a>
      </div>
  </section>
  )
}

export default Contact