import React from 'react'
import logo from "../assets/logo.png"


function footer() {
  return (
    <>
    <div className='w-[100%]  flex flex-col md:flex-row justify-center lg:justify-start gap-[40px] lg:gap-[120px] items-left pl-[50px]'>
        <div >
            <img src= {logo} alt="" />
        </div>

        <div className = 'flex flex-col justify-center items-start gap-[20px]'>
           <h4 className='text-[16px] font-["inter"] tracking-wide font-semibold text-left  text-[#282828]'>Products</h4>
           <li className='list-none flex flex-col justify-center items-start gap-[10px]'>
            <ul className='text-[14px] font-["inter"] tracking-wide font-normal text-left  text-[#5F6980]'>Features</ul>
            <ul className='text-[14px] font-["inter"] tracking-wide font-normal text-left  text-[#5F6980]'>Pricing</ul>
            <ul className='text-[14px] font-["inter"] tracking-wide font-normal text-left  text-[#5F6980]'>Changelog</ul>
            <ul className='text-[14px] font-["inter"] tracking-wide font-normal text-left  text-[#5F6980]'>Support</ul>
           </li>
        </div>

        <div className = 'flex flex-col justify-center items-start gap-[20px]'>
        <h4 className='text-[16px] font-["inter"] tracking-wide font-semibold text-left text-[#282828]'>Legal</h4>
           <li className='list-none flex flex-col justify-center items-start gap-[10px]'>
            <ul className='text-[14px] font-["inter"] tracking-wide font-normal text-left  text-[#5F6980]'>Terms of policy</ul>
            <ul className='text-[14px] font-["inter"] tracking-wide font-normal text-left  text-[#5F6980]'>Privacy Policy</ul>
            <ul className='text-[14px] font-["inter"] tracking-wide font-normal text-left  text-[#5F6980]'>Services</ul>
            
           </li>
           </div>

        <div className = 'flex flex-col justify-center items-start gap-[20px]'>
        <h4 className='text-[16px] font-["inter"] tracking-wide font-semibold text-left  text-[#282828]'>Company</h4>
           <li className='list-none flex flex-col justify-center items-start gap-[10px]'>
            <ul className='text-[14px] font-["inter"] tracking-wide font-normal text-left  text-[#5F6980]'>Blog</ul>
            <ul className='text-[14px] font-["inter"] tracking-wide font-normal text-left  text-[#5F6980]'>Contact</ul>

           </li>
           </div>

        <div className = 'flex flex-col justify-center items-start gap-[20px]'>
        <h4 className='text-[16px] font-["inter"] tracking-wide font-semibold text-left  text-[#282828]'>Social</h4>
           <li className='list-none flex flex-col justify-center items-start gap-[10px]'>
            <ul className='text-[14px] font-["inter"] tracking-wide font-normal text-left  text-[#5F6980]'>Dribble</ul>
            <ul className='text-[14px] font-["inter"] tracking-wide font-normal text-left  text-[#5F6980]'>Behance</ul>
            <ul className='text-[14px] font-["inter"] tracking-wide font-normal text-left  text-[#5F6980]'>Discord</ul>
           </li>
        </div>

    </div>
    </>
  )
}

export default footer