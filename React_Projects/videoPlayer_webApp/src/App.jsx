import React, { lazy, Suspense } from 'react'
import { RecoilRoot } from 'recoil';

const Video = lazy(()=>import('./components/Video'));

export default function App(){
  return(<>
    <Suspense fallback={<p>Loading...</p>}>
      <RecoilRoot>
        <Video />
      </RecoilRoot>
    </Suspense>
  </>)
}