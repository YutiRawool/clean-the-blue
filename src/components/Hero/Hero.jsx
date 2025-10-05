import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>One Ocean, One Mission.</h1>
            <p>Thousands of hands, Millions of pieces removed.</p>
            <p>Cleanups. Community. Change</p>
            <button className="btn">Explore more <img src={arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero