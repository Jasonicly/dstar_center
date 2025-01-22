import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const FeesPage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleRedirectToRegistration = () => {
    navigate('/registration'); // Redirect to the registration page
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" 
      style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL}/Background/Bluelightened.png)`, 
        backgroundSize: '100%', // Adjust the percentage as needed
        backgroundPosition: 'center' 
      }}
    >
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 border border-custom-blue">
        
        {/* Fee Structure Section */}
        <div className="mb-8">
                  <h1 className="text-6xl font-bold text-custom-misty-red mb-4 text-center" style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>
          Fee Structure
        </h1>
          <table className="w-full text-left text-lg text-gray-700 border-collapse">
            <tbody>
              <tr className="border-b">
                <td className="py-2 font-semibold">Monthly Fee:</td>
                <td>$330</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold">Registration Fee:</td>
                <td>$35 (one-time)</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold">Annual Material Fee:</td>
                <td>$60 (payable every January)</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold">Annual Insurance Premium:</td>
                <td>$10 (payable every January)</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold">Deposit:</td>
                <td>$330 (non-refundable and non-transferable, used to offset against the student care fee for the last month)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Explanation Section */}
        <div className="mb-8">
          <p className="text-gray-700 text-lg">
            We believe in maintaining transparent communication with our parents, and our fee structure reflects the quality of services we provide and the dedication of our team towards your child's growth.
          </p>
        </div>

        {/* Separator */}
        <hr className="border-t-2 border-gray-300 my-8" />

        {/* Enrollment Process Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-custom-blue mb-4 text-center">Enrollment Process</h2>
          
          {/* Step 1 (Clickable) */}
          <div 
            className="mb-6 cursor-pointer" 
            onClick={handleRedirectToRegistration} // Handle redirection when clicked
          >
            <h3 className="text-xl font-semibold mb-2 text-custom-misty-red">Step 1: Submit Registration Forms</h3>
            <p className="text-gray-700 text-lg">
              To secure a spot for your child, submit the completed registration forms{' '}
              <span 
                className="text-custom-blue underline cursor-pointer"
                onClick={handleRedirectToRegistration} // Handle redirection for "here"
              >
                here
              </span>{' '}
              and a representative will help you along the process, and help with settling the required fees.
            </p>
          </div>

          {/* Separator */}
          <hr className="border-t-2 border-gray-300 my-4" />

          {/* Step 2 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-custom-misty-red">Step 2: Meet with Our Team</h3>
            <p className="text-gray-700 text-lg">
              After submitting the forms, meet with our friendly team to go over your child’s needs and expectations.
            </p>
          </div>

          {/* Separator */}
          <hr className="border-t-2 border-gray-300 my-4" />

          {/* Step 3 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-custom-misty-red">Step 3: Confirmation</h3>
            <p className="text-gray-700 text-lg">
              Once the registration is confirmed, you will receive a conformation email with all the necessary information for your child’s first day.
            </p>
          </div>
        </div>

        {/* Separator */}
        <hr className="border-t-2 border-gray-300 my-8" />

        {/* Invitation to Visit Section */}
        <div className="mb-8">
          <p className="text-gray-700 text-lg">
            We welcome you to visit our centre for a firsthand experience of the warm and enriching environment we offer. Please feel free to contact us at <span className="font-bold">(+65) 6792 0750</span> or <span className="font-bold">dstar.jw@gmail.com</span> to schedule a tour or seek further information.
          </p>
        </div>

        {/* Closing Section */}
        <div>
          <p className="text-gray-700 text-lg text-center pt-5">
            Thank you for considering DStar EduCentre as a partner in your child's educational journey. We look forward to the privilege of contributing to your child's growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeesPage;
