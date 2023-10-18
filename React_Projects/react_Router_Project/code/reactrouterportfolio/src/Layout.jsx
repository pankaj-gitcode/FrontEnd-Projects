import React from 'react'
import { Outlet } from 'react-router-dom'

// import Index from './component/Index/Index'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'

export default function Layout(){
    return(
        <>
           <Header />
           <Outlet />
           <Footer />

        </>
    )
}