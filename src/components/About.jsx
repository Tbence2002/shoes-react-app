import React from 'react'
import "../App.css"
import { AiFillPhone } from 'react-icons/ai'
import instagram from '../assets/skill-icons_instagram.png'
import messenger from '../assets/logos_messenger.png'
import email from '../assets/logos_google-gmail.png'
import Lottie from 'lottie-react'
import animationData from '../assets/data.json'

function About() {
  return (
    <section className='about-container'>
      <a id="about"></a>
      <div className='about-text'>
        <h2>Kérdése van?</h2>
        <p>Hívja ügyfélszolgálatunkat hétköznap 9:00-tól 17:00-ig.</p>
        <div className='about-phone'>
          <AiFillPhone />
          <p>+36 20 333 4444</p>
        </div>
        <h2>Vagy,</h2>
        <p>Írjon nekünk <span>instagramon</span>, <span>messengeren</span>, <span>emailes úton</span>.</p>
        <div className='about-social'>
          <div className='tooltip'>
          <a href="https://www.instagram.com/" target="_blank" className='instagram-tooltip'><img src={instagram} alt="instagram" /></a>
            <p className='instagram'>Instagram</p>
          </div>
          <div className='tooltip'>
            <a href="https://www.facebook.com/" target="_blank" className='messenger-tooltip' ><img src={messenger} alt="messenger"/></a>
            <p className='messenger'>Messenger</p>
          </div>
          <div className='tooltip'>
            <a className='email-tooltip'><img src={email} alt="email" /></a>
            <p className='email'>info@shoes.hu</p>
          </div>
        </div>
      </div>
      <div className='about-image'>
        <Lottie animationData={animationData} />
      </div>
    </section>
  )
}

export default About