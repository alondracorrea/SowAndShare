import React from 'react';
import './Map_Content.css'; // CSS file for animation
import backgroundImage from '../assets/earth.png';

const Map_Content = () => {
  return (
    <div className='content'>
      <div className='the-text'>
        <h1 id='head'>Keep going, keep growing...</h1>
      </div>
      <div className="plant-container">
        <div className='earth-container'></div>
        <button id='share-btn'>Share your story</button>
        <div className="stem">
          <div className="leaf leaf-1"></div>
          <div className="leaf leaf-2"></div>
          <div className="leaf leaf-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Map_Content;
