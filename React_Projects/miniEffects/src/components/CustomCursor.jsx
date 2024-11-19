import React, { useRef } from 'react'

export default function CustomCursor(){
    const msRef = useRef();
    const mouseMove = (e)=>{
        msRef.current.style.transform = `rotate(${e.clientX}deg)`
    }
    return(<>
        {/* --------- container --------- */}
        <div onMouseMove={(e)=>{mouseMove(e)}}
        className='h-screen flex items-center justify-center '>
            
            {/* ------------ child ----------- */}
            
            <div ref={msRef} className='bg-slate-500'>
                <h1 className='text-8xl'>Hello i'm Frontend <br/>Developer </h1>
            </div>
        </div>
    </>)
}