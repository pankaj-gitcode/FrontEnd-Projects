import React, { Suspense, lazy } from 'react'
import { RecoilRoot } from 'recoil';

// const Features = lazy(()=>import('./components/Features'));
const TopNav = lazy(()=>import('./components/TopNav'));
const Featured = lazy(()=>import('./components/Featured'));
const Delivery = lazy(()=>import('./components/Delivery'));
const TopPicks = lazy(()=>import('./components/TopPicks'));

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
        <TopPicks/>
      </RecoilRoot>

      </Suspense>
      </div>
    </>
  )
}