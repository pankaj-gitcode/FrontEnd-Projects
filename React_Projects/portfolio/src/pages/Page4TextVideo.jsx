import React, { useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { videoAtom } from '../atom/Atom'
import { useGSAP } from '@gsap/react';
import gsap, { ScrollTrigger } from 'gsap/all';


export const Page4TextVideo = ()=>{
  const video = useRecoilValue(videoAtom);
  const textRef = useRef();

  // console.log("textRef: ", textRef.current.childNodes)
  gsap.registerPlugin(ScrollTrigger)
  
    gsap.fromTo('.txts',{
      y:80,
      opacity:0
    },{
      y:0,
      opacity:1,
      scrollTrigger: {
        trigger: '.text-div',
        markers:true,
        start: 'top 50%',
        end: 'bottom 20%',
        duration: 2,
        scrub:1,
        delay:1
      }
    })
  


  return(<>
    <div className='relative'>

      <div className='bg-gray-500'>
        <video autoPlay controls={false} loop muted={true} preload='metadata' playsInline>
          <source src={video} type='video/mp4' className='object-cover'/>
        </video>
      </div>

      <div className='text-div absolute top-3 bottom-1 w-full h-full
      flex flex-col items-center justify-center font-[Font5] uppercase
       rounded-3xl  leading-[1] bg-blend-difference'
       ref={textRef}
       >

        <h1 className=' txts text-[10vh] sm:text-[20vh] md:text-[15vh] lg:text-[20vw]'>Lets</h1>
        <h1 className=' txts text-[10vh] sm:text-[20vh] md:text-[15vh] lg:text-[20vw]'>Connect</h1>
      </div>


    </div>
  </>)
}










// export const Page4TextVideo = () => {
//   const video = useRecoilValue(videoAtom);
//   return (
//     <div className=' h-screen  bg-red-500'>

//         {/* <video controls='false' loop='true' preload='metadata' muted='false' */}

//       <div className='relative h-screen  bg-green-500
//       flex items-center justify-center'>
//           <video 
//           className='h-screen w-full bg-yellow-500 object-cover'
//           autoPlay loop controls={false} muted preload='metadata' playsInline >
//             <source src={video}  type='video/mp4' />
//           </video>

//           <div className='absolute  text-White uppercase text-center 
//           font-[Font5] font-bold  bg-yellow-500 w-[80vw] h-[80vh] 
//           flex flex-col items-center justify-center  '>
//             <h1 className='text-[50vw] sm:text-[30vw] md:text-[20vw]'>Lets</h1>
//             <h1 className='text-[15vw] sm:text-[10vw] md:text-[15vw]'>Connect</h1>
//           </div>

//       </div>
        

//     </div>
//   )
// }
