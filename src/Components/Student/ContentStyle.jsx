import React from 'react'

function ContentStyle({subHead, mainHead, Para, style1, style2, style3}) {
  return (
    <>

<h4 className={`text-[#3a5bd2] font-font1 text-xl font-bold ${style1}`}>{subHead}</h4>
    <h1 className={`font-font1 font-extrabold text-4xl w-[95%] ${style2}`}>{mainHead}</h1>
    <p className={`font-parafont text-[20px] text-gray-700 ${style3}`}>{Para}</p>
    </>
    
  )
}

export default ContentStyle