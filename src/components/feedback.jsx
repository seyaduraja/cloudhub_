import React from 'react'
import postfeed from "../assets/postfeed.png"

function feedback() {
  return (

    <>
    <div className='h-[750px] bg-gradient-to-r from-[#FB432C] to-[#FF591E] text-white font-["inter"] flex flex-col justify-center items-center' >
        <h3 className='text-[12px] font-["inter"] tracking-wide font-semibold text-center text-[#FFFFFF]'>Best time here</h3>
        <h2 className='text-[50px] font-["inter"] tracking-wide font-semibold text-center text-[#FFFFFF]'>Better feedback at the right time.</h2>
        <div>
           <img src= {postfeed} alt="" />
        </div>
        
    </div>
    </>
  )
}

export default feedback