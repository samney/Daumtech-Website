import React from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate for navigation in React Router v6

const NotFoundPage = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const goBackToCareers = () => {
    navigate("/career"); // Navigate to the careers page
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-screen-lg p-8 text-center">
        <h1 className="mb-4 text-5xl font-bold text-red-600">
          404 - Page Not Found
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          The job you are looking for does not exist or has been removed. Please
          check the link or navigate back to the careers page.
        </p>
        <button
          onClick={goBackToCareers}
          className="px-6 py-2 text-white transition-all duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Back to Career Page
        </button>
      </div>
    </section>
  );
};

export default NotFoundPage;
