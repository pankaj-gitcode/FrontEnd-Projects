import React from 'react'

export default function BackgroundImage(){
    return(<div className='relative'>
        {/* <div className="h-screen  bg-[url('/public/images/me1.png')] 
        drop-shadow-[10px_20px_300px_rgba(255,255,254,0.6)]
         rounded-2xl bg-no-repeat  bg-black/20
           bg-right-top 
         ">
        </div> */}
        <div className='bg-[#333232] h-screen'
        >
           <img src="/public/images/me2.png" alt="" 
           className='absolute right-20 top-20 drop-shadow-[10px_20px_500px_rgba(255,255,255,0.6)]
            h-[80vh] rounded-b-full border-b-2 border-opacity-5 border-[#d4c9c9]            
        '/>

        </div>
        
    </div>)
}