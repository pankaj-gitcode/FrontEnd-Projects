import React, { useState } from 'react'

export default function CustomCursor(){
    const [pos, setPos] = useState([{x:0}])
    const mouseMove = (e)=>{
        setPos(prev=>({
            prev,x:[e.clientX,e.clientY]
        }))
        console.log(pos.x)

    }
    return(<>
        <div className='h-screen' onMouseMove={mouseMove}>
            <div className='h-10 w-10 bg-red-500 rounded-full '></div>
            <p>hi{pos.x}, {pos.x}</p>
        </div>
    </>)
}