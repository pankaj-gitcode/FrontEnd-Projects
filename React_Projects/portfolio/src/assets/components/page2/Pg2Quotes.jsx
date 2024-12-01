import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

export default function Pg2Quotes(){
    useGSAP(()=>{
        gsap.from('.txts', {
            transform: 'rotateX(-90deg)',
            stagger:1.2,
            duration:2,
            opacity:0
        })
    })
    return(<>
    <div className='page2'>

        <div className=' text-black flex flex-col items-center 
        justify-center uppercase font-[font5] text-center 
        leading-[32vw] overflow-none pt-20' id="txt-div">

            <h1 className='txts text-[20vw] sm:text-[40vw] '>build </h1>
            <h1 className='txts text-[20vw] sm:text-[40vw] '>websites</h1>
            <h1 className='txts text-[20vw] sm:text-[40vw] '>that</h1>
            <h1 className='txts text-[20vw] sm:text-[40vw] '>create</h1>
            <h1 className='txts text-[20vw] sm:text-[40vw] '>legacies</h1>
            
        </div>
    </div>
    </>)
}