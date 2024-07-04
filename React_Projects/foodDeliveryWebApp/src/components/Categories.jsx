import React from 'react'
import { useRecoilValue } from 'recoil'
import { categoriesAtom } from './Atom'

export default function Categories(){
    const itemCategory = useRecoilValue(categoriesAtom);
    return(<>
        <div className='max-w-[1520px] w-full mx-auto'>
            <h1 className='text-center text-orange-500 font-bold text-xl lg:text-2xl px-2 py-6'>Trending Categories</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
                {  
                    itemCategory.map((item)=>{
                        return(<>
                            <div key={item.id} className='px-8 py-2 w-full flex items-center hover:scale-105 duration-300 ease-in-out '>
                            <img src={item.image} alt={item.name} 
                                className='w-40 h-10 shadow-xl rounded-xl cursor-pointer'
                            />
                            </div>
                        </>)
                    })
                }
            </div>
        </div>
    </>)
}