import React, { useState } from  'react'
import { useRecoilValue } from 'recoil'
import { imagesAtom } from './Atom'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

export default function Featured(){
    const images = useRecoilValue(imagesAtom);
    const [imgIndex, setImgIndex] = useState(2)


    const prevHandler = ()=>{
        
        setImgIndex( imgIndex=> imgIndex<0 ? setImgIndex(2): imgIndex-1 )
        
       //2, 1, 0

            
        
        console.log(imgIndex)
    }

    return(
        <>
            <div className='max-w-[1751px] w-full h-[400px] p-4 relative group '>
                        {/* -------- IMAGE CANVAS DIV ---------- */}
                <div className='w-full h-full bg-green-200 rounded-2xl bg-cover bg-center duration-500'
                 style={{backgroundImage: `url(${images[imgIndex]?.url})`}}>
                </div>
                            {/* -------- LEFT ARROW ------------ */}
                <div className='bg-orange-600 absolute top-[50%] rounded-full cursor-pointer left-6 text-white text-2xl -translate-0 translate-[50%] p-2 ' onClick={prevHandler}>
                    <BsChevronCompactLeft size={20}/>
                </div>
                                {/* -------- RIGHT ARROW ----------- */}
                <div className='bg-orange-600 absolute top-[50%] rounded-full cursor-pointer right-6 text-white p-2 translate-[0]'>
                    <BsChevronCompactRight size={20}/>
                </div>
            </div>
        </>
    )
}