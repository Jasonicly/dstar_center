import React from 'react';
import GalleryPage from '../components/GalleryPage';
import WhatsAppButton from '../components/WhatsAppButton';

function Gallery() {
  return (
    <div className="home">
      <GalleryPage /> 
      <WhatsAppButton />
    </div>
  );
}

export default Gallery;
