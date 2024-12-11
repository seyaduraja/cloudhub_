import React from 'react'
import postfeed from "../assets/postfeed.png"
import f1 from "../assets/f1.png"
import f2 from "../assets/f2.png"
import f3 from "../assets/f3.png"
import f4 from "../assets/f4.png"

function feedback() {
  return (

    <>
    <div className=' bg-gradient-to-r from-[#FB432C] to-[#FF591E] text-white font-["inter"] flex flex-col justify-center items-center gap-[20px] py-[50px]' >
        <h3 className='text-[12px] font-["inter"] tracking-wide font-normal text-center text-[#FFFFFF]'>Best time here</h3>
        <h2 className='text-[35px] lg:text-[50px] font-["inter"] tracking-wide font-semibold text-center text-[#FFFFFF]'>Better feedback at the right time.</h2>
        <div className='hidden lg:block'>
           <img src= {postfeed} alt="" />
        </div>

        <div className=' lg:hidden'>
           <img src= {f4} alt="" className='w-[378px]' />
        </div>

        <div className='flex flex-col lg:flex-row justify-center items-center gap-[20px]'>
          <img src= {f1} alt="" />
          <img src= {f1} alt="" />
          <img src= {f1} alt="" />
        </div>
        
    </div>
    </>
  )
}

export default feedback