import React from 'react'
import section1Img from '../../assets/images/teacherssection1Img.webp'
import ContentStyle from '../../Components/Student/ContentStyle'
import BluetickArea from '../../Components/Student/BluetickArea'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Section4Img from '../../assets/images/section4Img.webp'
import Section2Img from '../../assets/images/section2Img.webp'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Statistics from '../../Components/Student/Statistics';
import checking from '../../assets/images/checking.webp'
import StudentButton from '../../Components/Student/StudentButton';
import StudentFooter from '../../Components/Student/StudentFooter';
import { useNavigate } from 'react-router-dom';
import Section6Img from '../../assets/images/studentcardImg2.webp'





function About() {
  const Navigate = useNavigate()

  return (
    <>
    <div className="wrapper h-auto w-full flex flex-col gap-32 md:gap-40 scroll-smooth">

{/* Section 1 */}
<section className='w-full h-[300px] '>
      <div className="shutter w-full h-[400px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${section1Img})`}}>
        <div className="bg-black opacity-75 w-full h-full flex justify-center items-center">
            <h1 className='text-white text-5xl font-bold'>About Us</h1>  
        </div>
      </div>
    </section>

    {/* Section 2*/}
    <section className='w-full h-auto md:flex '>
        <div className="side1 md:pl-32">
        <ContentStyle subHead={'Why Choose Us'} mainHead={'Why You Should Choose Us'} Para={'Experience flexible learning with Edumeet’s eLearning platform. Our classes are designed to fit your schedule and learning needs, with personalized instruction and support'} style1={'md:text-left text-center md:w-full md:text-3xl'} style2={'text-center md:text-left md:text-5xl mt-3 md:mt-5'} style3={'text-center md:text-left md:text-2xl mt-3 md:mt-5 px-3'}/>
        <div className="icons-outerwrap ">
        <BluetickArea icon={<CheckCircleOutlineIcon sx={{ width: 40, height: 40 }} className='text-white hover:text-gray-600' />} head={'Flexible Scheduling'} para={'Choose from a wide range of available slots and book the classes that fit your schedule.'}/>
        <BluetickArea icon={<CheckCircleOutlineIcon sx={{ width: 40, height: 40 }} className='text-white hover:text-gray-600' />} head={'Personalized Instruction'} para={'Receive personalized instruction and support from our expert teachers to help you achieve your learning goals.'}/>
        <BluetickArea icon={<CheckCircleOutlineIcon sx={{ width: 40, height: 40 }} className='text-white hover:text-gray-600' />} head={'Accessible Education'} para={'Access quality education anytime, anywhere, with our eLearning platform that connects you with expert teachers worldwide.'}/>
        </div>
        </div>
        <div className="side 2 w-full h-auto flex justify-center mt-10  md:items-center">
          <img src={Section4Img} alt="image not found" className='rounded-3xl md:w-[500px] md:h-[500px] w-[90%] md:mt-28 hover:scale-[1.1] hover:transition duration-500 linear'/>

        </div>
      </section>


      {/* Section 3*/}
      <section className='w-full h-auto text-center md:text-left   px-3 md:flex'>
          <div className="img-area flex flex-col md:w-[50%]  gap-4 md:pl-36">
            <ContentStyle mainHead={'Empowering Education, Anytime, Anywhere'} subHead={'About'} style1={'md:text-left md:text-3xl'} style2={'md:text-left md:text-5xl'} />
            <img src={Section2Img} alt="image not found" className='rounded-3xl md:w-[500px] md:h-[500px]' />
          </div>

          <div className="content-area mt-3 md:pt-36" data-aos="fade-up">
            <p className='font-studentButton text-lg md:text-2xl'>Expert Teachers at Your Fingertips</p>
            <span className='flex gap-4 mt-6 md:mt-10 '><CheckCircleIcon sx={{ width: 30, height: 30 }} /> <p className='font-bold text-lg'>Quality Education</p></span>
            <span className='flex gap-4 mt-3 md:mt-6'><CheckCircleIcon sx={{ width: 30, height: 30 }} /> <p className='font-bold text-lg'>Flexible Scheduling</p></span>
            <span className='flex gap-4 mt-3 md:mt-6'><CheckCircleIcon sx={{ width: 30, height: 30 }} /> <p className='font-bold text-lg'>Expert Teachers</p></span>
            <div className="contain mt-10 md:mt-20 flex flex-col gap-5  md:flex-row md:gap-24">
              <Statistics value={'250+'} description={'Graduated'} />
              <Statistics value={'640+'} description={'Post graduates'} />
              <Statistics value={'800+'} description={'PHD fellows'} />
            </div>
          </div>
        </section>


         {/* Section 4*/}
         <section className='w-full h-[300px] '>
          <div className="shutter w-full h-[400px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${checking})`}}>
            <div className="bg-black opacity-65 w-full h-full"></div>
          </div>
        </section>


        {/* Section 5*/}
      <section className='w-full md:flex md:gap-36 mt-28'>
        <div className="side1 w-full h-auto px-3">
        <ContentStyle subHead={'Our Journey'} mainHead={'Join Our Community of Lifelong Learners'} Para={'Become a part of our community of lifelong learners and experience the joy of learning with Edumeet. Connect with expert teachers and fellow students worldwide, and expand your knowledge and skills.'} style1={'text-center md:text-start md:ml-[210px]'} style2={'text-center mt-3 md:text-start md:ml-[210px]'} style3={'text-center mt-3 md:text-start md:ml-[210px]'}/>
        </div>
        <div className="side2 w-full h-auto mt-6">
          <div className="wrap1  md:w-[80%] w-full h-auto text-center mt-5 flex flex-col gap-5 md:flex-row md:gap-2">
          <Statistics value={' 75K+'} description={'Satisfied Students'}/>
          <Statistics value={' 100+'} description={'Expert Instructor'}/>
          </div>
          <div className="wrap2  md:w-[80%] w-full h-auto text-center mt-5 flex flex-col gap-5 md:flex-row  md:gap-0">
          <Statistics value={' 50+'} description={'Areas'}/>
          <Statistics value={'600+'} description={'personnals'}/>
          </div>
        </div>
      </section>


       {/* Section 7*/}
       <section className='w-full md:flex md:gap-64 flex justify-center flex-col gap-10 items-center md:flex-row'>
        <div className="side1 md:w-[40%] w-full h-auto px-3 md:flex md:flex-col md:gap-4">
        <ContentStyle subHead={'Our Class'} mainHead={'Our classes'} Para={'Our classes are designed to be interactive and engaging, with a focus on student participation and collaboration. You will have access to a range of resources and materials to support your learning.'} style1={'text-center md:text-left'} style2={'text-center md:text-left'} style3={'text-center md:text-left'}/>
        </div>
        <div className="side2 mt-10"> 
        <StudentButton value="See All Classes" clicked={() => Navigate('/student/classes')}/>
        </div>
      </section>


       {/* Section 8*/}
       <section className='w-full h-auto  flex justify-center'>
        <div className="img-area w-[90%] h-[400px] rounded-3xl bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${Section6Img})`}}>
        <div className="bg-black opacity-75 w-full h-full rounded-3xl ">
          <ContentStyle subHead={"LET'S JOIN US"} mainHead={'Be an Expert with us'} Para={'Experience immersive learning with our state-of-the-art eLearning platform, featuring interactive tools and engaging multimedia content.'} style1={'text-center pt-16 md:text-2xl text-blue-900'} style2={'text-center text-white mt-6'} style3={'text-center text-white px-3 mt-7 text-white'}/>
        </div>
        </div>
      </section>


       {/*Section 9*/}
       <section>
      <StudentFooter/>
      </section>
    </div>
    </>
  )
}

export default About