import React, { useRef, useState } from 'react'

export default function TextHoveringImg() {
    const imgRef = useRef();
    const [pos, setPos] = useState({x:0, y:0});

    const divImg = (e)=>{
        const xCord = e.clientX;
        const yCord = e.clientY;
        setPos(prev=>({
            ...prev, x:xCord, y:yCord
        }))
        imgRef.current.childNodes[1].style.opacity = 1;
        imgRef.current.childNodes[1].style.left = `${pos.x}px`;
        // imgRef.current.childNodes[1].style.top = `${pos.y} px`;
    }
    // imgRef.current.forEach(elem=>console.log('elem: ', elem))
    // console.log('imgRef=> ',imgRef.current.children)

    const imgLeave = ()=>imgRef.current.childNodes[1].style.opacity=0;

  return ( <>

    <div className=''>
        <h1 className='text-3xl text-white text-center mb-10'>Hover on Text appears Image Effect</h1>

        <div>
                {/* ----------- DIV-1 ------------ */}
            <div ref={imgRef} onMouseMove={(e)=>divImg(e)} onMouseLeave={imgLeave} className='relative border-b-4 py-2 uppercase'>
                <h1 className='text-7xl '>Kalari warriors</h1>
                <img 
                src="https://image.lexica.art/full_webp/d2ce020e-1434-438e-8a00-c35e38e8c28f" 
                alt="KALARI FIGHTERS" 
                className='w-52 h-60 absolute top-0 opacity-0'    
                />
                
            </div>
                {/* ----------- DIV-2 ------------ */}

            <div ref={imgRef} onMouseMove={(e)=>divImg(e)} onMouseLeave={imgLeave} className='relative border-b-4 py-2 uppercase'>
                <h1 className='text-7xl'>Ninja warriors</h1>
                <img 
                src="https://image.lexica.art/full_webp/17f913b8-c08e-4a0b-97d5-2b8d23412013" 
                alt="NINJA FIGHTERS" 
                className='w-52 h-60 absolute top-0 opacity-0 z-10 bg-blend-difference'    
                />
            </div>
                {/* ----------- DIV-3 ------------ */}

            <div className='relative border-b-4 py-2 uppercase'>
                <h1 className='text-7xl'>KungFu warriors</h1>
                <img 
                src="https://image.lexica.art/full_webp/30ef22e7-2523-4928-bb7f-ce7f53a9d7df" 
                alt="KUNGUFU FIGHTERS" 
                className='w-52 h-60 absolute top-0'    
                />
            </div>
                {/* ----------- DIV-4 ------------ */}

            <div className='relative border-b-4 py-2 uppercase'>
                <h1 className='text-7xl'>Muai Thai warriors</h1>
                <img 
                src="https://image.lexica.art/full_webp/eb6fc8e6-50a0-4109-a2b7-1df652b492a3" 
                alt="MUAITHAI FIGHTERS" 
                className='w-52 h-60 absolute top-0'    
                />
            </div>
                {/* ----------- DIV-5 ------------ */}

            <div className='relative border-b-4 py-2 uppercase'>
                <h1 className='text-7xl'>Wing Chun Warriors</h1>
                <img 
                src="https://image.lexica.art/full_webp/aa463855-3810-47c4-b10e-62e9b5f58372" 
                alt="WINGCHUN FIGHTERS" 
                className='w-52 h-60 absolute top-0'    
                />
            </div>
        </div>


    </div>
  </>
  )
}
