import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BasicAlerts from '../BasicAlerts'
import axiosInstance from '../../Instance/Axiosinstance'
import { useForm } from 'react-hook-form'



function PasswordChange() {

    const [alert, setAlert] = useState({ visibility: false, type: '', msg: '' })
    const { register, handleSubmit, getValues, formState: { errors } } = useForm(); // using useForm hook for validation
    const location = useLocation()
    const Navigate = useNavigate()
    const searchParams = new URLSearchParams(location.search)
    const email = searchParams.get('email')
    const role = searchParams.get('role')

    function handleChange(e) {
        const {name,value} = e.target
        setData({...data, [name]:value})
    }


    async function onsubmit(data) {
    
        try {
            const response = await axiosInstance.post(`/passwordchange?email=${email}&role=${role}`,data)
            const result = response.data
            setAlert({visibility:true, type:'success', msg:result.message})

            if(role=='student') {

              setTimeout(() => {
                Navigate('/student/login')

              }, 800)

            } else if(role=='teacher') {
              Navigate('/teacher/login')

            }

        } catch(err) {

            if(err) {
                setAlert({visibility:true, type:'error', msg:err.response.data.message})
            }
        }
    }

    if(alert) setTimeout(()=> setAlert(''),800)
  return (
    <div className="outer w-screen h-screen flex flex-col justify-center items-center bg-[#111827]">
    <div className="wrapper md:w-[30%] md:h-[30%] w-[90%] h-auto">
      <h2 className="text-xl font-semibold text-center mb-6 text-blue-400 ml-2">Change your Password</h2>
      
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="mb-4">
          <label htmlFor="password" className="block text-xl font-bold text-white">Password</label>
          <input  
            type="password"
            id="password"
            name='password'
            onChange={handleChange}
            className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500`}
            placeholder="Enter your password"
            {...register('password', {
              required:'This field is required',
              pattern: {
                value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
                message:'Invalid password format'
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
          <label htmlFor="confirmpassword" className="block text-xl font-bold text-white">Confirm Password</label>
          <input
            type='password'
            onChange={handleChange}
            name="confirmpassword" 
            className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500`}
            placeholder={`Confirm your new password`}
            {...register('confirmpassword', {
              required:'This field is required',
              pattern: {
                value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
                message:'Invalid password format'
              }
            })}
          />
           {errors.secretkey && <span className="text-white">{errors.secretkey.message}</span>}

        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white text-xl font-semibold rounded-md hover:bg-blue-600 disabled:hover:bg-blue-500 mt-4 mb-8"
        >
          Login
        </button>

      {alert && <span> <BasicAlerts type={alert.type} msg={alert.msg} /> </span>}

      </form>
    </div>
    </div>
  )
}

export default PasswordChange