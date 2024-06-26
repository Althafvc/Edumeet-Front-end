import React from 'react'

function Newclasses({day, subject, time}) {

  return (
    <>
    <div className="wrap h-auto w-[90%] md:w-[40%] rounded-2xl border-[1.6px] md:border-[1.3px] border-[#3a5bcc] py-4 md:py-6 pl-5 md:pl-20 pl-auto flex flex-col gap-7">
        <div className="day text-2xl font-semibold text-[rgb(58,91,204)] font-parafont">{day}</div>
        <div className="subject text-4xl font-semibold font-parafont">{subject}</div>
        <div className="time text-2xl font-bold text-[#3a5bcc] font-parafont">{time}</div>
    </div>

    </>
  )
}

export default Newclasses