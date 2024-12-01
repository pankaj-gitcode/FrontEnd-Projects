import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

export default function Pg2Quotes(){
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
    return(<>
    <div className='page2'>

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