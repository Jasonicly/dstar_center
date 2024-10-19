import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

const BookTourPage = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    parentContact: '',
    parentEmail: '',
    preferredDate: '',
    preferredTime: '02:00 PM', // Default to PM
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [pastDateError, setPastDateError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'preferredDate') {
      const selectedDate = new Date(value);
      const today = new Date();

      // Reset errors
      setPastDateError(false);

      // If the selected date is in the past, show error message
      if (selectedDate.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0)) {
        setPastDateError(true);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!pastDateError) {
      // Check if the time includes AM or PM, if not, add PM by default
      const formattedTime = formData.preferredTime.includes('AM') || formData.preferredTime.includes('PM')
        ? formData.preferredTime
        : `${formData.preferredTime} PM`;

      // Prepare final form data
      const finalFormData = {
        ...formData,
        preferredTime: formattedTime,
      };

      // Send the form data via EmailJS
      emailjs.send('service_ecs8fst', 'template_hxsy408', finalFormData, 'YevRGch7wUcJRkugR')
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          setFormSubmitted(true); // Show the success message
        }, (error) => {
          console.error('Error sending email:', error.text);
        });
    }
  };

  const closePopup = () => {
    setFormSubmitted(false);
  };

  return (
    <div
      className="min-h-screen bg-custom-pearl-gray flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Background/White.png)`,
        backgroundSize: '100%' // Adjust the percentage as needed
      }}
    >
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 border border-custom-blue relative">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-custom-blue">Book a Tour</h1>
          <p className="mt-4 text-gray-700 text-lg">
            Come and see our facilities. Complete the form below to schedule a tour with us!
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <label className="block text-lg mb-2" htmlFor="parentName">Name</label>
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
              <label className="block text-lg mb-2" htmlFor="parentContact">Contact Number</label>
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
              <label className="block text-lg mb-2" htmlFor="parentEmail">Email</label>
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
              <label className="block text-lg mb-2" htmlFor="preferredDate">Preferred Date</label>
              <input
                type="date"
                name="preferredDate"
                id="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                className="w-full p-2 rounded border border-gray-300 text-black"
                required
              />
              {pastDateError && (
                <p className="text-red-500 text-sm mt-2">
                  Please select a future date. Past dates are not allowed.
                </p>
              )}
            </div>
          </div>

          <div className="w-full">
            <label className="block text-lg mb-2" htmlFor="preferredTime">Preferred Time</label>
            <input
              type="text"
              name="preferredTime"
              id="preferredTime"
              value={formData.preferredTime}
              onChange={handleInputChange}
              className="w-full p-2 rounded border border-gray-300 text-black"
              placeholder="Enter preferred time (e.g. 02:00 PM)"
              required
            />
          </div>

          <button type="submit" className="w-full mt-6 bg-custom-blue text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Submit Booking
          </button>
        </form>

        {/* Confirmation Popup (Overlay) */}
        {formSubmitted && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white shadow-lg p-8 rounded-lg w-96">
              <h3 className="text-2xl font-bold text-custom-blue">Booking Submitted</h3>
              <p className="mt-4 text-lg text-gray-700">A representative will contact you soon to confirm your booking.</p>
              <button onClick={closePopup} className="mt-6 bg-custom-blue text-white py-2 px-4 rounded hover:bg-blue-700 transition">Close</button>
            </div>
          </div>
        )}

        {/* Sticky Note Section */}
        <div className="mt-8 relative w-full flex justify-center">
          <div className="relative w-96 h-auto p-8 bg-custom-beige rounded-md shadow-2xl transform rotate-2 hover:rotate-1 transition-all duration-500 text-center">
            <h1 className="text-3xl font-bold text-custom-misty-red">What Is This?</h1>
            <p className="mt-4 text-gray-700 text-base">
              Booking a tour with us allows you to come to our centre and view our facilities firsthand. You can explore our classrooms, meet our teachers, and ask any questions you may have about our programs.
            </p>
            <p className="mt-4 text-gray-700 text-base">
              Just choose a convenient time and we’ll be happy to show you around!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTourPage;
