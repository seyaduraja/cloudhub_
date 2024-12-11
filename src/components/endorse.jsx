import React from 'react'
import "../css/endorse.css"
import l1 from "../assets/l1.png"
import l2 from "../assets/l2.png"
import l3 from "../assets/l3.png"
import l4 from "../assets/l4.png"
import l5 from "../assets/l5.png"
import l6 from "../assets/l6.png"
import l7 from "../assets/l7.png"
import l8 from "../assets/l8.png"

function Template(props) {
    return(
        <div className='bg-[#F9FAFB] w-[295px] h-[175] rounded-[24px] flex justify-center items-center'>
            <img src= {props.img} alt="" width= '220px' />
        </div>
    )
}

function endorse() {
  return (
    <>
   
    {/* <div className='slider' style={{ "--width": "300px", "--height": "170px" , "--quantity" : "4" }}>
        <div className="list">
       <div className="item" style={{"--position": 1}}><Template  img={l1} /></div> 
       <div className="item" style={{"--position": 2}}> <Template  img={l2} /></div> 
       <div className="item" style={{"--position": 3}}> <Template  img={l3} /></div> 
       <div className="item" style={{"--position": 4}}> <Template  img={l4} /></div> 
       </div>
    </div> */}

    <div className='flex flex-col justify-center items-center gap-[40px] py-[40px]'>

    
    <h1 className='text-[50px] font-["inter"] tracking-wide font-semibold text-center text-[#121212]'>Loved By Designers At</h1>

    <div className='flex flex-col md:flex-row justify-center items-center gap-[20px]'>
        <Template img= {l1} />
        <Template img= {l2} />
        <Template img= {l3} />
        <Template img= {l4} />
    </div>

    <div className='flex flex-col md:flex-row justify-center items-center gap-[20px]'>
        <Template img= {l5} />
        <Template img= {l6} />
        <Template img= {l7} />
        <Template img= {l8} />
    </div>

    </div>


    </>
  )
}

export default endorse