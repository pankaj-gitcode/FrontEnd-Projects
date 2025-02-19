import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import 'remixicon/fonts/remixicon.css'
// import '../../index.css'

export const Header = () => {
  useGSAP(()=>{
    gsap.to('.hireMeBtn', {
      scale:1.1,
      repeat:-1,
      // repeatDelay: 1,
      duration:2.5,
      yoyoEase:true,
      ease: 'power.out'

    })
  })
  return (
    <div className='w-full absolute z-10 top-10  right-0 
    '>
      <div className='w-[92vw] ml-10 flex items-center justify-between'>

                {/* ----------- LOGO ---------- */}
        <div className='font-[font1] pl-10 '>
            <h1 className=' pl-1 uppercase text-4xl lg:text-6xl 
            text-shdow'>
            p. .</h1>
        </div>
              {/* ----------- BUTTON --------- */}
        <div className='flex items-center gap-5 fixed right-10 hireMeBtn'>
          <button className=' 
          border-4 bg-black border-white px-8 py-3 sm:px-10 lg:py-2  
          rounded-full hover:bg-gray-500 cursor-pointer 
          shadow-[2px_2px_15px_5px_rgba(0,0,0,0.5)]
          '>Hire Me</button>
          {/* <i className="ri-grid-fill text-4xl cursor-pointer hidden md:block  w-fit "></i> */}

        </div>

      </div>
    </div>
  )
}







