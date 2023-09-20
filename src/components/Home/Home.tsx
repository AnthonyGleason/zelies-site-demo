import React, { useEffect } from 'react';
import './Home.css';
import Hero from './Hero/Hero';
import Contact from './Contact/Contact';
import tummyTroublesImg from '../../assets/blogPosts/tummyTroubles.webp'
//aos (animate on scroll library)
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Home() {
  useEffect(()=>{
    Aos.init({duration: 2500});
  },[]);

  return (
    <main data-aos='fade-in' className="home">
      <Hero />
      <section className='about-me'>
        <h2>Hey. I'm Zelie!</h2>
        <p>
          Welcome to my world! I am a senior at the UofMN, eagerly determined to embark on an exciting journey as a Account Manager in the dynamic world of Advertising. You'll find a treasure trove of my thoughts and insights in my blog, covering a wide range of topics, both industry-related and personal passions.
          So, whether it's industry-related or not, I invite you to delve into my my blog and portfolio and get a glimpse into how my brain ticks. 
        </p>
      </section>
      <section className='latest-blog-posts'>
        <h2 data-aos='fade-right'>My Latest Blog Posts</h2>
        <ol>
          <li data-aos='fade-right'>
            <img src={tummyTroublesImg} alt='tummy troubles' />
            <h3 className='post-heading'>Tummy Troubles?</h3>
            <div className='post-content'>
              <p className='post-desc'>I sat in Spanish class during freshman year in agonizing pain trying to situate myself on the plastic blue chairs in a way that would ease the stabbing pain in my abdomen. I never told anyone about my daily discomfort. I’m not quite sure why I never did, but maybe it’s because I didn't want to show a weakness or to become a burden...</p>
              <button>Read Post</button>
            </div>
          </li>
        </ol>
      </section>
      <Contact />
    </main>
  );
};
