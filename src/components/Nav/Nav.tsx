import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Nav.css';
//aos (animate on scroll library)
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Nav(){
  const navigate = useNavigate();
  useEffect(()=>{
    Aos.init({duration: 2500});
  },[]);

  return(
    <nav data-aos='fade-in' className='nav'>
      <h3 onClick={()=>{navigate('/')}}>Zelie Capolupo</h3>
      <ol>
        <li>
          <button onClick={()=>{navigate('/')}}>Home</button>
        </li>
        <li>
          <button onClick={()=>{navigate('/blog')}}>Blog</button>
        </li>
        <li>
          <button onClick={()=>{navigate('/contact')}}>Contact</button>
        </li>
      </ol>
    </nav>
  )
}