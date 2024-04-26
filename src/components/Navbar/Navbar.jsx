import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from "react-icons/md";
import imgages from '../../constants';
import './Navbar.css';

const Navbar = () => (
  <div className='app_navbar'>
    <div className='app_navbar-logo'>
      <img src={imgages.gericht} alt="app logo" />
    </div>
    <ul className='app_navbar-links'>
      <li className='p_opensans'><a href="#home">Home</a></li>
      <li className='p_opensans'><a href="#about">About</a></li>
      <li className='p_opensans'><a href="#menu">Menu</a></li>
      <li className='p_opensans'><a href="#awards">Awards</a></li>
      <li className='p_opensans'><a href="#contact">Contact</a></li>
    </ul>
    <div className='app_navbar-login'>
      <a href="#login" className='p-opensans'>Login / Register</a>
      <div/>
      <a href="/" className='p_opensans'>Book Table</a>
    </div>
    <div className='app_navbar-smallscreen'>
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => {}}/>
      <div className='app_navbar-smallscreen-links flex_center slide-bottom'>
        <MdOutlineRestaurantMenu fontSize={27} className='overlay_close' onClick={() => {}}/>
        <ul className='app_navbar-links'>
          <li className='p_opensans'><a href="#home">Home</a></li>
          <li className='p_opensans'><a href="#about">About</a></li>
          <li className='p_opensans'><a href="#menu">Menu</a></li>
          <li className='p_opensans'><a href="#awards">Awards</a></li>
          <li className='p_opensans'><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;
