import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

export default function BoxAnim(){
    const [pos, setPos] = useState({x:0, y:0});
    gsap.registerPlugin();
    // refs for both the boxes
    const box1Ref = useRef();
    const box2Ref = useRef();

    // set the cords:x&y
    const animBox = (e)=>{
        const xCord = e.clientX-box1Ref.current.getBoundingClientRect().x-box1Ref.current.getBoundingClientRect().width/2;
        const yCord = e.clientY-box1Ref.current.getBoundingClientRect().y-box1Ref.current.getBoundingClientRect().height/2;

        console.log('bOundingClient: ', box1Ref.current.getBoundingClientRect())

        setPos(prev=>({
            ...prev, x:xCord, y:yCord
        }))

        // box1Ref.current.style.transform = `rotateX(${pos.x}deg) rotateY(${pos.y}deg)`
        // box2Ref.current.style.transform = `rotateX(${-pos.x+10}deg) rotateY(${pos.y}deg)`
    }

    //animate through GSAP
    useGSAP(()=>{
        gsap.to(box1Ref.current, {
            transform: `rotateX(${pos.x/2}deg) rotateY(${pos.y/2}deg) `,
            duration:20,
            ease:'elastic'

        })
        gsap.to(box2Ref.current, {
            transform: `rotateX(${pos.x+20}deg) rotateY(${pos.y+20}deg)`,
            duration:50,
            ease: 'elastic'
        })
    }, [pos.x, pos.y])


   
    return(<>
        <div className=' relative h-screen flex flex-col items-center justify-center' >
                    {/* ------- TITLE -------- */}
            <h1 className='text-6xl text-white bg-black py-10'>This is Box Animation</h1>

                        {/* ------ BOXES -------- */}
            <div className='flex flex-col items-center justify-center gap-10
            relative bg-gray-500 h-96 min-w-[100vw]'
            onMouseMove={(e)=>animBox(e)} >
                            {/* ------ B1----- */}
                <div ref={box1Ref} className='bg-orange-500 h-60 w-60 blur-lg rounded-l-[12vw] rounded-r-[12vw]'> 1stDIV</div>

                            {/* ------ B2 ------ */}
                <div ref={box2Ref} className='bg-orange-500 h-60 w-60 absolute -skew-x-12
                 blur-md rounded-none ml-20'> 2ndDIV</div>

                            {/* ----- B3 ------ */}
                <div className='bg-blue-500 absolute h-52 w-52 rounded-full blur-sm'>3</div>
                
            </div>

        </div>
    </>)

   
}