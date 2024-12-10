import React from 'react'
import codesnippet from "../assets/codesnippet.png"
import feedback from "../assets/feedback.png"

function info() {
  return (
    <>
     <div className='w-[100%] height-[850px] flex justify-around items-center py-[50px]'>
        <div className=' w-[500px] flex justify-around items-start flex-col'>
            <button className='w-[60px] h-[30px] rounded-[100px] bg-gradient-to-r from-[#FB432C] to-[#FF591E] text-white text-[12px]'>share</button>
            <h2 className='text-[35px] font-["inter"] font-semibold text-left text-[#282828] '>Share anything you’re <br /> working on. </h2>
            <p className='text-[15px] font-["inter"] tracking-wide font-normal text-left text-[#5F6980] '>Campsite has been instrumental in keeping designers aware of
                each others' work-in-progress in a way that was previously
                slowing us down. It's also one of the only channels where.</p>
        </div>
        <div>
            <img src= {codesnippet} alt="" />
        </div>

     </div>

     <div className='w-[100%] height-[850px] flex justify-around items-center py-[50px]'>
        <div>
            <img src= {feedback} alt="" />
        </div>
        <div className=' w-[500px] flex justify-around items-start flex-col'>
            <button className='w-[80px] h-[30px] rounded-[100px] bg-gradient-to-r from-[#FB432C] to-[#FF591E] text-white text-[12px]'>feedback</button>
            <h2 className='text-[35px] font-["inter"] font-semibold text-left text-[#282828] '> Better feedback at  <br /> <span>the right time.</span>  </h2>
            <p className='text-[15px] font-["inter"] tracking-wide font-normal text-left text-[#5F6980] '>Campsite has been instrumental in keeping designers aware of
                each others' work-in-progress in a way that was previously
                slowing us down. It's also one of the only channels where.</p>
        </div>


     </div>


    </>
  )
}

export default info