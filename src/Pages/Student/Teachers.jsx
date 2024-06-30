import React from 'react'
import { useNavigate } from 'react-router-dom'
import ContentStyle from '../../Components/Student/ContentStyle'
import StudentCard from '../../Components/Student/StudentCard'
import section1Img from '../../assets/images/teacherssection1Img.webp'
import Teacher1img from '../../assets/images/Teacher1img.webp'
import Teacher2img from '../../assets/images/Teacher2img.webp'
import Teacher3img from '../../assets/images/Teacher3img.webp'
import Teacher4img from '../../assets/images/Teacher4img.webp'
import Card1Img1 from '../../assets/images/section5Img1.webp'
import Card1Img2 from '../../assets/images/section5Img2.webp'
import Card1Img3 from '../../assets/images/section5Img3.webp'
import Section6Img from '../../assets/images/studentcardImg2.webp'
import StudentButton from '../../Components/Student/StudentButton'
import Courses from '../../Components/Student/Courses'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import StudentFooter from '../../Components/Student/StudentFooter'

function Teachers() {
  const Navigate = useNavigate()

  function navigateToClasses () {
    Navigate('/student/classes')
  }

  return (

<>
<div className="wrapper h-auto w-full flex flex-col gap-32 md:gap-40 scroll-smooth">

    {/* Section 1 */}
    <section className='w-full h-[300px] '>
          <div className="shutter w-full h-[400px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${section1Img})`}}>
            <div className="bg-black opacity-75 w-full h-full flex justify-center items-center">
                <h1 className='text-white text-5xl font-bold'>Our Instructors</h1>  
            </div>
          </div>
        </section>


        {/* Section 2 */}
        <section className='w-full h-auto md:mt-20'>
        <ContentStyle subHead={'Our Teachers'} mainHead={'Meet Our Instructors'} style1={'text-center  md:text-3xl'} style2={'md:text-5xl text-center mt-3 md:mt-5 md:ml-10'}/>
        <div className="card-area w-[95%] mx-auto gap-20 md:gap-0 flex flex-col items-center mt-8 md:flex-row md:justify-around" >
        <StudentCard img={Teacher1img} head={'Ramees P'} para={'ENGLISH INSTRUCTOR'}/>
        <StudentCard img={Teacher2img} head={'Ajay T'} para={'MATH INSTRUCTOR'}/>
        <StudentCard img={Teacher3img} head={'Jazeen pk'} para={'DIGITAL ART INSTRUCTOR'}/>
        <StudentCard img={Teacher4img} head={'Juliana Silva'} para={'SCIENCE INSTRUCTOR'}/>

        </div>
       </section>


       {/* Section 3*/}
      <section className='w-full md:flex md:gap-36 flex justify-center'>
        <div className="side1 md:w-[65%] w-full h-auto px-3">
        <ContentStyle subHead={'Our Expertise'} mainHead={'We are the eLearning Experts'} Para={'Our cutting-edge eLearning technology and innovative teaching methods make us the go-to experts for learners of all levels, from beginners to advanced professionals.'} style1={'text-center md:text-start'} style2={'text-center mt-3 md:text-start'} style3={'text-center mt-3 md:text-start'}/>
        </div>
      </section>


       {/* Section 4*/}
       <section className='w-full md:flex md:gap-36 flex justify-center'>
        <div className="side1 md:w-[65%] w-full h-auto px-3">
        <ContentStyle subHead={'Our Facilities'} mainHead={'A Seamless Learning Experience'} Para={'We offer a seamless and engaging learning experience, with a user-friendly platform that ensures easy access to courses, materials, and resources.'} style1={'text-center md:text-start'} style2={'text-center mt-3 md:text-start'} style3={'text-center mt-3 md:text-start'}/>
        </div>
      </section>


      {/* Section 5*/}
      <section className='w-full h-auto'>
        <ContentStyle subHead={'Our programs'} mainHead={'Grade Programs'} style1={'text-center  md:text-3xl'} style2={'md:text-5xl text-center mt-3 md:mt-5 md:ml-10'}/>
        <div className="card-area w-[80%] mx-auto gap-20 md:gap-0 flex flex-col items-center mt-8 md:flex-row md:justify-around" >
        <StudentCard img={Card1Img1} head={'User-Friendly Interface'} para={'Enjoy our user-friendly interface, designed to be easy to navigate and use, ensuring a seamless learning experience.'}/>
        <StudentCard img={Card1Img2} head={'Mobile Compatibility'} para={'Take your learning on-the-go with our mobile-compatible platform, ensuring you can learn anytime, anywhere, from any device.'}/>
        <StudentCard img={Card1Img3} head={'Real-Time Feedback'} para={'Get real-time feedback from instructors, ensuring that you get the guidance and support you need to achieve your learning goals.'}/>
        </div>
       </section>


        {/* Section 6*/}
        <section className='w-full h-auto  flex justify-center'>
        <div className="img-area w-[90%] h-[400px] rounded-3xl bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${Section6Img})`}}>
        <div className="bg-black opacity-75 w-full h-full rounded-3xl ">
          <ContentStyle subHead={"LET'S JOIN US"} mainHead={'Be an Expert with us'} Para={'Experience immersive learning with our state-of-the-art eLearning platform, featuring interactive tools and engaging multimedia content.'} style1={'text-center pt-16 md:text-2xl text-blue-900'} style2={'text-center text-white mt-6'} style3={'text-center text-white px-3 mt-7 text-white'}/>
        </div>
        </div>
      </section>


        {/* Section 7*/}
        <section className='w-full md:flex md:gap-64 flex justify-center flex-col gap-10 items-center md:flex-row'>
        <div className="side1 md:w-[40%] w-full h-auto px-3 md:flex md:flex-col md:gap-4">
        <ContentStyle subHead={'Our Class'} mainHead={'Our classes'} Para={'Our classes are designed to be interactive and engaging, with a focus on student participation and collaboration. You will have access to a range of resources and materials to support your learning.'} style1={'text-center md:text-left'} style2={'text-center md:text-left'} style3={'text-center md:text-left'}/>
        </div>
        <div className="side2 mt-10"> 
          <StudentButton value={'See All Classes'} clicked={navigateToClasses}/>
        </div>
      </section>


       {/* Section 7*/}
       <section className='w-full h-auto flex justify-center flex-col items-center md:flex-row'>
       <Courses icon={<CheckCircleOutlineIcon className='text-white' sx={{ width: 30, height: 30 }}/>} head={'Web Development'}  para={'Get hands-on experience with our Web Development Class, designed to equip you with the skills to create stunning websites and applications. Our expert instructors provide personalized guidance and support to enhance your learning experience.'}/>
       <Courses icon={<CheckCircleOutlineIcon className='text-white' sx={{ width: 30, height: 30 }}/>} head={'Music Theory'}  para={'Explore the principles of music with our Music Theory Class, designed for both novice and experienced musicians. Our expert instructors provide a comprehensive understanding of music theory, enhancing your skills and appreciation of music.'}/>
       <Courses icon={<CheckCircleOutlineIcon className='text-white' sx={{ width: 30, height: 30 }}/>} head={'Online Math Class'}  para={'Master the world of numbers with our Online Math Class, suitable for students of all ages and levels. From algebra to calculus, our expert instructors provide comprehensive guidance and support to enhance your mathematical abilities.'}/>
    </section>

      {/* Section 8*/}
      <section>
        <StudentFooter/>
    </section>
</div>


</>




)
}

export default Teachers