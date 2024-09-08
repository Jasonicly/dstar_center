import React from 'react';
import { FaSchool, FaChalkboardTeacher, FaRobot, FaSun } from 'react-icons/fa';

function ProgramsPage() {
  return (
    <section 
    className="min-h-screen bg-custom-pearl-gray flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center" 
    style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL}/Background/Whitelightened.png)`, 
        backgroundSize: '50%' // Adjust the percentage as needed
    }}
    >
      <div className="max-w-screen-xl mx-auto px-4">

        <div className="flex flex-col items-center justify-center mb-16">
          <img 
            src={`${process.env.PUBLIC_URL}/Icons/AdventureICON.PNG`} 
            alt="Icon" 
            className="w-48 h-42 transform scale-150 -translate-y-2 mb-4"
          />
          <h1 
            className="text-5xl font-extrabold text-center text-custom-palmhouse" 
            style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}
          >
            Programs We Offer
          </h1>
        </div>

        {/* Program 1: Before After School Care */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="order-last md:order-first">
            <h2 className="text-4xl font-bold text-custom-misty-red mb-4">After School Care</h2>
            <p className="text-lg text-gray-700">
              DStar provides safe and supervised before-after school care to support working parents. 
              Our program helps children develop social skills, complete homework, and participate in enriching activities, all under the care of experienced staff.
            </p>
          </div>
          <div className="flex justify-center">
            <FaSchool className="text-custom-misty-red text-9xl" />
          </div>
        </div>

        {/* Program 2: Tuition Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="flex justify-center">
            <FaChalkboardTeacher className="text-custom-blue text-9xl" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-custom-blue mb-4">Tuition Service</h2>
            <p className="text-lg text-gray-700">
              From Primary 1 onwards, our qualified tutors offer personalized tuition services. 
              We focus on academic excellence, ensuring each child’s unique learning needs are met with tailored support, taught by highly qualified teachers.
            </p>
          </div>
        </div>

        {/* Program 3: Enrichment Program */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="order-last md:order-first">
            <h2 className="text-4xl font-bold text-custom-palmhouse mb-4">Enrichment Program</h2>
            <p className="text-lg text-gray-700">
              Our enrichment program offers children exciting activities like robotics, creative writing, and arts. 
              These programs foster creativity, innovation, and critical thinking, helping children grow intellectually and emotionally.
            </p>
          </div>
          <div className="flex justify-center">
            <FaRobot className="text-custom-palmhouse text-9xl" />
          </div>
        </div>

        {/* Program 4: School Holiday Program */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <FaSun className="text-custom-misty-red text-9xl" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-custom-misty-red mb-4">School Holiday Program</h2>
            <p className="text-lg text-gray-700">
              Keep your child engaged during the holidays with our full-day holiday programs. 
              Packed with fun and educational activities, our programs help children learn and grow while enjoying their time off from school.
            </p>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div className="bg-custom-goose-gray rounded-lg p-10 shadow-md my-16">
        <div className="flex items-center justify-center mb-8">
          <h1 
            className="text-5xl font-bold text-center text-custom-white" 
            style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}
          >
            Our Services
          </h1>
          <img 
            src={`${process.env.PUBLIC_URL}/Icons/StudyICON.PNG`} 
            alt="Icon" 
            className="w-32 h-34 transform scale-100 -translate-y-2 ml-2"
          />
        </div>
        <p className="text-gray-700 text-center mb-8 -mt-10">
          We offer a comprehensive range of services designed to cater to your child's academic and personal needs:
        </p>
        <div className="grid grid-cols-2 gap-8"> {/* Changed to single column layout */}
          
          {/* Academic Support Card */}
          <div className="p-6 bg-custom-cloud rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-bold">Academic Support</h3>
            <p className="mt-2 text-gray-700">
              Our team of dedicated educators will guide your child through their homework assignments, assist with spelling and worksheets, and ensure that they grasp key concepts to excel in their studies.
            </p>
          </div>

          {/* Transportation Card */}
          <div className="p-6 bg-custom-cloud rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-bold">Transportation</h3>
            <p className="mt-2 text-gray-700">
              We provide a convenient school pick-up service and ensure a safe commute to our centre. We also offer transportation to nearby tuition centers within walking distance (less than 10 minutes).
            </p>
          </div>

          {/* Nutritious Meals Card */}
          <div className="p-6 bg-custom-cloud rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-bold">Nutritious Meals</h3>
            <p className="mt-2 text-gray-700">
              Your child's health is our priority. Our on-site Centre Aunty prepares delicious and balanced meals, with a changing menu every week to introduce variety and promote healthy eating habits.
            </p>
          </div>

          {/* Holiday Care Card */}
          <div className="p-6 bg-custom-cloud rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-bold">Holiday Care</h3>
            <p className="mt-2 text-gray-700">
              During school holidays and other closure days, we offer a full day stay option at the centre. Please note that a surcharge of $4.50 per day will be levied for stays exceeding 6 hours.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default ProgramsPage;
