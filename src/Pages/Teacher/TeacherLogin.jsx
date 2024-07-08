import React, { useState } from 'react';
import Image from '../../assets/images/Studentlogin.png';
import DefaultButton from '../../Components/Student/DefaultButton';
import axiosInstance from '../../Instance/Axiosinstance';
import BasicAlerts from '../../Components/BasicAlerts';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';


// Main functional component for teacher login
const TeacherLogin = () => {
  const [alert, setAlert] = useState({type:'', msg:''})
  const { register, handleSubmit, getValues, formState: { errors } } = useForm(); // using useForm hook for validation


  const Navigate = useNavigate()
  function handleChange (e) {
    e.preventDefault()

    const {name,value} = e.target

    setData({...data,[name]:value})

  }

  async function onsubmit (data) {

    try {
      const response = await axiosInstance.post('/teacher/login',data)
      const result = response.data
        setAlert({type:'success', msg:result.message})

        setTimeout(()=> Navigate('/teacher/home'),1000)

    }catch (err) {

      setAlert({type:'error', msg:err.response.data.message})
    }
  }

if(alert) setTimeout(() => {
  setAlert('')
}, 1000);


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
            <form className="flex flex-col gap-8 items-center w-full" onSubmit={handleSubmit(onsubmit)}>
              <div className="form-outline flex flex-col w-full gap-3 md:gap-1">
                <label htmlFor="email" className="text-[#6d6262] pl-9 font-semibold text-lg md:pl-0">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="border-0 mx-auto border-b-[2.5px] border-gray-400 md:w-[100%] w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none"
                  placeholder="Enter your email address"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: 'Invalid email address'
                    }
                  })}
                />
                  {errors.password && <span className="text-red-600 ml-10">{errors.password.message}</span>}

              </div>
              <div className="form-outline flex flex-col w-full gap-3 md:gap-1">
                <label htmlFor="password" className="text-[#6d6262] pl-9 font-semibold text-lg md:pl-0">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="border-0 border-b-[2.5px] mx-auto border-gray-400 md:w-[100%] w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none"
                  placeholder="Enter your password"
                  {...register('password', {
                    required: 'Password is required',
                    pattern: {
                      value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
                      message: 'Invalid password format'
                    }
                  })}
                />

                {errors.password && <span className="text-red-600 ml-10">{errors.password.message}</span>}

              </div>
              <div className="forgot-area  w-full h-auto">
                <span className='font-semibold text-[rgb(0,112,255)] hover:underline hover:text-blue-700 ml-10 md:ml-0' onClick={() => Navigate('/verifyemail?role=teacher')}>Forgot Password</span>
              </div>
              <div className="button-area w-full flex justify-center">
                 
                <DefaultButton type="submit" value="Login" classname={'bg-[#0070ff] text-white'} />
              </div>

              {alert && <span> <BasicAlerts type={alert.type} msg={alert.msg}/> </span>}
             
            </form>
            <p className='mt-8 font-newFont text-[#4b4343] text-center'>Do not have an account <a href="/student/signup" className='underline text-blue-800'>Register here</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;
