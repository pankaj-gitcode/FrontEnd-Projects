import React from 'react'
import { ImagePage } from './pages/ImagePage'
import { Header } from './assets/components/Header'
import Pg2Quotes from './assets/components/page2/Pg2Quotes'

export default function App(){
  return(<>
    <div className='font-[font6]'>
      <Header/>
      <ImagePage/>
    </div>
      <Pg2Quotes/>
  </>)
}