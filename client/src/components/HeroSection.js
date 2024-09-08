import React, { useState, useEffect } from 'react';

function HeroSection() {
  const images = [
    `${process.env.PUBLIC_URL}/Photos/20240808_105834.jpg`,
    `${process.env.PUBLIC_URL}/Photos/IMG-20240719-WA0042.jpg`,
    `${process.env.PUBLIC_URL}/Photos/IMG-20240521-WA0021.jpg`,
  ];

  const texts = [
    {
      title: "Welcome to Dstar Daycare",
      subtitle: "Enrollment for 2025/26 now available",
    },
    {
      title: "Join Our Friendly Community",
      subtitle: "Creating a nurturing environment for your child",
    },
    {
      title: "Enroll Your Child Today",
      subtitle: "Building a foundation for a brighter future",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Cycle through the images and texts every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleImageChange((currentImage + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentImage]);

  const handleImageChange = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-start text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundPosition: 'center 40%',
        transition: 'background-image 1s ease-in-out',
        animation: 'fluid-wave 15s infinite',
      }}
    >
      <div className="relative text-left">
        {/* Animated Blob Text Container */}
        {/* Blob Text Container */}
        <div
          className={`transform transition-all duration-500 ${
            isTransitioning ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"
          } p-20 shadow-lg max-w-xl mx-auto bg-custom-blue`} // Increased padding and max width
          style={{
            clipPath: "url(#blob)", // Blob shape using SVG clipPath
            marginLeft: '2rem',
          }}
        >
          <h2 className="text-4xl font-bold">{texts[currentImage].title}</h2> {/* Increased font size for the title */}
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
              d="M0.2,0.1 C0.45,-0.1,0.75,0.2,0.85,0.35 C0.95,0.5,0.85,0.85,0.6,0.95 C0.35,1,0.15,0.85,0.05,0.6 C-0.05,0.35,0.1,0.15,0.2,0.1"
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
