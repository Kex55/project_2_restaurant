import React from 'react';
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import './Intro.css';

const Intro = () => {
 const [playVideo, setPlayVideo] = React.useState(false);
 const vidRef = React.useRef();
 
 <div className='app_video'>
    <video src={meal} ref={vidRef} type="video/mp4" loop controls={false} muted></video>
    
  </div>
};

export default Intro;
