import React, { useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { progressUpdateAtom } from './Atom'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Progress(){
    const progressRef = useRef(null);
    const progressSlider = useRecoilValue(progressUpdateAtom);
    console.log('Progress-Slider: ', progressSlider)

    // useGSAP(()=>{
    //     gsap.to(progressRef.current, {
    //         value: progressSlider,
    //         duration: 0.5,
    //         ease: 'power1.out'
    //     })
    // }, [])

    useGSAP(()=>{
        gsap.to(progressRef.current, {
            value: progressSlider, // Animate the `value` property of the progress element
            duration:2, // Control the speed of animation
            ease: 'power1.out', // Choose an easing function for a smooth effect
            
          });
    }, [])
    

    return(<>
        <div className=''>
            <div>
            <progress value={progressSlider} max='100'
             ref={progressRef}
             id='progress'
            ></progress>
            </div>
        </div>
    </>)
}