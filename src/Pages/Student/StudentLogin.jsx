import React from 'react';
import Image from '../../assets/images/Studentlogin.png'
function StudentLogin() {
  return (
   <>
  <div className="content w-screen h-screen flex justify-center items-center bg-white">
      <div className="form-container px-2 md:px-0 rounded-2xl md:w-2/4 md:h-[480px] flex flex-col md:flex-row md:shadow-customShadow overflow-auto md:overflow-hidden h-auto ">
        <div className=" md:py-16   welcome-area md:w-[50%] h-full  flex justify-center items-center flex-col gap-5 md:gap-16 overflow-hidden">
          <img src={Image} alt="image not found" className='md:w-full md:h-full w-auto h-auto'/>
        </div>
        <div className="form-area bg-[#ffffff] md:w-[50%] md:h-full md:flex md:justify-center  md:flex-col md:gap-10 md:items-center md:py-10  flex flex-col justify-center w-full gap-10 py-8">
          <div className="heading-area flex justify-center">
            <h2 className="text-[#4b4343] font-bold md:text-2xl text-xl text-center">Create your account</h2>
          </div>
          <div className="signupform-area">
            <form className='flex flex-col gap-8 items-center w-full'>
              
              <div className="form-outline flex flex-col w-full gap-3 md:gap-1">
                <label htmlFor="email" className="text-[#6d6262] pl-9 font-semibold text-lg md:pl-0">E mail</label>
                <input
                  type="email"
                  name="email"
                  className="border-0 mx-auto border-b-[2.5px] border-gray-400 md:w-[100%] w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="form-outline flex flex-col w-full  gap-3 md:gap-1">
                <label htmlFor="passsword" className="text-[#6d6262] pl-9 font-semibold text-lg md:pl-0">Password</label>
                <input
                  type="password"
                  name="password"
                  className="border-0 border-b-[2.5px] mx-auto border-gray-400 md:w-[100%] w-[80%]  placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none "
                  placeholder="Enter your password"
                />
              </div>
             
            </form>
          </div>
          <div className="button-area w-full flex justify-center">
            <button className=' outline-2 outline-gray-600 p-2 rounded-md w-24 font-semibold bg-blue-600 text-white shadow-customShadow hover:border-2 hover:bg-white hover:text-black'>Submit</button>
          </div>
        </div>
      </div>
    </div>
   </>
  );
}

export default StudentLogin;
