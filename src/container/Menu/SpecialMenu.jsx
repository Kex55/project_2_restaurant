import React from 'react';
import { SubHeading, MenuItem } from "../../components";
import './SpecialMenu.css';
import { data, images } from '../../constants';

const SpecialMenu = () => (
  <div className='app_specialMenu flex_center section_padding' id='menu'>
    <div className='app_specialMenu-title'>
      <SubHeading title="Menu that fits your palatte"/>
        <h1 className='headtext_cormorant'>Today's special</h1>
    </div>
    
    <div className='app_specialMenu-menu'>
      <div className='app_specialMenu-menu_wine flex_center'>
        <p className='app_specialMenu-menu_heading'>Wine & Beer</p>
        <div className='app_specialMenu_menu_items'>
          {data.wines.map((wine, index) => (<MenuItem />))}
        </div>
      </div>

      <div className='app_specialMenu-menu_img'>
        <img src={images.menu} alt="meni_img" />
      </div>

      <div className='app_specialMenu-menu_cocktails flex_center'>        
        <p className='app_specialMenu-menu_heading'>Cocktails</p>
        <div className='app_specialMenu_menu_items'>
          {data.cocktails.map((cocktail, index) => (<MenuItem />))}
          </div>
      </div>
    </div>

    <div style={{marginTop: 15}}>
      <button type="button" className='custom_button'>View More</button>
    </div>  

  </div>
);

export default SpecialMenu;
