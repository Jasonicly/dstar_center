import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'; // Importing icons

const CenterLocation = () => {
  return (
    <section className="py-16 bg-custom-goose-gray">
      <div className="min-h-screen-md max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-right">
          <h2 className="text-4xl font-bold">Our Centre Location</h2>
          <p className="mt-4 text-lg text-gray-700">
            Conveniently located in the neighbourhood, <br />our centre is easily accessible to families.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            <strong>Address:</strong> <strong>729 Jurong West Avenue 5, <br />#B1-214, Singapore 640729</strong>
          </p>

          {/* Contact Information */}
          <div className="mt-8 md:text-right text-center">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-4 md:items-end items-center">
              <div className="flex items-center space-x-2 text-lg">
                <FaPhoneAlt className="text-custom-blue" />
                <span>(+65) 6792 7050</span>
              </div>
              <div className="flex items-center space-x-2 text-lg">
                <FaEnvelope className="text-custom-blue" />
                <span>dstar.jw@gmail.com</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 md:text-right text-center">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex justify-center md:justify-end space-x-6">
                <a href="https://www.facebook.com/DStarEduCentre" className="text-custom-blue hover:text-blue-600">
                  <FaFacebookF className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/dstar_jw/" className="text-custom-blue hover:text-pink-500">
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a href="https://www.tiktok.com/@dstar.jw" className="text-custom-blue hover:text-black">
                  <FaTiktok className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full md:w-2/3" style={{ height: '500px' }}> {/* Set 2/3 width for the map */}
        <iframe title="Location map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14362.72122702122!2d103.696451!3d1.348881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da121f1d6dcd09%3A0x46fdd3b5b979d6f5!2sBlk%20729%20Jurong%20West%20Ave%205%2C%20%23B1-214%2C%20Singapore%20640729!5e0!3m2!1sen!2ssg!4v1700000000000"
          width="100%"
          height="500"
          style={{ border: 'none' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
      </div>
    </section>
  );
}

export default CenterLocation;
