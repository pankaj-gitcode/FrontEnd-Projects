import React from 'react'
import { useRecoilValue } from 'recoil'
import { videoAtom } from '../atom/Atom'

export const Page4TextVideo = () => {
  const video = useRecoilValue(videoAtom);
  return (
    <div className=' min-h-screen bg-red-500'>

        {/* <video controls='false' loop='true' preload='metadata' muted='false' */}

        <div className='h-screen bg-yellow-500'>
        <video loop={true} controls={false} autoPlay muted={true} 
        className=' bg-green-600' 
        playsInline>
          <source src={video} type='video/mp4' / >
        </video>
        </div>

    </div>
  )
}
