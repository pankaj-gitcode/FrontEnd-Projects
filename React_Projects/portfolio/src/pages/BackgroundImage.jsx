import React from 'react'

export default function BackgroundImage(){
    return(<div className='relative'>
        {/* <div className="h-screen  bg-[url('/public/images/me1.png')] 
        drop-shadow-[10px_20px_300px_rgba(255,255,254,0.6)]
         rounded-2xl bg-no-repeat  bg-black/20
           bg-right-top 
         ">
        </div> */}
        {/* <div className='bg-[#333232] h-screen' */}
        <div className='h-[98vh] bg-gradient-to-l hover:bg-gradient-to-tr from-slate-100 to-slate-600'
        >
           {/* <img src="/public/images/me2.png" alt="" 
           className='absolute right-20 top-20 drop-shadow-[10px_20px_300px_rgba(255,255,255,10)]
             rounded-b-full border-b-2 border-opacity-5 border-[#d4c9c9] 
               h-[65vh] sm:w-[50vw] lg:w-[25vw]
        '/> */}

           <img src="/public/images/me2.png" alt="" 
           className=' drop-shadow-[2px_2px_300px_rgba(255,255,255,0.5)]
           absolute 
        '/>

        </div>
        
    </div>)
}