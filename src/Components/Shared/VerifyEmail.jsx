import React, { useState } from 'react';
import axiosInstance from '../../Instance/Axiosinstance';
import BasicAlerts from '../BasicAlerts';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
function VerifyEmail() {
    const [alert, setAlert] = useState({ visibility: false, type: '', msg: '' })
    const { register, handleSubmit, getValues, formState:{ errors }} = useForm(); // using useForm hook for validation
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const role = queryParams.get('role')
 const Navigate = useNavigate()

    async function onsubmit(data) {
        try {
            const response = await axiosInstance.post(`/verifyemail?role=${role}`, data)
            const result = response.data
            const email = response.data.email
            setAlert({ visibility: true, type: 'success', msg: result.message })
           
            Navigate(`/forgototp?${new URLSearchParams({email:email, role:role})}`);


        } catch (err) {

          setAlert({ visibility: true, type: 'error', msg: err.response.data.message})
        }
    }
     if(alert) setTimeout(() => { setAlert('')}, 800);

    return (
        <div className="h-screen flex justify-center items-center bg-[#e5e7eb] px-3 md:px-0 ">
            <form onSubmit={handleSubmit(onsubmit)} className="w-96 h-96 flex flex-col items-center rounded-lg border bg-white border-gray-200 shadow-md">
                <h2 className="mt-12 mb-20 #e5e7eb font-bold text-xl text-gray-700">Verify with Email</h2>
                <div className="flex flex-col  px-3">
                    <label htmlFor="email" className="font-serif text-xl text-red-800">E mail</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="yourname@gmail.com"
                        className="outline-none border border-gray-400 focus:border-none h-10 w-80 pl-3 rounded shadow-md mt-3"
                        /* { Registering the input with appropriate validation} */
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Invalid email format'
                            }
                        })}

                    />
                     {errors.email && <span className="text-red-600">{errors.email.message}</span>} 

                    {alert && <span className='mt-4'> <BasicAlerts type={alert.type} msg={alert.msg} /> </span>}
                </div>
                <button
                    type="submit"
                    className="  mt-4 py-2 px-8 border-none outline-none text-white font-sans rounded cursor-pointer transition-all duration-500 bg-blue-500 active:scale-95" >
                    SUBMIT
                </button>
            </form>
        </div>
    );
}

export default VerifyEmail;
