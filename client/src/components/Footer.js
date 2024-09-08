import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-custom-palmhouse py-8">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo and Contact Info */}
        <div className="flex flex-col space-y-4">
          <img
            src={`${process.env.PUBLIC_URL}/Photos/Dstar_logo.png`}
            alt="DStar Logo"
            className="h-20 w-60"
          />
          <div>
            <p className="text-lg font-semibold text-black">Contact Us:</p>
            <a href="tel:+6597436961" className="text-black hover:underline">
              (+65) 6792 0750
            </a>
            <br />
            <a href="mailto:dstar.jw@gmail.com" className="text-black hover:underline">
              dstar.jw@gmail.com
            </a>
          </div>
        </div>

        {/* Separator */}
        <hr className="md:hidden border-gray-700 my-4" />

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Quick Links</h3>
          <div className="grid grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-black hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-black hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-black hover:underline">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-black hover:underline">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/registration" className="text-black hover:underline">
                  Registration
                </Link>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <Link to="/join-us" className="text-black hover:underline">
                  Join Us
                </Link>
              </li>
              <li>
                <Link to="/book-tour" className="text-black hover:underline">
                  Book a Tour
                </Link>
              </li>
              <li>
                <Link to="/fees" className="text-black hover:underline">
                  Fees
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-black hover:underline">
                  News
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <hr className="md:hidden border-gray-700 my-4" />

        {/* Location, Social Media, and Opening Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Our Location</h3>
          <p className="text-black mb-4">
            Blk 729 Jurong West Avenue 5, #B1-214, Singapore 640729
          </p>

          {/* Opening Hours */}
          <h3 className="text-lg font-semibold mb-4 text-black">Opening Hours</h3>
          <p className="text-black">
            Monday to Friday: 7.00am – 7.00pm
            <br />
            Saturday, Sunday: Closed
          </p>

          {/* Social Media Icons */}
          <div className="mt-6 flex space-x-4">
            <a href="https://www.facebook.com/DStarEduCentre" className="text-black hover:text-blue-600">
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/dstar_jw/" className="text-black hover:text-pink-500">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="https://www.tiktok.com/@dstar.jw" className="text-black hover:text-black">
              <FaTiktok className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Separator */}
      <hr className="border-gray-700 my-8" />

      {/* Copyright Section */}
      <div className="text-center text-black text-sm">
        &copy; 2024 DStar Education Centre. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
