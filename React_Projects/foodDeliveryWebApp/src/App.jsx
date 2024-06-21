import React, { lazy } from 'react'

const TopNav = lazy(()=>import('./components/TopNav'))

export default function App(){

  return(
    <>
      <div>
        <TopNav />
      </div>
    </>
  )
}