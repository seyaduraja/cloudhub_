import React from 'react'
import { useState } from 'react'
import wing from "../assets/wings.png"
import wingicon from "../assets/wingicon.png"
import wingicon2x from "../assets/wingicon2x.png"
import headerimg from "../assets/headerimg.png"
import headerlogo from "../assets/headerlogo.png"
import text from "../assets/text.png"

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ontoggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (

    <header className='flex flex-col justify-center items-center w-[100%] h-[600px] lg:h-[100vh] ' >
        <div className="h-16 flex justify-between items-center  w-[100%] lg:px-[50px]  ">



        <div className="flex justify-center items-center gap-[20px] ">
            <div className="flex justify-center items-center">
                <img src={headerlogo}  alt="" />
            
            </div>
            <nav className={`md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${isMenuOpen ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5 `}>
                <ul className="flex flex-col gap-8 md:flex-row md:items-center md:gap-[4vw]  ">
                    <li className="text-[13px]"> Product</li>
                    <li className="text-[13px]"> Home  </li> 
                    <li className="text-[13px]"> Shop </li>
                    <li className="text-[13px]"> Pages </li> 
                    <li className="text-[13px]"> Integrations</li> 
                    <li className="text-[13px]"> Developers</li> 

                </ul>
               
            </nav>
           
            <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex justify-center items-center pl-5 md:hidden">
            <ion-icon name={isMenuOpen ? 'close' : 'menu'} size='large'></ion-icon>
             </div>

            </div>

            <div>
              <button className='w-[60px] h-[30px] rounded-[100px]  text-black text-[12px]'>Login</button>
              <button className='w-[100px] h-[30px] rounded-[100px] bg-gradient-to-r from-[#FB432C] to-[#FF591E] text-white text-[12px]'>Start for free</button>
            </div>
            

        </div>

      <div className=' md:absolute  md:top-0 lg:top-[60px] w-[400px] md:w-[70%] flex flex-col justify-center items-left lg:items-center gap-[15px]'>
        <h1 className=' text-[40px] lg:text-[70px] font-["inter"] font-semibold text-left lg:text-center text-[#171717] ' >Create, inspect, and apply synthetic surveillance broadly.</h1>
        <p className='text-[15px] font-["inter"] tracking-wide font-normal text-left lg:text-center text-[#5F5F5F]'>Start with a stunning homepage. Stay motivated without hurting your pocket.</p>
        <button className='w-[153px] h-[40px] rounded-[39px] bg-gradient-to-r from-[#FB432C] to-[#FF591E] text-white font-["inter"]'>Start for free</button>
      </div>

      <div className='block md:hidden'>
        <img src={headerimg} alt="" />
      </div>

        <div className='hidden md:block'>
        <div className='relative' >
        <img src= {wing} alt="" width='1400px' />
        <div className='absolute top-0 left-[20px] lg:left-[80px]  '>
        <img src= {wingicon} alt="" width='1200px' />
        </div>
        </div>
      </div>



    </header>
  )
}

export default Header