import React from 'react'
import { useRecoilValue } from 'recoil'
import { twoPhonesAtom } from './Atom'

export default function Delivery(){
    const twoPhonesImg = useRecoilValue(twoPhonesAtom); 

    return(<>
        <div className='w-full py-16 px-4'>

                <h1 className='text-center font-bold text-orange-500 text-xl sm:text-2xl lg:text-3xl'>Quick Delivery App</h1>
                        {/* --------------- GRID-2COLS ------------ */}
            <div className='w-[90%] mx-auto grid md:grid-cols-2'>
                <img src={twoPhonesImg.url} alt="" className='w-[550px] mx-auto'/>
                                {/* ---------- DETAILS:FLEX ----------- */}
                <div className='flex flex-col justify-center items-start'>
                    <p className='text-[#00df9a] font-bold'>Get The App</p>
                    <h1 className='text-2xl lg:text-3xl font-bold'>Limitless Convenience On-Demand</h1>
                    <p className='font-[700] text-slate-600 text-justify tracking-tighter pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fuga perspiciatis ullam laudantium, molestias error iusto, inventore unde pariatur cumque delectus vel modi dolor temporibus corrupti. Totam ducimus voluptate eos, mollitia aliquam labore dolores obcaecati ipsum cupiditate reiciendis rerum quod voluptates sint dignissimos placeat accusantium dolore qui cumque? Vero, animi.
                    Distinctio fuga perspiciatis ullam laudantium, molestias error iusto, inventore unde pariatur cumque delectus vel modi dolor temporibus corrupti. Totam ducimus voluptate eos, mollitia aliquam labore dolores obcaecati ipsum cupiditate reiciendis rerum 
                    </p>
                    <button className='bg-[#000] text-green-500 rounded-md'>Get Started</button>
                </div>
            </div>

        </div>
    </>)
}