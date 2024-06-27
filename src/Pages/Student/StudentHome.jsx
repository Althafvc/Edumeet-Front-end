import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Student/Navbar'
import img1 from '../../assets/images/student.webp'
import ContentStyle from '../../Components/Student/ContentStyle'
import StudentButton from '../../Components/Student/StudentButton'
import Section2Img from '../../assets/images/section2Img.webp'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Statistics from '../../Components/Student/Statistics'
import checking from '../../assets/images/checking.webp'
import StudentCard from '../../Components/Student/StudentCard'
import StudentCard1Img from '../../assets/images/studentCard1.webp'
import StudentCard2Img from '../../assets/images/studentcardImg2.webp'
import StudentCard3Img from '../../assets/images/studentcard3Img.webp'
import BluetickArea from '../../Components/Student/BluetickArea'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Section4Img from '../../assets/images/section4Img.webp'
import Teacher1img from '../../assets/images/Teacher1img.webp'
import Teacher2img from '../../assets/images/Teacher2img.webp'
import Teacher3img from '../../assets/images/Teacher3img.webp'
import Teacher4img from '../../assets/images/Teacher4img.webp'
import Section7Img from '../../assets/images/section7Img.webp'
import StudentFooter from '../../Components/Student/StudentFooter'
function StudentHome() {
const Navigate = useNavigate()

function navigateToTeachers () {
  Navigate('/student/teachers')
} 
 return (
    <>
    <Navbar />

      <div className="wrapper h-auto w-full flex flex-col gap-32 md:gap-40 scroll-smooth">
        {/* Section 1 */}
        <section className='w-full h-auto md:h-[600px] md:flex'>
          <div className="img-area md:w-[80%] mt-20 md:mt-0 h-[500px] md:h-full object-cover">
            <img src={img1} className='w-full h-full rounded-3xl md:rounded-none  ' alt="image not found" />
            <div 
  className="msg-area hidden md:block default:hidden w-auto h-auto px-5 py-5 200px bg-[#ffffff] rounded-lg" 
  style={{ position: 'absolute', top: '470px', left: '315px' }}
>

              <hr className='h-[110px] w-[2.5px] bg-blue-600' style={{ position: 'absolute' }} />
              <p className='font-customFont ml-6'>“I never thought learning could <br />be this fun and convenient! <br /> Edumeet has changed the way <br />I approach education.” – Jazeen,<br /> student</p>
            </div>
          </div>
          <div className="content-area w-full h-[600px] md:h-full md:w-[90%] flex flex-col gap-8 items-center md:items-start mt-16 md:mt-0 md:justify-center md:px-36 ">
            <ContentStyle subHead={'Welcome to Edumeet'} mainHead={'Edumeet - eLearning  Platform'} Para={'Edumeet is a platform where teachers add their free time as slots and students can book those slots and attend the classes as online meetings. We offer a wide range of classes, from virtual English and online math to digital art classes, all taught by expert teachers.'} style1={'md:text-left md:w-full md:text-2xl'} style2={'text-center md:text-left md:mr-10 md:text-5xl'} style3={'text-center md:text-left md:text-2xl'} />
            <StudentButton value={'GRAB NEW SLOT'} />
          </div>
        </section>


        {/* Section 2*/}
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
            <StudentButton classname={'mt-6 md:mt-10 w-full md:w-[200px] md:mr-28'} value={'More about us'} />
            <div className="contain mt-10 md:mt-14 flex flex-col gap-5  md:flex-row md:gap-20">
              <Statistics value={'250+'} description={'Graduated'} />
              <Statistics value={'640+'} description={'Post graduates'} />
              <Statistics value={'800+'} description={'PHD fellows'} />
            </div>
          </div>
        </section>

        {/* Section 3*/}
        <section className='w-full h-[300px] '>
          <div className="shutter w-full h-[400px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${checking})`}}>
            <div className="bg-black opacity-65 w-full h-full"></div>
          </div>
        </section>

       {/* Section 4*/}
       <section className='w-full h-auto'>
        <ContentStyle subHead={'Our programs'} mainHead={'Grade Programs'} style1={'text-center  md:text-3xl'} style2={'md:text-5xl text-center mt-3 md:mt-5 md:ml-10'}/>
        <div className="card-area w-[80%] mx-auto gap-20 md:gap-0 flex flex-col items-center mt-8 md:flex-row md:justify-around" >
        <StudentCard img={StudentCard1Img} head={'Virtual English Class'} para={'Join our virtual English classes and improve your language skills from the comfort of your own home. Our expert teachers provide personalized instruction to help you achieve your language goals.'}/>
        <StudentCard img={StudentCard2Img} head={'Online Math Class'} para={'Enroll in our online math classes and excel in your studies. Our expert teachers provide personalized instruction to help you build a strong foundation in math and succeed in your academic and professional pursuits.'}/>
        <StudentCard img={StudentCard3Img} head={'Digital Art Class'} para={'Explore your creativity with our digital art classes. Our expert teachers provide personalized instruction to help you develop your artistic skills and express yourself through digital media.'}/>
        </div>
       </section>


      {/* Section 4*/}
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


      {/* Section 5*/}
      <section className='w-full md:flex md:gap-36'>
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
      
      {/* Section 6*/}
      <section className='w-full h-auto'>
        <ContentStyle subHead={'Our Teachers'} mainHead={'Meet Our Instructors'} style1={'text-center  md:text-3xl'} style2={'md:text-5xl text-center mt-3 md:mt-5 md:ml-10'}/>
        <div className="card-area w-[95%] mx-auto gap-20 md:gap-0 flex flex-col items-center mt-8 md:flex-row md:justify-around" >
        <StudentCard img={Teacher1img} head={'Ramees P'} para={'ENGLISH INSTRUCTOR'}/>
        <StudentCard img={Teacher2img} head={'Ajay T'} para={'MATH INSTRUCTOR'}/>
        <StudentCard img={Teacher3img} head={'Jazeen pk'} para={'DIGITAL ART INSTRUCTOR'}/>
        <StudentCard img={Teacher4img} head={'Juliana Silva'} para={'SCIENCE INSTRUCTOR'}/>
        </div>
        <div className="button-area w-full  mt-10 flex justify-center">
          <StudentButton value={'See all instructors'} clicked={navigateToTeachers}/>
        </div>
       </section>

      {/* Section 7*/}
      <section className='w-full h-auto  flex justify-center'>
        <div className="img-area w-[90%] h-[400px] rounded-3xl bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${Section7Img})`}}>
        <div className="bg-black opacity-75 w-full h-full rounded-3xl ">
          <ContentStyle subHead={"LET'S JOIN US"} mainHead={'Be an Expert with us'} Para={'Experience immersive learning with our state-of-the-art eLearning platform, featuring interactive tools and engaging multimedia content.'} style1={'text-center pt-16 md:text-2xl text-blue-900'} style2={'text-center text-white mt-6'} style3={'text-center text-white px-3 mt-7 text-white'}/>
        </div>
        </div>
      </section>

      {/*Section 8*/}
      <section>
      <StudentFooter/>
      </section>
      </div>
    </>

  )
}

export default StudentHome