import React from 'react'
import Page1Bottom from '../assets/components/Page1Bottom'
import ShortInfo from '../assets/components/ShortInfo'

export const ImagePage = () => {
  const mouseMove = (e)=>{
    console.log([e.clientX, e.clientY])
  }
  return (
    <div onMouseMove={(e)=>{
      mouseMove(e)
    }}
    className='h-screen flex items-center justify-center p-5'>
              {/* ----------------- IMAGE DIV --------- */}
      <div id='imgDiv' className=' h-full w-full relative bg-gradient-to-l from-white
       to-black rounded-[50px] shadow-[2px_2px_20px_8px_rgba(0,0,0,0.8)]
        overflow-hidden 
        '>
                {/* ------------ IMAGE ----------- */}
          <img src='/public/images/me3.png' alt="img" 
              className='
                  h-[100vh] absolute right-20 
                  drop-shadow-[20px_20px_200px_rgba(255,255,255,0.2)]
                  top-10 sm:top-10 md:top-20 lg:top-0 pl-20
                  '
          />
          <ShortInfo />
          <div >
          <Page1Bottom />
          </div>
          
      </div>
  
    </div>
    
  
  )
}
