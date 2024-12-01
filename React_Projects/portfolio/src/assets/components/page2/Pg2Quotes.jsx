import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export default function Pg2Quotes(){
    const [cursorPos, setCursorPos] = useState({x:0, y:0})
    const pgRef = useRef();
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(()=>{
        gsap.from('.txts', {
            transform: 'rotateX(-80deg)',
            stagger:1.2,
            duration:2,
            opacity:0,
            scrollTrigger:{
              trigger: '#txt-div',
              start:'top 60%',
              end: 'bottom 500',
              markers: true,  
              scrub:2,
              duration:10,
              delay:1
            }
        })
    })

    const moveCircle = (e)=>{
        const cordX = e.clientX;
        const cordY = e.clientY;
        setCursorPos(prev=>({
            ...prev, x:cordX, y:cordY
        }))
        // console.log("e=> ", [cordX, cordY])
        // pgRef.current.style.transform = `rotateX(${cordX}deg) rotateY(${cordY}deg)`

        gsap.to(pgRef.current, {
            // transform: `rotateX(${cursorPos.x}deg) rotateY(${cursorPos.y}deg)`,
            yoyoEase: true,
            
        })
    }

    return(<>
    <div  className='page2 relative bg-gray-100' onMouseMove={e=>moveCircle(e)}>
        
        <div ref={pgRef}   
        className="absolute h-24 w-24 bg-white rounded-full transform translate-x-[1vh] translate-y-[2vh]
        mix-blend-difference z-10 cursor-pointer "
        style={{
            left:`${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            
        }} >

        </div>

        <div className=' text-black flex flex-col items-center
            justify-center uppercase font-[font5] text-center 
            leading-[32vw] overflow-none pt-20' id="txt-div">
                <div className='txts'>
                    <h1 className='text-[20vw] sm:text-[40vw] '>build </h1>
                </div>

                <div className='txts'>
                    <h1 className=' text-[20vw] sm:text-[40vw] '>websites</h1>
                </div>

                <div className='txts'>           
                    <h1 className=' text-[20vw] sm:text-[40vw] '>that</h1>
                </div>

                <div className='txts'>
                    <h1 className=' text-[20vw] sm:text-[40vw] '>create</h1>
                </div>

                <div className='txts'>
                    <h1 className=' text-[20vw] sm:text-[40vw] '>legacies</h1>
                </div>
            
        </div>
    </div>
    </>)
}