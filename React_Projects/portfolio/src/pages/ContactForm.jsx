import React from 'react'

export const ContactForm = () => {
  return (<>
  <div className='h-screen '>
    <section className='bg-black h-screen mt-5 
      shadow-[2px_2px_19px_2px_rgba(0,0,0,0.5)]
      flex flex-col items-center justify-center'>
      <form className='text-[5vh]'>
         <div>
          <label >Full Name</label>
          <input type="text" placeholder='Enter your name' required/>
         </div>
         <div>
          <label >Email Address</label>
          <input type="email" placeholder='Enter your email' />
         </div>
         <div>
          <label >Your Message</label>
          <textarea name="" id="" required></textarea>
         </div>

         <button type='submit'>Send Message</button>

      </form>
    </section>
  </div>

  </>
    
  )
}
