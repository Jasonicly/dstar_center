import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { useSwipeable } from 'react-swipeable'; // Import the swipeable hook

function HeroSection() {
  const images = [
    `${process.env.PUBLIC_URL}/Photos/main1.jpg`,
    `${process.env.PUBLIC_URL}/Photos/IMG-20240719-WA0042.jpg`,
    `${process.env.PUBLIC_URL}/Photos/main3.jpg`,
  ];

  const texts = [
    {
      subtitle: "Enroll your child today",
      title: "2025 Student Care Registration",
    },
    {
      title: "Welcome to DStar after school care",
      subtitle: "Register Online Today",
    },
    {
      title: "Tuition classes & Enrichment available",
      subtitle: "Open to all primary school students",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Cycle through the images and texts every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleImageChange((currentImage + 1) % images.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  const handleImageChange = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage(index);
      setIsTransitioning(false);
    }, 500);
  };

  // Swipeable handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => handleImageChange((currentImage + 1) % images.length),
    onSwipedRight: () => handleImageChange((currentImage - 1 + images.length) % images.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // allows swipe with mouse as well
  });

  return (
    <section
      {...handlers} // Add swipe handlers to the section
      className="bg-cover bg-center h-screen flex items-center justify-center text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundPosition: 'center 40%',
        transition: 'background-image 1s ease-in-out',
        animation: 'fluid-wave 15s infinite',
      }}
    >
      {/* Blob Container */}
      <div className="relative flex items-center justify-center w-full h-full">
        <div
          className={`transform transition-all duration-500 ${
            isTransitioning ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"
          } p-20 shadow-lg bg-violet-300 text-center max-w-2xl`} // Increased padding and max width
          style={{
            clipPath: "url(#blob)", // Blob shape using SVG clipPath
          }}
        >
          <h1 
            className="text-5xl font-bold text-orange-500 px-10" 
            style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
              whiteSpace: 'pre-line' // This will handle the line break
             }}
          >
            {texts[currentImage].title}
          </h1>
          <p className="mt-4 text-lg">{texts[currentImage].subtitle}</p>

          {/* Replace <a> with <Link> */}
          <Link
            to="/registration"
            className="mt-6 inline-block bg-red-500 text-white py-3 px-6 rounded-full hover:bg-red-600 transition" // Adjusted padding for the button
          >
            Join Us Today
          </Link>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === currentImage ? 'bg-red-500' : 'bg-gray-300'
            }`}
            onClick={() => handleImageChange(index)}
          />
        ))}
      </div>

      {/* Blob Shape Definition */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="blob" clipPathUnits="objectBoundingBox">
            <path
              d="M0.2,0.2 C0.35,0.05,0.65,0.05,0.8,0.2 C0.95,0.35,0.95,0.65,0.8,0.8 C0.65,0.95,0.35,0.95,0.2,0.8 C0.05,0.65,0.05,0.35,0.2,0.2"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Background Fluid Animation */}
      <style>
        {`
          @keyframes fluid-wave {
            0% { background-position: 50% 40%; }
            50% { background-position: 55% 45%; }
            100% { background-position: 50% 40%; }
          }
        `}
      </style>
    </section>
  );
}

export default HeroSection;
