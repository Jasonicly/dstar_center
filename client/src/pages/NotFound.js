import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-custom-pearl-gray text-center p-4">
      <h1 className="text-6xl font-bold text-custom-misty-red mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-8">Oops! The page you're looking for doesn't exist.</p>
      
      <Link 
        to="/" 
        className="px-6 py-3 bg-custom-blue text-white rounded-lg shadow-lg hover:bg-custom-misty-red transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
