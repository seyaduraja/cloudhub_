import React from 'react'
import wing from "../assets/wings.png"
import wingicon from "../assets/wingicon.png"
import wingicon2x from "../assets/wingicon2x.png"

function Header() {
  return (

    <header className='flex flex-col justify-center items-center w-[100%] h-[100vh] ' >

      <div className=' absolute top-[60px] flex flex-col justify-center items-center gap-[15px]'>
        <h1 className=' text-[30px] lg:text-[70px] font-["inter"] font-semibold text-center text-[#171717] ' >Create, inspect, and apply <br /> synthetic surveillance broadly.</h1>
        <p className='text-[15px] font-["inter"] tracking-wide font-normal text-center text-[#5F5F5F]'>Start with a stunning homepage. Stay motivated without hurting your pocket.</p>
        <button className='w-[153px] h-[40px] rounded-[39px] bg-gradient-to-r from-[#FB432C] to-[#FF591E] text-white font-["inter"]'>Start for free</button>
      </div>

 
        <div className='relative' >
        <img src= {wing} alt="" width='1400px' />
        <div className='absolute top-0 left-[80px]  '>
        <img src= {wingicon} alt="" width='1200px' />
        </div>
      </div>



    </header>
  )
}

export default Header