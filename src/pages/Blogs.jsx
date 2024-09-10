import React, { useEffect, useState } from "react";
import { BsGlobe2 } from "react-icons/bs";
const API_KEY = import.meta.env.VITE_API_KEY;

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null); // State to manage selected blog for modal

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/1Vx0GAlVW9B6gtuT3A1_f6T1T3WULfSsHg_3ZZJOk818/values/Sheet1!A:G?key=${API_KEY}`
      );

      const data = await response.json();
      const [headers, ...rows] = data.values;

      const formattedBlogs = rows.map((row) =>
        headers.reduce((acc, header, index) => {
          acc[header] = row[index];
          return acc;
        }, {})
      );

      setBlogs(formattedBlogs);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="min-h-screen">
      <div className="text-5xl font-bold mb-10 flex justify-center">Blogs</div>

      {loading && <h1 className="h-screen flex justify-center">Loading....</h1>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((data, index) => (
          <div
            key={index}
            className="border border-gray-500 p-5 rounded-xl bg-white dark:bg-black-800 flex flex-col justify-between"
          >
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <div className="flex flex-col items-start justify-center p-1">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {data.title}
              </h1>
              <p className="py-3 text-gray-700 dark:text-gray-300">
                {data.description}
              </p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="italic text-sm text-gray-600 dark:text-gray-400">
                By{" "}
                <span className="underline cursor-pointer">{data.author}</span>{" "}
                · {data.date}
              </p>
            </div>
            <button
              onClick={() => openModal(data)}
              className="border border-gray-500 flex flex-row items-center justify-center w-full py-1 rounded-xl gap-1 cursor-pointer bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              <BsGlobe2 size={20} />
              Read
            </button>
          </div>
        ))}
      </div>

      {selectedBlog && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-black-800 w-11/12 md:w-1/2 max-h-screen max-w-screen-md overflow-y-auto overflow-x-hidden p-6 rounded-lg relative"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          >
            <button
              className="absolute top-0 text-2xl right-2 text-gray-600 dark:text-gray-400"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedBlog.title}
            </h1>
            <pre className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap overflow-x-auto">
              {selectedBlog.content}
            </pre>
            <p className="italic text-sm text-gray-600 dark:text-gray-400 mt-4">
              By{" "}
              <span className="underline cursor-pointer">{selectedBlog.author}</span>{" "}
              · {selectedBlog.date}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
