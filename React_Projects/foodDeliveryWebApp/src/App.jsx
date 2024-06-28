import React, { Suspense, lazy } from 'react'
import { RecoilRoot } from 'recoil';

const TopNav = lazy(()=>import('./components/TopNav'));
const Features = lazy(()=>import('./components/Features'));
const Featured = lazy(()=>import('./components/Featured'));
const Delivery = lazy(()=>import('./components/Delivery'))

export default function App(){

  return(
    <>
      <div>
      <Suspense fallback={<p>Loading...</p>}>
      <RecoilRoot>

        <TopNav />
        {/* <Features /> */}
        <Featured />
        <Delivery/>

      </RecoilRoot>

      </Suspense>
      </div>
    </>
  )
}