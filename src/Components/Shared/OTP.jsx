import React, { useState } from "react";
import bg from '../../assets/images/otpbg.jpg'
import DefaultButton from "../Student/DefaultButton";
import { useLocation, useParams } from "react-router-dom";
import axiosInstance from "../../Instance/Axiosinstance";

const OTP = () => {
  const [otp, setOtp] = useState(new Array(4).fill(''));
  const [error, setError] = useState('');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get('email');

  function handleChange(e, index) {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  }

   function handleSubmit(e) {
    e.preventDefault();

    otp.map(async (value)=> {
      if(value=='') {
        setError('Please enter your OTP');

      }else {
        try {
          const response = await axiosInstance.post('student/otp',otp)
          const result = response.data

        }catch(err) {
          console.log(err,'OTP registration failed');
        }

      }
    })
  }

  return (
    <>
      <img src={bg} className="h-screen w-full" alt="Login background" />
      <div className="w-[20rem] h-[18rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-custom-dark bg-opacity-65 flex items-center flex-col backdrop-blur-sm">
        <div className="w-full text-[37px] font-bold text-white flex justify-center mb-8 mt-8">Verify OTP</div>
        {error && <span className="text-red-600 font-bold mb-12 text-xl">{error}</span>}

        <form onSubmit={handleSubmit}>
          <div className="flex space-x-2 mb-4">
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

          <DefaultButton clicked={handleSubmit} value='Submit' classname='w-full h-10 bg-blue-500 mt-5 rounded-md hover:bg-blue-700 shadow-none text-white'></DefaultButton>
        </form>

      </div>
    </>
  );
}

export default OTP;
