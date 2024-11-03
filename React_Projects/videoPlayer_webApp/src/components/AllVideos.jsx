import React from 'react'
import { useRecoilValue } from 'recoil'
import { videosAtom } from './Atom'

export default function AllVideos(){
    const videos = useRecoilValue(videosAtom);
    return(<>
        <div className='flex'>
            {
              videos.map(e=>(
                <video key={e} autoPlay controls >
                    <source src={e} type='video/mp4'/>
                </video>
              ))  
            }
        </div>
    </>)
}