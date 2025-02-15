import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'


export default function ShortInfo({infoRef}){
    useGSAP(()=>{
        gsap.fromTo('.animTxt', 
            {
                opacity:0,
                y:30   
            }, 
            {
                y:0,
                opacity:1,
                delay:0.1,
                duration:2,
                stagger: 0.2
            }
        )
        gsap.fromTo('#animTxtDev', 
            {
                opacity:0,
                y:320,
            }, 
            {
                y:0,
                opacity:1,
                delay:1,
                duration:2,
                stagger:0.3
            }
        )
        
    }, [])

    return(<>
        <div ref={infoRef}  id='shortInfo'
        className=' absolute z-20 flex flex-col items-center justify-center
        lg:top-56 top-32 sm:top-36 left-12 sm:left-20 lg:text-5xl text-4xl sm:text-6xl
        '>
            <h1 className='animTxt font-[font4] lg:text-[5vw]'>
                I AM
                <span id='animTxtDev' className=' text-black font-[font3] text-shdow'> FRONTEND<span  className=' text-white txt-shadow-black'>™</span></span>
                <span className='animTxt font-[font4] lg:text-7xl lg:text-[7vw]'><br/>DEVELOPER</span>
                <span className='animTxt text-[5vw]'><br/>TO HIRE</span>
            </h1> 
            
        </div>
    </>)
}




