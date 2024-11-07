import React from "react";

function Home() {
  const handleDownload = () => {
    // This will trigger the download of the CV file
    const link = document.createElement("a");
    link.href = "./Jyoti_Prakash_Resume.pdf"; // Update the path if your CV is in a different location
    link.download = "Jyoti_Prakash_Resume.pdf"; // The name that will be used for the downloaded file
    link.click();
  };

  return (
    <div id="home">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Hi, I'm Jyoti Prakash Nayak
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            A Frontend Developer passionate about creating responsive and
            interactive web and mobile experiences.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleDownload}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Download CV
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
