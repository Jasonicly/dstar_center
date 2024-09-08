import React from 'react';
import { FaBus, FaSchool, FaShieldAlt, FaClipboardCheck, FaVideo, FaShower, FaAppleAlt, FaGamepad, FaBook, FaBell, FaPaintBrush, FaGlobe } from 'react-icons/fa'; // Icons for the features

function WhatMakesUsSpecial() {
  return (
    <section 
        className="py-16 bg-cover bg-center" 
        style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL}/Background/Bluelightened.png)`, 
            backgroundSize: '100%' // Adjust the percentage as needed
        }}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:flex">
        
        {/* Left Sticky Section */}
        <div className="md:w-1/3 flex flex-col items-center text-center mb-8 md:mb-0 pr-12">  {/* Added pr-12 for more space */}
          <div className="sticky top-20">
            <h2 className="text-4xl font-bold mb-4">KEY FEATURES OF THE CENTRE</h2>
            <div className="flex justify-center items-center">
              <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
                <img 
                  src={`${process.env.PUBLIC_URL}/Photos/IMG-20240612-WA0067.jpg`} // Replace with your image
                  alt="Special"
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>


        {/* Right Features Section */}
                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature Cards */}
          <div className="p-6 bg-white rounded-lg shadow-lg relative md:translate-y-10 hover:shadow-xl hover:scale-105 transition-transform duration-300">  {/* Shift this container down */}
            <div className="absolute top-[-30px] left-5 bg-orange-500 p-4 rounded-full">
              <FaBus className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mt-8">Fetching Service from Primary School</h3>
            <p className="mt-2 text-gray-700">We ensure that children are safely fetched from primary schools by our service staff.</p>
          </div>
        
          <div className="p-6 bg-white rounded-lg shadow-lg relative hover:shadow-xl hover:scale-105 transition-transform duration-300">  {/* Leave this container as is */}
            <div className="absolute top-[-30px] left-5 bg-blue-500 p-4 rounded-full">
              <FaSchool className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mt-8">Fetching Service from School Bus Drop-off Point</h3>
            <p className="mt-2 text-gray-700">Children can be safely picked up from designated drop-off points.</p>
          </div>
        
          <div className="p-6 bg-white rounded-lg shadow-lg relative md:translate-y-10 hover:shadow-xl hover:scale-105 transition-transform duration-300">  {/* Shift this container down */}
            <div className="absolute top-[-30px] left-5 bg-purple-500 p-4 rounded-full">
              <FaShieldAlt className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mt-8">Safe and Clean Environment</h3>
            <p className="mt-2 text-gray-700">We provide a clean and safe environment that ensures your child's health and safety.</p>
          </div>
        
          <div className="p-6 bg-white rounded-lg shadow-lg relative hover:shadow-xl hover:scale-105 transition-transform duration-300">  {/* Leave this container as is */}
            <div className="absolute top-[-30px] left-5 bg-pink-500 p-4 rounded-full">
              <FaClipboardCheck className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mt-8">Homework Supervision by Tutors</h3>
            <p className="mt-2 text-gray-700">Our experienced full-time tutors ensure that homework is supervised and guidance is provided.</p>
          </div>
        
          <div className="p-6 bg-white rounded-lg shadow-lg relative md:translate-y-10 hover:shadow-xl hover:scale-105 transition-transform duration-300">  {/* Shift this container down */}
            <div className="absolute top-[-30px] left-5 bg-green-500 p-4 rounded-full">
              <FaVideo className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mt-8">24 Hours CCTV Surveillance</h3>
            <p className="mt-2 text-gray-700">We have 24-hour CCTV monitoring to ensure the safety of your child.</p>
          </div>
        
          <div className="p-6 bg-white rounded-lg shadow-lg relative hover:shadow-xl hover:scale-105 transition-transform duration-300">  {/* Leave this container as is */}
            <div className="absolute top-[-30px] left-5 bg-yellow-500 p-4 rounded-full">
              <FaShower className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mt-8">Shower Facilities</h3>
            <p className="mt-2 text-gray-700">Our facility is equipped with shower rooms to maintain hygiene and comfort.</p>
          </div>
        
          <div className="p-6 bg-white rounded-lg shadow-lg relative md:translate-y-10 hover:shadow-xl hover:scale-105 transition-transform duration-300">  {/* Shift this container down */}
            <div className="absolute top-[-30px] left-5 bg-red-500 p-4 rounded-full">
              <FaAppleAlt className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mt-8">Balanced Meals and Snacks</h3>
            <p className="mt-2 text-gray-700">We offer healthy and balanced meals and snacks to support your child's growth and development.</p>
          </div>
        
          <div className="p-6 bg-white rounded-lg shadow-lg relative hover:shadow-xl hover:scale-105 transition-transform duration-300">  {/* Leave this container as is */}
            <div className="absolute top-[-30px] left-5 bg-indigo-500 p-4 rounded-full">
              <FaGamepad className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mt-8">Games and Play Time</h3>
            <p className="mt-2 text-gray-700">Children can enjoy games and playtime in our well-stocked play areas.</p>
          </div>
        
          <div className="p-6 bg-white rounded-lg shadow-lg relative md:translate-y-10 hover:shadow-xl hover:scale-105 transition-transform duration-300">  {/* Shift this container down */}
            <div className="absolute top-[-30px] left-5 bg-purple-500 p-4 rounded-full">
              <FaBook className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mt-8">Well-Stocked Library</h3>
            <p className="mt-2 text-gray-700">We provide a well-stocked library that encourages your child's curiosity and reading habits.</p>
          </div>
        
          <div className="p-6 bg-white rounded-lg shadow-lg relative hover:shadow-xl hover:scale-105 transition-transform duration-300">  {/* Leave this container as is */}
            <div className="absolute top-[-30px] left-5 bg-teal-500 p-4 rounded-full">
              <FaBell className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mt-8">Regular Updates for Parents</h3>
            <p className="mt-2 text-gray-700">Parents receive regular updates regarding their child's progress and activities.</p>
          </div>
        
          <div className="p-6 mb-10 bg-white rounded-lg shadow-lg relative md:translate-y-10 hover:shadow-xl hover:scale-105 transition-transform duration-300">  {/* Shift this container down */}
            <div className="absolute top-[-30px] left-5 bg-orange-500 p-4 rounded-full">
              <FaPaintBrush className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mt-8">Programs and Activities</h3>
            <p className="mt-2 text-gray-700">
              Our programs include: Self-study time, Art & Craft, Sports, Moral and Social Education, and exciting excursions and enrichment programs.
            </p>
          </div>
        </div>
        </div>
        </section>
  );
}

export default WhatMakesUsSpecial;
