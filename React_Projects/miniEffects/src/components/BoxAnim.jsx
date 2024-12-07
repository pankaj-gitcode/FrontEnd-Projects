import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

export default function BoxAnim(){
    const [pos, setPos] = useState({x:0, y:0});
    // refs for both the boxes
    const box1Ref = useRef();
    const box2Ref = useRef();


   
    return(<>
        <div className=' relative h-screen flex flex-col items-center justify-center' onMouseMove={(e)=>BoxAnim(e)}>
                    {/* ------- TITLE -------- */}
            <h1 className='text-6xl text-white bg-black py-10'>This is Box Animation</h1>

                        {/* ------ BOXES -------- */}
            <div className='flex flex-col items-center justify-center 
            relative bg-gray-500 h-96 min-w-[100vw]  ' >

                <div ref={box1Ref} className='bg-orange-500 h-60 w-60'> 1stDIV</div>
                <div ref={box2Ref} className='bg-blue-500 h-60 w-60 absolute -skew-x-2 '> 2ndDIV</div>
            </div>

        </div>
    </>)

   
}