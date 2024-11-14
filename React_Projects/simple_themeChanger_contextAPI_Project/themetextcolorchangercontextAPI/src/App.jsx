import { useState,useEffect } from 'react'

import './App.css'
import { ThemeProvider } from './context/Themecontext'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

function App() {
  const [themeMode, setThemeMode] = useState('dark')

  //defining methods
  const lightTheme = ()=>{setThemeMode('light')}
  const darkTheme = ()=>{setThemeMode('dark')}

  //how these above functions work on web page
  useEffect(()=>{
    document.querySelector('#main').classList.remove('dark', 'light');
    document.querySelector('#main').classList.add(themeMode)
  }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div id="main" className='dark light'>
        <ThemeBtn/>
        <Card/>
      </div>
    </ThemeProvider>
  )
}

export default App
