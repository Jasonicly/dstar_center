import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon

function WhatsAppButton() {
  const phoneNumber = '+6598690812'; // Replace with your desired number
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center hover:bg-green-600 transition duration-300 ease-in-out"
      style={{ zIndex: 1000 }}
    >
      <FaWhatsapp className="text-2xl mr-2" />
      <span className="text-lg font-semibold">WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;
