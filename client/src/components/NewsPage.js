import React, { useState, useEffect } from 'react';

const NewsPage = () => {
  const [iframeHeight, setIframeHeight] = useState(1500); // Initial iframe height
  const maxIframeHeight = 6000; // Maximum height the iframe can reach
  const scrollIncrease = 1000; // Amount to increase height on scroll

  // Function to increase iframe height when user scrolls near the bottom
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      iframeHeight < maxIframeHeight
    ) {
      setIframeHeight((prevHeight) => prevHeight + scrollIncrease);
    }
  };

  // Attach event listener on mount and remove on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [iframeHeight]);

  return (
    <div 
      className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8"
      style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL}/Background/Bluelightened.png)`, 
        backgroundSize: '100%',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-screen-lg w-full bg-white shadow-lg rounded-lg p-8">
        <h1 
          className="text-6xl font-bold text-center mb-8 text-custom-blue" 
          style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}
        >
          Latest News
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Stay up to date with the latest updates from DStar EduCentre. <br />Follow us on Instagram to see our latest events, activities, and announcements.
        </p>

        {/* Instagram Widget */}
        <div className="w-full">
          <iframe
            title="Instagram Feed"
            src="https://cdn.lightwidget.com/widgets/0e1d6716a54650699cf8a6b6809e2747.html"
            scrolling="no"
            allowTransparency="true"
            className="lightwidget-widget"
            style={{ width: '100%', height: `${iframeHeight}px`, border: 0, overflow: 'hidden' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
