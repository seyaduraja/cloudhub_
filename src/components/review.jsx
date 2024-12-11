import React from 'react'
import reviewlogo from "../assets/reviewlogo.png"
import reviewlogo2 from "../assets/reviewlogo2.png"
import Avatar from "../assets/Avatar.png"
import Avatar2 from "../assets/Avatar2.png"

function review() {
  return (
   <>
    <div className='w-[100%] bg-[#F9FAFB] flex flex-col lg:flex-row justify-center items-center gap-[40px] py-[30px]'>

        {/* review1 */}
        <div className='flex flex-col gap-[20px] justify-center items-start w-[350px] lg:w-[552px] h-[475px]' >
           <img src= {reviewlogo} alt="" />
           <p className='text-[18px] font-["inter"] tracking-wide font-normal text-left text-[#171717]'>Cloudhub has emerged as an essential asset for the team at Patreon design.
             Amidst an accelerated expanding organization in which the product undergoes rapid changes, 
             Campsite enables us to maintain visibility on what's transpiring across various teams — impeccably 
             aligning with our pre-existing procedures.</p>
           <div className='flex justify-center items-center gap-[20px]'>
              <img src= {Avatar} alt="" />
              <div>
                <p className='text-[18px] font-["inter"] tracking-wide font-semibold text-left text-[#171717]'>Gabriel Valdivia</p>
                <p className='text-[18px] font-["inter"] tracking-wide font-normal text-left text-[#171717]'>Principal Product Designer, Patreon</p>
              </div>
           </div>
        </div>
        {/* review 2  */}
        <div className='flex flex-col gap-[20px] justify-center items-start w-[350px] lg:w-[552px] h-[475px]' >
           <img src= {reviewlogo2} alt="" />
           <p className='text-[18px] font-["inter"] tracking-wide font-normal text-left text-[#171717]'>Cloudhub has demonstrated exceptional worth in preserving open communication 
            among designers regarding their current endeavors, a challenge that previously impeded our progress. 
            It continually stands as a distinctive platform guiding our dialogue towards imagination and consistent review,
             an element I highly value. Moreover, it has accelerated our propensity for early-stage feedback beyond my expectations.</p>
           <div className='flex justify-center items-center gap-[20px]'>
              <img src= {Avatar2} alt="" />
              <div>
                <p className='text-[18px] font-["inter"] tracking-wide font-semibold text-left text-[#171717]'>Gabriel Valdivia</p>
                <p className='text-[18px] font-["inter"] tracking-wide font-normal text-left text-[#171717]'>Principal Product Designer, Patreon</p>
              </div>
           </div>
        </div>
    </div>
   </>
  )
}

export default review