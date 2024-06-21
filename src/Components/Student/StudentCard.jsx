import React from 'react'

function StudentCard({img, head, para}) {
  return (
    <div className="card w-[320px] h-auto md:max-h[320px] hover:scale-[1.1] hover:transition duration-500 linear hover:border-b-4 hover:border-gray-800">
        <div className="img-area w-[320px]">
            <img src={img} alt="image not found" className='rounded-3xl w-full h-full '/>
        </div>
        <div className=" mt-4 font-font1 text-xl h-auto w-full">
        <h1 className='text-center font-bold mb-2'>{head}</h1>
        <p className='font-cardPara text-gray-400 text-center text-[16px] font-semibold'>{para}</p>
        </div>
    </div>
  )
}

export default StudentCard