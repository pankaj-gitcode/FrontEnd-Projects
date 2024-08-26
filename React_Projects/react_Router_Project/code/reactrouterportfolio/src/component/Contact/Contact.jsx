import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Contact(){
    return(
        <>
          <div id="contact">
          {/* -------contact-details section-------   */}
            <div id="contact-details">
                <h1 id="tag">Get in touch</h1>
                <p id="tag-desc">Fill the form to start a conversation</p>

                <p className="contact-info">
                    <FontAwesomeIcon icon={faLocationDot} id="icons"/>
                     #67, BTM Layout, Bangalore-6
                </p>
                <p className="contact-info">
                <FontAwesomeIcon icon={faPhone} id="icons"/>
                    (+91) 1976452972
                </p>
                <p className="contact-info">
                <FontAwesomeIcon icon={faEnvelope} id="icons"/>
                     info@dev.com
                </p>

            </div>

          {/* -----------form section------- */}
          <div id="form">
            <form action="" id="form-details">
                <input type="text" placeholder=" Full Name" id="text" required />
                <input type="email" placeholder=" Email" id="email" required />
                <input type="number" placeholder=" Contact Number" required />
                <span><button> Submit </button></span>

            </form>
          </div>

          </div>

        </>
    )
}