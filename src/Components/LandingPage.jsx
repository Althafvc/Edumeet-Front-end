import React from 'react'
import LandingpageNavbar from './Shared/LandingpageNavbar'
import lapbg from '../assets/images/lapbg.svg'
import Globe from '../assets/images/GLobe.svg'
import Slotbooking from '../assets/images/Slotbooking.svg'
import Class from '../assets/images/Class.svg'
import Boost from '../assets/images/Boost.svg'
import Footer from './Shared/LandingpageFooter'
function LandingPage() {

  return (
        <>
        <div className="content w-screen h-full flex flex-col gap-7">
           <LandingpageNavbar/>
           <div className="expansion flex flex-col gap-6">
           <div className="expansion1 w-full h-auto flex flex-col justify-center items-center gap-4 md:flex-row ">
            <div className="text-area w-auto h-auto md:w-[50%] flex flex-col justify-center items-center gap-3 ">
            <div className='flex w-full justify-center'> <h1 className=' text-6xl md:text-8xl font-bold text-[#7391e0] font-newFont'>E</h1> <h1 className=' text-4xl md:text-6xl font-bold text-[#7391e0] mt-4 md:mt-6'>dumeet</h1> </div>
            <h1 className='w-full flex justify-center text-2xl md:text-4xl font-semibold'>E-Learning Platform</h1>
            <p className='w-3/4 flex justify-center text-center text-[#605e5e] text-lg md:text-xl'>A pre-scheduled meeting for your non-postponable future</p>
            <div className='w-full flex justify-center'><button className='px-3 py-2 rounded font-bold text-white bg-[#7391e0] active:scale-[.96] duration-50 ease-in-out '>Get Started</button> </div>
            </div>
           <div className="expansion2 w-full my-2 items-center md:w[50%] flex justify-center">
            <img src={lapbg} className='w-[65%] md:w-[45%]' alt="image not found"/>
           </div>
           </div>
           <div className="head-area flex justify-center w-full items-center mt-3 flex-col gap-2 md:mt-10"><h2 className='font-bold text-lg md:text-3xl'>How Edumeet Works</h2> <hr className='w-[70px] md:w-[100px] bg-[#7391e0] h-0.5 md:mr-7'/> </div>
           <div className="steps w-full flex justify-center items-center flex-col gap-4 md:gap-0 md:flex-row md:justify-around">
            <img src={Globe} alt="image not found" className='h-[250px] w-auto md:ml-24 md:h-[300px] md:w-[40%] md:mt-6'/>
            <div className="description w-fullmd:w-[60%] h-auto flex justify-center md:justify-normal items-center "> <p className='text-center w-[70%] text-[#605e5e] md:text-3xl'>Create an account on our platform and connect with others around the world.</p></div>
           </div>

           <div className="steps w-full flex justify-center items-center flex-col gap-4 md:gap-0 md:flex-row-reverse md:justify-around">
            <img src={Slotbooking} alt="image not found" className='h-[250px] w-auto md:mr-24 md:h-[300px] md:w-[40%] md:mt-6'/>
            <div className="description w-full md:w-[60%] h-auto flex justify-center md:justify-end items-center"> <p className='text-center w-[70%] text-[#605e5e] md:text-3xl'>Personalize your learning experience by booking classes that fits your schedule and learning goals</p></div>
           </div>

           <div className="steps w-full flex justify-center items-center flex-col gap-4 md:gap-0 md:flex-row md:justify-around">
            <img src={Class} alt="image not found" className='h-[250px] w-auto md:ml-24 md:h-[300px] md:w-[40%] md:mt-6'/>
            <div className="description w-fullmd:w-[60%] h-auto flex justify-center md:justify-center
             items-center"> <p className='text-center w-[70%] text-[#605e5e] md:text-3xl'>Engage in your classes without the disruption of a traditional classroom environment.</p></div>
           </div>

           <div className="steps w-full flex justify-center items-center flex-col gap-4 md:gap-0 md:flex-row-reverse md:justify-around md:mb-10">
            <img src={Boost} alt="image not found" className='h-[250px] w-auto md:mr-24 md:h-[300px] md:w-[40%] md:mt-6'/>
            <div className="description w-full md:w-[50%] h-auto flex justify-center md:justify-end items-center"> <p className='text-center w-[70%] text-[#605e5e] md:text-3xl'>Elevate Your Expertise to the next level with us
</p></div>
           </div>
            <Footer/>
            </div>
            </div>
        </>
  )
}

export default LandingPage

