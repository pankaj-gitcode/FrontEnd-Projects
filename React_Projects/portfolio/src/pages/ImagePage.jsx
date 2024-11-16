import React from 'react'

export const ImagePage = () => {
  return (
    <div className='relative h-full w-full bg-gradient-to-l from-white
     to-black rounded-[50px] shadow-[2px_2px_20px_8px_rgba(0,0,0,0.8)]
      overflow-hidden 
     '>
        
        <img src='/public/images/me3.png' alt="" 
            className='
                h-[68vh] sm:h-[78vh] md:h-[78vh] lg:h-[80vh] absolute right-20 
                 drop-shadow-[20px_20px_200px_rgba(255,255,255,0.2)]
                 top-10 sm:top-10 md:top-20 lg:top-0 pl-20
                 
                 '
        />
        
    </div>
  )
}
