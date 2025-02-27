import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

const Registration = () => {
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
  const [ageError, setAgeError] = useState(false); // Error state for age validation

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Ensure that childAge is not negative
    if (name === 'childAge') {
      if (value >= 0) {
        setFormData({ ...formData, [name]: value });
        setAgeError(false);
      } else {
        setAgeError(true);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!ageError) {
      // Send the form data via EmailJS
      emailjs.send('service_ecs8fst', 'template_8qey02e', formData, 'YevRGch7wUcJRkugR')
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          setFormSubmitted(true); // Show the success message
          setFormData(initialFormData); // Clear the form fields
        }, (error) => {
          console.error('Error sending email:', error.text);
        });
    }
  };

  const closePopup = () => {
    setFormSubmitted(false);
  };

  return (
    <section 
      className="py-16 bg-cover bg-center" 
      style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL}/Background/Whitelightened.png)`, 
        backgroundSize: '100%' 
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-start">
        
        {/* Title and Intro Text on the Left Side */}
        <div className="w-full md:w-1/4 pr-8">
          <h2 className="text-4xl font-bold mb-4">Register Your Child</h2>
          <p className="text-lg mb-4">
            Ready to join our centre family? We’re excited to welcome your child to our community. Register today to secure your spot!
          </p>
        </div>

        {/* Form on the Right Side */}
        <div className="w-full md:w-3/4 bg-white border border-custom-blue p-8 rounded-lg shadow-lg relative">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Parent's Information */}
            <div className="mb-4">
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

            <div className="mb-4">
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

            <div className="mb-4">
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

            {/* Child's Information */}
            <div className="mb-4">
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

            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="childAge">Child's Age</label>
              <input
                type="number"
                name="childAge"
                id="childAge"
                value={formData.childAge}
                onChange={handleInputChange}
                className="w-full p-2 rounded border border-gray-300 text-black"
                required
              />
              {ageError && <p className="text-red-500 text-sm mt-2">Age cannot be negative</p>}
            </div>

            <div className="mb-4">
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

            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="childGrade">Child's Grade</label>
              <select
                name="childGrade"
                id="childGrade"
                value={formData.childGrade}
                onChange={handleInputChange}
                className="w-full p-2 rounded border border-gray-300 text-black"
                required
              >
                <option value="" disabled>Select Option</option>
                <option value="Primary 1">Primary 1</option>
                <option value="Primary 2">Primary 2</option>
                <option value="Primary 3">Primary 3</option>
                <option value="Primary 4">Primary 4</option>
                <option value="Primary 5">Primary 5</option>
                <option value="Primary 6">Primary 6</option>
              </select>
            </div>

            <div className="mb-4 md:col-span-2">
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

            <button type="submit" className="mt-6 bg-custom-blue text-white py-2 px-4 rounded hover:bg-blue-700 transition md:col-span-2">Submit Registration</button>
          </form>

          {/* Confirmation Popup Overlay */}
          {formSubmitted && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white shadow-lg p-8 rounded-lg w-96">
                <h3 className="text-2xl font-bold text-custom-blue">Form Submitted</h3>
                <p className="mt-4 text-lg text-gray-700">A representative will contact you soon.</p>
                <button onClick={closePopup} className="mt-6 bg-custom-blue text-white py-2 px-4 rounded hover:bg-blue-700 transition">Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Registration;