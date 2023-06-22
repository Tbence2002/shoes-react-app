import React from 'react'
import {allshoes}  from '../Helpers/AllShoe'
import Shoe from './Shoe'

function Shoes({cart, setCart}) {
  return (
    <section className='shoes-container'>
        <a id="shoes"></a>
        <div className='shoes-container'>
        {allshoes.map((shoess)=> {
            return <Shoe key={shoess.id} cart={cart} setCart={setCart} shoess={shoess}/>
        })}
        </div>
    </section>
  )
}

export default Shoes