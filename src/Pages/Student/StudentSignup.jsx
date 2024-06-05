import React, { useState } from 'react';
import Goldenlogo from '../../assets/Company logos/logo-white-transparent.png';
import DefaultButton from '../../Components/Student/DefaultButton';
import { useForm } from 'react-hook-form';
import axiosInstance from '../../Instance/Axiosinstance';
import BasicAlerts from '../../Components/BasicAlerts';
import { useNavigate } from 'react-router-dom';

function StudentSignup() {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm(); // using useForm hook for validation

  const [alert, setAlert] = useState({ visible: false, type: '', msg: '' }); // initial state of the Alert message

  const Navigate = useNavigate() // taking useNavigate for navigation

  async function onSubmit(data) {
    try {
            // calling the API for submitting the data
      const response = await axiosInstance.post('/student/signup', data);
      const result = response.data; //storing the response data to result

      //handling the error response
      if (!result.success) {
        setAlert({ visible: true, type: 'error', msg: result.message || 'Account not registered' });

        //handling the correct response
      } else {
        setAlert({ visible: true, type: 'success', msg: 'Registration successfull' });
        setTimeout(() => Navigate('/student/login'), 1000);
      }

      // handling the catch block
    } catch (err) {
      console.log(err, 'An error occurred during registration')
    }
  }

      // clearing the Alert message after certain time
  if (alert) setTimeout(() => setAlert(''), 1000);

  return (
    <>
      <div className="container w-screen h-screen flex justify-center items-center bg-white">
        <div className="form-container px-2 md:px-0 rounded-2xl md:w-2/4 md:h-[570px] flex flex-col md:flex-row shadow-customShadow overflow-auto md:overflow-hidden h-auto">
          <div className="bg-gradient-to-br from-[rgb(9,75,160)] to-[#2092f4] welcome-area md:w-[50%] h-full flex justify-center items-center flex-col gap-5 py-2 md:gap-16">
            <h2 className="text-white font-sans text-2xl">Welcome to</h2>
            <img src={Goldenlogo} alt="Company Logo" className="w-[100px] h-[100px]" />
            <div className="description-area w-full flex justify-center items-center">
              <p className="description text-white text-sm md:text-lg w-full ml-10">A pre-scheduled meeting for your non-postponable future.</p>
            </div>
          </div>
          <div className="form-area flex flex-col bg-[#ffffff] md:w-[50%] h-full justify-center pl-8 py-3 gap-6">
            <div className="heading-area flex justify-center">
              <h2 className="text-[#4b4343] font-bold text-lg">Create your account</h2>
            </div>
            <div className="signupform-area">
              <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-outline flex flex-col">
                  <label htmlFor="name" className="text-[#6d6262] font-semibold">Full name</label>
                  <input
                    type="text"
                    name="name"
                    className="border-0 border-b-[2.5px] border-gray-400 w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none"
                    placeholder="Enter your name"
                    aria-label="Full name"
                    /* { Registering the input with appropriate validation} */
                    {...register('name', {
                      required: 'Name is required',
                      minLength: {
                        value: 3,
                        message: 'Name must be at least 3 characters long'
                      }
                    })}
                  />
                  {/* { place for showing the appropriate error message if any } */}
                  {errors.name && <span className="text-red-600">{errors.name.message}</span>}
                </div>

                <div className="form-outline flex flex-col">
                  <label htmlFor="email" className="text-[#6d6262] font-semibold">E mail</label>
                  <input
                    type="email"
                    name="email"
                    className="border-0 border-b-[2.5px] border-gray-400 w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none"
                    placeholder="Enter your email address"
                    aria-label="Email"
                    /* { Registering the input with appropriate validation} */
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {/* { place for showing the appropriate error message if any } */}
                  {errors.email && <span className="text-red-600">{errors.email.message}</span>}
                </div>

                <div className="form-outline flex flex-col">
                  <label htmlFor="phone" className="text-[#6d6262] font-semibold">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    className="border-0 border-b-[2.5px] border-gray-400 w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none"
                    placeholder="Enter your phone number"
                    aria-label="Phone"
                    /* { Registering the input with appropriate validation} */
                    {...register('phone', {
                      required: 'Phone number is required',
                      minLength: {
                        value: 10,
                        message: 'Phone must be at least 10 characters long'
                      }
                    })}
                  />
                  {/* { place for showing the appropriate error message if any } */}
                  {errors.phone && <span className="text-red-600">{errors.phone.message}</span>}
                </div>

                <div className="form-outline flex flex-col">
                  <label htmlFor="qualification" className="text-[#6d6262] font-semibold">Qualification</label>
                  <input
                    type="text"
                    name="qualification"
                    className="border-0 border-b-[2.5px] border-gray-400 w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none"
                    placeholder="Enter your current qualification"
                    aria-label="Qualification"
                    /* { Registering the input with appropriate validation} */
                    {...register('qualification', { required: 'Qualification is required' })}
                  />
                  {/* { place for showing the appropriate error message if any } */}
                  {errors.qualification && <span className="text-red-600">{errors.qualification.message}</span>}
                </div>

                <div className="form-outline flex flex-col">
                  <label htmlFor="password" className="text-[#6d6262] font-semibold">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="border-0 border-b-[2.5px] border-gray-400 w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none"
                    placeholder="Enter your password"
                    aria-label="Password"
                    /* { Registering the input with appropriate validation} */
                    {...register('password', {
                      required: 'Password is required',
                      pattern: {
                        value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
                        message: 'Invalid password format'
                      }
                    })}
                  />
                  {/* { place for showing the appropriate error message if any } */}
                  {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                </div>

                <div className="form-outline flex flex-col">
                  <label htmlFor="confirmpassword" className="text-[#6d6262] font-semibold">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmpassword"
                    className="border-0 border-b-[2.5px] border-gray-400 w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none"
                    placeholder="Re-enter your password"
                    aria-label="Confirm Password"
                    /* { Registering the input with appropriate validation} */
                    {...register('confirmpassword', {
                      required: 'Please confirm your password',
                      validate: value => value === getValues('password') || 'Passwords do not match',
                    })}
                  />
                  {/* { place for showing the appropriate error message if any } */}
                  {errors.confirmpassword && <span className="text-red-600">{errors.confirmpassword.message}</span>}

                  {/* { Showing the Alert to show the status of the registration } */}
                  {alert.visible && (
                    <span>
                      <BasicAlerts type={alert.type} msg={alert.msg} />
                    </span>
                  )}
                </div>
                <div className="button-area w-full flex justify-center">
                  <DefaultButton value='Submit' clicked={handleSubmit(onSubmit)} classname={' bg-[#0070ff] hover:bg-[#0070ff]  text-white shadow-none font-bold'} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentSignup;
