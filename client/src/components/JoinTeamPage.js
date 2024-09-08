import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // For sending the application request

const jobs = [
  {
    title: 'Teacher',
    pay: '$3,000 - $4,500',
    requirements: [
      'Bachelor’s Degree in Early Childhood Education or related field',
      'At least 2 years of teaching experience',
      'Strong communication and leadership skills',
    ],
    description: 'As a teacher, you will guide young minds, help them grow academically and socially, and ensure a safe learning environment.'
  },
  {
    title: 'Assistant Teacher',
    pay: '$2,000 - $3,500',
    requirements: [
      'Diploma in Early Childhood Education',
      'Experience in handling young children is preferred',
      'Ability to assist lead teachers in day-to-day activities',
    ],
    description: 'The Assistant Teacher will work closely with the lead teacher to assist in classroom activities, help children with their needs, and provide a nurturing environment.'
  },
  {
    title: 'Admin Officer',
    pay: '$2,500 - $3,500',
    requirements: [
      'Diploma in Business Administration or related field',
      'At least 1 year of experience in an administrative role',
      'Proficient in MS Office and data management',
    ],
    description: 'The Admin Officer will handle day-to-day administrative tasks, including managing records, assisting in scheduling, and communicating with parents and staff.'
  },
  {
    title: 'Bus Driver',
    pay: '$1,800 - $2,500',
    requirements: [
      'Valid Bus Driver License',
      'At least 1 year of driving experience',
      'Good driving record and safety-first mindset',
    ],
    description: 'The Bus Driver will ensure the safe transport of children to and from the center, following all safety protocols and maintaining a friendly demeanor.'
  },
];

const JoinTeamPage = () => {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    jobApplied: selectedJob.title,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleTabClick = (job) => {
    setSelectedJob(job);
    setFormData({ ...formData, jobApplied: job.title });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send the form data via EmailJS (you can set this up as per your own configuration)
    emailjs.send('service_ecs8fst', 'template_hxsy408', formData, 'YevRGch7wUcJRkugR')
      .then(() => {
        setFormSubmitted(true);
      })
      .catch((error) => console.error('Email sending error:', error));
  };

  const closePopup = () => {
    setFormSubmitted(false);
  };

  return (
        <div 
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL}/Background/Whitelightened.png)`, 
        backgroundSize: '100%', 
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-screen-lg mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 
          className="text-5xl font-bold text-center mb-8 text-custom-blue" 
          style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}
        >
          Join Our Team
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">Explore our available positions and apply to join our amazing team.</p>

        {/* Job Tabs */}
        <div className="flex justify-center">
          {jobs.map((job, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(job)}
              className={`px-6 py-2 rounded-t-lg font-semibold focus:outline-none transition duration-300 ${
                selectedJob.title === job.title
                  ? 'bg-custom-blue text-white'
                  : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
            >
              {job.title}
            </button>
          ))}
        </div>

        {/* Job Information */}
        <div className="bg-custom-beige p-6 rounded-b-lg shadow-lg">
          <h1 className="text-3xl font-bold text-custom-blue mb-4">{selectedJob.title}</h1>
          <p className="mb-4">
            <span className="font-bold">Pay:</span> {selectedJob.pay}
          </p>
          <p className="mb-4">
            <span className="font-bold">Description:</span> {selectedJob.description}
          </p>
          <p className="mb-4">
            <span className="font-bold">Requirements:</span>
            <ul className="list-disc list-inside mt-2">
              {selectedJob.requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </p>
        </div>

        {/* Application Form */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-custom-blue mb-4 text-center">Apply for This Job</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="name">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 rounded border border-gray-300 text-black"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 rounded border border-gray-300 text-black"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 rounded border border-gray-300 text-black"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="jobApplied">Job Applying For</label>
              <input
                type="text"
                name="jobApplied"
                id="jobApplied"
                value={formData.jobApplied}
                className="w-full p-2 rounded border border-gray-300 text-black"
                readOnly
              />
            </div>

            <button
              type="submit"
              className="col-span-2 mt-6 bg-custom-blue text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Submit Application
            </button>
          </form>
        </div>

        {/* Success Popup */}
        {formSubmitted && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white shadow-lg p-8 rounded-lg w-96">
              <h3 className="text-2xl font-bold text-custom-blue">Application Submitted</h3>
              <p className="mt-4 text-lg text-gray-700">A representative will contact you in 1-2 business days.</p>
              <button
                onClick={closePopup}
                className="mt-6 bg-custom-blue text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinTeamPage;
