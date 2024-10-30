import React, { useRef } from 'react'

export default function Video(){
    const videoRef = useRef(null);
    return(<>
    <div className='font-bold w-full h-screen bg-slate-500'>
        <div className='w-full h-full flex items-center justify-center'>
            <div className='border-8 rounded-lg border-black p-2'>
                <video className='rounded-lg'
                    autoPlay 
                    ref={videoRef.current}
                >
                    <source src={'/video/hero.mp4'} type='video/mp4'/>
                </video>
            </div>
        </div>
    </div>
    </>)
}