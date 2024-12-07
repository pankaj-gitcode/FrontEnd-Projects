import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

export default function BoxAnim(){
    const [pos, setPos] = useState({x:0, y:0});
    // refs for both the boxes
    const box1Ref = useRef();
    const box2Ref = useRef();

    // set the cords:x&y
    const animBox = (e)=>{
        const xCord = e.clientX;
        const yCord = e.clientY;

        setPos(prev=>({
            ...prev, x:xCord, y:yCord
        }))

        // box1Ref.current.style.transform = `rotateX(${pos.x}deg) rotateY(${pos.y}deg)`
        // box2Ref.current.style.transform = `rotateX(${-pos.x+10}deg) rotateY(${pos.y}deg)`
    }

    //animate through GSAP
    useGSAP(()=>{
        gsap.to(box1Ref.current, {
            transform: `rotateX(${pos.x}deg) rotateY(${pos.y}deg)`,
            duration:10,

        })
        gsap.to(box2Ref.current, {
            transform: `rotateX(${pos.x}deg) rotateY(${pos.y}deg)`,
            duration:8,
        })
    }, [pos.x, pos.y])


   
    return(<>
        <div className=' relative h-screen flex flex-col items-center justify-center' >
                    {/* ------- TITLE -------- */}
            <h1 className='text-6xl text-white bg-black py-10'>This is Box Animation</h1>

                        {/* ------ BOXES -------- */}
            <div className='flex flex-col items-center justify-center 
            relative bg-gray-500 h-96 min-w-[100vw]'
            onMouseMove={(e)=>animBox(e)} >

                <div ref={box1Ref} className='bg-orange-500 h-60 w-60'> 1stDIV</div>
                <div ref={box2Ref} className='bg-blue-500 h-60 w-60 absolute -skew-x-2 '> 2ndDIV</div>
            </div>

        </div>
    </>)

   
}