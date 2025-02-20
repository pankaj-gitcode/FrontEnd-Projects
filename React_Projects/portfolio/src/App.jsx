import React, { lazy } from 'react'
import { ImagePage } from './pages/ImagePage'
import { Header } from './components/Header'
import Pg2Quotes from './components/page2/Pg2Quotes'
// import Pg3cards from './components/page3/Pg3cards'
import { Page3Projects } from './pages/Page3Projects'
import { Page4Video } from './pages/Page4Video'
import { Route, Routes } from 'react-router-dom'
import { ContactForm } from './pages/ContactForm'




// const Header = lazy(()=>import('./components/Header'));
// const ImagePage = lazy(()=>import('./pages/ImagePage.jsx'));
// const Pg2Quotes = lazy(()=>import('./components/page2/Pg2Quotes.jsx'));
// const Page3Projects = lazy(()=>import('./pages/Page3Projects.jsx'));

// const Page4TextVideo = lazy(()=>import('./pages/Page4TextVideo'))

// const ContactForm = lazy(()=>import('./pages/ContactForm'))

export default function App(){
  return(<>
    <div className='font-[font6]'>
      <Header/>
      <ImagePage/>
    </div>
      <Pg2Quotes/>
      <Page3Projects/>
      
       {/* rendered in Page3Projets component */}
      {/* <Page4Video/> */}
      {/* <Pg3cards/> */}
      <Routes>
      {/* <Route path='/' element={<header/>}/> */}
      {/* <Route path='/page3' element={<Page3Projects/>}/> */}
        {/* <Route path='/connect' element={<ContactForm />}/> */}
      </Routes>
      
  
  </>)
}