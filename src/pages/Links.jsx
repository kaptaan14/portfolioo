import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdDownloadForOffline } from "react-icons/md";

const Links = () => {
  const iconClass =
    "flex flex-col items-center justify-center gap-2 hover:text-greylight-100 dark:hover:text-gray-300";

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black-800 text-black dark:text-white">
        <div className="text-5xl font-bold flex flex-col items-center justify-center mb-10">
          Links
        </div>

        <div className="grid grid-cols-3 sm:flex flex-row items-center justify-center gap-16 text-sm font-bold">
          <a
            target="_blank"
            className={iconClass}
            href="https://github.com/kaptaan14"
          >
            <FaGithub size={40} />
            Github
          </a>
          <a
            target="_blank"
            className={iconClass}
            href="https://x.com/AshCoderX"
          >
            <FaXTwitter size={40} />
            Twitter
          </a>
          <a
            target="_blank"
            className={iconClass}
            href="https://leetcode.com/u/hiddencaptain/"
          >
            <SiLeetcode size={40} />
            LeetCode
          </a>
          <a
            target="_blank"
            className={iconClass}
            href="https://www.linkedin.com/in/captainashish/"
          >
            <FaLinkedin size={40} />
            LinkedIn
          </a>
          <a href="mailto:mrashishthakur2@gmail.com" className={iconClass}>
            <MdEmail size={40} />
            Email
          </a>
          <a href="./resume.pdf" download="resume.pdf" className={iconClass}>
            <MdDownloadForOffline size={40} />
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Links;
