import React from 'react'
import { ImagePage } from './pages/ImagePage'
import { Header } from './assets/components/Header'
import ShortInfo from './assets/components/ShortInfo'

export default function App(){
  return(<>
    <div className='font-[font6]'>
      <Header/>
      
      <ImagePage/>
    </div>
  </>)
}