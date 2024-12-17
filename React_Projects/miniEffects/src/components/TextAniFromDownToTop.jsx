import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'


export default function TextAniFromDownToTop() {
    gsap.registerPlugin(ScrollTrigger);
    
        useGSAP(()=>{
            gsap.from('.txt', {
                transform: 'rotateX(-80deg)',
                opacity: 0,
                // repeat:-1,
                stagger:1.2,
                duration:2,
                // yoyoEase:true,
                scrollTrigger: {
                    trigger: '#txt-div',
                    start:'top 60%',
                    end: 'bottom 500',
                    markers:true,
                    scrub:1.2,
                    duration:6,
                    
                }
            })
        })
   
    
  return (
    <div className=' min-h-screen bg-gradient-to-b from-green-100 to-green-300 text-black'>
        {/* ----------- CONTAINER DIV ------------ */}
        <div id='txt-div' className='pt-52 uppercase text-[26vh] flex flex-col items-center justify-center font-extrabold leading-[32vw] '>
            <div className='txt '>
                <h1>Lorem</h1>
            </div>
            <div className='txt '>
                <h1>ipsum</h1>
            </div>
            <div className='txt '>
                <h1>dolor</h1>
            </div>
            <div className='txt '>
                <h1>sit</h1>
            </div>
            <div className='txt '>
                <h1>amet</h1>
            </div>
        </div>


    </div>
  )
}
