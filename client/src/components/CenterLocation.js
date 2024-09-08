import React from 'react';

const CenterLocation = () => {
  return (
    <section className="py-16 bg-custom-goose-gray">
    <div className="min-h-screen-md max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 text-right">
          <h2 className="text-4xl font-bold">Our Center Location</h2>
          <p className="mt-4 text-lg text-gray-700">
            Conveniently located in the heart of the neighbourhood, our center is easily accessible to families.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            <strong>Address:</strong> Blk 729 Jurong West Avenue 5, #B1-214, Singapore 640729
          </p>
        </div>

        {/* Map Section */}
        <div className="w-full md:w-2/3" style={{ height: '500px' }}> {/* Set 2/3 width for the map */}
          <iframe
            src="https://storage.googleapis.com/maps-solutions-yqc7on83fu/locator-plus/le3v/locator-plus.html"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 'none' }}
          >
          </iframe>
        </div>
      </div>
    </section>
  );
}

export default CenterLocation;
