import React from 'react';
import { FaSchool, FaChalkboardTeacher, FaRobot, FaSun } from 'react-icons/fa';

function ProgramsPage() {
  return (
    <section 
    className="min-h-screen bg-custom-pearl-gray flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center" 
    style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL}/Background/Greylightened.png)`, 
        backgroundSize: '100%', 
        backgroundPosition: 'center',
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
            className="text-6xl font-extrabold text-center text-custom-palmhouse" 
            style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}
          >
            Our Services
          </h1>
        </div>

        {/* Program 1: Before After School Care */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center rounded-lg border-black-2 shadow-md p-8" 
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }} // Assuming custom-pearl-white is white
        >
          <div className="order-last md:order-first">
            <h2 className="text-4xl font-bold text-custom-misty-red mb-4">After School Care</h2>
            <p className="text-lg text-gray-700">
              At DStar EduCentre, we are committed to nurturing the next generation of leaders and innovators through our carefully designed after-school care program. Our mission is to create a supportive, stimulating environment that enhances your child’s growth beyond the classroom. We offer:
            </p>

            <ul className="list-disc list-inside text-lg text-gray-700 my-4">
              <li><strong>Social skill development</strong>: Group activities and collaborative projects that build friendships and confidence.</li>
              <li><strong>Personalized academic support</strong>: Experienced teachers help with school homework, offering tailored guidance.</li>
              <li><strong>Creative enrichment</strong>: Activities like arts and presentations to spark curiosity and a love of learning.</li>
              <li><strong>Physical activity</strong>: Outdoor play and sports to promote health, teamwork, and fun.</li>
              <li><strong>Library visits</strong>: Encouraging a passion for reading with access to a diverse range of books.</li>
            </ul>

            <p className="text-lg text-gray-700">
              Our caring teachers provide individualized attention, ensuring children thrive academically, socially, and emotionally.
            </p>

          </div>
          <div className="flex justify-center">
            <FaSchool className="text-custom-misty-red text-9xl" />
          </div>
        </div>

        {/* Program 2: Tuition Service */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center rounded-lg border-black-2 shadow-md p-8" 
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }} // Assuming custom-pearl-white is white
        >
          <div className="flex justify-center">
            <FaChalkboardTeacher className="text-custom-blue text-9xl" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-custom-blue mb-4">Tuition Service</h2>
            <p className="text-lg text-gray-700">
              At DStar EduCentre, we provide dedicated tuition services starting from Primary 1 and continuing through all grade levels. Our approach focuses on small group tuition to ensure personalized attention and effective learning. By keeping our class sizes small, we allow our experienced tutors to give each student the support they need to excel academically.
            </p>

            <ul className="list-disc list-inside text-lg text-gray-700 my-4">
              <li><strong>Small group tuition</strong>: Personalized attention and tailored lessons for effective learning.</li>
              <li><strong>Experienced tutors</strong>: Our tutors create engaging and effective learning experiences that help students grasp challenging concepts.</li>
              <li><strong>Affordable rates</strong>: We believe in providing quality education while keeping costs manageable for families.</li>
            </ul>

            <p className="text-lg text-gray-700">
              With our small group tuition, experienced tutors, and affordable fees, DStar is dedicated to helping students succeed and reach their full potential.
            </p>

          </div>
        </div>

        {/* Program 3: Enrichment Program */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center rounded-lg border-black-2 shadow-md p-8" 
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }} // Assuming custom-pearl-white is white
        >
          <div className="order-last md:order-first">
            <h2 className="text-4xl font-bold text-custom-palmhouse mb-4">Enrichment Program</h2>
            <p className="text-lg text-gray-700">
              Our enrichment program is designed to ignite curiosity and foster creativity through a variety of engaging courses. We offer specialized classes in creative writing and an integrated robotics and coding program, each crafted to inspire and develop essential skills in young learners.
            </p>

            <ul className="list-disc list-inside text-lg text-gray-700 my-4">
              <li><strong>Creative Writing</strong>: Students enhance their writing skills and build confidence while exploring the joy of storytelling.</li>
              <li><strong>Robotics and Coding</strong>: Hands-on activities that combine technology with programming to develop technical skills and teamwork.</li>
            </ul>

            <p className="text-lg text-gray-700">
              Our enrichment program helps students discover new passions and develop essential skills in a dynamic and interactive environment.
            </p>

          </div>
          <div className="flex justify-center">
            <FaRobot className="text-custom-palmhouse text-9xl" />
          </div>
        </div>

        {/* Program 4: School Holiday Program */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center rounded-lg border-black-2 shadow-md p-8" 
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }} // Assuming custom-pearl-white is white
        >
          <div className="flex justify-center">
            <FaSun className="text-custom-misty-red text-9xl" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-custom-misty-red mb-4">School Holiday Program</h2>
            <p className="text-lg text-gray-700">
              Our School Holiday Program offers a full-day experience designed to keep students engaged and learning during school breaks. This comprehensive program blends educational and recreational activities to ensure children enjoy their time off while gaining valuable skills.
            </p>

            <ul className="list-disc list-inside text-lg text-gray-700 my-4">
              <li><strong>Engaging activities</strong>: Creative projects, hands-on experiments, and workshops to stimulate learning.</li>
              <li><strong>Social interaction</strong>: Team-building exercises, outdoor games, and group activities that help build friendships.</li>
              <li><strong>Excursions</strong>: Educational trips that provide real-world experiences to complement classroom learning.</li>
            </ul>

            <p className="text-lg text-gray-700">
              Our School Holiday Program provides a dynamic and enjoyable experience, helping students return to school refreshed and ready for new challenges.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramsPage;
