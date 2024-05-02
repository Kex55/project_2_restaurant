import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import './Footer.css';

const Footer = () => (
  <div className='app_footer section_padding' id='login'>
    <FooterOverlay />
    <Newsletter />
    <div className='app_footer-links'>
      <div className='app_footer-links_contact'>
        <h1 className='app_footer-headtext'>Contact Us</h1>
        <p className='p_opensans'>Budai W 46., Budapest, 1562, Hungary</p>
        <p className='p_opensans'>+36 242-3626</p>
        <p className='p_opensans'>+36 213-8563</p>
      </div>
    </div>
  </div>
);

export default Footer;
