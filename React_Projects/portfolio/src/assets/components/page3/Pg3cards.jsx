import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

export default function Pg3cards(){
    const cardBoxRef = useRef();

    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        gsap.utils.toArray(cardBoxRef.current.children).map(elem=>
            gsap.to(elem, {
                opacity:0,
                yoyoEase:true,
                
                scrollTrigger:{
                    trigger:elem,
                    markers:true,
                    start:'top 15%',
                    end: 'bottom 15%',
                    scrub:true,
                    
                    
                }
            })
        )
    })
    return(<>
        <div ref={cardBoxRef} className='cardBox relative mix-blend-multiply text-black flex flex-col items-center justify-center gap-8 mt-20 '>
            
            {/* --------- CARD-1 ---------- */}
            <div className='card sticky top-[5vh] h-[70vh] sm:h-[80vh] lg:h-[90vh] w-[70vw] sm:w-[50vw] lg:w-[30vw] rounded-3xl 
             shadow-[2px_2px_8px_6px_rgba(0,0,0,0.8)] bg-gray-500 mb-20 
             bg-gradient-to-right from-gray-500 to-gray-300'></div>

            {/* --------- CARD-2 ---------- */}
            <div className='card sticky top-[10vh] h-[70vh] sm:h-[80vh] lg:h-[90vh] w-[70vw] sm:w-[50vw] lg:w-[30vw] rounded-3xl 
             shadow-[2px_2px_8px_6px_rgba(0,0,0,0.8)] bg-orange-500 mb-20 '></div>

            {/* --------- CARD-3 ---------- */}
            <div className='card sticky top-[10vh] h-[70vh] sm:h-[80vh] lg:h-[90vh] w-[70vw] sm:w-[50vw] lg:w-[30vw] rounded-3xl 
             shadow-[2px_2px_8px_6px_rgba(0,0,0,0.8)] bg-red-500 mb-20 '></div>

            {/* --------- CARD-4 ---------- */}
            <div className='card sticky top-[10vh] h-[70vh] sm:h-[80vh] lg:h-[90vh] w-[70vw] sm:w-[50vw] lg:w-[30vw] rounded-3xl 
             shadow-[2px_2px_8px_6px_rgba(0,0,0,0.8)] bg-green-500 mb-20 '></div>

            {/* --------- CARD-5 ---------- */}
            <div className='card sticky top-[10vh] h-[70vh] sm:h-[80vh] lg:h-[90vh] w-[70vw] sm:w-[50vw] lg:w-[30vw] rounded-3xl 
             shadow-[2px_2px_8px_6px_rgba(0,0,0,0.8)] bg-blue-500 mb-20 '></div>

            {/* --------- CARD-6 ---------- */}
            <div className='card sticky top-[10vh] h-[70vh] sm:h-[80vh] lg:h-[90vh] w-[70vw] sm:w-[50vw] lg:w-[30vw] rounded-3xl 
             shadow-[2px_2px_8px_6px_rgba(0,0,0,0.8)] bg-yellow-500 mb-20 '></div>

        </div>
    </>)
}