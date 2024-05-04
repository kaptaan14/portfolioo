import React from "react";
import { FaFolderOpen } from "react-icons/fa6";
import { GiNotebook } from "react-icons/gi";
import { PiLinkSimpleBold } from "react-icons/pi";
import { NavLink, useLocation } from "react-router-dom";
import { BsInfoCircleFill } from "react-icons/bs";

const Navbar = ({dev, setDev}) => {
  const toggleMode = ()=>{
      setDev(true)
  }
  const location = useLocation();
  const navClass =
    "px-1 py-2 sm:py-2 flex justify-center items-center mr-3 border border-greylight-100 font-bold w-20 sm:min-w-32 rounded-2xl cursor-pointer gap-1  hover:bg-greylight-100 ";
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row justify-between w-full sm:w-0 items-center py-10 sm:py-16">
        <NavLink
          to="/"
          className={`${navClass} ${
            location.pathname === "/"
              ? "bg-greylight-100 border-greylight-400"
              : ""
          }`}
        >
          <BsInfoCircleFill size={30} />
          <p className="hidden sm:flex">About</p>
        </NavLink>
        <NavLink
          to="/projects"
          className={`${navClass} ${
            location.pathname === "/projects"
              ? "bg-greylight-100 border-greylight-400"
              : ""
          }`}
        >
          <FaFolderOpen size={30} />
          <p className="hidden sm:flex">Projects</p>
        </NavLink>
        <NavLink
          to="/blogs"
          className={`${navClass} ${
            location.pathname === "/blogs"
              ? "bg-greylight-100 border-greylight-400"
              : ""
          }`}
        >
          <GiNotebook size={30} />
          <p className="hidden sm:flex">Blogs</p>
        </NavLink>
        <NavLink
          to="/links"
          className={`${navClass} ${
            location.pathname === "/links"
              ? "bg-greylight-100 border-greylight-400"
              : ""
          }`}
        >
          <PiLinkSimpleBold size={30} />
          <p className="hidden sm:flex">Links</p>
        </NavLink>
      </div>

      <div onClick={toggleMode} className="hidden sm:flex bg-greylight-100 rounded-full p-3  hover:bg-greylight-200">
        <button >Dev Mode</button>
      </div>
    </div>
  );
};

export default Navbar;
