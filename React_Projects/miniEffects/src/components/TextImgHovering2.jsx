import React, { useRef, useState } from 'react'
import { textImgData } from '../assets/data/data'

export default function TextImgHovering2() {
    const divRef = useRef([]);
    const [pos, setPos] = useState({x:0,y:0});

    // -------- MOUSE-MOVE -----------
    const mouseMove = (e,i)=>{
        // console.log("NEW_REF: ",divRef)
        
        const xCord = e.clientX;
        const yCord = e.clientY;
        setPos(prev=>({
            ...prev,x:xCord, y:yCord
        }))

        // divRef.current[i].forEach(ele=>{
        //     // ele.childNodes[1].style.opacity = 1;
        //     ele.childNodes[1].style.left = `${pos.x}px`
        // }
        // )
        divRef.current[i].childNodes[1].style.opacity = 1;
        divRef.current[i].childNodes[1].style.left = `${pos.x}px`;
    }

    // -------- MOUSE-LEAVE -----------
    const mouseLeave = (i)=>{
        divRef.current[i].childNodes[1].style.opacity = 0;
    }

  return (
    <div>
        <h1 className='text-5xl text-center my-10 text-white uppercase'>Image appears while hovering on texts</h1>

        {/* ------------ ALL ELEMENTS ----------- */}
        <div className='flex flex-col items-start p-10 text-6xl uppercase '>
            {
                textImgData.map((items,i)=>
                                
                    <div key={i}
                        ref={el=>divRef.current[i] = el}
                        className='border-b-2 w-screen relative pt-6 pb-2'
                        onMouseMove={(e)=>mouseMove(e,i)}
                        
                        onMouseLeave={()=>mouseLeave(i)}
                    >
                        {/* ------- TITLE -------- */}
                        <h1 
                        className='font-bold'>{items.title}</h1>

                        {/* ---------- IMAGE -------- */}
                        <img src={items.imgSrc} alt={items.imgAlt} 
                            className='text-lg w-[38vw] h-[60vh]
                            drop-shadow-[2px_2px_8px_rgba(255,255,255,0.8)]
                            opacity-0 absolute top-0 mix-blend-none z-50'
                        />
                    </div>
                )
            }
        </div>
    </div>
  )
}
