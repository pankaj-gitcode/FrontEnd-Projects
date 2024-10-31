import React from 'react'
import { useRecoilValue } from 'recoil'
import { progressUpdateAtom } from './Atom'

export default function Progress(){
    const progressSlider = useRecoilValue(progressUpdateAtom);
    console.log('Progress-Slider: ', progressSlider)
    return(<>
        <div className='bg-green-500'>
            <div>
            This is Progress
            </div>
        </div>
    </>)
}