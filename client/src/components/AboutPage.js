import React from 'react';
import { motion } from 'framer-motion'; 
import { FaBus, FaSchool, FaShieldAlt, FaClipboardCheck, FaVideo, FaShower, FaAppleAlt, FaGamepad, FaBook, FaBell, FaPaintBrush, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTiktok, FaClock } from 'react-icons/fa';

const AboutPage = () => {
    const animateOnScroll = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    };

  return (
    <section 
        className="py-16 bg-cover bg-center" 
        style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL}/Background/Greylightened.png)`, 
            backgroundSize: '100%'
        }}
    >

      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-left">
        <div className="flex items-center justify-center">
        <div className="flex items-center justify-center mb-16">
          <h1 
            className="text-6xl font-extrabold text-center text-custom-beige" 
            style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}
          >
            ABOUT US
          </h1>
          <img 
            src={`${process.env.PUBLIC_URL}/Icons/PicnicICON.PNG`} 
            alt="Icon" 
            className="w-32 h-32 transform scale-150 -translate-y-2 ml-10"
          />
        </div>
        </div>
        
        {/* Philosophy Section (si gud shit)*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="flex items-center justify-center">
            <img src={`${process.env.PUBLIC_URL}/Photos/20240529_143444.jpg`} alt="Philosophy" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <motion.div
            className="bg-custom-primrose p-10 rounded-lg shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            variants={animateOnScroll}
          >
            <h1 className="text-5xl font-extrabold text-custom-misty-red mb-6 text-center transition-colors duration-300 hover:text-custom-orange">
              Our Philosophy
            </h1>
            <p className="text-xl text-gray-800 max-w-xl mx-auto text-center">
              At DStar, we emphasize character development by fostering a love for learning. 
              We believe in the importance of learning, playing, and growing together to build a solid foundation for the future.
            </p>
          </motion.div>
        </div>

        {/* Company Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            className="bg-custom-beige p-10 rounded-lg shadow-md order-last md:order-first"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            variants={animateOnScroll}
          >
            <h1 className="text-5xl font-extrabold text-custom-palmhouse mb-6 text-center transition-opacity duration-300 hover:opacity-80">
              About Our Company
            </h1>
            <p className="text-xl text-gray-700 max-w-xl mx-auto text-center">
              DStar Pte Ltd is a subsidiary company of Smart Edu Group. Smart Edu Group has many years of experience in the education industry, particularly in executive training and early childhood education. Our group consists of childcare and student care centers locally and across Asia.
            </p>
          </motion.div>
          <div className="flex items-center justify-center">
            <img 
              src={`${process.env.PUBLIC_URL}/Photos/IMG-20240719-WA0043.jpg`} 
              alt="Company Profile" 
              className="rounded-lg shadow-lg w-full object-cover object-center" 
              style={{ height: '60vh' }} 
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="flex items-center justify-center">
            <img src={`${process.env.PUBLIC_URL}/Photos/20240808_105834.jpg`} alt="Mission" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <motion.div
            className="bg-custom-cloud p-10 rounded-lg shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            variants={animateOnScroll}
          >
            <h1 className="text-5xl font-extrabold text-custom-misty-red mb-6 text-center transition-transform duration-300 hover:scale-105">
              Our Commitment
            </h1>
            <p className="text-xl text-gray-700 max-w-xl mx-auto text-center">
            At DStar EduCentre, we understand the significance of a strong educational foundation in a child's life. Our mission is to inspire and empower your child to excel academically, socially, and emotionally, while ensuring their safety and well-being at all times.
            </p>
          </motion.div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            className="bg-custom-pearl-gray p-10 rounded-lg shadow-md order-last md:order-first"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            variants={animateOnScroll}
          >
            <h1 className="text-5xl font-extrabold text-custom-blue mb-6 text-center transition-transform duration-300 hover:scale-105">
              Our Aspiration
            </h1>
            <p className="text-xl text-gray-700 max-w-xl mx-auto text-center">
              We aim to be recognized internationally for our excellence in education, creating a positive and safe learning environment that supports lifelong learning.
            </p>
          </motion.div>
          <div className="flex items-center justify-center">
            <img 
              src={`${process.env.PUBLIC_URL}/Photos/IMG-20240719-WA0045.jpg`} 
              alt="Vision" 
              className="rounded-lg shadow-lg w-full object-cover object-center" 
              style={{ height: '65vh' }} 
            />
          </div>
        </div>
        
{/* Key Features Section */}
<motion.div
          className="mb-16 bg-custom-pearl-gray p-10 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-16">
            <h1 className="text-7xl font-extrabold text-black mb-8 text-center transition-opacity duration-300 hover:opacity-80 text-custom-misty-red">
              Our Key Features
            </h1>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
              {/* Feature Cards */}
              <div className="p-6 bg-white rounded-lg shadow-lg relative md:translate-y-10 hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="absolute top-[-30px] left-5 bg-orange-500 p-4 rounded-full">
                  <FaBus className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mt-8">Pickup Services from Local Primary Schools</h3>
                <p className="mt-2 text-gray-700">Children are safely fetched from primary schools by our service staff.</p>
              </div>
        
              <div className="p-6 bg-white rounded-lg shadow-lg relative hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="absolute top-[-30px] left-5 bg-blue-500 p-4 rounded-full">
                  <FaSchool className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mt-8">School Bus Drop-off Point Pickup</h3>
                <p className="mt-2 text-gray-700">We safely pick up children from designated drop-off points.</p>
              </div>
        
              <div className="p-6 bg-white rounded-lg shadow-lg relative md:translate-y-10 hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="absolute top-[-30px] left-5 bg-purple-500 p-4 rounded-full">
                  <FaShieldAlt className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mt-8">Safe and Clean Environment</h3>
                <p className="mt-2 text-gray-700">We provide a clean and safe environment for your child's well-being.</p>
              </div>
        
              <div className="p-6 bg-white rounded-lg shadow-lg relative hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="absolute top-[-30px] left-5 bg-pink-500 p-4 rounded-full">
                  <FaClipboardCheck className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mt-8">Homework Supervision</h3>
                <p className="mt-2 text-gray-700">Full-time tutors supervise homework and provide guidance.</p>
              </div>
        
              <div className="p-6 bg-white rounded-lg shadow-lg relative md:translate-y-10 hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="absolute top-[-30px] left-5 bg-green-500 p-4 rounded-full">
                  <FaVideo className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mt-8">24-Hour CCTV Surveillance</h3>
                <p className="mt-2 text-gray-700">Our facilities are monitored 24/7 to ensure safety.</p>
              </div>
        
              <div className="p-6 bg-white rounded-lg shadow-lg relative hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="absolute top-[-30px] left-5 bg-yellow-500 p-4 rounded-full">
                  <FaShower className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mt-8">Shower Facilities</h3>
                <p className="mt-2 text-gray-700">Hygienic and comfortable shower rooms are available.</p>
              </div>
        
              <div className="p-6 bg-white rounded-lg shadow-lg relative md:translate-y-10 hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="absolute top-[-30px] left-5 bg-red-500 p-4 rounded-full">
                  <FaAppleAlt className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mt-8">Balanced Meals and Snacks</h3>
                <p className="mt-2 text-gray-700">We serve healthy meals and snacks to support growth.</p>
              </div>
        
              <div className="p-6 bg-white rounded-lg shadow-lg relative hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="absolute top-[-30px] left-5 bg-indigo-500 p-4 rounded-full">
                  <FaGamepad className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mt-8">Games and Playtime</h3>
                <p className="mt-2 text-gray-700">Children enjoy engaging games and activities during playtime.</p>
              </div>
        
              <div className="p-6 bg-white rounded-lg shadow-lg relative md:translate-y-10 hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="absolute top-[-30px] left-5 bg-purple-500 p-4 rounded-full">
                  <FaBook className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mt-8">Well-Stocked Library</h3>
                <p className="mt-2 text-gray-700">Our library fosters curiosity and learning with a wide range of books.</p>
              </div>
        
              <div className="p-6 bg-white rounded-lg shadow-lg relative hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="absolute top-[-30px] left-5 bg-teal-500 p-4 rounded-full">
                  <FaBell className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mt-8">Regular Updates for Parents</h3>
                <p className="mt-2 text-gray-700">We keep parents informed with frequent updates on their child's progress.</p>
              </div>
        
              <div className="p-6 bg-white rounded-lg shadow-lg relative md:translate-y-10 md:col-start-2 -mt-10 hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="absolute top-[-30px] left-5 bg-orange-500 p-4 rounded-full">
                  <FaPaintBrush className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mt-8">Programs and Activities</h3>
                <p className="mt-2 text-gray-700">
                  We offer self-study, arts & crafts, sports, and educational programs to enrich children's lives.
                </p>
              </div>
            </div>
          </div>
        </motion.div>


    {/* Contact Us Section */}
    <div className="bg-custom-white p-10 rounded-lg shadow-md mt-16">
    <h1 className="text-6xl font-extrabold text-custom-blue mb-6 text-center">
        Contact Us
    </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone Number Section */}
            <div className="text-center flex flex-col items-center">
                <FaPhoneAlt className="text-custom-blue text-5xl mb-4" /> {/* Icon above section */}
                <h3 className="text-xl font-bold">Phone Number</h3>
                <p className="text-lg text-gray-700">(+65) 9743 6961</p>
            </div>

            {/* Email Section */}
            <div className="text-center flex flex-col items-center">
            <FaEnvelope className="text-custom-blue text-5xl mb-4" /> {/* Icon above section */}
            <h3 className="text-xl font-bold">Email</h3>
            <p className="text-lg text-gray-700">dstar.jw@gmail.com</p>
            </div>

            {/* Location Section */}
            <div className="text-center flex flex-col items-center">
            <FaMapMarkerAlt className="text-custom-blue text-5xl mb-4" /> {/* Icon above section */}
            <h3 className="text-xl font-bold">Location</h3>
            <p className="text-lg text-gray-700">Blk 729 Jurong West Avenue 5, #B1-214, Singapore 640729</p>
            </div>

            {/* Operating Hours Section */}
            <div className="text-center flex flex-col items-center">
            <FaClock className="text-custom-blue text-5xl mb-4" /> {/* Icon above section */}
            <h3 className="text-xl font-bold">Operating Hours</h3>
            <p className="text-lg text-gray-700">Monday to Friday: 7.00am – 7.00pm</p>
            <p className="text-lg text-gray-700">Saturday & Sunday: Closed</p>
            </div>
        </div>



          {/* Social Media Section */}
          <div className="mt-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://www.facebook.com/DStarEduCentre" className="text-custom-blue hover:text-blue-600">
                <FaFacebookF className="text-3xl" />
              </a>
              <a href="https://www.instagram.com/dstar_jw/" className="text-custom-blue hover:text-pink-500">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="https://www.tiktok.com/@dstar.jw" className="text-custom-blue hover:text-black">
                <FaTiktok className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
