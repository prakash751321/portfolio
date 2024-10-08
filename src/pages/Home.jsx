import React from 'react'

function Home() {

  return (
    <div id='home'>
      {/* <p className='text-yellow-300 text-3xl mt-8'>Hii i am <br /> <span className='text-6xl text-white ml-4 font-["Qwitcher_Grypen"]'>Jyoti Prakash Nayak</span></p>
      <p className='text-cyan-300 text-3xl '>Front-End Developer</p> */}
        {/* <SocialMediaIcons/> */}
        <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Hi, I'm Jyoti Prakash Nayak</h1>
          <p className="mt-4 text-xl text-gray-500">A Frontend Developer passionate about creating responsive and interactive web and mobile experiences.</p>
          <div className="mt-8 flex justify-center">
            <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              Get in Touch
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Home