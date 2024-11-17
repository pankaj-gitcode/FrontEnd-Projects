import React from 'react'
import 'remixicon/fonts/remixicon.css'
// import '../../index.css'

export const Header = () => {
  return (
    <div className='w-full absolute z-10 top-10 right-10 sm:right-2 lg:right-0 
    '>
      <div className='w-[92vw] ml-10 flex items-center justify-between'>

                {/* ----------- LOGO ---------- */}
        <div className='font-[font1] pl-10 '>
            <h1 className=' pl-1 uppercase text-6xl 
            text-shdow'>
            p. .</h1>
        </div>
              {/* ----------- BUTTON --------- */}
        <div className='flex items-center gap-5'>
          <button className=' 
          border-4 bg-black border-white px-3 py-3 sm:px-11 lg:py-3  
          rounded-full hover:bg-gray-500 cursor-pointer 
          shadow-[2px_2px_15px_5px_rgba(0,0,0,0.5)]
          '>Hire Me</button>
          {/* <i className="ri-grid-fill text-4xl cursor-pointer hidden md:block  w-fit "></i> */}

        </div>
      </div>
    </div>
  )
}






{/* <div className='w-full absolute z-10 flex items-center justify-end top-16 right-20 sm:top-16 sm:right-10 lg:top-10 lg:right-10 text-white'>
        <button className='bg-black  border-4 rounded-3xl shadow-[2px_2px_20px_2px_rgba(0,0,0,0.5)]
        lg:px-10 lg:py-3 px-3 py-2 sm:px-7 sm:py-3 text-lg hover:bg-gray-500'>
            Hire Me</button>
        
            <i className="ri-grid-fill text-5xl cursor-pointer text-slate-200  "></i>
            
    </div> */}
