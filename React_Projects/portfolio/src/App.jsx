import React from 'react'
import BackgroundImage from './pages/BackgroundImage'
import { Page1 } from './pages/Page1'
import { ImagePage } from './pages/ImagePage'
import { Header } from './assets/components/Header'

export default function App(){
  return(<>
    <div className='font-[font6]'>
      <Header/>
      <ImagePage/>
    </div>
  </>)
}