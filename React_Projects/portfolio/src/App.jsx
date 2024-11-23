import React from 'react'
import { ImagePage } from './pages/ImagePage'
import { Header } from './assets/components/Header'
import ShortInfo from './assets/components/ShortInfo'
import Pg2Quotes from './assets/components/page2/Pg2Quotes'

export default function App(){
  return(<>
    <div className='font-[font6]'>
      <Header/>
      <ImagePage/>
      <Pg2Quotes/>
    </div>
  </>)
}