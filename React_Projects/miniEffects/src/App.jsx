import React, { lazy, Suspense } from 'react'
import './index.css'
// import {CustomMouse} from './components/CustomMouse'
// import CustomCursor from './components/CustomCursor'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

const BoxAnim = lazy(()=>import('./components/BoxAnim'));
const CustomCursor = lazy(()=>import('./components/CustomCursor'));
const TextHoveringImg = lazy(()=>import('./components/TextHoveringImg'));
const TextImgHovering2 = lazy(()=>import('./components/TextImgHovering2'));
const Cursor = lazy(()=>import('./components/Cursor'));
const TextAniFromDownToTop = lazy(()=>import('./components/TextAniFromDownToTop'));

export default function App() {
  
  return (
    <div>
      
      {/* <CustomCursor /> */}

      <Suspense fallback={<p>Loading...</p>}>
        <BrowserRouter>
          <RouterBtn/>
          <Routes>
            <Route path='/customCursor' element={<CustomCursor/>}/>
            <Route path='/animBox' element={<BoxAnim/>}/>
            <Route path='/txthoveringImgEffect' element={<TextHoveringImg/>} />
            <Route path='/txtimghovering2' element={<TextImgHovering2/>} />
            <Route path='/cursor' element={<Cursor/>} />
            <Route path='/txtAnimDownTop' element={<TextAniFromDownToTop/>} />
          </Routes>
        </BrowserRouter>
      </Suspense>

    </div>
  )
}
// ---- All in one by single click -----
const RouterBtn = ()=>{
  const navigate = useNavigate();
  const animBoxNav = useNavigate();
  const customCursor = useNavigate();
  const cursorNav = useNavigate();
  return(
    <div>
      <div className='pl-20 flex flex-col items-center '>

          {/* --------- CUSTOM CURSOR ---------- */}
        <button className='cursor-pointer border mb-5 p-2 bg-gray-500 bg-gradient-to-t from-gray-600 to-gray-300
          active:scale-105'
          onClick={()=>customCursor('/customCursor')}>Click to navigate &quot;customCursor&quot;

        </button>

          {/* --------- ANIMATE BOX ---------- */}
        <button className='cursor-pointer border mb-5 p-2 bg-gray-500 bg-gradient-to-t from-gray-600 to-gray-300
          active:scale-105'
          onClick={()=>animBoxNav('/animBox')}>Click to navigate &quot;AnimBox&quot;
        </button>

          {/* --------- HOVER ON TEXT APPEARS IMAGE-1 ---------- */}
        <button className='cursor-pointer border mb-5 p-2 bg-gray-500 bg-gradient-to-t from-gray-600 to-gray-300
          active:scale-105'
          onClick={()=>animBoxNav('/txthoveringImgEffect')}>Click to navigate &quot;TextImgHoveringEffect&quot;
        </button>

          {/* --------- HOVER ON TEXT APPEARS IMAGE-2 ---------- */}
        <button className='cursor-pointer border mb-5 p-2 bg-gray-500 bg-gradient-to-t from-gray-600 to-gray-300
          active:scale-105'
          onClick={()=>animBoxNav('/txtimghovering2')}>Click to navigate &quot;TextImgHovering2&quot;
        </button>

          {/* --------- CURSOR ---------- */}
        <button className='cursor-pointer border mb-5 p-2 bg-gray-500 bg-gradient-to-t from-gray-600 to-gray-300
          active:scale-105'
          onClick={()=>cursorNav('/cursor')}>Click to navigate &quot;custom-cursor&quot;
        </button>

          {/* --------- ANIMATE TEXT FROM DOWN TO TOP ---------- */}
        <button className='cursor-pointer border mb-5 p-2 bg-gray-500 bg-gradient-to-t from-gray-600 to-gray-300
          active:scale-105'
          onClick={()=>cursorNav('/txtAnimDownTop')}>Click to navigate &quot;TxtAnimationDownToTop&quot;
        </button>
      </div>
    </div>
  )
}
