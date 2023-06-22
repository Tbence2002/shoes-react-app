import React, { useState } from 'react'
import "../App.css"
import Tilt from 'react-parallax-tilt'

function Shoe({ shoess }) {
  const [shoeactive, setShoeActive] = useState(0);
  const [activebtn, setActiveBtn] = useState(false);
  return (
    <Tilt>
    <section className='shoe-container'>
      <div className='shoe-layer'>

      </div>
      <div className='shoe-image'>
        <img src={shoess.image} alt="shoes" />
      </div>
      <div className='shoe-content'>
        <h1>{shoess.name}</h1>
        <div className='shoe-size'>
          <ul>
            <li onClick={() => setShoeActive(0)} className={shoeactive === 0 ? "shoe-size-active" : ""}>{shoess.size[0]}</li>
            <li onClick={() => setShoeActive(1)} className={shoeactive === 1 ? "shoe-size-active" : ""}>{shoess.size[1]}</li>
            <li onClick={() => setShoeActive(2)} className={shoeactive === 2 ? "shoe-size-active" : ""}>{shoess.size[2]}</li>
          </ul>
        </div>
        <h3>{shoess.price} Ft</h3>
      </div>
      <div className={activebtn === true ? "shoe-btn activebtn" : "shoe-btn"}>
        <div className='shoe-btn-content'>
          <button onClick={() => setActiveBtn(true)}>Megvásárolom</button>
          <div className={activebtn === true ? "activecart" : "cart-details"}>
            <h2>{shoess.name}</h2>
            <h3>Válasszon fizetési módot!</h3>
            <div className='choose'>
              <div className='choose-single'>
                <input type="checkbox" name="card" id="card" />
                <label for="card">Bankkártyával fizetek</label>
              </div>
              <div className='choose-single'>
                <input type="checkbox" name="payafter" id="payafter" />
                <label for="payafter">Utánvéttel fizetek</label>
              </div>
              <div className='choose-back' onClick={()=> setActiveBtn(false)}>
                <svg className="back" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5"></path>
                  <path d="m12 19-7-7 7-7"></path>
                </svg>
                <p>Vissza</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Tilt>
  )
}

export default Shoe