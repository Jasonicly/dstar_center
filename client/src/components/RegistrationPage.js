import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import PromoPopup from './PromoPopup';


const RegistrationPage = () => {
  const initialFormData = {
    parentName: '',
    parentContact: '',
    parentEmail: '',
    childName: '',
    childAge: '',
    childSchool: '',
    childGrade: '',
    additionalInfo: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
const handleSubmit = (e) => {
  e.preventDefault();

  // Send the form data via EmailJS
  emailjs.send('service_ecs8fst', 'template_8qey02e', formData, 'YevRGch7wUcJRkugR')
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setFormSubmitted(true); // Show the success message
      setFormData(initialFormData); // Clear the form fields
    }, (error) => {
      console.error('Error sending email:', error.text);
    });
};

  const closePopup = () => {
    setFormSubmitted(false);
  };

  return (
    <div 
      className="min-h-screen bg-custom-pearl-gray flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center" 
      style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL}/Background/Whitelightened.png)`, 
        backgroundSize: '100%' 
      }}
    >
      <PromoPopup alwaysShow={true} />
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 border border-custom-blue relative">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-custom-blue">Register Your Child</h1>
          <p className="mt-4 text-gray-700 text-lg">
            Join our exciting family today. Complete the form below to secure your child’s spot!
          </p>
        </div>

        {/* Form should remain visible even after submission */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Parent's Information */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <label className="block text-lg mb-2" htmlFor="parentName">Your Name</label>
              <input
                type="text"
                name="parentName"
                id="parentName"
                value={formData.parentName}
                onChange={handleInputChange}
                className="w-full p-2 rounded border border-gray-300 text-black"
                required
              />
            </div>

            <div className="w-full md:w-1/2">
              <label className="block text-lg mb-2" htmlFor="parentContact">Your Contact Number</label>
              <input
                type="tel"
                name="parentContact"
                id="parentContact"
                value={formData.parentContact}
                onChange={handleInputChange}
                className="w-full p-2 rounded border border-gray-300 text-black"
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <label className="block text-lg mb-2" htmlFor="parentEmail">Your Email</label>
              <input
                type="email"
                name="parentEmail"
                id="parentEmail"
                value={formData.parentEmail}
                onChange={handleInputChange}
                className="w-full p-2 rounded border border-gray-300 text-black"
                required
              />
            </div>

            <div className="w-full md:w-1/2">
              <label className="block text-lg mb-2" htmlFor="childName">Child's Name</label>
              <input
                type="text"
                name="childName"
                id="childName"
                value={formData.childName}
                onChange={handleInputChange}
                className="w-full p-2 rounded border border-gray-300 text-black"
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <label className="block text-lg mb-2" htmlFor="childAge">Child's Age</label>
              <input
                type="number"
                name="childAge"
                id="childAge"
                value={formData.childAge}
                onChange={handleInputChange}
                className="w-full p-2 rounded border border-gray-300 text-black"
                required
                min="0" // Ensure no negative age
              />
            </div>

            <div className="w-full md:w-1/2">
              <label className="block text-lg mb-2" htmlFor="childSchool">Child's School</label>
              <input
                type="text"
                name="childSchool"
                id="childSchool"
                value={formData.childSchool}
                onChange={handleInputChange}
                className="w-full p-2 rounded border border-gray-300 text-black"
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <label className="block text-lg mb-2" htmlFor="childGrade">Child's Grade</label>
              <select
                name="childGrade"
                id="childGrade"
                value={formData.childGrade}
                onChange={handleInputChange}
                className="w-full p-2 rounded border border-gray-300 text-black"
                required
              >
                <option value="">Select Option</option>
                <option value="Primary 1">Primary 1</option>
                <option value="Primary 2">Primary 2</option>
                <option value="Primary 3">Primary 3</option>
                <option value="Primary 4">Primary 4</option>
                <option value="Primary 5">Primary 5</option>
                <option value="Primary 6">Primary 6</option>
              </select>
            </div>
          </div>

          {/* Additional Information */}
          <div className="w-full">
            <label className="block text-lg mb-2" htmlFor="additionalInfo">Additional Information</label>
            <textarea
              name="additionalInfo"
              id="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              className="w-full p-2 rounded border border-gray-300 text-black"
              rows="4"
            />
          </div>

          <button type="submit" className="w-full mt-6 bg-custom-blue text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Submit Registration
          </button>
        </form>

        {/* Confirmation Popup (Overlay) */}
        {formSubmitted && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white shadow-lg p-8 rounded-lg w-96">
              <h3 className="text-2xl font-bold text-custom-blue">Form Submitted</h3>
              <p className="mt-4 text-lg text-gray-700">A representative will contact you soon.</p>
              <button onClick={closePopup} className="mt-6 bg-custom-blue text-white py-2 px-4 rounded hover:bg-blue-700 transition">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationPage;