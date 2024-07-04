import React from 'react'

export default function NewsLetter(){

    return(<>
        {/* <div className=' max-w-[1520px]  mx-auto my-10 text-[#000] border-t-8 border-[#24262b] border-opacity-45'> */}
        <div className=' max-w-[1520px]  mx-auto mt-9 text-[#fff] bg-[#24262b] rounded-xl '>
            <div className=' grid lg:grid-cols-3 sm:grid-col-1 w-full mx-auto px-6 '>
                <div className='col-span-2 '>
                    <h3 className='font-semibold p-5'>Sign Up to join our newsletter and stay up to date.</h3>
                </div>
                <div className='m-auto py-6'>
                    <div className='flex lg:flex-row sm:flex-col items-center gap-5'>
                        <input type="email" className='w-[250px] outline-none p-2 text-[#fff] bg-slate-600 rounded-lg' placeholder='user@mailid.com'/>
                        <button className='bg-[#00df9a] px-10 py-2 rounded-lg my-4 cursor-pointer active:text-[#00df9a] active:bg-[#fff] active:border-[#000] hover:scale-105'>Notify Me</button>
                    </div>
                    <div className='overflow-hidden font-semibold'>
                        <p>We are concerned about the security of your data, Read{""}
                            <span className='text-[#00df9a]'>Privacy Policy</span> 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}