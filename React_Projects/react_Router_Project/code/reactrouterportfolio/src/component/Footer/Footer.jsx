import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faFacebookF, faDiscord, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <>
           <div id="footer">
                {/* ----ContainerFooter-Top----- */}
                <div id="footer-container-top">
                    {/* -------Logo Section------- */}
                    <div id="logo">
                        <h1 id="logo-name">Pankaj <span id="title">Aditya</span></h1>
                    </div>
                    {/* ----resource section---- */}
                    <div id="resource" className="options">
                            <h3 id="resources-heading">Resources</h3>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* ------FOLLOW US Section------ */}
                    <div id="follow" className="options">
                        <h3 id="follow-heading">Follow Us</h3>
                        <ul>
                            <li>
                                <NavLink to="/github">Github</NavLink>
                            </li>
                            <li>
                                <NavLink to="/discrod">Discord</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* --------LEGAL Section-------- */}
                    <div id="legal" className="options">
                        <h3 id="legal-heading">Legal</h3>
                        <ul>
                            <li>
                                <NavLink to="/privacy">Privacy Policy</NavLink>
                            </li>
                            <li>
                                <NavLink to="/terms">Terms & Conditions</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
                {/* ------ContainerFooter-Bottom------- */}
                <hr id="hr"/>
                <div id="footer-container-bottom">

                    <div id="copyright">
                        <p id="copyright-para">&copy;2023PankajAditya.All Rights Reserved.</p>
                    </div>
                    <div id="handles">

                        <Link to="https://linkedin.com" className="handles-link" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="icon" /></Link>
                        <Link to="https://facebook.com" className="handles-link" target="_blank"><FontAwesomeIcon icon={faFacebookF} className="icon" /></Link>
                        <Link to="https://discord.com" className="handles-link" target="_blank"><FontAwesomeIcon icon={faDiscord} className="icon" /></Link>
                        <Link to="https://twitter.com" className="handles-link" target="_blank"><FontAwesomeIcon icon={faTwitter} className="icon" /></Link>
                        <Link to="https://github.com" className="handles-link" target="_blank"><FontAwesomeIcon icon={faGithub} className="icon" /></Link>
                        
                        
                        
                        
                    
                    </div>
                </div>
           </div> 
        </>
    )
}