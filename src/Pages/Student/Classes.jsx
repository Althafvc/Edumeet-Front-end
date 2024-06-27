import React from "react";
import section1Img from '../../assets/images/section1Img.webp'
import ContentStyle from "../../Components/Student/ContentStyle";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Classcard from "../../Components/Student/Classcard";
import BluetickArea from '../../Components/Student/BluetickArea'
import Card1Img2 from '../../assets/images/section5Img2.webp'
import ClassesImg from '../../assets/images/ClassesImg.webp'
import Newclasses from "../../Components/Student/Newclasses";
import Section6Img from '../../assets/images/studentcardImg2.webp'
import StudentButton from "../../Components/Student/StudentButton";
import StudentFooter from '../../Components/Student/StudentFooter'



function Classes () {
    return (
        <>
        <div className=" w-full h-auto flex flex-col gap-40 scroll-smooth">

    {/* Section 1 */}
    <section className='w-full h-[300px]'>
          <div className="shutter w-full h-[400px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${section1Img})`}}>
            <div className="bg-black opacity-75 w-full h-full flex justify-center items-center">
                <h1 className='text-white text-5xl font-bold'>Our Classes</h1>  
            </div>
          </div>
        </section>


          {/* Section 2*/}
      <section className='w-full h-auto flex justify-center'>
        <div className="wrap px-3 md:w-[40%]">
        <ContentStyle subHead={'Our Expertise'} mainHead={'We are the eLearning Experts'} Para={'Our cutting-edge eLearning technology and innovative teaching methods make us the go-to experts for learners of all levels, from beginners to advanced professionals.'} style1={'text-center'} style2={'text-center mt-3'} style3={'text-center mt-3'}/>
        </div>
      </section>

        {/* Section 3*/}
      <section className="w-full h-auto md:flex md:justify-around flex-wrap md:gap-10 flex flex-col md:flex-row gap-10 px-5">
      <Classcard head={'Digital Art Class'} para={'Explore the world of digital art with our Digital Art Class, where you can learn techniques and skills to create stunning digital masterpieces. Our expert instructors provide personalized guidance to help you unleash your creativity.'}/>
      <Classcard head={'Business Studies'} para={'Learn the fundamentals of business with our Business Studies Class, designed to equip you with the skills and knowledge to succeed in the corporate world. Our expert instructors provide real-world examples and case studies to enhance your learning experience.'}/>
      <Classcard head={'Virtual English Class'} para={'Improve your English language skills with our Virtual English Class, designed to cater to learners of all levels. Our experienced instructors provide personalized guidance to help you achieve your language goals.'}/>
      <Classcard head={'Web Development'} para={'Get hands-on experience with our Web Development Class, designed to equip you with the skills to create stunning websites and applications. Our expert instructors provide personalized guidance and support to enhance your learning experience.'}/>
      <Classcard head={'Music Theory'} para={'Explore the principles of music with our Music Theory Class, designed for both novice and experienced musicians. Our expert instructors provide a comprehensive understanding of music theory, enhancing your skills and appreciation of music.'}/>
      <Classcard head={'Online Math Class'} para={'Master the world of numbers with our Online Math Class, suitable for students of all ages and levels. From algebra to calculus, our expert instructors provide comprehensive guidance and support to enhance your mathematical abilities.'}/>
      </section>

       {/* Section 4*/}
      <section className='w-full h-auto md:flex-row flex flex-col gap-10 px-10 md:gap-6'>
        <div className="side1 md:pl-28 md:w-[85%]">
        <ContentStyle subHead={'Our Classes'} mainHead={'Various Online Classes Available'} Para={'Choose from a variety of online classes, including programming, data science, language learning, and more, designed to cater to your individual interests and skill levels. Our expert instructors provide personalized guidance and support to maximize your learning experience.'} style1={'md:text-left text-center md:w-full md:text-3xl'} style2={'text-center md:text-left md:text-5xl mt-3 md:mt-5'} style3={'text-center md:text-left md:text-2xl mt-3 md:mt-5 px-3'}/>
        <div className="icons-outerwrap ">
        <BluetickArea icon={<CheckCircleOutlineIcon sx={{ width: 40, height: 40 }} className='text-white hover:text-gray-600' />} head={'Language Learning'} para={'Learn a new language or improve your language skills with our Language Learning Classes, taught by native speakers and expert instructors. Choose from a variety of languages and skill levels to enhance your communication abilities.'}/>
        <BluetickArea icon={<CheckCircleOutlineIcon sx={{ width: 40, height: 40 }} className='text-white hover:text-gray-600' />} head={'Data Science and Analytics'} para={'Explore the world of data with our Data Science and Analytics Classes, designed to cater to both novice and experienced data scientists. Our expert instructors provide a comprehensive understanding of data science concepts, tools, and techniques to enhance your analytical abilities.'}/>
        <BluetickArea icon={<CheckCircleOutlineIcon sx={{ width: 40, height: 40 }} className='text-white hover:text-gray-600' />} head={'Graphic Design'} para={'Unleash your creativity with our Graphic Design Classes, where you can learn techniques and skills to create stunning visuals for both print and digital media. Our expert instructors provide personalized guidance to help you master the art of graphic design.'}/>
        </div>
        </div>
        <div className="side 2 w-full h-auto flex flex-col justify-center mt-10  items-center gap-10">
          <img src={Card1Img2} alt="image not found" className='rounded-3xl md:w-[500px] md:h-[500px] w-[90%] md:mt-28 hover:scale-[1.1] hover:transition duration-500 linear'/>
          <img src={ClassesImg} alt="image not found" className='rounded-3xl md:w-[500px] md:h-[500px] w-[90%] md:mt-28 hover:scale-[1.1] hover:transition duration-500 linear'/>
        </div>
      </section>

          {/* Section 5*/}
          <section className='w-full h-auto flex justify-center'>
        <div className="wrap px-3 md:w-[40%]">
        <ContentStyle subHead={'Schedules'} mainHead={'Our Class Schedule'} Para={'Our online classes are available at flexible times, allowing you to learn at your own pace and convenience. Check our schedule for available classes, and book your slots to attend our live sessions.'} style1={'text-center'} style2={'text-center mt-3'} style3={'text-center mt-3'}/>
        </div>
      </section>

      {/* Section 6*/}
      <section className="w-full h-auto flex flex-col items-center gap-10 md:gap-12 md:flex-row md:justify-center md:flex-wrap">
      <Newclasses day={'Monday'} subject={'Digital Art Class'} time={'9:10 am - 11:30 am'}/>
      <Newclasses day={'Tuesday'} subject={'Virtual English Class'} time={'9:10 am - 11:30 am'}/>
      <Newclasses day={'Wednesday'} subject={'Web Development'} time={'9:10 am - 11:30 am'}/>
      <Newclasses day={'Thursday'} subject={'Business Studies'} time={'9:10 am - 11:30 am'}/>
      <Newclasses day={'Friday'} subject={'Music Theory'} time={'9:10 am - 11:30 am'}/>
      <Newclasses day={'Saturday'} subject={'Online Math Class'} time={'9:10 am - 11:30 am'}/>
      </section>

      {/* Section 7*/}
      <section className='w-full h-auto  flex justify-center'>
        <div className="img-area w-[90%] h-[400px] rounded-3xl bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${Section6Img})`}}>
        <div className="bg-black opacity-65 w-full h-full rounded-3xl flex justify-center items-center px-10 flex-col md:flex-row md:gap-48">
          <div className="side1 h-auto w-full flex flex-col gap-3 md:w-[60%]">
          <h1 className='text-white text-3xl  md:text-5xl font-parafont font-bold text-center md:text-left'>Contact Us for Expert Guidance</h1>
          <p className='text-white text-center md:text-left md:text-xl'>Our expert instructors are available to assist you with any inquiries, feedback, or support you need. Reach out to us via email or phone, and we’ll be happy to provide guidance and support to maximize your learning experience.</p>
          </div>
          <div className="side2">
            <StudentButton value={'Contact Us'} classname={'mt-10 bg-[#0000ff]'}/>
          </div>
        </div>
        </div>
      </section>


       {/* Section 8*/}
       <section>
        <StudentFooter/>
    </section>
        </div>
        </>
    )
}

export default Classes