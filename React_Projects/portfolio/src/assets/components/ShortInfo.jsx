import React from 'react'

export default function ShortInfo(){
    return(<>
        <div className=' absolute z-20 flex flex-col items-center justify-center
        lg:top-64 top-32 sm:top-36 left-12 sm:left-20 lg:text-5xl text-2xl sm:text-5xl
        '>
            <h1 className='font-[font4] lg:text-[5vw]'>
                I AM
                <span className='text-black font-[font3] text-shdow'> FRONTEND™</span>
                <span className='font-[font4] lg:text-7xl lg:text-[7vw]'><br/>DEVELOPER</span>
                <span className=''><br/>TO HIRE</span>
            </h1>
            {/* <h1 className='bg-green-500 lg:text-7xl text-start font-[font4]'>DEVELOPER</h1>
            <h1 className='bg-yellow-500'>TO HIRE</h1> */}
        </div>
    </>)
}

