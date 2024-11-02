import React, { lazy, Suspense } from 'react'
import { RecoilRoot } from 'recoil';

const Video = lazy(()=>import('./components/Video'));

export default function App(){
  return(<>
    <Suspense fallback={<h1>Loading...</h1>}>
      <RecoilRoot>
        <Video />
      </RecoilRoot>
    </Suspense>
  </>)
}
