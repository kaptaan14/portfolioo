import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white dark:bg-black-800">
        <div className="mx-auto flex md:flex-row flex-col-reverse items-center border-b  pb-2 mb-5">
          <div className="flex-1 justify-start text-center md:text-left ">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Welcome to My Portfolio
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Hi, I'm{" "}
              <span className="font-bold text-yellow-600 dark:text-yellow-300 underline">
                Ashish Singh
              </span>{" "}
              . I'm a passionate developer with a love for building innovative
              solutions. Explore my{" "}
              <Link to="/projects">
                <span className="underline">projects</span>
              </Link>
              ,{" "}
              <Link to="/blogs">
                <span className="underline">blogs</span>
              </Link>
              , and{" "}
              <Link to="/links">
                <span className="underline">links</span>
              </Link>{" "}
              to learn more about my work.
            </p>
          </div>

          <div className="flex-1 flex justify-center md:justify-end pb-10">
            <div className="w-60 h-60 rounded-xl overflow-hidden border-green-500 dark:border-green-400">
              <img
                src="/ashx.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center border">
        <h2 className="text-4xl rounded bg-sky-300 dark:bg-sky-700 px-2 py-1 font-bold text-gray-800 dark:text-white text-center">
          Skills & Expertise
        </h2>
        <div className="space-y-4 px-4 py-2">
          <div className="flex justify-between text-gray-800 dark:text-gray-200">
            <span className="font-semibold">Languages:</span>
            <span>JavaScript, Python, C++, Typescript</span>
          </div>
          <div className="flex justify-between text-gray-800 dark:text-gray-200">
            <span className="font-semibold">Frontend:</span>
            <span>React, NEXTjs Tailwind CSS, HTML, CSS</span>
          </div>
          <div className="flex justify-between text-gray-800 dark:text-gray-200">
            <span className="font-semibold">Backend:</span>
            <span>Node.js, Express, Flask</span>
          </div>
          <div className="flex justify-between text-gray-800 dark:text-gray-200">
            <span className="font-semibold">Database:</span>
            <span>PostgreSQL, MongoDB</span>
          </div>
          <div className="flex justify-between text-gray-800 dark:text-gray-200">
            <span className="font-semibold">Version Control:</span>
            <span>Git, GitHub</span>
          </div>
        </div>
      </div>
      <div className="border mt-5"></div>

      {/* <div className="flex mt-10">
        <h1 className="text-4xl font-bold underline">Blogs</h1>
      </div> */}
    </>
  );
};

export default Home;
