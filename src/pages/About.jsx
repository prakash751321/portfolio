import React from "react";

function About() {
  return (
    <section id="about" className="bg-gray-100 py-12 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Frontend Developer | JavaScript Enthusiast | React Developer
          </p>
        </div>

        <div className="lg:flex lg:space-x-12">
          {/* Image Section */}
          <div className="lg:w-1/3">
            <img
              src="/My_Self-modified.png"
              alt="Profile"
              className="rounded-full mx-auto w-60 h-60 object-contain shadow-lg mb-8 lg:mb-0"
            />
          </div>

          {/* Description Section */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <p className="text-lg text-gray-700 mb-4">
              Hi there! My name is Jyoti Prakash, and I'm a front-end developer
              who is really passionate about making dynamic, interesting, and
              easy-to-use user interfaces for mobile and online applications.
              Having worked on a variety of projects using technologies
              including C, J2SE, J2EE, HTML, CSS, Tailwind CSS, JavaScript,
              React JS, Redux Toolkit, Node js, Express js, MySQL Database,
              Mongo Db, Linux, Operating Systems, GIT, Firebase. I have 1 year
              hands on expertise in front-end programming.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              I enjoy turning complex problems into simple, elegant solutions
              through code. I’m experienced in crafting responsive web designs
              that look great on all devices, ensuring users have a seamless
              experience.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              I enjoy taking nature photos and traveling to new locations in my
              spare time. Even so, I enjoy watching and reading tech-related
              videos and articles.
            </p>

            {/* Skills Section */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Skills
              </h3>
              <ul className="text-lg text-gray-700 space-y-2">
                <li>- C</li>
                <li>- J2SE, J2EE</li>
                <li>- HTML, CSS, Tailwind Css, JavaScript</li>
                <li>- React.js, Redux Toolkit</li>
                <li>- Node js, Express js, RestAPIs </li>
                <li>- Mongo Db, MySQL </li>
                <li>- Linux, Operating Systems</li>
                <li>- GIT, Firebase </li>
              </ul>
            </div>

            {/* CTA Section */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
