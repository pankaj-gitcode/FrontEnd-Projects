import React, { useState } from 'react'
import Spline from '@splinetool/react-spline';
import { profileImg } from '../assets/asset';
import { useRecoilValue } from 'recoil';
// import { envAtom } from '../atom/Atom';
import FormData from 'form-data'

export const ContactForm = () => {
  const [zIndex, setZIndex] = useState(false);
  // const envVar = useRecoilValue(envAtom);
  // const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  // const [message, setMessage] = useState('');


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c55a40fa-5405-4922-8f12-754bd79bf058" );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      event.target.reset();
    }
  };


  return (<>
  <div className='h-screen relative '>

      <div className='h-screen'>


        {/* ----- BUTTON ----- */}
      <div 
      className= {`rounded-full absolute right-7 bottom-5 `}
      onClick={()=>setZIndex(true)} >
        
        <button
          className='uppercase border-4 rounded-full px-7 py-3
          shadow-[2px_2px_19px_2px_rgba(255,255,255,0.5)] 
          active:scale-105 transition-300 ease-in-out border-[rgb(53,255,238)]
          bg-black text-white'>
        Click Here     
        </button>
      </div>

    <Spline scene="https://prod.spline.design/j-pJlsbLv2dkeMW5/scene.splinecode" />

      </div>


    <section className={`bg-black h-fit mt-5 
      shadow-[2px_2px_19px_2px_rgba(0,0,0,0.5)]
      flex flex-col items-center justify-between
      absolute top-10 left-[5vw] bg-transparent ${zIndex? 'z-10':'z-[-1]'}`}>

      {/* ---------------------- FORM ------------------------------------ */}
      <form onSubmit={onSubmit} className=' rounded-2xl
       shadow-[2px_2px_1px_3px_rgba(53,255,238,0.3)] p-2 font-[Font7]
        text-[#9BFFF7] w-[50vw] h-[60vh] text-[3vh] py-10
        flex flex-col items-start justify-center pl-8'>

            {/* -------------- NAME -------------- */}
         <div className='flex flex-col items-start justify-center pb-3'>
          <label >Full Name</label>

          <input type="text"  name='name' onChange={e=>setName(e.target.name)} placeholder='Enter your name'  
          className='text-black font-[Font2]  outline-none 
          rounded-[5px] bg-[#9BFFF7]  py-3 w-[40vw] text-[3vw] md:text-[2vw] 
          shadow-[inset_2px_2px_9px_2px_rgba(0,0,0,0.5)] pl-2 ' required/>
         </div>

            {/* -------------- EMAIL -------------- */}
         <div className='flex flex-col items-start justify-center pb-3'>
          <label >Email Address</label>

          <input type="email" name='email' onChange={e=>setName(e.target.name)}  
          className='text-black font-[Font2] text-[3vw] md:text-[2vw] outline-none 
          rounded-[5px] bg-[#9BFFF7]  py-3 w-[40vw]
          shadow-[inset_2px_2px_9px_2px_rgba(0,0,0,0.5)] pl-2 '
           placeholder='Enter your email' required/>
         </div>
              {/* -------------- TEXTAREA -------------- */}
         <div className='flex flex-col items-start justify-center pb-3'>
          <label >Your Message</label>

          <textarea   name='message' onChange={e=>setName(e.target.name)}
          className='text-black font-[Font2] text-[3vw] md:text-[2vw] font-bold outline-none 
          rounded-[5px] bg-[#9BFFF7]  py-1 w-[40vw] h-[10vh]
          shadow-[inset_2px_2px_9px_2px_rgba(0,0,0,0.5)] pl-2 '
           id="" placeholder='Type your message...' required></textarea>
         </div>
              {/* -------------- SUBMIT-BUTTON -------------- */}
         <button type='submit'
         className='bg-black border-4 rounded-3xl px-5 py-2 border-[#9BFFF7]
          shadow-[2px_2px_19px_2px_rgba(53,255,238,0.5)] text-lg mb-10
          active:scale-105 duration-300 ease-in-out'
         >Send Message</button>

      </form>

        <div className='absolute top-2 right-6 cursor-pointer' onClick={()=>setZIndex(false)}>
          <h1 className=' rounded-full '>
            <img src={profileImg.cross_icon} alt="" className='h-4 bg-[#9BFFF7] rounded-full shadow-[2px_2px_2px_2px_rgba(53,255,238,0.5)]
            active:scale-105 duration-300'/>
          </h1>
        </div>


    </section>
  </div>

  </>
    
  )
}
