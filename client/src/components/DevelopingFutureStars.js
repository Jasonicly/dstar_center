import React, { useEffect, useRef, useState } from 'react';

function DevelopingFutureStars() {
  const [isVisible, setIsVisible] = useState(false);
  const [overlayContent, setOverlayContent] = useState(null); // To manage the active overlay content
  const imageRef = useRef();

  useEffect(() => {
    const currentImageRef = imageRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // The image becomes visible when 20% is in view
      }
    );

    if (currentImageRef) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  // Overlay Content for each sticky note
  const overlayData = [
    {
      title: "After School Care Service",
      subtitle: "Explore our one-stop educational center, designed to meet all of your child's learning needs.",
      image: `${process.env.PUBLIC_URL}/Photos/IMG-20240701-WA0040.jpg`,
      description: "Our after school care service ensures your child is in a safe and nurturing environment after school. We provide homework supervision, nutritious meals, and a range of engaging activities to help them grow academically and socially. Our service includes both indoor and outdoor activities designed to meet the needs of growing children. From academic enrichment programs to creative play, we foster a well-rounded environment for kids after their school day ends. Additionally, our caregivers offer personalized attention to every child, ensuring a fun and educational experience."
    },
    {
      title: "Tuition Service",
      subtitle: "  We offer tuition starting from Primary 1 and continuing through all grade levels.",
      image: `${process.env.PUBLIC_URL}/Photos/IMG-20240719-WA0042.jpg`,
      description: "Our tuition service offers individualized attention for your child from Primary 1 onwards. Our experienced tutors, many of whom have worked in schools, provide personalized academic support in subjects ranging from mathematics to science and languages. We use a structured approach to ensure that your child receives the best guidance. Each session is customized based on your child's learning style, helping them grasp complex concepts with ease. Along with regular assessments and feedback, we ensure steady progress towards academic success."
    },
    {
      title: "Enrichment Program",
      subtitle: "Discover our event-based classes in creative writing, robotics, and coding to see how we bring exciting learning experiences to life. ",
      image: `${process.env.PUBLIC_URL}/Photos/IMG-20240521-WA0021.jpg`,
      description: "Our enrichment programs inspire creativity and curiosity in children. From robotics workshops to creative writing and art, we offer a wide range of activities to help children develop new skills and passions. These programs are carefully designed to complement academic learning, encouraging children to think critically, solve problems creatively, and work collaboratively with their peers. Through hands-on experiences, children can explore their interests and unlock their full potential."
    },
    {
      title: "School Holiday Program",
      subtitle: "We provide full-day care services during school holidays, keeping your child engaged, learning, and having fun throughout the day. ",
      image: `${process.env.PUBLIC_URL}/Photos/20240529_143444.jpg`,
      description: "Our full-day school holiday program is packed with fun and educational activities to keep your child engaged during school breaks. We offer a blend of field trips, games, sports, and hands-on projects that balance education and recreation. Whether it's exploring the outdoors, building new friendships, or developing life skills, your child will have a memorable and productive holiday experience with us. We also include meals and transportation services as part of the program, ensuring your child's comfort and safety."
    }
  ];

  const openOverlay = (index) => {
    setOverlayContent(overlayData[index]);
  };

  const closeOverlay = () => {
    setOverlayContent(null);
  };

  return (
    <section className="relative pb-16 bg-custom-cloud">
      
      {/* Cloud Shape SVG Positioned at the top */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 160"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            fill="#f8f6ee"
            d="M0,128L48,112C96,96,192,64,288,64C384,64,480,96,576,117.3C672,139,768,149,864,144C960,139,1056,117,1152,96C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      {/* Content Section */}
      <div className="min-h-screen max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-end pb-20">
        <div className="w-full md:w-1/2 flex justify-center mb-12">
          <img
            ref={imageRef}
            src={`${process.env.PUBLIC_URL}/Photos/logo_sidebyside.png`}
            alt="Developing Future Stars"
            className={`pb-12 transition-opacity duration-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ 
              transition: 'opacity 1s ease-in-out',
              transform: 'rotate(-5deg)'
            }}
          />
        </div>

        <div className="relative w-full md:w-1/2 ml-8 transform scale-100 sm:scale-70">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 transform -rotate-1 z-0"></div>
          <div className="relative bg-custom-beige p-6 shadow-lg transform rotate-2 z-10">
            <h1 className="text-5xl font-bold text-black mb-4 text-custom-blue break-words">
              Developing Future Stars
            </h1>
            <p className="text-2xl text-gray-700 mb-4">Upon entering pre-school, usually children will bring with them a variety of personal and social skills, values, and attitudes. No matter how little these are, it is important that they foster these values and from the relationships and experiences within the home and immediate environment, we will help them to cultivate their learning environment.</p>
            <p className="text-2xl text-gray-700 text-center font-bold"> We provide classes for:</p>
          </div>
        </div>
      </div>

      {/* Sticky Notes Section */}
      <div className="relative pb-16 bg-custom-cloud">
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12  scale-100 sm:scale-70">
    {overlayData.map((note, index) => (
      <div key={index} className="relative w-full flex justify-center cursor-pointer" onClick={() => openOverlay(index)}>
        
        {/* Dynamic shadow, set to be relative to the sticky note */}
        <div
          className={`absolute top-2 w-10/12 h-full bg-black opacity-10 transform ${
            index % 2 === 0 ? 'rotate-2' : '-rotate-2'
          } rounded-md`}
          style={{ marginRight: '5%', marginLeft: '5%' }} // Adjust the margin as needed for a dynamic effect
        ></div>
        
        {/* Sticky note */}
        <div
          className={`relative w-full md:w-10/12 h-auto p-12 bg-custom-beige rounded-md shadow-2xl transform ${
            index % 2 === 0 ? 'rotate-3' : '-rotate-3'
          } hover:rotate-1 transition-all duration-500 text-center flex flex-col`}
        >
          <h1 className="text-5xl font-bold text-custom-misty-red break-words">{note.title}</h1>
          <p className="mt-4 text-xl text-gray-700">{note.subtitle}.</p>
          <div className="flex-grow"></div> {/* This div will take up the remaining space */}
          <p className="mt-4 text-sm text-gray-700 italic">Click here to learn more</p>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Overlay */}
      {overlayContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeOverlay}>
          <div
            className="relative w-3/4 md:w-1/2 bg-white rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the overlay
          >
            <button
              className="absolute top-4 right-4 text-gray-700 text-2xl font-bold hover:text-red-500 transition"
              onClick={closeOverlay}
            >
              &times;
            </button>
            <div className="overflow-hidden">
              <img
                src={overlayContent.image}
                alt={overlayContent.title}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-8 overflow-y-auto h-64">
              <h1 className="text-5xl font-bold mb-4">{overlayContent.title}</h1>
              <p className="text-lg text-gray-700">{overlayContent.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default DevelopingFutureStars;
