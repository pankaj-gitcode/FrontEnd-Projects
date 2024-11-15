import React from 'react'

export default function BackgroundImage(){
    return(<div>
        <div className="h-[80vh] w-[50vw] drop-shadow-[10px_2px_90px_rgba(100,200,100,0.8)] ">
            <img src="/public/images/me1.png" alt="" className='shadow-sm shadow-gray-500'/>
        </div>

        <div className="bg-black h-screen flex items-center justify-center">
            <img
                src="/public/images/me1.png"
                alt="User"
                className="shadow-lg shadow-gray-500 rounded-lg"
            />
        </div>
    </div>)
}