import React from 'react'

function BluetickArea({icon, head, para}) {

  return (
    <>
    <div className="wrapper w-full h-auto flex flex-col md:flex-row md:ml-20 items-center md: mt-16 md:gap-6 gap-0">
    <div className="icon-area">
    <div className="iconbg flex justify-center items-center w-[60px] h-[60px] bg-[#3a5bcc] rounded-full">{icon}</div>
    </div>

    <div className="content-area mt-4 flex flex-col gap-2 md:w-[60%] md:items-start items-center ">
        <h1 className='font-bold text-xl '>{head}</h1>
        <p className=' font-cardPara text-gray-600  text-[20px] px-3 md:px-0 text-center md:text-start'>{para}</p>
    </div>
</div>
    </>
  )
}

export default BluetickArea