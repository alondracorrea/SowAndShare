import './Footer.css';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../assets/logo_trans.jpg';

const Footer = () => {
  return (
    
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
          {/* column1 */}
          <div className='footer-column'>
            <h3>Logo</h3>
            <ul className='list-unstyled'>
              <li>Share your story</li>
              <li>Work with us</li>
              <li>About</li>
              <li>FAQ</li>
            </ul>
          </div>
          {/* column2 */}
          <div className='footer-column1'>
            <h3>Be part of the garden.</h3>
            <p>Sign up for updates, news, and ways you can help to end gender-based violence</p>
            <div className='email-inputs'>
            <input type="text"placeholder="Your Email"></input>
            <button className= "subscribe-btn" ><h3>Subscribe</h3></button>
            </div>
          </div>
          {/* column3 */}
          <div className='footer-column2'>
            <h3>Privacy Policy</h3>
            <p>
              Telling your story can be triggering. If you feel like talking to someone or seek help, contact 1800
              RESPECT.
            </p>
          </div>
        </div>
      </div>
    </div>
 
  );
};

export default Footer;
