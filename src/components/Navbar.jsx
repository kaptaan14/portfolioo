import React, { useEffect, useState } from "react";
import { Link,useLocation } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";



const Navbar = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-green-500 underline dark:text-green-400"
      : "dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-300";
  };

  
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-black-800 text-white p-4 border-b border-gray-700 dark:border-white z-50">
      <div className="container mx-auto flex justify-between items-center max-w-2xl">
        <Link to={"/"} className="text-2xl hidden md:block font-mono cursor-pointer">
          <span className="text-green-500 dark:text-green-400">Ash</span>
          <span className="text-gray-500">ish</span>
        </Link>
        <div className="space-x-10 font-semibold text-gray-700">
          <Link to="/projects" className={getLinkClass("/projects")}>
            Projects
          </Link>
          <Link to="/blogs" className={getLinkClass("/blogs")}>
            Blogs
          </Link>
          <Link to="/links" className={getLinkClass("/links")}>
            Links
          </Link>
          <Link to="/aboutme" className={getLinkClass("/aboutme")}>
            About Me
          </Link>
        </div>
        <button onClick={toggleDarkMode} className="text-gray-400 dark:text-gray-500">
          {darkMode ?  <MdOutlineLightMode size={25}/> : <MdOutlineDarkMode size={25}/>}         
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
