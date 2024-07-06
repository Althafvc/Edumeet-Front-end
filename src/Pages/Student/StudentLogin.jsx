import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from '../../assets/images/Studentlogin.png';
import DefaultButton from '../../Components/Student/DefaultButton';
import axiosInstance from '../../Instance/Axiosinstance';
import BasicAlerts from '../../Components/BasicAlerts';
import { useNavigate } from 'react-router-dom';


// Main functional component for student login
const StudentLogin = () => {

  const Navigate = useNavigate()
  // State to handle error visibility, type, and message
  const [error, setError] = useState({ visible: false, type: '', msg: '' })

  // Validation schema using Yup for form validation
  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Email is required')
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        'Invalid email format'
      ),
    password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
        'Invalid password format'
      )
  });

  if (error) {
    setTimeout(() => {
      setError('')
    }, 1000);
  }

  return (
    <div className="content w-screen h-screen flex justify-center items-center bg-white">
      <div className="form-container px-2 md:px-0 rounded-2xl md:w-2/4 md:h-[480px] flex flex-col md:flex-row md:shadow-customShadow overflow-auto md:overflow-hidden h-auto">

        {/* Left side with welcome image */}
        <div className="md:py-16 welcome-area md:w-[50%] h-full flex justify-center items-center flex-col gap-5 md:gap-16 overflow-hidden">
          <img src={Image} alt="image not found" className="md:w-full md:h-full w-auto h-auto" />
        </div>

        {/* Right side with login form */}
        <div className="form-area bg-[#ffffff] md:w-[50%] md:h-full md:flex md:justify-center md:flex-col md:gap-10 md:items-center md:py-10 flex flex-col justify-center w-full gap-10 py-8">
          <div className="heading-area flex justify-center">
            <h2 className="text-[#4b4343] font-bold md:text-2xl text-xl text-center">Login to your account</h2>
          </div>
          <div className="signupform-area">
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                // Handling form submission
                try {
                  const response = await axiosInstance.post('/student/login', values)

                  setError({ visible: true, type: 'success', msg: response.data.message || 'Login successful' })
                  // localStorage.setItem('jwt', response.data.token)
                  setTimeout(() => Navigate('/student/home'), 1000);

                } catch (error) {
                      setError({ visible: true, type: 'error', msg: error.response.data.message || 'Login failed' })
                }
              }}
            >
              {({ handleSubmit }) => (
                <Form className="flex flex-col gap-8 items-center w-full">
                  <div className="form-outline flex flex-col w-full gap-3 md:gap-1">
                    <label htmlFor="email" className="text-[#6d6262] pl-9 font-semibold text-lg md:pl-0">Email</label>
                    <Field
                      type="email"
                      name="email"
                      className="border-0 mx-auto border-b-[2.5px] border-gray-400 md:w-[100%] w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none"
                      placeholder="Enter your email address"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500" />
                  </div>
                  <div className="form-outline flex flex-col w-full gap-3 md:gap-1">
                    <label htmlFor="password" className="text-[#6d6262] pl-9 font-semibold text-lg md:pl-0">Password</label>
                    <Field
                      type="password"
                      name="password"
                      className="border-0 border-b-[2.5px] mx-auto border-gray-400 md:w-[100%] w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none"
                      placeholder="Enter your password"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500" />
                  </div>
                  <div className="forgot-area w-full h-auto">
                  <span className='font-semibold text-[rgb(0,112,255)] hover:underline hover:text-blue-700' onClick={(()=>Navigate('/verifyemail'))}>Forgot Password</span>
                  </div>
                  {/* Display error message if error exists */}
                  {error && <span> <BasicAlerts type={error.type} msg={error.msg} /></span>}
                  <div className="button-area w-full flex justify-center">
                    <DefaultButton type="submit" value="Login" classname={'bg-[#0070ff] text-white'} />
                  </div>
                </Form>
              )}
            </Formik>
            <p className='mt-8 font-newFont text-[#4b4343] text-center'>Do not have an account <a href="/student/signup" className='underline text-blue-800'>Register here</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
