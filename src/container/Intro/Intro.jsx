import React from 'react';
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import './Intro.css';

const Intro = () => {
 const [playVideo, setPlayVideo] = React.useState(false);
 const vidRef = React.useRef();
 
 <div className='app_video'>
    <video src={meal} ref={vidRef} type="video/mp4" loop controls={false} muted></video>
    <div className='app_video-overlay flex_center'>
      <div 
      className='app_video-overlay_circle flex_center'
      onClick={()=>{
        setPlayVideo(!playVideo);
        if (playVideo) {
          vidRef.current.pause();
        } else {
          vidRef.current.play();
        }
        }}
      >
        {playVideo ? (<BsPauseFill color='#fff' fontSize={30} />) : (<BsFillPlayFill color='#fff' fontSize={30} />)}  
      </div>
    </div>
    
  </div>
};

export default Intro;
