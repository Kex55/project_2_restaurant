import React from 'react';
import { images } from "../../constants";
import './AboutUs.css';

const AboutUs = () => (
  <div className='app_aboutus flex_center section_padding' id='about'>
    <div className='app_aboutus-overlay flex_center'>
      <img src={images.G} alt="G_overlay" />
    </div>
  </div>
);

export default AboutUs;
