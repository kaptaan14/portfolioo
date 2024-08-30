import React, { useEffect, useState } from "react";
import { TbSourceCode } from "react-icons/tb";
import { BsGlobe2 } from "react-icons/bs";
const API_KEY = import.meta.env.VITE_API_KEY;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/1OPJcycJZSAXmlZzLoEG_WV84KBu7NOltdsCMTsR2tr8/values/Sheet1!A:D?key=${API_KEY}`
      );
      const data = await response.json();
      const [headers, ...rows] = data.values;

      const formattedProjects = rows.map((row) =>
        headers.reduce((acc, header, index) => {
          acc[header] = row[index];
          return acc;
        }, {})
      );

      setProjects(formattedProjects);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="min-h-screen">
        <div className="text-5xl font-bold mb-10 flex justify-center">Projects</div>

        {loading && (
          <h1 className="h-screen flex justify-center">Loading....</h1>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((data, index) => (
            <div
              key={index}
              className="border border-gray-500 p-5 rounded-xl border-greylight-200 bg-greylight-300 flex flex-col justify-between"
            >
              <div className="flex flex-col items-start justify-center p-1">
                <h1 className="text-2xl font-bold">{data.title}</h1>
                <p className="py-3">{data.description}</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                <a
                  target="_blank"
                  href={data.source}
                  className="border border-greylight-200 flex flex-row items-center justify-center  w-full py-1 rounded-xl gap-1 cursor-pointer"
                >
                  <TbSourceCode size={20} />
                  Source
                </a>
                <a
                  target="_blank"
                  href={data.demo}
                  className="border border-greylight-200 flex flex-row items-center justify-center  w-full py-1 rounded-xl gap-1 cursor-pointer"
                >
                  <BsGlobe2 size={20} />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
