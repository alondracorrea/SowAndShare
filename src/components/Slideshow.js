import React, { useState } from 'react';
import image from '../assets/man-on-phone.jpg';
import image2 from '../assets/hand-circle.jpg';
import image3 from '../assets/workers.jpg';
import image4 from '../assets/desk.jpg';

import './Slideshow.css';

//component for Slideshow
const Slideshow = () => {
  //arrays for images, headers, and and paragraphs
  const images = [image, image2, image3, image4];
  const headers = ["We collect stories", "Imagine a better world", "Build a diverse team of data activists", "Work with change makers"]; 
  const paragraphs = ["We take great care of your story. When you submit you decide whether you want to remain annonymous." , "We dream of a world where everyone feels safe moving in and around their city. We are on the path to ending gender-based violence.",
    "Our passionate team is a diverse group of technologists, campaigners, data scientists, inclusivity and gender experts and user experience designers.", "We ensure that decision-makers have access to the data they need to change their story, using something everyone has the right to do: share your stories."                                                                                
  ]
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='slideshow-container'>
      <div className="slideshow">
        <div className="slide">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </div>
        <div>
        <h1 className={`p-headers ${currentIndex === 2 ? 'header-three' : ''}`}>{headers[currentIndex]}</h1>
            <p className="paragraphs">{paragraphs[currentIndex]}</p> 
        </div>
        <div className="navigation">
          {images.map((_, index) => (
            <button
              key={index}
              className={`nav-dot${currentIndex === index ? ' active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
