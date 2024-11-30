import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

export default function Pg2Quotes(){
    useGSAP(()=>{
        gsap.to('#txt-div', {
            opacity:1,
            y:0
        })
        gsap.fromTo('.txts', {
            opacity:0,
            y:20
        },{
            opacity:1,
            y:0,
            duration:1,
            stagger:1.2
        })
        }, [])
    return(<>
    <div className=' text-black flex flex-col items-center 
    justify-center uppercase font-[font5] text-center 
    leading-[32vw] overflow-none pt-20' id="txt-div">

        <h1 className='txts text-[20vw] sm:text-[40vw] '>build websites</h1>
        <h1 className='txts text-[20vw] sm:text-[40vw] '>that</h1>
        <h1 className='txts text-[20vw] sm:text-[40vw] '>create</h1>
        <h1 className='txts text-[20vw] sm:text-[40vw] '>legacies</h1>
        
    </div>
    </>)
}