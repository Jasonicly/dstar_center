import React, { useEffect, useState } from 'react';

const PromoPopup = ({ alwaysShow }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (alwaysShow) {
      // Always show the popup if the `alwaysShow` prop is true
      setShowPopup(true);
    } else {
      const hasVisited = sessionStorage.getItem('hasVisited'); // Use sessionStorage
      if (!hasVisited) {
        setTimeout(() => setShowPopup(true), 800); // Show popup after 800ms
        sessionStorage.setItem('hasVisited', 'true'); // Mark as visited for this session
      }
    }
  }, [alwaysShow]);

  const handleClose = () => {
    setShowPopup(false); // Close the popup
  };

  if (!showPopup) return null; // Do not render the popup if it's not supposed to show

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl w-11/12 max-w-4xl max-h-screen overflow-y-auto md:flex md:flex-row">
        
        {/* Left Column: Image (hidden on small screens) */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center p-4">
          <img
            src={`${process.env.PUBLIC_URL}/Photos/popup.jpg`}
            alt="Promotion"
            className="rounded-lg shadow-md object-cover max-h-80"
          />
        </div>

        {/* Right Column: Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold"
            aria-label="Close"
          >
            &times;
          </button>

          {/* Offer Text */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-custom-misty-red mb-3">
            50% OFF for 2026 Intake!
          </h2>
          <p className="text-gray-700 text-sm md:text-md mb-4 leading-relaxed">
            Enroll early and enjoy <strong>50% off for the first 6 months</strong> — available only to the first 30 enrollments.
          </p>
          <p className="text-gray-700 text-sm md:text-md mb-6 leading-relaxed">
            Don’t miss this limited-time opportunity. <strong>Secure your spot early and act fast!</strong>
          </p>

          {/* CTA Button */}
          <button
            onClick={handleClose}
            className="bg-custom-blue text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;