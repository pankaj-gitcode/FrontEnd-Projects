import React, { lazy, Suspense } from 'react'

const Video = lazy(()=>import('./components/Video'));

export default function App(){
  return(<>
    <Suspense fallback={<p>Loading...</p>}>
      <Video />
    </Suspense>
  </>)
}