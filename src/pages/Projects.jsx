import React from "react";
import { TbSourceCode } from "react-icons/tb";
import { BsGlobe2 } from "react-icons/bs";

const Projects = () => {
  const projects = [
    {
      title: "PostLife App",
      description:
        "A social media app where you can share post with your friends.",
      source: "https://github.com/kaptaan14/postlifeapp",
      demo: "https://postlifeapp.vercel.app",
    },
    {
      title: "Chat App",
      description:
        "A chat app which use socket.io for real-time message sharing.",
      source: "https://github.com/kaptaan14/chat-app",
      demo: "",
    },
    {
      title: "Task Manager",
      description:
        "A web app for managing your task which saves your data in database" ,
      source: "https://github.com/kaptaan14/Task-Manager",
      demo: "https://task-manager-alpha-three.vercel.app/",
    },
    {
      title: "To Do App",
      description:
        "A single page web application which stores your data on local storage.",
      source: "https://github.com/kaptaan14/To-Do-react-",
      demo: "https://to-do-react-bay.vercel.app/",
    },
  ];
  return (
    <>
      <div className="text-5xl font-bold mb-10">Projects</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((data,index) => (
          <div key={index} className="border p-5 rounded-xl border-greylight-200 bg-greylight-300 flex flex-col justify-between">
            <div className="flex flex-col items-start justify-center p-1">
              <h1 className="text-2xl font-bold">{data.title}</h1>
              <p className="py-3">{data.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
              <a target="_blank" href={data.source} className="border border-greylight-200 flex flex-row items-center justify-center  w-full py-1 rounded-xl gap-1 cursor-pointer">
                <TbSourceCode size={20} />
                Source
              </a>
              <a target="_blank" href={data.demo} className="border border-greylight-200 flex flex-row items-center justify-center  w-full py-1 rounded-xl gap-1 cursor-pointer">
                <BsGlobe2 size={20} />
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
