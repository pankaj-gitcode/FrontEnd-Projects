import React, { useEffect, useState } from 'react'

// import FoodAPI from './FoodAPI'
import { useRecoilValue } from 'recoil'
import { imagesAtom } from './Atom'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

export default function Features(){
    const images = useRecoilValue(imagesAtom);
    const [imgIndex, setImgIndex] = useState(0)

        // ---------- IMAGE BANNER ----------------
   //side effect: fetch the images
   useEffect(()=>{
    //setup initial image
    const initialImg = ()=>{
        let img = Math.floor(Math.random() * images.length);
        setImgIndex(img)
    }
    initialImg();
    //set the image interval
    const interval = setInterval(initialImg, 2000);
    return ()=>clearInterval(interval);
   }, [images])

    return(
        <>
            <div className='w-full h-[50vh] relative flex items-center justify-center'>
                <div className=' w-[98vw] h-[60vh] rounded-xl overflow-hiddeen duration-300 '>
                    {/* <FoodAPI/> */}

                    <img src={images[imgIndex]?.url} alt="" className='object-cover h-full w-full rounded-lg duration-300 shadow-[2px_2px_8px_4px_rgba(0,0,0,0.8)]'/>
                                       
                    <div className='flex items-center justify-center gap-2 text-white'>

                                {/* ---------------- LEFT-RIGHT ARROW ------------- */}
                        <div className='top-[50%] rounded-full bg-orange-600  cursor-pointer'
                            onClick={()=>{
                            console.log(`Left: ${imgIndex, imgIndex-1}`);
                            <img src={images[imgIndex]?.url} alt=''/>
                        }}
                        >
                            <BsChevronCompactLeft size={20} className='cursor-pointer' />

                        </div>
                        <div className='bg-orange-600 rounded-full top-[50%] right-0 mr-4 cursor-pointer'>
                            <BsChevronCompactRight size={20}/>
                        </div>

                    </div>

                    
                    
                    
                </div>
            </div>
        </>
    )
}


