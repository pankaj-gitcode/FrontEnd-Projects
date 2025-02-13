import React from 'react'
import Spline from '@splinetool/react-spline';

export default function Robot(){
    return(<>
        <h1>This is SPLIME ROBOT...</h1>
        <div className='relative'>

        <Spline scene="https://prod.spline.design/6ergQDvH14-iwc63/scene.splinecode" />
        <h1 className='absolute top-[50%] left-[30%]  text-orange-500'>Hi This is text robot,you're under survilliance </h1>
        <div className=' bg-[#E3E3E3] h-[20vw] absolute w-full top-[60%] text-black font-semibold pt-10'>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusantium harum excepturi similique tempora, cupiditate voluptatum at asperiores iusto, ipsam totam? Commodi, voluptatum!</h1>
        </div>
        </div>



    </>)
}








