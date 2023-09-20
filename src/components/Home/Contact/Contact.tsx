import React, { useEffect } from 'react';
import './Contact.css';
//aos (animate on scroll library)
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Contact(){
  useEffect(()=>{
    Aos.init({duration: 2500});
  },[]);

  return(
    <div data-aos='fade-right' className='contact-wrapper'>
      <header className='contact-header'>
        <img />
        <h4>Let's Connect!</h4>
        <p>Do you have any advice for a determined senior who is ready to take on a career in the advertising industry? If so, let's connect!</p>
      </header>
      <form>
        <input className='firstname-input'type='text' placeholder='First name' required/>
        <input className='lastname-input' type='text' placeholder='Last name' required/>
        <input className='email-input' type='email' placeholder='Email' required/>
        <input className='phone-input' type='number' placeholder='Phone' required/>
        <input className='subject-input' type='text' placeholder='Subject' required/>
        <textarea className='message-input' placeholder='Message'required/>
        <button className='contact-submit'>Submit</button>
      </form>
    </div>
  );
}