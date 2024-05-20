import React from 'react'
import Goldenlogo from '../../assets/Company logos/logo-white-transparent.png';

function StudentSignup() {

  return (
    <>
    <div className="container w-screen h-screen flex justify-center items-center bg-white">
      <div className="form-container px-2 md:px-0 rounded-2xl md:w-2/4 md:h-[570px] flex flex-col md:flex-row shadow-customShadow overflow-auto md:overflow-hidden h-auto">
        <div className="bg-gradient-to-br from-[rgb(9,75,160)] to-[#2092f4]  welcome-area md:w-[50%] h-full  flex justify-center items-center flex-col gap-5 py-2 md:gap-16">
          <h2 className="text-white font-sans text-2xl">Welcome to</h2>
          <img src={Goldenlogo} alt="image not found" className="w-[100px] h-[100px]" />
          <div className="description-area w-full flex justify-center items-center">
            <p className="description text-white text-sm md:text-lg w-full ml-10">A pre-scheduled meeting for your non-postponable future.</p>
          </div>
        </div>
        <div className="form-area bg-[#ffffff] md:w-[50%] h-full flex justify-center pl-8 flex-col py-3 gap-6">
          <div className="heading-area flex justify-center">
            <h2 className="text-[#4b4343] font-bold text-lg">Create your account</h2>
          </div>
          <div className="signupform-area">
            <form className='flex flex-col gap-5'>
             

            <div className="form-outline flex flex-col">
                <label htmlFor="name" className="text-[#6d6262] font-semibold">Full name</label>
                <input
                  type="text"
                  name="name"
                  className="border-0 border-b-[2.5px] border-gray-400 w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none "
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-outline flex flex-col">
                <label htmlFor="email" className="text-[#6d6262] font-semibold">E mail</label>
                <input
                  type="email"
                  name="email"
                  className="border-0 border-b-[2.5px] border-gray-400 w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none "
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-outline flex flex-col">
                <label htmlFor="phone" className="text-[#6d6262] font-semibold">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="border-0 border-b-[2.5px] border-gray-400 w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none "
                  placeholder="Enter your phone number"
                />
              </div>
             
              <div className="form-outline flex flex-col">
                <label htmlFor="qualification" className="text-[#6d6262] font-semibold">Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  className="border-0 border-b-[2.5px] border-gray-400 w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none "
                  placeholder="Enter your current qualification"
                />
              </div>
              <div className="form-outline flex flex-col">
                <label htmlFor="passsword" className="text-[#6d6262] font-semibold">Password</label>
                <input
                  type="password"
                  name="password"
                  className="border-0 border-b-[2.5px] border-gray-400 w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none "
                  placeholder="Enter your password"
                />
              </div>
              <div className="form-outline flex flex-col">
                <label htmlFor="confirmpasssword" className="text-[#6d6262] font-semibold">Confirm Password</label>
                <input
                  type="password"
                  name="confirmpasssword"
                  className="border-0 border-b-[2.5px] border-gray-400 w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none "
                  placeholder="re-enter your password"
                />
              </div>
            </form>
          </div>
          <div className="button-area w-full flex justify-center">
            <button className=' outline-2 outline-gray-600 p-2 rounded-md w-24 font-semibold bg-gradient-to-br from-[rgb(9,75,160)] to-[#2092f4] text-white'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  </>
)
}


export default StudentSignup