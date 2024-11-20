import React, { useRef, useState } from 'react'

export default function CustomCursor(){
    const msRef = useRef();
    const [pos, setPos] = useState({X:0,Y:0})
    const mouseMove = (e)=>{
        
        // (0,0) starts from left top corner in main screen, need to start @ middle of child div
        const xCord = 

        setPos(prev=>({
            ...prev, 
            X:1,
            Y:1
        }))
        msRef.current.style.transform = `rotate(${pos.X, pos.Y}deg)`
        // msRef.current.style.transform = `rotate(${e.clientX, e.clientY}deg) `

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