import React from 'react';
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className='app_bg app_wrapper section_padding' id='contact'>
    <div className='app_wrapper_info'>
      <SubHeading title='Contact' />
      <h1 className='headtext_cormorant' style={{marginBottom: '3rem'}}>Find Us</h1>
      <div className='app_wrapper-content'>
        <p className='p_opensans'></p>
        <p className='p_opensans' style={{ color: '#dcca87', margin: '2rem 0'}}>Opening Hours</p>
        <p className='p_opensans'>Mon - Fri: 12:00 am - 0:00 pm</p>
        <p className='p_opensans'>Sat - Sun: 13:00 am - 03:00 pm</p>
      </div>
      <button type="button" className='custom_button' style={{marginTop: '2rem'}}></button>
    </div>

    <div className='app_wrapper_img'>
      <img src={images.findus} alt="findus_img" />
    </div>
  </div>
);

export default FindUs;
