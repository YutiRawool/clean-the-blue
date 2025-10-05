import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Events</li>
            <li>Get Involved</li>
            <li>Blog</li>
            <li><button className='btn'>Contact</button></li>
        </ul>
        <ul>
            <li id='li1'>Register</li>
            <li id='li2'>Login</li>
        </ul>
    </nav>
  )
}

export default Navbar