import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // For sending the application request

const JoinTeamPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    jobApplied: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

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
        backgroundImage: `url(${process.env.PUBLIC_URL}/Background/White.png)`, 
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
        <p className="text-lg text-gray-700 mb-8 text-center">
          Explore our available positions and apply to join our amazing team.
        </p>

        {/* Removed job tabs */}
        <div className="bg-custom-beige p-6 rounded-b-lg shadow-lg text-lg">
          <p className="mb-4">
            We are always looking for talented individuals for various roles such as teachers, assistant teachers, cleaners, cooks, and more. Feel free to apply for the position that suits you the best!
          </p>
          <p className="text-gray-700 mb-6 text-center">
            Potential roles include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li><strong>Tutors</strong>: Help students excel academically through personalized learning plans.</li>
            <li><strong>Cooks/Cleaners</strong>: Assist with meal preparations and maintaining a clean environment.</li>
            <li><strong>Part-Timers</strong>: Flexible roles for those seeking part-time opportunities.</li>
          </ul>
          <p className="text-gray-700 mb-6 text-center font-bold">
            Apply now and we will contact you on how you could contribute to our team!
          </p>
        </div>

        {/* Application Form */}
        <div className="mt-12">
        <h3 className="text-2xl font-bold text-custom-blue mb-4 text-center">Apply for a Role</h3>
        <form onSubmit={handleSubmit} className="space-y-6 mb-5">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
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

            <div className="w-full md:w-1/2">
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
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
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

            <div className="w-full md:w-1/2">
              <label className="block text-lg mb-2" htmlFor="jobApplied">Job Applying For</label>
              <input
                type="text"
                name="jobApplied"
                id="jobApplied"
                value={formData.jobApplied}
                onChange={handleInputChange}
                className="w-full p-2 rounded border border-gray-300 text-black"
                placeholder="Enter the job you're applying for"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-10 bg-custom-blue text-white py-2 px-4 rounded hover:bg-blue-700 transition"
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
