import React from 'react';

const MainObjective = () => {
  return (
    <>
      <section className="pt-16 pb-10 bg-custom-pearl-gray flex items-center justify-center">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center pt-12">
          {/* Image Section */}
          <div className="w-full md:w-2/3 flex justify-center mb-8 md:mb-0">
            <div className="rounded-full overflow-hidden w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 flex-shrink-0 relative animate-fluid-wave">
              {/* Animated Circle Border */}
              <div className="absolute inset-0 w-full h-full rounded-full border-4 border-blue-300 animate-rotate-slow" />
              <img
                src={`${process.env.PUBLIC_URL}/Photos/20240701_141845(0).jpg`}
                alt="Main Objective"
                className="w-full h-full object-cover transform scale-150"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-red-500 text-sm uppercase mb-2 break-words">Welcome to DStar</h2>
            <h1 className="text-6xl font-bold mb-4 text-orange-600 break-words">OUR MAIN OBJECTIVE</h1>
            <p className="text-lg text-gray-700 mb-4 break-words">
              At Dstar, our mission is to nurture the next generation of leaders and innovators. We provide comprehensive support, including high-quality after school programs, hands-on activities, and personalized mentorship. We focus on building resilience, adaptability, and real-world experience to help young individuals develop personally and professionally. Through teamwork, networking, and a growth mindset, we equip them with essential resources to reach their full potential. By recognizing and celebrating achievements, we inspire and motivate them toward greatness, shaping a brighter future for tomorrow’s achievers.
            </p>
            <p className="text-lg text-gray-700 italic break-words">
              "Children must be taught how to think, not what to think." — Margaret Mead
            </p>
          </div>
        </div>
      </section>

      {/* Text Below the Section */}
      <div className="text-center bg-custom-pearl-gray">
        <h1 className="text-3xl font-bold text-custom-blue">
          DEVELOPING FUTURE STARS : NURTURING THE NEXT GENERATION OF LEADERS AND INNOVATORS
        </h1>
      </div>
    </>
  );
}

export default MainObjective;
