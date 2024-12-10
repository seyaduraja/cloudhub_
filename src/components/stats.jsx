import React from 'react'
import stats1 from "../assets/stats1.png"
import stats2 from "../assets/stats2.png"

function stats() {
  return (
    <div className='w-[100%] h-[700px] flex flex-col justify-center items-center gap-[50px]'>
         <h2 className='text-[50px] font-["inter"] tracking-wide font-semibold text-center text-[#282828]' >Your Archive of progress</h2>
         <div className='flex justify-center items-center gap-[40px]'>
            {/* stats1 */}
              <div className='w-[570px] h-[390px] rounded-[8px] border-[1px] bg-[#FCFCFC] border-[#0000000D] flex flex-col justify-between items-center'>
                <h3 className='text-[18px] font-["inter"] tracking-wide font-semibold text-center text-[#525252] pt-[60px]'>Projects <br /><span className='font-normal'>Organize, follow, and archive.</span></h3>
                <img src= {stats2}  alt="" />
              </div>

            {/* stats2 */}
              <div className='w-[570px] h-[390px] rounded-[8px] border-[1px] bg-[#FCFCFC] border-[#0000000D] flex flex-col justify-between items-center'>
                <h3 className='text-[18px] font-["inter"] tracking-wide font-semibold text-center text-[#525252] pt-[60px]'> Member profiles<br /><span className='font-normal'>Automatic portfolios of your work.</span></h3>
                <img src= {stats1}  alt="" />
              </div>
         </div>
    </div>
  )
}

export default stats