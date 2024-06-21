import React from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai'

export default function TopNav(){
    return(<>
        <div className='flex justify-between items-center w-full bg-green-200 mx-auto px-4'>
            <div className='flex items-center justify-between py-4'>
                <div className='pr-2'>
                    <AiOutlineMenu size={25}/>
                </div>
                <h1 className='px-2 text-2xl sm:text-3xl lg:text-4xl'>Apna
                    <span>Rasoi</span>
                </h1>

                <div className='hidden lg:flex justify-center items-center w-fit bg-gray-300 rounded-full text-[14px] p-1'>
                    <p className='bg-orange-700 rounded-full p-2 font-semibold text-[#fff]'>Free</p>
                    <p className='p-2 font-semibold'>Delivery</p>
                </div>
            </div>

        </div>
    </>)
}