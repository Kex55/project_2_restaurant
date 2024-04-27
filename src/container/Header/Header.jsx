import React from 'react';
import { SubHeading } from "../../components";
import { images } from "../../constants";
import './Header.css';

const Header = () => (
  <div className='app_header app_wrapper section_padding' id="home">
    <div className='app_wrapper_info'>
      <SubHeading title='Chase the flavour' />
      <h1 className='app_header-h1'>The Key To Fine Dining </h1>
      <button type='button' className='custom_button'>Explore Menu</button>
    </div>

    <div className='app_wrapper_img'>
      <img src={images.welcome} alt="head_img" />
    </div>
  </div>
);

export default Header;
