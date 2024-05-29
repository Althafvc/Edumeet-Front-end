import React from 'react';
import DefaultButton from '../../Components/Student/DefaultButton';
import Teacherbg from '../../assets/images/teacher.jpg';

function TeacherSignup() {
  return (
    <>
      <div className="container w-screen h-screen flex justify-center items-center bg-white">
        <div className="form-container px-2 md:px-0 rounded-2xl md:w-[55%] md:h-[570px] flex flex-col md:flex-row shadow-customShadow overflow-auto md:overflow-hidden h-auto">
          <div className={`welcome-area md:w-[50%] h-[230px] md:h-full flex justify-between md:py-5 items-center flex-col gap-5 py-2 md:gap-16`} style={{backgroundImage:`url(${Teacherbg})`,backgroundPosition:"center" ,backgroundSize:"cover"}}>
            <h2 className="text-[#ffffffef] text-[2rem] font-newFont text-center font-semibold">Welcome to Edumeet</h2>
            <div className="description-area w-full flex justify-center items-center">
              <p className="description text-center text-[#ffffff96] pb-2 text-[.9rem] px-10 w-full ml-10">A pre-scheduled meeting for your non-postponable future.</p>
            </div>
          </div>
          <div className="form-area flex flex-col bg-[#163c3a]  md:w-[50%] justify-center pl-8 py-3 gap-6">
            <div className="heading-area flex justify-center">
              <h2 className="text-[white] font-thin shadow-sm font-customFont text-[1.4rem]">Create your account</h2>
            </div>
            <div className="signupform-area w-full justify-center">
              <form className="flex pl-10 flex-col gap-3 w-full">
                <div className="form-outline flex flex-col gap-1">
                  <label htmlFor="name" className="text-[#ffffffe9] text-[.88rem] font-semibold">Full name</label>
                  <input
                    type="text"
                    name="name"
                    className=" border-gray-400 w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none rounded-sm shadow-sm h-[2rem] pl-3 text-lg placeholder:text-black"
                    placeholder="Enter your name"
                    aria-label="Full name"
                  />
                </div>

                <div className="form-outline flex flex-col gap-1">
                  <label htmlFor="email" className="text-[#ffffffe9] font-semibold text-[.88rem]">E mail</label>
                  <input
                    type="email"
                    name="email"
                    className=" border-gray-400 w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none rounded-sm shadow-sm h-[2rem] pl-3 text-lg placeholder:text-black"
                    placeholder="Enter your email address"
                    aria-label="Email"
                  />
                </div>

                <div className="form-outline flex flex-col gap-1">
                  <label htmlFor="phone" className="text-[#ffffffe9] font-semibold text-[.88rem]">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className=" border-gray-400 w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none rounded-sm shadow-sm h-[2rem] pl-3 text-lg placeholder:text-black"
                    placeholder="Enter your phone number"
                    aria-label="Phone"
                  />
                </div>

                <div className="form-outline flex flex-col gap-1">
                  <label htmlFor="qualification" className="text-[#ffffffe9] font-semibold text-[.88rem]">Qualification</label>
                  <input
                    type="tel"
                    name="qualification"
                    className=" border-gray-400 w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none rounded-sm shadow-sm h-[2rem] pl-3 text-lg placeholder:text-black"
                    placeholder="Enter your current qualification"
                    aria-label="qualification"
                  />
                </div>
          

                <div className="form-outline flex flex-col gap-1">
                  <label htmlFor="password" className="text-[#ffffffe9] font-semibold text-[.88rem]">Password</label>
                  <input
                    type="password"
                    name="password"
                    className=" border-gray-400 w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none rounded-sm shadow-sm h-[2rem] pl-3 text-lg placeholder:text-black"
                    placeholder="Enter your password"
                    aria-label="Password"
                  />
                </div>

                <div className="form-outline flex flex-col gap-1">
                  <label htmlFor="confirmpassword" className="text-[#ffffffe9] font-semibold text-[.88rem] placeholder:font-[black]">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmpassword"
                    className=" border-gray-400 w-[80%] placeholder:text-sm focus:border-b-[#4e87c5] focus:outline-none rounded-sm shadow-sm h-[2rem] pl-3 text-lg placeholder:text-black"
                    placeholder="Re-enter your password"
                    aria-label="Confirm Password"
                  />
                </div>
                <div className="button-area w-full flex justify-center">
                  <DefaultButton value='Submit' clicked={null} classname={' bg-[#e3b93e] text-black shadow-none font-bold'}/>
                </div>
              </form> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeacherSignup;
