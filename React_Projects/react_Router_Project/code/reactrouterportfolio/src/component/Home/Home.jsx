import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDownload} from '@fortawesome/free-solid-svg-icons'

export default function Home(){
    return(
        <>

            <div id="home1">
                <div id="home-img-1">
                    <img src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="img1" id="img1"/>
                    {/* <img src="/code/reactrouterportfolio/src/component/Home/Home.png" alt="" /> */}
                </div>

                <div id="home-desc">
                    <h1>Lorem ipsum dolor</h1>  
                </div>
                {/* -----------2nd Image div----------- */}
                <div id="download-div">

                    <div id="home-img-2">
                        <img src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="imag2"/>
                    </div>
                    <div id="details">
                        <h1>Download Now</h1>
                        <h2>Lorem ipsum</h2>
                        
                        <span><button><FontAwesomeIcon icon={faDownload} /> Download CV</button></span>

                    </div>
                </div>

            </div>
        </>
    )
}