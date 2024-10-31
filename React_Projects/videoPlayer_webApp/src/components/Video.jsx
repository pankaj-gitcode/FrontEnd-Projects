import React, { useRef } from 'react'
import Progress from './Progress';
import Volume from './Volume';
import { useRecoilState } from 'recoil';
import { progressUpdateAtom } from './Atom';

export default function Video(){
    const videoRef = useRef(null);
    const [progressSlider, setProgressSlider] = useRecoilState(progressUpdateAtom);
    return(<>
    <div className='relative font-bold w-full h-screen bg-slate-500 flex flex-col items-center justify-center'>
        <div className='w-full h-full flex items-center justify-center'>
            <div className='border-8 rounded-lg border-black p-2'>
            {/* ------------- VIDEO ELEMENT -------------- */}
                <video className='rounded-lg'
                    autoPlay 
                    ref={videoRef.current}
                    controls
                    // grab the video progress event
                    onTimeUpdate={(e)=>
                        setProgressSlider((e.target.currentTime / e.target.duration)*100)
                    }
                    
                >
                    <source src={'/video/hero.mp4'} type='video/mp4'/>
                </video>
            </div>
        </div>
                
            {/* -------------- OTHER COMPONENETS ---------- */}
            <div className='absolute bottom-[28vh] left-6 '>
                <div className='flex gap-20 '>
                <Progress />
                <Volume/>
                </div>
            </div>
    </div>
    </>)
}