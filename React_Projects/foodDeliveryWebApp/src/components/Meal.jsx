import React from 'react'
import { useRecoilValue } from 'recoil'
import { mealDataAtom } from './Atom'

export default function Meal(){
    const menuMeal = useRecoilValue(mealDataAtom);
    return(<>
        <div >
            <h1 className='text-center text-orange-500 font-bold text-xl lg:text-2xl py-2'>Menu</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1520px] w-full p-6'>
                {
                    menuMeal.map((item)=>{
                        return(<>
                            <div className='hover:scale-105 duration-300 ease-in-out relative'>
                                    <img src={item.image} alt={item.name} 
                                    className='w-full h-[200px] object-cover rounded-xl' />

                                <div className='flex items-center justify-between px-2'>
                                    <p className='font-bold'>{item.name}</p>
                                    <p className='bg-orange-700 rounded-full border-white border-4 px-2 py-3 absolute right-2 bottom-6 text-[#fff] font-bold'>{item.price}</p>
                                </div>
                                <div>
                                    <p className='text-indigo-500 text-sm font-semibold px-2 cursor-pointer'>View More 🚀</p>
                                </div>
                            </div>
                        </>)
                       
                    })
                }
            </div>
        </div>
    </>)
}