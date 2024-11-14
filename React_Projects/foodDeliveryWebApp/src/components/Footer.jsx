import React, { useEffect } from 'react'
import { FaLinkedin, FaFacebookSquare, FaInstagram, FaTwitterSquare, FaGithubSquare, FaLinkedinIn, FaInstagramSquare } from 'react-icons/fa';

export default function Footer(){

        // -------- Adding Padding to <li> elements --------
    useEffect(()=>{
        const listElem = document.querySelector('#ulli');
        console.log('LIST: ',listElem)
        
        Array.from(listElem.children).map(e=>Array.from(e.children).map(e=>e.setAttribute('class', 'py-1')))
           
    }, [])

    return(<>
        <div>
            <div className='max-w-[1520px] bg-[#24262b] mx-auto text-[#fff] grid md:grid-cols-2 gap-6 p-5 '>
                    {/* ------------------ SOCIAL HANDLES ------------- */}
                <div className='w-[90%]'>
                    <h1 className='text-orange-600 font-bold text-xl lg:text-3xl '>ApnaRasoi</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eveniet corrupti recusandae similique, molestiae voluptatem omnis sapiente! Ut, porro tempora!</p>
                    {/* <div className='h-5 w-5 rounded-full  bg-yellow-500 bg-gradient-to-l from-yellow-500 to-red-500 animate-spin duration-1000'></div> */}
                    <div className='flex items-center gap-6 py-6 cursor-pointer'>
                        <FaGithubSquare  size={25} />
                        <FaLinkedin  size={25}/>
                        <FaTwitterSquare  size={25}/>
                        <FaInstagramSquare  size={25}/>
                        <FaFacebookSquare size={25}/>
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