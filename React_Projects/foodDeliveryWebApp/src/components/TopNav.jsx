import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'

export default function TopNav(){
    const [sideNav, setSideNav] = useState(false) 
    console.log(`Val: ${sideNav}`)

    return(<>
       {/* ------------------------------------- NAVBAR DIV ---------------------------------- */}
       <div className='flex items-center justify-between w-[100vw] fixed py-4'>
            {/* ------------- MENU | BRAND-Name | TOGGLER --------- */}
            <div className='flex items-center justify-center px-2'>
                <div>
                    <AiOutlineMenu size={25} onClick={()=>setSideNav(!sideNav)} className='cursor-pointer'/>
                </div>
                <h1 className='text-[20px] sm:text-lg lg:text-xl px-2 lg:text-orange-700 text-[#000] font-medium'>Apna
                    <span className='text-orange-700 lg:text-[#000]'>
                        Rasoi
                    </span>
                </h1>
                <div className='hidden lg:flex items-center justify-center bg-gray-300 rounded-full font-semibold py-auto px-auto text-[10px] ml-2'>
                    <p className='bg-orange-600 rounded-full px-3 py-2 text-[#fff]'>Free</p>
                    <p className='px-1 pr-2'>Delivery</p>
                </div>
            </div>

                {/* ----------------- SEARCH | INPUT BOX ------------- */}
            <div className='flex items-center bg-gray-300 rounded-full sm:w-[400px] w-[500px] p-1 '>
                <AiOutlineSearch size={25}/>
                <input type="text" className='bg-transparent focus:outline-none w-full px-2'/>
            </div>

                {/* ---------------------- CART ---------------- */}
            <div className='sm:px-6 px-4 lg:px-2 '>
                <button className='lg:flex items-center justify-center lg:bg-orange-600 rounded-full lg:text-[#fff] lg:border-2 text-sm md:text-[12px] lg:text-[15px] bg-[#fff] text-orange-700 border-none '>
                    <BsFillCartFill size={20}/> <span className='hidden lg:block'>Cart</span>
                </button>
            </div>

                {/* ------------------------ SIDE NAV-BAR ------------- */}
                {
                    sideNav? (
                        <div className='bg-black/60 fixed left-0 top-0 z-10 w-full h-screen'></div>
                    ) : null
                }
       </div>



    </>)
}