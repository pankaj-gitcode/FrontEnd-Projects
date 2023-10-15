import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import News from './component/News'

function App() {
  const [color, setColor] = useState("hsl(234, 29%, 20%)")
  const [mail, setMail] = useState('')
  const [message, setMessage] = useState('');
  const img = "./component/Desktop_img.JPG";

  //create function to check the mail validity and store in local session
  function submitMail(){
    const check = /^[^\s@]+@[^\s@]+\.[^\s@]+/

    check.test(mail)? setMessage(`${mail} is valid!!`) : setMessage(`${mail} is In-Valid!!`)
    setTimeout(()=>{
      document.querySelector("#message").style.display="none"
    },3000);
    document.querySelector("#message").style.display="block"
  }

  return (
    <>
      <News 
      color={color} 
      image= {img} 
      email={mail}
      mailcheck={(e)=>setMail(
        e.target.value)}
      submit={submitMail}
      message={message}
      />
    </>
  )
}

export default App
