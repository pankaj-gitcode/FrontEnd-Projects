import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill, BsPerson } from 'react-icons/bs'
import { TbTruckReturn} from 'react-icons/tb'
import { FaUserFriends, FaGoogleWallet} from 'react-icons/fa'
import { MdHelp, MdOutlineFavorite} from 'react-icons/md'
import Features from './Features'

export default function TopNav(){
    const [sideNav, setSideNav] = useState(false) 
    console.log(`Val: ${sideNav}`)

    return(<>
       {/* ------------------------------------- NAVBAR DIV ---------------------------------- */}
       <div className='flex items-center justify-between max-w-[1520px] w-full py-4 '>
       
                {/* ------------- MENU | BRAND-Name | TOGGLER --------- */}
            <div className='flex items-center justify-center px-2'>
                <div>
                    <AiOutlineMenu size={25} onClick={()=>setSideNav(!sideNav)} className='cursor-pointer'/>
                </div>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl px-2 lg:text-orange-700 text-[#000] font-medium animate-fire'>Apna 
                    <span className='text-orange-700 lg:text-[#000] font-bold '>
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
                <input type="text" className='bg-transparent focus:outline-none w-full px-2' placeholder='Search your meal'/>
                <AiOutlineSearch size={25} className='cursor-pointer'/>
            </div>

                {/* ---------------------- CART ---------------- */}
            <div className='sm:px-6 px-4 lg:px-2 '>
                <button className='lg:flex items-center justify-center lg:bg-orange-600 rounded-full lg:text-[#fff] lg:border-2 text-sm md:text-[12px] lg:text-[15px] bg-[#fff] text-orange-700 border-none '>
                    <BsFillCartFill size={20}/> <span className='hidden lg:block'>Cart</span>
                </button>
            </div>
            

                {/* --------------------------------- SIDE NAV-BAR ---------------------- */}

                {/* click on humberger: transparent black screen appear*/}
                {
                    sideNav? (
                        <div className='bg-black/60 fixed top-0 left-0 h-screen w-full z-50' onClick={()=>setSideNav(!sideNav)}></div>
                    ) : null
                }

                {/* click on humberger menu: side Nav bar appears with close icon  */}
                <div
                    className={sideNav? 'fixed bg-white/100 top-0 left-0 h-screen w-[300px] z-50 duration-500'
                                    : 'fixed top-0 left-[-100%] z-10 h-screen w-full duration-500'}>
                    <AiOutlineClose size={15} className='absolute right-4 top-4 cursor-pointer' onClick={()=>setSideNav(!sideNav)}/>

                    <h2 className='p-4 font-semibold text-xl'>Apna <span className='text-orange-700 font-bold'>Rasoi</span></h2>
                        {/* ---------- SERVICES | PROFILE ------ */}
                        
                    <nav>
                        <ul className='flex flex-col gap-2 text-gray-900 p-4'>
                            <li className='flex items-center py-2 px-2 gap-2 font-semibold text-xl hover:bg-gray-400 w-fit rounded-[9px] cursor-pointer'>
                            <BsPerson size={20} className='rounded-full bg-black text-[#fff]'/>
                            My Account
                            </li>

                            <li className='flex items-center py-2 px-2 gap-2 font-semibold text-xl hover:bg-gray-400 w-fit rounded-[9px] cursor-pointer'>
                            <TbTruckReturn size={20} className='rounded-full bg-black text-[#fff]'/>
                            Delivery
                            </li>

                            <li className='flex items-center py-2 px-2 gap-2 font-semibold text-xl hover:bg-gray-400 w-fit rounded-[9px] cursor-pointer'>
                            <MdOutlineFavorite size={20} className='rounded-full bg-black text-[#fff]'/>
                            My Favourite
                            </li>

                            <li className='flex items-center py-2 px-2 gap-2 font-semibold text-xl hover:bg-gray-400 w-fit rounded-[9px] cursor-pointer'>
                            <FaGoogleWallet size={20} className='rounded-full bg-black text-[#fff]'/>
                            My Wallet
                            </li>

                            <li className='flex items-center py-2 px-2 gap-2 font-semibold text-xl hover:bg-gray-400 w-fit rounded-[9px] cursor-pointer'>
                            <MdHelp size={20} className='rounded-full bg-black text-[#fff]'/>
                            Help
                            
                            </li>

                        </ul>
                    </nav>
                

                </div>
                
                
       </div>
       



    </>)
}