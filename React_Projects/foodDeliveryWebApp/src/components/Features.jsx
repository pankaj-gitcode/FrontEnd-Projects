import React, { useEffect, useState } from 'react'

import FoodAPI from './FoodAPI'
import { useRecoilValue } from 'recoil'
import { imagesAtom } from './Atom'

export default function Features(){
    const images = useRecoilValue(imagesAtom);
    const [imgIndex, setImgIndex] = useState(0)

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
            <div className='w-full h-[50vh] relative z-[-10] flex items-center justify-center '>
                <div className=' w-[98vw] h-[60vh] rounded-xl overflow-hiddeen duration-300 bg-green-200'>
                    {/* <FoodAPI/> */}

                    <img src={images[imgIndex].url} alt="" className='object-cover h-full w-full rounded-lg duration-300 delay-150 ease-in-out'/>
                    
                    

                    
                    
                </div>
            </div>
        </>
    )
}


