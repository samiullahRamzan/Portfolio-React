import React from 'react';
import './Hero.css';
import Profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={Profile_img} alt="" />
        <h1><span>I'm Alex Bennett,</span> frontend developer based in USA</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, impedit? Ipsa odit aut illo dignissimos, nemo unde?</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero