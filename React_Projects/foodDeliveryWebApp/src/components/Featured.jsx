import React, { useState } from  'react'
import { useRecoilValue } from 'recoil'
import { imagesAtom } from './Atom'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export default function Featured(){
    const images = useRecoilValue(imagesAtom);
    const [imgIndex, setImgIndex] = useState(0)


    const prevImgHandler = ()=>{
        
        setImgIndex(imgIndex=>imgIndex === 0? images.length-1: imgIndex-1)
        console.log(imgIndex)
    }
    const nextImgHandler = ()=>{
        setImgIndex(imgIndex=>imgIndex === images.length-1? 0: imgIndex+1)
    }

    return(
        <>
            <div className='max-w-[1751px] w-full h-[400px] p-4 relative group '>
                        {/* -------- IMAGE CANVAS DIV ---------- */}
                <div className='w-full h-full bg-green-200 rounded-2xl bg-cover bg-center duration-1000'
                 style={{backgroundImage: `url(${images[imgIndex]?.url})`}}>
                </div>
                            {/* -------- LEFT ARROW ------------ */}
                <div className='bg-orange-600 absolute top-[50%] rounded-full cursor-pointer left-6 text-white text-2xl -translate-0 translate-[50%] p-2 hidden group-hover:block' onClick={prevImgHandler}>
                    <BsChevronCompactLeft size={20}/>
                </div>
                                {/* -------- RIGHT ARROW ----------- */}
                <div className='bg-orange-600 absolute top-[50%] rounded-full cursor-pointer right-6 text-white p-2 translate-[0] hidden group-hover:block' onClick={nextImgHandler}>
                    <BsChevronCompactRight size={20}/>
                </div>

                                {/* ----------------- 3 DOTS @ BOTTOM OF IMG CANVAS ------------------ */}
                {/* <div className='flex items-center justify-center cursor-pointer'>
                    <RxDotFilled size={25} className='active:animate-ping'/>
                    <RxDotFilled size={25} className='active:animate-ping'/>
                    <RxDotFilled size={25} className='active:animate-ping'/>
                </div> */}
                
                <div className='flex justify-center items-center cursor-pointer '>
                    { images.map((e)=>
                    <
                    RxDotFilled key={1} 
                    size={25} 
                    className='active:animate-ping' onClick={()=>setImgIndex(images.indexOf(e))}
                    />
                    ) }

                </div>
            </div>
        </>
    )
}