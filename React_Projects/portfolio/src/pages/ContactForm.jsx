import React, { useState } from 'react'
import Spline from '@splinetool/react-spline';

export const ContactForm = () => {
  const [zIndex, setZIndex] = useState(false)
  return (<>
  <div className='h-screen relative '>

      <div className='h-screen'>


        {/* ----- BUTTON ----- */}
      <div 
      className= {`rounded-full absolute right-7 bottom-5 `}
      onClick={()=>setZIndex(true)} >
        
        <button
          className='uppercase border-4 rounded-full px-7 py-3
          shadow-[2px_2px_19px_2px_rgba(255,255,255,0.5)] 
          active:scale-105 transition-300 ease-in-out border-[rgb(53,255,238)]
          bg-black text-white'>
        Click Here     
        </button>
      </div>

    <Spline scene="https://prod.spline.design/j-pJlsbLv2dkeMW5/scene.splinecode" />

      </div>


    <section className={`bg-black h-fit mt-5 
      shadow-[2px_2px_19px_2px_rgba(0,0,0,0.5)]
      flex flex-col items-center justify-between
      absolute top-10 left-[5vw] bg-transparent ${zIndex? 'z-10':'z-[-1]'}`}>

      <form className=' rounded-2xl
       shadow-[2px_2px_1px_3px_rgba(53,255,238,0.3)] p-2 font-[Font7]
        text-[#9BFFF7] w-[50vw] h-[60vh] text-[3vh] py-10
        flex flex-col items-start justify-center pl-8'>
         
         <div className='flex flex-col items-start justify-center pb-3  '>
          <label >Full Name</label>
          <input type="text" placeholder='Enter your name' 
          className='text-black font-[Font2] text-xs outline-none 
          rounded-[5px] bg-[#9BFFF7]  py-3 w-[40vw]
          shadow-[inset_2px_2px_9px_2px_rgba(0,0,0,0.5)] pl-2 ' required/>
         </div>
         
         <div className='flex flex-col items-start justify-center pb-3'>
          <label >Email Address</label>
          <input className='text-black font-[Font2] text-xs outline-none 
          rounded-[5px] bg-[#9BFFF7]  py-3 w-[40vw]
          shadow-[inset_2px_2px_9px_2px_rgba(0,0,0,0.5)] pl-2 '
          type="email" placeholder='Enter your email' required/>
         </div>
         
         <div className='flex flex-col items-start justify-center pb-3'>
          <label >Your Message</label>
          <textarea className='text-black font-[Font2] text-xs outline-none 
          rounded-[5px] bg-[#9BFFF7]  py-1 w-[40vw] h-[10vh]
          shadow-[inset_2px_2px_9px_2px_rgba(0,0,0,0.5)] pl-2 '
          name="" id="" required></textarea>
         </div>

         <button type='submit'
         className='bg-black border-4 rounded-3xl px-5 py-2 border-[#9BFFF7]
          shadow-[2px_2px_19px_2px_rgba(53,255,238,0.5)] text-lg mb-10'
         >Send Message</button>

      </form>

        <div className='absolute top-2 right-6 cursor-pointer' onClick={()=>setZIndex(false)}>
          <h1 className='bg-[#9BFFF7] rounded-full '>❌</h1>
        </div>


    </section>
  </div>

  </>
    
  )
}
