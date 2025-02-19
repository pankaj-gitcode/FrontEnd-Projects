import Spline from '@splinetool/react-spline'
import React, { useRef, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { projectAtom, splineAtom} from '../atom/Atom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import { Page4TextVideo } from './Page4TextVideo'


export const Page3Projects = () => {
    const robote = useRecoilValue(splineAtom);
    const projectAssets = useRecoilValue(projectAtom);
    // console.log('Project Title: ', projectAssets);

    

    const imgRef = useRef([]);
    const [cord, setCord] = useState({x:0, y:0});

    const mouseMove = (e,i)=>{
        const posX = e.clientX;
        const posY = e.clientY;
        setCord(prev=>({
            ...prev, x:posX, y:posY
        }))

        imgRef.current[i].childNodes[0].style.opacity = 1;
        imgRef.current[i].childNodes[0].style.left = `${cord.x + 2}px`

    }
    // useGSAP(()=>{
    //     gsap.fromTo('.animateImg',{
    //         y: 20,
    //         opacity: 0
    //     }, {
    //         y:0,
    //         opacity:1,
    //         duration:2,
    //         yoyoEase:true
    //     })
    // }, [])

    const mouseLeave = (i)=>{
        imgRef.current[i].childNodes[0].style.opacity=0;
    }


  return (<>

  <div className=' w-full h-fit bg-yellow-500 '>

        
        {/* ----- ROBOT SECTION ----- */}
        <div className='relative max-h-screen'>
            <Spline scene={robote.URL} />
            {/* <Spline scene="https://prod.spline.design/6ergQDvH14-iwc63/scene.splinecode" /> */}
        
            {/* ----- PROJECT SECTION ----- */}
            <div className='absolute w-full top-[60%] sm:top-[80%]'>
            {
                projectAssets.map((el,i)=>
                <div key={el.projectId} className='bg-[#E3E3E3] text-black font-[font5]
                '>

                        {/* ----- PROJECT-CONTAINER ----- */}
                    {
                        <div onMouseMove={(e)=>mouseMove(e,i)} onMouseLeave={()=>mouseLeave(i)}
                            ref={el=>imgRef.current[i] = el}
                            className={`relative flex flex-col sm:flex-row items-center justify-between p-5
                            min-w-[80%]  overflow-hidden
                            ${el.projectId % 2 === 0? 'sm:flex-row-reverse': '' }`}>

                                        {/* ----- IMAGES ----- */}
                                <img src={el.image} alt={el.image} className='animateImg rounded-2xl 
                            shadow-[2px_2px_20px_12px_rgba(0,0,0,0.5)] -skew-y-6 absolute top-0 opacity-0 
                            mix-blend-luminosity transition duration-700 ease-in-out overflow-x-hidden
                            md:h-[40vh] h-[20vh] right-10'/>

                                    {/* ----- PROJECT-TITLE ----- */}
                                <div className='text-[15vw] sm:text-[10vw]'>
                                    <h1>{el.projectTitle}</h1>
                                </div>

                                    {/* ----- PROJECT-LINKS ----- */}
                                <div className='flex flex-row sm:flex-col items-between justify-between w-[60vw] 
                                    sm:w-fit text-[3vw] sm:text-[2vw] md:text-[2vw] font-[font2] font-bold'>
                                    
                                    <a href={el.gitHubLink} target='_blank' className='pb-8 sm:pb-6 '>Git-Link</a>
                                    <a href={el.webLink}>Web-Link</a>
                                </div>
                                                
                        </div>
                    }
                    <hr className='bg-black h-1'/>
                </div>
                )
            }
                <Page4TextVideo/>
            </div>
        </div> 
    
 </div>
  </>
  )
}
