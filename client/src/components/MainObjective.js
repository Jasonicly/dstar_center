import React from 'react';

const MainObjective = () => {
  return (
    <section className="pt-16 pb-10 bg-custom-pearl-gray flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center pt-12">
        {/* Image Section */}
        <div className="w-full md:w-2/3 flex justify-center mb-8 md:mb-0">
          <div className="rounded-full overflow-hidden w-96 h-96 flex-shrink-0 relative animate-fluid-wave"> {/* Increased size */}
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
          <h2 className="text-red-500 text-sm uppercase mb-2">Welcome to DStar</h2>
          <h1 className="text-6xl font-bold mb-4 text-orange-600">OUR MAIN OBJECTIVE</h1>
          <p className="text-lg text-gray-700 mb-4">
            At DStar, we focus on nurturing character development, where learning, play, and growth go hand in hand.
            We believe in fostering curiosity and creativity, promoting independent thinking, and offering personalized learning experiences to meet each child’s unique needs. Our approach encourages children to explore their world, develop essential life skills, and build a strong foundation for future success.
          </p>
          <p className="text-lg text-gray-700 italic">
            "Children must be taught how to think, not what to think." — Margaret Mead
          </p>
        </div>
      </div>
    </section>
  );
}

export default MainObjective;