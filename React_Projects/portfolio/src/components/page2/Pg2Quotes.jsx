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
            //   markers: true,  
              scrub:2,
              duration:10,
              delay:1
            }
        })
    })

    const moveCircle = (e)=>{
        const page2Rect = e.currentTarget.getBoundingClientRect(); // get the parent conatainer's bounding box
        // cursor x & Y relative to the container
        const cordX = e.clientX - page2Rect.left; // to keep the circle inside this specific div
        const cordY = e.clientY - page2Rect.top;
        setCursorPos(prev=>({
            ...prev, x:cordX, y:cordY
        }))
        // console.log("e=> ", [cordX, cordY])
        // pgRef.current.style.transform = `rotateX(${cordX}deg) rotateY(${cordY}deg)`

        gsap.to(pgRef.current, {
            // transform: `rotateX(${cursorPos.x}deg) rotateY(${cursorPos.y}deg)`,
            // x: cursorPos.x,
            // y: cursorPos.y,
            duration:2,
            yoyoEase: true,
            ease: 'bounce.inOut',
       
        })
    }

    return(<>
    <div  className='page2 relative bg-gray-100' onMouseMove={e=>moveCircle(e)}>
          {/* ------------ CUSTOM CURSOR ------------ */}
        <div ref={pgRef}   
        className="absolute h-20 w-20 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2
        mix-blend-difference z-10 pointer-events-none overflow-hidden"
        style={{
            left:`${cursorPos.x+60}px`,
            top: `${cursorPos.y+60}px`,
            
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