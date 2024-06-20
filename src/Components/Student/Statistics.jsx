import React from 'react'

function Statistics({value, description}) {
  return (
    <>
    <div className="container">
        <h1 className='font-bold text-3xl md:text-4xl font-customFont text-[#3a5bcc]'>{value}</h1>
        <p className='mt-1 font-parafont md:text-xl'>{description}</p>
        </div>
    </>
  )
}

export default Statistics