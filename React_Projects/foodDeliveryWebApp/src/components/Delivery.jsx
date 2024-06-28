import React from 'react'
import { useRecoilValue } from 'recoil'
import { twoPhonesAtom } from './Atom'

export default function Delivery(){
    const twoPhonesImg = useRecoilValue(twoPhonesAtom); 

    return(<>
        <div className=' w-full py-14 px-4 bg-green-500'>
                <h1 className='text-center text-orange-500 font-bold text-2xl'>Quick Delivery App</h1>
            <div className='grid grid-cols-2 mx-auto w-full bg-red-200 '>
                <img src={twoPhonesImg.url} alt="" className='p-4 w-[400px]' />
            </div>
        </div>
    </>)
}