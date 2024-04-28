import React from 'react';
import { SubHeading, MenuItem } from "../../components";
import './SpecialMenu.css';
import { data } from '../../constants';

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
      <div className='app_specialMenu-menu_cocktails flex_center'>        
        <p className='app_specialMenu-menu_heading'>Cocktails</p>
        <div className='app_specialMenu_menu_items'>
          {data.wines.map((wine, index) => (<MenuItem />))}
          </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
