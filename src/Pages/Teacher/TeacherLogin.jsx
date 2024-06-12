import React from "react";
import Teacher from '../../assets/images/TeacherLogin.jpg';

function TeacherLogin() {
    return (
        <div className="wrapper w-screen h-screen flex items-center justify-center">
            <div className="form-container w-full h-full md:flex md:w-[60%] md:h-auto overflow-hidden">

                
                <div className="wrap flex flex-col">
                <div className="head-area w-full h-[85px] bg-[#17676d] md:bg-[#14767d] flex justify-center items-center">
                    <h1 className="font-headFont text-[#ffffff] text-4xl font-bold">Edumeet</h1>
                </div>

                <div className="img-area w-full h-[300px] md:h-[385px] bg-cover bg-no-repeat bg-center">
                    <img src={Teacher} alt="image not found" className="h-full"/>
                </div>
                </div>

                <div className="form-area bg-[#14767d] h-auto flex flex-col gap-4   pt-4 pl-10 md:pt-16">
                    <h1 className="text-white font-bold text-2xl">Share your <br/> passion with us...</h1>

                    
                        <form className="w-full flex flex-col gap-5 mb-2 mt-2 md:flex md:flex-col md:mb-0">
                            <input 
                                type="email" 
                                className="rounded-3xl w-[80%] bg-[#1e6368] pl-10 h-[50px] text-white focus:outline-gray-400 focus:outline-none" 
                                placeholder="Enter your Email" 
                            />
                            <input 
                                type="password" 
                                className="rounded-3xl w-[80%] bg-[#1e6368] pl-10 h-[50px] text-white focus:outline-gray-400 focus:outline-none" 
                                placeholder="Enter your password" 
                            />
                             <a href="" className="width-full ml-36 text-[#afdde0] font-semibold md:text-sm md:ml-32">Forgot Password</a>
                        </form>
                    

                    <div className="btn-area w-full">
                        <button className="border-none rounded-3xl p-3 px-10 text-white text-center bg-[#299a78]"> Login </button>

                    </div>
                    <p className="width-full ml-28 text-[#afdde0]  pb-5 md:text-sm md:pb-0 md:mt-4 md:ml-12 md:mr-4">Do not have an account <a href="/teacher/signup" className="text-white hover:underline ml-20 font-semibold md:ml-0">Register here</a></p>
                </div>
            </div>
        </div>
    );
}

export default TeacherLogin;
