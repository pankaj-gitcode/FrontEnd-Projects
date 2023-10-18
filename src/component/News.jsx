import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons"
// import { FontAwesome } from '@fortawesome/react-fontawesome'


// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function News({color, image, email, mailcheck, submit, message}){
    return(
        <>
            <div id="main" style={{backgroundColor:color}}>
                <div id="container">
                    <div className="box" id="box-left">
                        <h1 id="heading">Stay Updated!</h1>
                        
                        <p className="para" id="title">Join 60,000+ product managers receiving monthly<br/>updates on:</p>
                        
                        <p className="para sub-para" id="para1"><FontAwesomeIcon icon={faCircleCheck} className="icon" />Product discovery and building what matters</p>
                        <p className="para sub-para" id="para2"><FontAwesomeIcon icon={faCircleCheck} className="icon" />Measuring to ensure updates are a success</p>
                        <p className="para sub-para" id="para3"><FontAwesomeIcon icon={faCircleCheck} className="icon" />And much more!</p>

                        <label htmlFor="mail" id="email">Email address</label>
                        <br/>
                        <input type='email' value={email} placeholder="example@mail.com" id="mail" onChange={mailcheck} required/>
                        <p id="message">{message}</p>
                        <div id="button">
                        <button id="btn" onClick={submit}>Subscribe to monthly newsletter</button>
                        </div>
                    </div>

                    <div className="box" id="box-right">
                        {/* <img src={image} alt="illustration-sign-up-desktop.png" /> */}
                    </div>
                </div>
            </div>    
        </>
    )
}