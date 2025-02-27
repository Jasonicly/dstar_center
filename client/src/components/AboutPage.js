import React from 'react';
import { motion } from 'framer-motion'; 
import { FaBus, FaSchool, FaShieldAlt, FaClipboardCheck, FaVideo, FaShower, FaAppleAlt, FaGamepad, FaBook, FaBell, FaPaintBrush, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTiktok, FaCar } from 'react-icons/fa';

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
          {/* <img 
            src={`${process.env.PUBLIC_URL}/Icons/PicnicICON.PNG`} 
            alt="Icon" 
            className="w-32 h-32 transform scale-150 -translate-y-2 ml-10"
          /> */}
        </div>
        </div>
        
        {/* Philosophy Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            className="flex items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            variants={animateOnScroll}
          >
            <img src={`${process.env.PUBLIC_URL}/Photos/20240529_143444.jpg`} alt="Philosophy" className="rounded-lg shadow-lg w-full h-auto" />
          </motion.div>
          <motion.div
            className="bg-custom-primrose p-10 rounded-lg shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            variants={animateOnScroll}
          >
            <h1 className="text-5xl font-extrabold text-orange-400 mb-6 text-center transition-transform duration-300 hover:scale-105">
              Our Philosophy
            </h1>
            <p className="text-xl text-gray-800 max-w-xl mx-auto text-center">
              At Dstar, we understand that each student is unique, with their own strengths, challenges, and interests. Our approach is tailored to meet the individual needs of each student, fostering a love for learning and encouraging personal development. We emphasize holistic care, which includes not only academic support but also emotional and social well-being. We strive to create an environment where students feel valued, motivated, and equipped to face new challenges.
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
            <h1 className="text-5xl font-extrabold text-custom-palmhouse mb-6 text-center transition-transform duration-300 hover:scale-105">
              About Our Company
            </h1>
            <p className="text-xl text-gray-700 max-w-xl mx-auto text-center">
              Founded in 2013, Dstar has been a cornerstone of student support, blending history with a forward-thinking approach. Over the years, our Student Care Centre has earned a reputation for excellence in nurturing young minds and fostering growth. With dedicated service, Dstar has evolved to meet the changing needs of students and families. Our journey began with a vision to create a supportive environment where students could thrive beyond the classroom. From humble beginnings, we've grown into a respected centre known for academic excellence and holistic development.
            </p>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            variants={animateOnScroll}
          >
            <img 
              src={`${process.env.PUBLIC_URL}/Photos/IMG-20240719-WA0043.jpg`} 
              alt="Company Profile" 
              className="rounded-lg shadow-lg w-full object-cover object-center" 
              style={{ height: '60vh' }} 
            />
          </motion.div>
        </div>
        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            className="flex items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            variants={animateOnScroll}
          >
            <img src={`${process.env.PUBLIC_URL}/Photos/20240808_105834.jpg`} alt="Mission" className="rounded-lg shadow-lg w-full h-auto" />
          </motion.div>
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
              Our long history in education reflects our unwavering dedication to fostering a love of learning and helping students achieve their full potential. Over the decades, we have refined our programs and expanded our offerings, always with the goal of providing the best possible support to students. Our experienced team of educators brings a wealth of knowledge and a passion for teaching that has been honed over many years.
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
              Legacy of Excellence
            </h1>
            <p className="text-xl text-gray-700 max-w-xl mx-auto text-center">
              At Dstar, we take pride in our legacy and commitment to upholding high standards. Our center remains a trusted partner for families, offering personalized care and innovative programs that support both academic and emotional needs. Looking ahead, we stay dedicated to empowering students and guiding their success. We warmly invite your child to join our ongoing journey of educational excellence and growth.
            </p>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            variants={animateOnScroll}
          >
            <img 
              src={`${process.env.PUBLIC_URL}/Photos/IMG-20240719-WA0045.jpg`} 
              alt="Vision" 
              className="rounded-lg shadow-lg w-full object-cover object-center" 
              style={{ height: '65vh' }} 
            />
          </motion.div>
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
                <div className="absolute top-[-30px] left-5 bg-orange-500 p-4 rounded-full">
                  <FaCar className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mt-8">Transport service </h3>
                <p className="mt-2 text-gray-700">Special transport can be arranged to pick up your child directly from school.</p>
              </div>


              <div className="p-6 bg-white rounded-lg shadow-lg relative hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="absolute top-[-30px] left-5 bg-purple-500 p-4 rounded-full">
                  <FaShieldAlt className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mt-8">Safe and Clean Environment</h3>
                <p className="mt-2 text-gray-700">We provide a clean and safe environment for your child's well-being.</p>
              </div>
        
              <div className="p-6 bg-white rounded-lg shadow-lg relative md:translate-y-10 hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="absolute top-[-30px] left-5 bg-pink-500 p-4 rounded-full">
                  <FaClipboardCheck className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mt-8">Homework Supervision</h3>
                <p className="mt-2 text-gray-700">Our full-time teachers supervise homework and provide guidance.</p>
              </div>
        
              <div className="p-6 bg-white rounded-lg shadow-lg relative hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="absolute top-[-30px] left-5 bg-green-500 p-4 rounded-full">
                  <FaVideo className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mt-8">24-Hour CCTV Surveillance</h3>
                <p className="mt-2 text-gray-700">Our facilities are monitored 24/7 to ensure safety.</p>
              </div>
        
              <div className="p-6 bg-white rounded-lg shadow-lg relative md:translate-y-10 hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="absolute top-[-30px] left-5 bg-yellow-500 p-4 rounded-full">
                  <FaShower className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mt-8">Shower Facilities</h3>
                <p className="mt-2 text-gray-700">Hygienic and comfortable shower rooms are available.</p>
              </div>
        
              <div className="p-6 bg-white rounded-lg shadow-lg relative hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="absolute top-[-30px] left-5 bg-red-500 p-4 rounded-full">
                  <FaAppleAlt className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mt-8">Balanced Meals and Snacks</h3>
                <p className="mt-2 text-gray-700">We provide nutritious meals and snacks, all prepared fresh by our in-house chef.</p>
              </div>
        
              <div className="p-6 bg-white rounded-lg shadow-lg relative md:translate-y-10 hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="absolute top-[-30px] left-5 bg-indigo-500 p-4 rounded-full">
                  <FaGamepad className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mt-8">Games and Playtime</h3>
                <p className="mt-2 text-gray-700">Children enjoy engaging games and activities during playtime.</p>
              </div>
        
              <div className="p-6 bg-white rounded-lg shadow-lg relative hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="absolute top-[-30px] left-5 bg-purple-500 p-4 rounded-full">
                  <FaBook className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mt-8">Well-Stocked Library</h3>
                <p className="mt-2 text-gray-700">Our library fosters curiosity and learning with a wide range of books.</p>
              </div>
        
              <div className="p-6 bg-white rounded-lg shadow-lg relative md:translate-y-10 hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="absolute top-[-30px] left-5 bg-teal-500 p-4 rounded-full">
                  <FaBell className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mt-8">Regular Updates for Parents</h3>
                <p className="mt-2 text-gray-700">We keep parents informed with frequent updates on their child's progress.</p>
              </div>
        
              <div className="p-6 bg-white rounded-lg shadow-lg relative hover:shadow-xl hover:scale-105 transition-transform duration-300">
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

{/* New Section: Program and Activities */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 p-10">
  {/* Left side: Image */}
  <div className="flex items-center justify-center">
    <img 
      src={`${process.env.PUBLIC_URL}/Photos/IMG-20240619-WA0063.jpg`} // Replace 'YourImage.jpg' with the correct image file name
      alt="Program and Activities" 
      className="rounded-lg shadow-lg w-full h-auto object-cover object-center" 
      style={{ height: '450px' }} // Adjust the height as needed
    />
  </div>


  {/* Right side: Text content */}
  <motion.div
    className="bg-custom-beige p-10 rounded-lg shadow-md"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h1 className="text-6xl font-extrabold text-custom-blue mb-6 text-center transition-transform duration-300 hover:scale-105 break-words">
      Program and Activities
    </h1>
    <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center">
      Our programs offer a well-rounded experience that includes a range of educational activities, such as self-study sessions, educational programs, and regular library visits. We also incorporate outdoor sports ensuring a dynamic and engaging environment. Additionally, during school holidays, we provide a variety of activities, events, and excursions to keep students active and inspired.
    </p>
  </motion.div>
</div>


    {/* Contact Us Section */}
    <div className="bg-custom-white p-10 rounded-lg shadow-md mt-16">
    <h1 className="text-6xl font-extrabold text-custom-blue mb-6 text-center">
        Contact Us
    </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {/* Phone Number Section */}
            <div className="text-center flex flex-col items-center">
                <FaPhoneAlt className="text-custom-blue text-5xl mb-4" /> {/* Icon above section */}
                <h3 className="text-xl font-bold">Phone Number</h3>
                <p className="text-lg text-gray-700">(+65) 6792 7050</p>
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
