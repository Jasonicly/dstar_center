import React, { useState } from 'react';

const NewsPage = () => {
  const [iframeHeight, setIframeHeight] = useState(1500); // Set the initial height of the iframe
  const [loadMoreCount, setLoadMoreCount] = useState(0); // Track how many times the button is clicked
  const maxLoadMoreClicks = 3; // Set a max limit of button clicks

  // Function to increase the iframe height by a fixed amount (e.g., 1000px)
  const showMore = () => {
    setIframeHeight((prevHeight) => prevHeight + 1000);
    setLoadMoreCount((prevCount) => prevCount + 1);
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8"
      style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL}/Background/Bluelightened.png)`, 
        backgroundSize: '100%', // Adjust the percentage as needed
        backgroundPosition: 'center',
      }} // Add your custom background here
    >
      <div className="max-w-screen-lg w-full bg-white shadow-lg rounded-lg p-8">
        <h1 
          className="text-6xl font-bold text-center mb-8 text-custom-blue" 
          style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}
        >
          Latest News
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Stay up to date with the latest updates from DStar EduCentre. Follow us on Instagram to see our latest events, activities, and announcements.
        </p>

        {/* Instagram Widget */}
        <div className="w-full">
          <iframe
            src="https://cdn.lightwidget.com/widgets/0e1d6716a54650699cf8a6b6809e2747.html"
            scrolling="no"
            allowTransparency="true"
            className="lightwidget-widget"
            style={{ width: '100%', height: `${iframeHeight}px`, border: 0, overflow: 'hidden' }}
          ></iframe>
        </div>

        {/* Show More Button */}
        {loadMoreCount < maxLoadMoreClicks && (
          <div className="text-center mt-8">
            <button
              onClick={showMore}
              className="px-6 py-2 bg-custom-blue text-white rounded-lg shadow-lg hover:bg-custom-misty-red transition duration-300"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
