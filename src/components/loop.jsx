import React from 'react'
import loopimg from "../assets/loopimg.png"
import logo from "../assets/logo.png"

function loop() {
  return (
  <>
    <div className = ' bg-gradient-to-r from-[#FB432C] to-[#FF591E]  flex flex-col justify-between items-center  gap-[50px]'>
        <div className='flex flex-col justify-center items-center gap-[10px] pt-[40px]'>
        <h2 className='lg:text-[54px] text-[30px] font-["inter"] tracking-wide font-semibold text-left text-[#FFFFFF]'>Keep every one in the loop</h2>
        <p className='text-[18px] font-["inter"] tracking-wide font-normal text-left text-[#FFFFFF]'>All good things starts with a homepage. Get <br />  inspired without breaking your wallet.</p>
        <button className='w-[150px] h-[50px] rounded-[100px] bg-white text-[#282828] text-[16px]'>Start for free</button>
        </div>

        <img src= {loopimg} alt="" className='w-[400px] lg:w-[1000px]' />

    </div>

    <div className='flex flex-col justify-center items-center w-[100%] h-[490px] gap-[10px]'>
        <img src= {logo}   />
        <h3 className='text-[24px] font-["inter"] tracking-wide font-semibold text-center text-[#171717]'>Increase your team’s visibility and alignment</h3>
        <p className='text-[16px] font-["inter"] tracking-wide font-normal text-center text-[#171717]'>Start for free, flexible for all teams.</p>
        <div className='flex justify-center items-center gap-[20px] pt-[30px]'>
            <p className='text-[16px] font-["inter"] tracking-wide font-normal text-left text-[#282828]'>Request for demo</p>
            <button className='w-[127px] h-[40px] rounded-[100px] bg-gradient-to-r from-[#FB432C] to-[#FF591E] text-white text-[12px]'>Start for free</button>
        </div>
    </div>
 </>



  )
}

export default loop