import React from 'react'
import './Project1img.css'
import pv1 from './P-video1.mp4';

const Project2img = () => {
  return (
    <>
        <div className="slide-frame">
            <div data-aos="slide-left" style={{display:'flex', justifyContent:'center', alignItems:"center", height:'100%' }}>
               <video height='280px' src={pv1} autoPlay loop muted playbackRate="2.0" />
            </div>
        </div>
    </>
  )
}

export default Project2img
