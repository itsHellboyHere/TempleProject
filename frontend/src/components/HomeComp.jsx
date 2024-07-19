// src/components/HomeComp.js
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import homeImg1 from '../assets/homeimg.jpg';
import homeImg2 from '../assets/homeimg2.jpeg';
import homeImg4 from '../assets/homeimg4.jpeg';
import { FaHandsPraying } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import LazyLoad from 'react-lazyload';

const slideImages = [
   
  homeImg1,
  homeImg2,
   homeImg4,
];

const HomeComp = () => {
  return (
    <div className="home-bg">
         <Helmet>
        <title>Home - Temple Donation</title>
      </Helmet>
      <Slide
        duration={3000}
        transitionDuration={400}
        infinite={true}
        indicators={true}
        arrows={false}
      >
        {slideImages.map((slideImage, index) => (
          <div key={index} className="each-slide">
             <LazyLoad
              height={400} // Adjust based on your design
              offset={100} // Trigger load before the element is in view
              placeholder={<div className="bg-slate-400" />} // Optional placeholder
            >
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${slideImage})`
              }}
              className="slide-bg"
            >
             <div className="text-overlay">
                <div className="flex items-center justify-center">
                  <h1 className="mr-2  text-6xl font-mono font-extrabold text-orange-400">Namaste</h1>
                  <FaHandsPraying className="mr-2 text-6xl font-extrabold text-orange-400" />
                </div>
                <p className="text-lg  tracking-wider font-serif text-white mt-6">
                  आपकी योगदान से हम अपने गांव में एक मंदिर बना रहे हैं,
                  
                </p>
                <p className="text-lg tracking-wide font-serif text-white mt-6">
                  जो हमारे समुदाय में आध्यात्मिक जागरूकता लाने में मदद करेगा।
                </p>
                <Link to="/donate">
                <button class="animated-button mt-20">
  <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span class="text">Donate Here</span>
  <span class="circle"></span>
  <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button></Link>
                

              </div>
            </div>
            </LazyLoad>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default HomeComp;
