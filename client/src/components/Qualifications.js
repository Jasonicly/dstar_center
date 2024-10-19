import React from 'react';

const qualificationsData = [
  {
    title: 'MSF Registered',
    description: 'Registered with the Ministry of Social and Family Development (MSF) to provide licensed child care services.',
    imageUrl: `${process.env.PUBLIC_URL}/Icons/msf.png`, // Replace with an actual image if available
  },
  {
    title: 'SCFA Registered',
    description: 'Approved by the Singapore Children’s Forum Association (SCFA) for quality child care and safety standards.',
    imageUrl: `${process.env.PUBLIC_URL}/Icons/SCFA.png`, // Replace with an actual image if available
  }
  // Add more qualifications as needed
];

const Qualifications = () => {
  return (
    <section className="py-16 bg-custom-goose-gray">
      <div className="max-w-screen-xl mx-auto px-8 flex items-center space-x-6">
        
        {/* Static Icon on the Left Side */}
        <div className="w-1/3 flex justify-center items-center">
          <img
            src={`${process.env.PUBLIC_URL}/Photos/logo_vertical.png`} // Replace with your actual icon path
            alt="Static Icon"
            className="w-48 h-48 object-contain" // Adjust size here
          />
        </div>

        {/* Scroll Track for Qualifications */}
        <div className="w-2/3 overflow-x-auto">
          <div className="flex space-x-4">
            {qualificationsData.map((qualification, index) => (
              <div
                key={index}
                className="min-w-[250px] bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={qualification.imageUrl}
                  alt={qualification.title}
                  className="w-full h-40 object-contain p-4" // Shrinking the icons
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-custom-palmhouse">
                    {qualification.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{qualification.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
