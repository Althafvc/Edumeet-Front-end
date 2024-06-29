import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../../Instance/Axiosinstance';
import BasicAlerts from '../../Components/BasicAlerts';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
const {register, handleSubmit, getValues, formState: {errors}}= useForm()
const [alert, setAlert] = useState({Visible:false, type:'', msg:''})
const [loginData, setLoginData] = useState({email:'', secretkey:''})

const Navigate = useNavigate()


async function onsubmit(data) {

  try {
    const response = await axiosInstance.post('/admin/login',data)
    const result = response.data

    setAlert({Visible:true, type:'success', msg:result.message})

    setTimeout(() => {
      Navigate('/admin/home')
    }, 800);


  }catch (err) {
    setAlert({Visible:true, type:'error', msg:err.response.data.message})

  }
}

if(alert) setTimeout(() => {
  setAlert('')
}, 800);

  return (
    <>
    <div className="outer w-screen h-screen flex flex-col justify-center items-center bg-[#111827]">
    <div className="wrapper md:w-[30%] md:h-[30%] w-[90%] h-auto">
      <h2 className="text-xl font-semibold text-center mb-6 text-blue-400 ml-2">Login to continue</h2>
      
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-xl font-bold text-white">Email</label>
          <input  
            type="email"
            id="email"
            name='email'
            className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500`}
            placeholder="Enter your email"
            {...register('email', {
              required:'This field is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message:'Invalid email address'
              }
            })}
          />
          {errors.email && <span className="text-white">{errors.email.message}</span>}

        </div>

        <div className="relative w-full mb-4">
          <div className="absolute inset-y-0 right-0 flex items-center px-2">
            <button
              type="button"
              onClick={null}
              className="focus:outline-none"
            >
              {/* <i className={passwordFieldType === 'password' ? 'fa-regular fa-eye' : 'fa-solid fa-eye'}></i> */}
            </button>
          </div>
          <label htmlFor="Secret key" className="block text-xl font-bold text-white">Secret key</label>
          <input
            type='password'
            id="secretkey" 
            name="secretkey" 
            className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500`}
            placeholder={`Enter the Secret key`}
            {...register('secretkey', {
              required:'This field is required',
              minLength: {
                value:4,
                message:'Secret key must be 4 digits'
              },
              pattern: {
                value: /^\d+$/,
                message:'Only numbers are allowed'
              }
            })}
          />
           {errors.secretkey && <span className="text-white">{errors.secretkey.message}</span>}

        </div>
        <button
          type="submit"
          onClick={handleSubmit(onsubmit)}
          className="w-full py-3 bg-blue-500 text-white text-xl font-semibold rounded-md hover:bg-blue-600 disabled:hover:bg-blue-500 mt-4 mb-8"
        >
          Login
        </button>

      {alert && <span> <BasicAlerts type={alert.type} msg={alert.msg} /> </span>}

      </form>
    </div>
    </div>
    </>
  );
};

export default AdminLogin;
