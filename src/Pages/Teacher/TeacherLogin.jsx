import React, { useState } from "react";
import Teacher from '../../assets/images/TeacherLogin.jpg';
import axiosInstance from "../../Instance/Axiosinstance";
import BasicAlerts from '../../Components/BasicAlerts'


function TeacherLogin() {

    const [loginData, setLoginData] = useState({email:'', password:''})
    const [alert, setAlert] = useState({visibility:false, type:'', message:''})

    function handleChange (e) {
        e.preventDefault()
        const {name, value} = e.target
        setLoginData({...loginData, [name]:value})

    }

    async function onsubmit () {
        try  {
             const response = await axiosInstance.post('/teacher/login',loginData)
             const result = response.data
        }catch(err) {
            console.log(err);
            setAlert({visibility:true, type:'error', message:err.response.data.message})
        }
    }
    return (
        <>
        <div className="outer w-screen h-screen flex flex-col justify-center items-center bg-[#1b3c3a]">
        <div className="wrapper md:w-[30%] md:h-[30%] w-[90%] h-auto">
          <h2 className="text-xl font-semibold text-center mb-6 text-white ml-2">Login to start earning</h2>
          
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-xl font-bold text-white">Email</label>
              <input  
                type="email"
                id="email"
                name='email'
                className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500`}
                placeholder="Enter your email"
                // {...register('email', {
                //   required:'This field is required',
                //   pattern: {
                //     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                //     message:'Invalid email address'
                //   }
                // })}
              />
              {/* {errors.email && <span className="text-white">{errors.email.message}</span>} */}
    
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
              <label htmlFor="Password" className="block text-xl font-bold text-white">Password</label>
              <input
                type='password'
                id="secretkey" 
                name="secretkey" 
                className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500`}
                placeholder={`Enter the Secret key`}
                // {...register('secretkey', {
                //   required:'This field is required',
                //   minLength: {
                //     value:4,
                //     message:'Secret key must be 4 digits'
                //   },
                //   pattern: {
                //     value: /^\d+$/,
                //     message:'Only numbers are allowed'
                //   }
                // })}
              />
               {/* {errors.secretkey && <span className="text-white">{errors.secretkey.message}</span>} */}
    
            </div>
            <a href="" className="text-white hover:underline hover:text-blue-400">Forgot Password</a>
            <button
              type="submit"
              onClick={null}
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
}

export default TeacherLogin;
