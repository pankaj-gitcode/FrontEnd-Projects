import React, { useRef } from 'react'

export default function ShortInfo(){
    const infoRef = useRef();

    const mouseMove = (e)=>{
        console.log(infoRef.current.getBoundingClientRect());
    }

    return(<>
        <div ref={infoRef} onMouseMove={(e)=>mouseMove(e)} id='shortInfo'
        className='bg-gray-500 absolute z-20 flex flex-col items-center justify-center
        lg:top-56 top-32 sm:top-36 left-12 sm:left-20 lg:text-5xl text-4xl sm:text-6xl
        '>
            <h1 className='font-[font4] lg:text-[5vw]'>
                I AM
                <span className='text-black font-[font3] text-shdow'> FRONTEND™</span>
                <span className='font-[font4] lg:text-7xl lg:text-[7vw]'><br/>DEVELOPER</span>
                <span className='text-[5vw]'><br/>TO HIRE</span>
            </h1>
            
        </div>
    </>)
}




