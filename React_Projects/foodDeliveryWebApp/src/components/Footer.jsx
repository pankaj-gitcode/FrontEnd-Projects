import React, { useEffect } from 'react'

export default function Footer(){

    useEffect(()=>{
        const listElem = document.getElementById('ulli');
        console.log('LIST: ',listElem)
        for(let i=0; i<4; i++){
            const ul = listElem.children[i];
            console.log("THIS IS UL:", ul)
            // Array.from(ul).forEach(e=>Array.from(e).forEach(e=>e.backgrounColor = 'red'))
            for(let j=0; j<4; j++){
                const LI = ul.children[j]
                console.log('LI', LI)
                LI.setAttribute('class', 'py-2')
            }
            
        }
    }, [])

    return(<>
        <div>
            <div className='max-w-[1520px] bg-[#24262b] mx-auto text-[#fff] grid md:grid-cols-2 gap-6 p-5 '>
                    {/* ------------------ SOCIAL HANDLES ------------- */}
                <div className='w-[90%]'>
                    <h1 className='text-orange-600 font-bold text-xl lg:text-3xl'>ApnaRasoi</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eveniet corrupti recusandae similique, molestiae voluptatem omnis sapiente! Ut, porro tempora!</p>
                    <div>
                        <fb/>
                        <fb/>
                        <fb/>
                        <fb/>
                        <fb/>
                    </div>
                </div>


                    {/* ----------------- LOCATIONS ------------- */}
                <div className='flex items-center justify-between' id='ulli'>
                    <ul>Locations
                        <li>India</li>
                        <li>New York</li>
                        <li>Australia</li>
                        <li>London</li>
                    </ul>
                    <ul>Locations
                        <li>Israil</li>
                        <li>Italy</li>
                        <li>France</li>
                        <li>Russia</li>
                    </ul>
                    <ul>Locations
                        <li>Nepal</li>
                        <li>Qatar</li>
                        <li>Singapore</li>
                        <li>Dubai</li>
                    </ul>
                    <ul>Locations
                        <li>Bangladesh</li>
                        <li>Japan</li>
                        <li>Taiwan</li>
                        <li>South Africa</li>
                    </ul>

                </div>
            </div>
        </div>
    </>)
}