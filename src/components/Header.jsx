import React, { useState } from 'react'
import "../App.css"

function Header() {
  const [activeHeader, setActiveHeader] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [active, setActive] = useState(0);

  const changeActiveBackground = () => {
    if (window.scrollY >= 100) {
      setActiveHeader(true);
    } else {
      setActiveHeader(false);
    }
  }

  window.addEventListener('scroll', changeActiveBackground);

  return (
    <section className='header-container'>
      <header className={activeHeader ? "activeheader" : ""}>
        <div className='text'><h1>Shoes.</h1></div>
        <nav>
          <ul className={activeMenu ? "activemenu" : ""}>
            <svg className='close' onClick={() => setActiveMenu(!activeMenu)} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
            <li><a href="#home" onClick={() => setActive(0)} className={active === 0 ? "active" : ""}>Kezdőlap</a></li>
            <li><a href="#shoes" onClick={() => setActive(1)} className={active === 1 ? "active" : ""}>Cipők</a></li>
            <li><a href="#about" onClick={() => setActive(2)} className={active === 2 ? "active" : ""}>Ügyfélszolgálat</a></li>
          </ul>
        </nav>
        <div className='shopping-cart'>
          <svg className='cart-icon' fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
            <path d="M20 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>
        <svg className='menu' onClick={() => setActiveMenu(!activeMenu)} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 10H3"></path>
          <path d="M21 6H3"></path>
          <path d="M21 14H3"></path>
          <path d="M17 18H3"></path>
        </svg>
      </header>
    </section>
  )
}

export default Header