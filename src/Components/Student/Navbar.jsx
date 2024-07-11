import React, { useState } from 'react';
import DefaultButton from './DefaultButton';
import sampleProfileImg from '../../assets/images/otpbg.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [profile, setProfile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Navigate = useNavigate()
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='flex shadow-md py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50'>
      <div className='flex flex-wrap items-center justify-between gap-4 w-full'>
        <h1 className='font-customFont text-[#3a5bcc] text-xl md:text-4xl'>Edumeet</h1>
        <div id="collapseMenu" className={`max-lg:hidden lg:!block ${isMenuOpen ? 'block' : 'hidden'} max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}>
         

          <ul className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
          <li className='max-lg:border-b max-lg:py-3 px-3'>
              <span className='font-bold block text-base hover:underline underline-offset-8 transition-all ease-in-out delay-150  hover:scale-105 text-[#3a5bcc]' style={{ textDecorationColor:'#3a5bcc', textDecorationThickness: '3px'}} onClick={()=> Navigate('/student/home')}>Home</span>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <span className=' text-gray-600 font-bold block text-base hover:underline underline-offset-8 transition-all ease-in-out delay-150  hover:scale-105' style={{ textDecorationColor:'#3a5bcc', textDecorationThickness: '3px'}}>My slots</span>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <span className=' text-gray-600 font-bold block text-base hover:underline underline-offset-8 transition-all ease-in-out delay-150  hover:scale-105' style={{ textDecorationColor:'#3a5bcc', textDecorationThickness: '3px'}} onClick={()=> Navigate('/student/teachers')}>Faculties</span>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <span className=' text-gray-600 font-bold block text-base hover:underline underline-offset-8 transition-all ease-in-out delay-150  hover:scale-105' style={{ textDecorationColor:'#3a5bcc', textDecorationThickness: '3px'}} onClick={()=> Navigate('/student/classes')}>Classes</span>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3  text-gray-600 font-bold block text-base hover:underline underline-offset-8 transition-all ease-in-out delay-150  hover:scale-105'>
              <span className=' text-gray-600 font-bold block text-base hover:underline underline-offset-8 transition-all ease-in-out delay-150  hover:scale-105' style={{ textDecorationColor:'#3a5bcc', textDecorationThickness: '3px'}} onClick={()=> Navigate('/student/about')}> Why Edumeet</span>
            </li>
          </ul>
        </div>

        <div className='flex items-center max-lg:ml-auto space-x-5 md:gap-10'>
          <div className="profile w-14 h-14 rounded-full md:flex justify-center items-center hidden">

            {profile ? (
              <img src={sampleProfileImg} alt="profile not found" className='w-full h-full rounded-full' />
            ): (
              <AccountCircleIcon sx={{width:'100%', height:'100%'}} className='text-[#3a5bcc]'/>
            )}  
          </div>
          
          <span className="relative hidden md:block">
            <DefaultButton value={'Logout'} classname={'bg-[#3a5bcc] text-white shadow-none'}/>
          </span>
            
          <button id="toggleOpen" className='lg:hidden !ml-7' onClick={handleMenuToggle}>
          {!isMenuOpen? <MenuIcon size={40} className='text-gray-700 '/> : <CloseIcon size={40} className='text-black' /> } 
          </button>

          <div className={isMenuOpen ? 'fixed z-10 top-[76px] left-0 right-0 h-screen bg-white ease-out duration-500' : 'fixed right-[-100%]'}>
            <ul>
            <li className='max-lg:border-b max-lg:py-3 px-3 text-black hover:text-cyan-400 text-[15px] block font-semibold' >Home</li>
            <li className='max-lg:border-b max-lg:py-3 px-3 text-black hover:text-cyan-400 text-[15px] block font-semibold' >My slots</li>
            <li className='text-black hover:text-cyan-400 text-[15px] block font-semibold max-lg:border-b max-lg:py-3 px-3' onClick={()=> Navigate('/student/teachers')}>Faculties</li>
            <li className='max-lg:border-b max-lg:py-3 px-3 text-black hover:text-cyan-400 text-[15px] block font-semibold' onClick={()=> Navigate('/student/classes')}>Classes</li>
            <li className='max-lg:border-b max-lg:py-3 px-3 text-black hover:text-cyan-400 text-[15px] block font-semibold' onClick={()=> Navigate('/student/about')}>Why Edumeet</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

