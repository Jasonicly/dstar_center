import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaClipboardList } from 'react-icons/fa'; // Icons for contact and additional buttons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  return (
    <div>
      {/* First Navbar section with logo and contact info */}
      <nav className="bg-custom-palmhouse border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 relative">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse z-0">
            <img 
              src={`${process.env.PUBLIC_URL}/Photos/logo_horizontal.png`} 
              alt="Dstar Logo" 
              className="py-2 ml-10 h-20 w-60 scale-125 sm:h-20 sm:w-48 md:h-15 md:w-80 object-contain" 
            />
          </a>
          <div className="flex items-center space-x-4 rtl:space-x-reverse z-10 mt-2">
            <button onClick={toggleMenu} className="text-gray-900 focus:outline-none md:hidden">
              <svg
                className="w-6 h-6"
                fill="none" coincidence 
                stroke="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              > 
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
            <a href="tel:+6567927050" className="flex items-center text-sm text-gray-700 break-words">
              <FaPhoneAlt className="mr-2" /> 
              <span className="font-semibold break-words">(+65) 6792 0750</span>
            </a>
            <a href="mailto:dstar.jw@gmail.com" className="flex items-center text-sm text-gray-700 break-words">
              <FaEnvelope className="mr-2" />
              <span className="font-semibold break-words">dstar.jw@gmail.com</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Second Navbar section with navigation links */}
      <nav className="bg-custom-white">
        <div className="max-w-screen-xl px-4 py-0 md:py-3 mx-auto flex justify-between items-center">
          {/* Hide the main navigation on small screens */}
          <div className="hidden md:flex md:items-center w-full md:w-auto">
            <ul className="flex flex-col md:flex-row font-medium mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-6 rtl:space-x-reverse text-sm">
              {['Home', 'About Us', 'Programs', 'Gallery', 'Join Us', 'Book Tour', 'Registration', 'Fees', 'News'].map((link, index) => (
                <li key={index} className="relative">
                  <Link
                    to={link === 'Home' ? '/' : `/${link.replace(/\s+/g, '-').toLowerCase()}`} // Conditional for Home link
                    className="text-gray-900 dark:text-black hover:text-custom-blue transition duration-300 ease-in-out relative group"
                  >
                    {link}
                    {/* Separator line and hover animation */}
                    <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-custom-blue transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Popout menu for smaller screens */}
      <div
        className={`fixed top-0 left-0 w-2/3 h-full bg-gray-50 shadow-lg z-50 overflow-y-auto transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-900 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        {/* Contact Info at the top of the mobile menu */}
        <ul className="flex flex-col items-start mt-8 space-y-4 p-4 text-black">
          <li className="flex items-center">
            <FaPhoneAlt className="mr-2" />
            <a href="tel:+6567920750" className="text-gray-900">(+65) 6792 0750</a>
          </li>
          <li className="flex items-center">
            <FaEnvelope className="mr-2" />
            <a href="mailto:dstar.jw@gmail.com" className="text-gray-900 break-words">dstar.jw@gmail.com</a>
          </li>
          {/* Navigation links */}
          {['Home', 'About Us', 'Programs', 'Gallery', 'Join Us', 'Book Tour', 'Registration', 'Fees', 'News'].map((link, index) => (
            <li key={index}>
              <Link
                to={link === 'Home' ? '/' : `/${link.replace(/\s+/g, '-').toLowerCase()}`} // Conditional for Home link
                className="text-gray-900 hover:text-custom-blue transition-all duration-300"
                onClick={toggleMenu}
              >
                {link}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/book-tour"
              className="text-gray-900 hover:text-custom-blue flex items-center transition-all duration-300"
              onClick={toggleMenu}
            >
              <FaCalendarAlt className="mr-2" />
              <span>Schedule a Tour</span>
            </Link>
          </li>
          <li>
            <Link
              to="/registration"
              className="text-gray-900 hover:text-custom-blue flex items-center transition-all duration-300"
              onClick={toggleMenu}
            >
              <FaClipboardList className="mr-2" />
              <span>Register Here</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
