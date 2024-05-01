import React from 'react';
import { SubHeading } from "../../components";
import { images } from "../../constants";
import './Gallery.css';
import { BsInstagram } from 'react-icons/bs';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction==='left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollRight += 300;
    }
  };

  return(
    <div className='app_gallery flex_center'>
      <div className='app_gallery-content'>
        <SubHeading title="Instagram"/>
        <h1 className='headtext_cormorant'>Photo Gallery</h1>
        <p className='p_opensans' style={{color: '#aaaaaa', marginTop: '2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type='button' className='custom_button'>View More</button>
      </div>
      <div className='app_gallery-images'>
        <div className='app_gallery-images_container' ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className='app_gallery-images_card flex_center' key={`gallery-image-${index+1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className='gallery_image-icon'/>
            </div>
          ))}
        </div>
        

        </div>
      </div>
    </div>
  );
};

export default Gallery;
