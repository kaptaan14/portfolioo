import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-[80vh] bg-white dark:bg-black-800 text-gray-800 dark:text-gray-200">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-4">Oops! Page not found.</p>
        <p className="text-lg mb-6">The page you are looking for does not exist.</p>
        <Link
          to="/"
          className=" text-green-700 dark:text-green-400 hover:underline"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
