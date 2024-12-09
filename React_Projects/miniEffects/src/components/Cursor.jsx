import React, { useRef, useState } from 'react'

export default function Cursor() {
    const divRef = useRef();
    const [pos, setPos] = useState({x:0, y:0});

    // x,y cords of parent div will move the div-circle
    const mouseMove = (e)=>{
        const xCord = e.clientX;
        const yCord = e.clientY;
        
        setPos(prev=>({
            ...prev, x:xCord, y:yCord
        }))

        divRef.current.style.left = pos.x+'px';
        divRef.current.style.top = pos.y+ 'px';
    }

  return (
    <div>
        <h1 className='text-3xl text-center my-10 uppercase'>Hover on texts and observe the circle</h1>

        <div  className=' relative text-3xl uppercase font-bold' onMouseMove={(e)=>mouseMove(e)}>

            <h1 className='border-b-2 py-6 drop-shadow-[2px_2px_8px_rgba(255,255,255,0.8)]'>
            Lorem ipsum dolor sit amet consectetur.</h1>
            <h1 className='border-b-2 py-6 drop-shadow-[2px_2px_8px_rgba(255,255,255,0.8)]'>
            Lorem ipsum dolor sit amet consectetur.</h1>
            <h1 className='border-b-2 py-6 drop-shadow-[2px_2px_8px_rgba(255,255,255,0.8)]'>
            Lorem ipsum dolor sit amet consectetur.</h1>
            <h1 className='border-b-2 py-6 drop-shadow-[2px_2px_8px_rgba(255,255,255,0.8)]'>
            Lorem ipsum dolor sit amet consectetur.</h1>
            <h1 className='border-b-2 py-6 drop-shadow-[2px_2px_8px_rgba(255,255,255,0.8)]'>
            Lorem ipsum dolor sit amet consectetur.</h1>
            <h1 className='border-b-2 py-6 drop-shadow-[2px_2px_8px_rgba(255,255,255,0.8)]'>
            Lorem ipsum dolor sit amet consectetur.</h1>

            <div ref={divRef} className='w-20 h-20 bg-white absolute rounded-full mix-blend-difference
            transform translate-x-10 -translate-y-52'></div>

        </div>
    </div>
  )
}
