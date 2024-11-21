import React, { useRef, useState } from 'react'

export default function CustomCursor(){
    const msRef = useRef();
    const [pos, setPos] = useState({X:0,Y:0})
    const mouseMove = (e)=>{
        
        // (0,0) starts from left top corner in main screen, need to start @ middle of child div
       
        const xCord =  (e.clientX - msRef.current.getBoundingClientRect().x - msRef.current.getBoundingClientRect().width/2)/10;
        const yCord = -(e.clientY - msRef.current.getBoundingClientRect().y - msRef.current.getBoundingClientRect().height/2)/10;
        // console.log('x.y_cord: ', [xCord, yCord]);
        setPos(prev=>({
            ...prev, 
            X:xCord,
            Y:yCord
        }))
        msRef.current.style.transform = `rotateX(${pos.X}deg) rotateY(${pos.Y}deg)`
        // msRef.current.style.transform = `rotate(${e.clientX, e.clientY}deg) `

    }
    return(<>
        {/* --------- container --------- */}
        <div id='cont' onMouseMove={(e)=>{mouseMove(e)}}
        className='h-screen flex items-center justify-center  '>
            
            {/* ------------ child ----------- */}
            
            <div  ref={msRef} className='bg-gray-500'>
                <h1 className='text-6xl'>Hello i'm Frontend <br/>Developer </h1>
                <h1 className='text-6xl'>To Hire</h1>
            </div>
        </div>
    </>)
}