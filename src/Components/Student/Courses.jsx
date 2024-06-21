import React from 'react'

function Courses({icon, head, para}) {
  return (
    <>
    <div className="wrapper w-[80%] h-auto flex flex-col md:flex-row md:ml-20  md: mt-16 md:gap-6 gap-0 pl-6">
    <div className="icon-area">
    <div className="iconbg flex justify-center items-center w-[60px] h-[60px] bg-[#3a5bcc] rounded-full"> {icon} </div>
    </div>

    <div className = {`content-area mt-6 flex flex-col gap-3 md:w-[60%] md:items-start`} >
        <h1 className='font-bold text-2xl font-parafont'>{head}</h1>
        <p className=' font-cardPara text-gray-600 text-[18px]'>{para}</p>
    </div>
</div>
    </>
  )
}

export default Courses