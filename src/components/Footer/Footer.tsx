import React, { useEffect } from 'react';
import './Footer.css';

import linkedinIcon from '../../assets/icons/linkedin.svg';
import mailIcon from '../../assets/icons/mail.svg';
import resumeIcon from '../../assets/icons/resume.svg';
//aos (animate on scroll library)
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Footer(){
  useEffect(()=>{
    Aos.init({duration: 2500});
  },[]);

  return(
    <footer data-aos='fade-in' className='footer'>
      <h3>Zelie Capolupo</h3>
      <p className='copyright'>
        © 2023 Zelie Capolupo.
        <br />
        All rights reserved.
      </p>
      <ol>
        <li>
          <a href='https://www.linkedin.com/in/zeliecapolupo'>
            <img src={linkedinIcon} alt='my linkedin' />
          </a>
        </li>
        <li>
          <a>
            <img src={mailIcon} alt='my email' />
          </a>
        </li>
        <li>
          <a>
            <img src={resumeIcon} alt='my resume' />
          </a>
        </li>
      </ol>
    </footer>
  )
}