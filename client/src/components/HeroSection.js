import React, { useState, useEffect } from 'react';

function HeroSection() {
  const images = [
    `${process.env.PUBLIC_URL}/Photos/20240808_105834.jpg`,
    `${process.env.PUBLIC_URL}/Photos/IMG-20240719-WA0042.jpg`,
    `${process.env.PUBLIC_URL}/Photos/IMG-20240521-WA0021.jpg`,
  ];

  const texts = [
    {
      subtitle: "2025 Student Care Registration",
      title: "Get 50% off your fees for the first 6 months",
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

  // Cycle through the images and texts every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleImageChange((currentImage + 1) % images.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageChange = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section
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
          } p-20 shadow-lg bg-custom-blue text-center max-w-2xl`} // Increased padding and max width
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
          <a
            href="registration"
            className="mt-6 inline-block bg-red-500 text-white py-3 px-6 rounded-full hover:bg-red-600 transition" // Adjusted padding for the button
          >
            Join Us Today
          </a>
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
