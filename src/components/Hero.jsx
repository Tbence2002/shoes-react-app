import React from 'react'
import "../App.css"
import { Carousel } from 'antd';
import nikeairforce from '../assets/nikeairforce.png'
import nikedunk from '../assets/nikedunk.png'
import nikeair from '../assets/nikeair.png'
import nikemax from '../assets/nikemax.png'

function Hero() {

    return (
        <section className='hero-container'>
            <div id="home"></div>
            <div className='hero-text'>
                <h1>Az igazi stílus a lábad alatt - Fedezd fel a lépésekben rejlő szenvedélyt!</h1>
                <p>Készülj fel az élet nagy kalandjaira a tökéletes cipőkkel. Minőség, kényelem és stílus találkozik, hogy minden lépésedben önbizalmat sugározz. </p>
                <p>Fedezd fel a kifinomultságot és lépj ki a hétköznapokból!</p>
            </div>
            <div className='hero-image'>
                <div className='hero-image-slider'>
                    <Carousel autoplay>
                        <div>
                            <div className='slider-first'>
                                <div className='slider-text'>
                                    <h3>Nike Air Force</h3>
                                    <h4>1 07 Triple White</h4>
                                    <div className='slider-cart'>
                                    <p>44 617 Ft</p>
                                    <button>Vásárlás</button>
                                    </div>
                                </div>
                                <div className='slider-image'>
                                    <img src={nikeairforce} alt="nikeairforce" />
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div>
                            <div className='slider-first'>
                                <div className='slider-text'>
                                    <h3>Nike Dunk</h3>
                                    <h4>High Retro</h4>
                                    <div className='slider-cart'>
                                    <p>45 617 Ft</p>
                                    <button>Vásárlás</button>
                                    </div>
                                </div>
                                <div className='slider-image'>
                                    <img src={nikedunk} alt="nikedunk"/>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div>
                            <div className='slider-first'>
                                <div className='slider-text'>
                                    <h3>Nike Air</h3>
                                    <h4>Huarache</h4>
                                    <div className='slider-cart'>
                                    <p>28 982Ft</p>
                                    <button>Vásárlás</button>
                                    </div>
                                </div>
                                <div className='slider-image'>
                                    <img src={nikeair} alt="nikeair" />
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div>
                            <div className='slider-first'>
                                <div className='slider-text'>
                                    <h3>Nike Air Max</h3>
                                    <div className='slider-cart'>
                                    <p>55 982Ft</p>
                                    <button>Vásárlás</button>
                                    </div>
                                </div>
                                <div className='slider-image'>
                                    <img src={nikemax}alt="nikemax" />
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default Hero