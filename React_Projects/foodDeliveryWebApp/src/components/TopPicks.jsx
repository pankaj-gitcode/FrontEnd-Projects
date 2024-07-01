import React from 'react'
import { useRecoilValue } from 'recoil'
import { categoriesAtom, mealDataAtom, topPicksAtom } from './Atom'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

export default function TopPicks(){
    const topPicks = useRecoilValue(topPicksAtom);
    const mealData = useRecoilValue(mealDataAtom);
    const categories = useRecoilValue(categoriesAtom);

    return(<>
            <div>
            <h1 className='text-center text-orange-500 font-bold text-xl lg:text-2xl py-6'>Top Picks</h1>
            <div className='flex items-center max-w-[1520px] w-full mx-auto p-4 rounded-3xl'>
        <Splide options={{perPage:4, gap:'0.2rem'}}>
                {
                    topPicks.map((item)=>{
                        return(<>
                        <SplideSlide>

                        
                                {/* parent container */}
                            <div className='relative rounded-3xl'>
                                    {/* child container: details */}
                                <div className='absolute rounded-3xl bg-black/50 w-full h-full text-[#fff] mx-auto p-2'>
                                    <h5>{item.title}</h5>
                                    <p>{item.price}</p>
                                    <button className='absolute bottom-6 border-1 border-slate-400 px-2 py-1'>Add To Cart</button>
                                </div>
                                        {/* child item: img */}
                                        <img src={item.img} alt="" 
                                        className=' object-cover h-[200px] w-full rounded-3xl transition-300 hover:scale-150 ease-in-out cursor-pointer'

                                        />
                            </div>
                        </SplideSlide>    
        
                        </>)
                    })
                }
                </Splide>
            </div>
            </div>
            
    </>)
}