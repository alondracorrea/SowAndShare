import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/circle_logo.png'
const Navbar = () => {
  return (
    <div className = 'nav-bar'>
      <img className = "app-logo" src={logo} alt=""/>
     <ul className = 'nav-menu'>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/resources'>Resources</Link>
        </li>
        <li>
            <Link to='/literature'>Literature</Link>
        </li>
        <li>
            <Link to='/map'>Map</Link>
        </li>
        <li>
            <Link to='/story'>Share your Story</Link>
        </li>
     </ul>
    </div>
  )
}

export default Navbar
