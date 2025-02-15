import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import 'remixicon/fonts/remixicon.css'

export default function Page1Bottom(){
    useGSAP(()=>{
        gsap.fromTo('.btm-text',
            {
                opacity:0,
                y: 30,
            }, 
            {
                opacity:1,
                y:0,
                duration:2,
                delay:1.2,
                stagger:1,
                yoyoEase:true,
                ease:'back.inOut'
            })
    }, [])
    useGSAP(()=>{
        gsap.to('.icon', {
            rotate:360,
            repeat:-1,
            duration:3,
            ease: 'linear'
        })
    })
    return(<>
        
        <div className='btm-text absolute bottom-10 left-20 txt-shadow-black text-xl flex flex-col justify-start right-20'>
            <h1 className='font-[font1] hidden sm:block'>BRAND DESIGN | WEBSITE DESIGN</h1>
            <h1 className='font-[font2] hidden sm:block'>BESPOKE FREELANCE</h1>
        </div>

        <div className='btm-text absolute bottom-10 left-20 txt-shadow-black text-xl flex flex-col justify-start right-20'>
            <h1 className='font-[font1] sm:hidden block'>BRAND & WEBSITE DESIGN</h1>
            <h1 className='font-[font2] sm:hidden block'>BESPOKE FREELANCE</h1>
        </div>

        <div>

        </div>
            
        <div className='icon absolute bottom-10 right-10 '>
            <i className=" ri-compass-line bg-black text-6xl rounded-full "></i>
        </div>
    </>)
}