import React, { useState } from 'react';
import {AiOutlineSearch}from "react-icons/ai";
import Video from "../../assets/video.mp4";

import "./Hero.css";

const Hero = () => {

  return (
    <div className='hero'>
        <div className='content'>
            <video className="video" src={Video} muted autoPlay loop type="video/mp4"></video>
            <h1>Find the perfect place</h1>
            <p className='searchText'>Search the largest selection of luxury high-rise apartements, multi-family and luxury homes</p>
            <form className='search'>
                <div>
                    <input type="text" placeholder='Enter Keyword' />
                </div>
                <div className="radio">
                    <input type="radio" checked />
                    <label>Buy</label>
                    <input type="radio"/>
                    <label>Rent</label>
                    <button type='submit'><AiOutlineSearch className="icon" /></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero