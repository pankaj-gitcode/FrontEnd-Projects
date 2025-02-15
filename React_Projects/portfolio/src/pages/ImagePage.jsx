import React, { useRef, useState } from 'react'

import Page1Bottom from '../components/Page1Bottom'
import ShortInfo from '../components/ShortInfo'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export const ImagePage = () => {
  const [cord, setCord] = useState({
    x: 0,
    y: 0
  })
  const shortInfoRef = useRef();
  const mouseMove = (e)=>{
    const xCord = (e.clientX-shortInfoRef.current.getBoundingClientRect().x-shortInfoRef.current.getBoundingClientRect().width/2)/70;
    const yCord = -(e.clientY-shortInfoRef.current.getBoundingClientRect().y-shortInfoRef.current.getBoundingClientRect().height/2)/20;

    setCord(prev=>({
      ...prev,
      x:xCord,
      y:yCord
    }))
    // shortInfoRef.current.style.transform = `rotateX(${cord.x}deg) rotateY(${cord.y}deg)`

  }
  //implement GSAP
  useGSAP(()=>{
    gsap.to(shortInfoRef.current, {
      transform: `rotateX(${cord.x}deg) rotateY(${cord.y}deg)`,
      duration: 1,
      yoyoEase: true,
      // scale: -20,
      ease: 'power1.inOut',
    })
  }, [cord.x, cord.y])



  // console.log("SHRT:==> ", shortInfoRef.current.getBoundingClientRect() )
  return (
    <div onMouseMove={(e)=>{
      mouseMove(e)
    }}
    className='h-[100vh] flex items-center justify-center p-5 '>
              {/* ----------------- IMAGE DIV --------- */}
      <div id='imgDiv' className=' h-full w-full relative bg-gradient-to-l from-white
       to-black rounded-[50px] shadow-[2px_2px_20px_8px_rgba(0,0,0,0.8)]
        overflow-hidden 
        '>
                {/* ------------ IMAGE ----------- */}
          <img src='/public/images/me3.png' alt="img" 
              className='
                  h-[100vh] absolute right-20 
                  drop-shadow-[20px_20px_200px_rgba(255,255,255,0.2)]
                  top-10 sm:top-10 md:top-20 lg:top-0 pl-20
                  '
          />
         
          <ShortInfo infoRef={shortInfoRef}/>
          <div >
          <Page1Bottom />
          </div>
          
      </div>
  
    </div>
    
  
  )
}
