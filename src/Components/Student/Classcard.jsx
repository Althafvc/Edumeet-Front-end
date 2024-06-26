import React from 'react'


function Classcard({head, para, style1, style2, style3}) {

  return (
    <>
    <div className="card md:w-[420px] h-auto rounded-2xl md:px-5 md:flex md:flex-col md:gap-7 md:py-6 hover:bg-[#3a5bcc] hover:text-white text-center flex flex-col gap-5 px-3 md:text-left border-[1.3px] border-[#3a5bcc] py-5">
            <h1 className='font-bold text-3xl font-parafont'>{head}</h1>
            <p className='font-cardPara text-xl'>{para}</p>
          
        </div>
    </>
  )
}

export default Classcard