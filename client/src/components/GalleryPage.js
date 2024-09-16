import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

// Helper function to import all images from src/assets/photos folder dynamically
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

// Import all images from the src/assets/photos folder
const images = importAll(require.context('../assets/photos', false, /\.(png|jpe?g|svg)$/));

function GalleryPage() {
  // Get image entries as an array and sort them by key (filename)
  const imageEntries = Object.entries(images).sort((a, b) => b[0].localeCompare(a[0])); // Newest first based on filename

  // State for lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // State for limiting displayed images
  const [visibleImages, setVisibleImages] = useState(15); // Initial number of images to show

  // Open lightbox
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // Close lightbox
  const closeLightbox = () => {
    setIsOpen(false);
  };

  // Go to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageEntries.length);
  };

  // Go to the previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageEntries.length) % imageEntries.length);
  };

  // Load more images
  const loadMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 8);
  };

  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Background/Yellow.png)`,
        backgroundSize: '100%' // Adjust the percentage as needed
      }}
    >
      {/* Gallery Container */}
      <div className="bg-custom-white p-8 rounded-lg shadow-lg max-w-screen-lg mx-auto">
        {/* Gallery Header */}
        <header className="text-center py-8">
          <div className="flex flex-col items-center justify-center mb-16">
            <h1
              className="text-6xl font-bold text-custom-blue -mt-5"
              style={{
                textShadow:
                  '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
              }}
            >
              GALLERY
            </h1>
          </div>
        </header>

        {/* Gallery Grid */}
        <div className="px-4 -mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {imageEntries.slice(0, visibleImages).map(([imageName, imageSrc], index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => openLightbox(index)} // Open lightbox on click
              >
                {/* Image Card */}
                <img
                  src={imageSrc}
                  alt={imageName.replace(/\.[^/.]+$/, '')} // Remove file extension for alt text
                  className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
                />
              </div>
            ))}

            {/* Contribution Card */}
            <div className="relative group bg-custom-goose-gray px-4 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:animate-shake focus:animate-shake cursor-pointer duration-300">
              <h2 className="text-lg font-bold mb-2 text-center">Want to contribute your photos?</h2>
              <div className="flex justify-center">
                <img 
                  src={`${process.env.PUBLIC_URL}/Icons/PhotoshootICON.PNG`} 
                  alt="Icon" 
                  className="w-24 h-24 transform scale-130 -translate-y-2"
                />
              </div>
              <p className="text-sm text-gray-700 mb-4 -mt-2 text-center">
                Email us your best shots and you might see them featured in our gallery!
              </p>
              <p className="text-center text-custom-blue font-semibold -mt-2">dstar.jw@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Show "Load More" Button only if there are more images to load */}
        {visibleImages < imageEntries.length && (
          <div className="text-center py-8">
            <button
              onClick={loadMoreImages}
              className="px-4 py-2 bg-custom-blue text-white rounded-lg shadow-lg hover:bg-custom-misty-red transition duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeLightbox}
            >
              <FaTimes />
            </button>

            {/* Image */}
            <img
              src={imageEntries[currentIndex][1]}
              alt={imageEntries[currentIndex][0]}
              className="max-w-full max-h-screen object-contain rounded-lg shadow-lg"
            />

            {/* Previous button */}
            <button
              className="absolute top-1/2 left-4 text-white text-2xl transform -translate-y-1/2"
              onClick={goToPrevious}
            >
              <FaChevronLeft />
            </button>

            {/* Next button */}
            <button
              className="absolute top-1/2 right-4 text-white text-2xl transform -translate-y-1/2"
              onClick={goToNext}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default GalleryPage;
