import React, { useState } from "react";
import bg from '../../assets/images/otpbg.jpg'
import DefaultButton from "../Student/DefaultButton";
import { useLocation, useParams } from "react-router-dom";
import axiosInstance from "../../Instance/Axiosinstance";
import BasicAlerts from "../BasicAlerts";

const OTP = () => {
  // State to store OTP input values
  const [otp, setOtp] = useState(new Array(4).fill(''));
  // State to store error message
  const [error, setError] = useState('');
  // State to store alert messages
  const [alert, setAlert] = useState({ type: '', msg: '' });
  
  // Extracting email from query parameters
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get('email');

  // Handle OTP input changes
  function handleChange(e, index) {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }

    // Move focus to the next input field if the current one is filled
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  }

  // Handle OTP form submission
  async function handleSubmit(e) {
    e.preventDefault();
    // Check if any OTP input field is empty
    if (otp.some((value) => value == '')) {
      setError('Please enter your OTP');
    } else {
      try {
        const queryData = { otp, email };
        // Sending OTP and email to the server for verification
        const response = await axiosInstance.post('student/otp', queryData);
        const result = response.data;
        console.log(result, 'Verification response');

        // Set success alert if verification is successful
        setAlert({ type: 'success', msg: 'OTP verification successful' });
      } catch (err) {
        // Set error alert if verification fails
        setAlert({ type: 'error', msg: 'OTP verification failed' });
      }
    }
  }

  return (
    <>
      {/* Background image */}
      <img src={bg} className="h-screen w-full" alt="Login background" />
      <div className="w-[20rem] h-[18rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-custom-dark bg-opacity-65 flex items-center flex-col backdrop-blur-sm">
        <div className="w-full text-[37px] font-bold text-white flex justify-center mb-8 mt-8">Verify OTP</div>
        
        {/* Display error message if any */}
        {error && <span className="text-red-600 font-bold mb-12 text-xl">{error}</span>}

        <form onSubmit={handleSubmit}>
          <div className="flex space-x-2 mb-4">
            {/* OTP input fields */}
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                value={data}
                id={`otp-input-${index}`}
                onChange={(e) => handleChange(e, index)}
                maxLength={1}
                className="w-12 h-12 text-center text-2xl rounded-md border border-red-900"
              />
            ))}
          </div>

          {/* Submit button */}
          <DefaultButton clicked={handleSubmit} value='Submit' classname='w-full h-10 bg-blue-500 mt-5 rounded-md hover:bg-blue-700 shadow-none text-white'></DefaultButton>
        </form>

        {/* Display alert message if any */}
        {alert && <span className='mt-[138px] md:mt-[180px]'><BasicAlerts type={alert.type} msg={alert.msg} /></span>}
      </div>
    </>
  );
}

export default OTP;
