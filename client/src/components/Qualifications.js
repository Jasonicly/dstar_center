import React from 'react';

const qualificationsData = [
  {
    title: 'MSF Registered',
    description: 'Registered with the Ministry of Social and Family Development (MSF) to provide licensed child care services.',
    imageUrl: `${process.env.PUBLIC_URL}/Icons/msf.png`, 
  },
  {
    title: 'SCFA Registered',
    description: 'Approved by the Singapore Children’s Forum Association (SCFA) for quality child care and safety standards.',
    imageUrl: `${process.env.PUBLIC_URL}/Icons/SCFA.png`, 
  }
];

const Qualifications = () => {
  return (
    <section className="py-16 bg-custom-goose-gray">
      <div className="max-w-screen-xl mx-auto px-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
        
        {/* Static Icon (On top for mobile, left for larger screens) */}
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <img
            src={`${process.env.PUBLIC_URL}/Photos/logo_vertical.png`} 
            alt="Static Icon"
            className="w-48 h-48 object-contain"
          />
        </div>

        {/* Scroll Track for Qualifications */}
        <div className="w-full md:w-2/3 overflow-x-auto overflow-y-hidden">
          <div className="flex space-x-4 flex-nowrap">
            {qualificationsData.map((qualification, index) => (
              <div
                key={index}
                className="min-w-[250px] bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={qualification.imageUrl}
                  alt={qualification.title}
                  className="w-full h-40 object-contain p-4"
                />
                <div className="p-4 whitespace-nowrap">
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
