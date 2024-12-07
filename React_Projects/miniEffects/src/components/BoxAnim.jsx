import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

export default function BoxAnim(){
    // moving box along the cirsor direction
    const boxRef = useRef();




    useGSAP(()=>{
        
        gsap.fromTo('.animBox', {
            x:60, 
        }, {
            x:10,
            y:20,
            z:30,
            repeat: -1,
            duration:2,
            yoyoEase:true,
            rotate:60,
            borderRadius: '50%',

            ease: 'bounce-inOut'

        })
    })
    return(<>
    <div>
            {/* ----------- TITLE ---------- */}
        <div className='text-6xl text-white bg-black'>
            This is Box Animation
        </div>

        {/* ------------- MIAN ANIMATION ----------- */}

        <div ref={boxRef} className='relative mt-10 pl-10'>
            <div className='animBox h-36 w-36 bg-orange-500 absolute 
            blur-lg'>1</div>

            <div className='animBox h-36