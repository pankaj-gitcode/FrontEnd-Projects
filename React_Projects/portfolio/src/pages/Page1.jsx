import React from 'react'
// import BackgroundImage from './BackgroundImage'
import { ImagePage } from './ImagePage'
import { Header } from '../assets/components/Header'

export const Page1 = () => {
  return ( <div>
    <div className=' bg-white py-5 px-5 h-screen flex flex-col items-center justify-center '>
        <Header />
        <ImagePage />
    </div>
  </div>
  )
}
