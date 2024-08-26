import React from 'react'

import {Link, NavLink} from 'react-router-dom'

export default function Header(){
    return(
        <>
            <div id="header">
                <div id="logo">
                <h1 id="logo-name">Pankaj <span id="title">Aditya</span></h1>
                </div>

                <div id="navlink">
                    <ul id="navlink-ul">
                        <li>
                            <NavLink to="/" className="navlink-a">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="navlink-a">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="navlink-a">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/github" className="navlink-a">Github</NavLink>
                        </li>
                    </ul>
                </div>
               {/* -------- login & getstarted -------- */}
               <div id="login">
                 <Link to="#" className="login-get" id="login-link">Log in</Link>
                 <Link to="#" className="login-get" id="getstarted-link"><span id="getstarted-span">Get started</span></Link>
               </div>

            </div>
        </>
    )
}