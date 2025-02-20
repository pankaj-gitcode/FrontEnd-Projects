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
          className='uppercase border-8 rounded-full px-7 py-3
          shadow-[2px_2px_19px_2px_rgba(255,255,255,0.5)] 
          active:scale-105 transition-300 ease-in-out border-[#9BFFF7]
          bg-black text-white'>
        Click Here     
        </button>
      </div>

    <Spline scene="https://prod.spline.design/j-pJlsbLv2dkeMW5/scene.splinecode" />

      </div>


    <section className={`bg-black h-fit mt-5 
      shadow-[2px_2px_19px_2px_rgba(0,0,0,0.5)]
      flex flex-col items-center justify-center
      absolute top-0 bg-transparent ${zIndex? 'z-10':'z-[-1]'}`}>

      <form className='text-[5vh]'>
         <div>
          <label >Full Name</label>
          <input type="text" placeholder='Enter your name' required/>
         </div>
         <div>
          <label >Email Address</label>
          <input type="email" placeholder='Enter your email' />
         </div>
         <div>
          <label >Your Message</label>
          <textarea name="" id="" required></textarea>
         </div>

         <button type='submit'>Send Message</button>

      </form>

        <div className='absolute top-10 right-6 cursor-pointer' onClick={()=>setZIndex(false)}>
          <h1>❌</h1>
        </div>


    </section>
  </div>

  </>
    
  )
}
