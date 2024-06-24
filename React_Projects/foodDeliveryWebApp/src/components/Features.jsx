
import React from 'react'

import FoodAPI from './FoodAPI'

export default function Features(){
    return(
        <>
            <div className='w-full h-[50vh] relative z-[-10] flex items-center justify-center '>
                <div className=' w-[98vw] h-[60vh] rounded-xl overflow-hiddeen duration-300'>
                    <FoodAPI/>
                    
                </div>
            </div>
        </>
    )
}

