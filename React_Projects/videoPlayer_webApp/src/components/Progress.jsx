import React from 'react'
import { useRecoilValue } from 'recoil'
import { progressUpdateAtom } from './Atom'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Progress(){
    const progressSlider = useRecoilValue(progressUpdateAtom);
    console.log('Progress-Slider: ', progressSlider)

    useGSAP(()=>{
        gsap.to('#progress', {
            duration: 1,
            yoyoEase:true,
            ease: 'power2.inOut'
        })
    }, []);

    return(<>
        <div className=''>
            <div>
            <progress value={progressSlider} max='100'
             id='progress'
            ></progress>
            </div>
        </div>
    </>)
}