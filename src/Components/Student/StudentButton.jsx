import React from 'react'

function StudentButton({value, clicked, classname}) {

  return (
    <button className={`px-6 py-4 rounded-sm h-auto w-auto font-cardPara  text-xl outline-none active:scale-[.96] duration-200 ease-in-out bg-[#3a5bcc] text-white  ${classname}`} onClick={clicked} type="submit">{value}</button>
  )
}

export default StudentButton