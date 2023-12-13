import React from 'react'
import './Project1img.css'
import pv1 from './P-video1.mp4';


const Project1img = () => {
  
  
  return (
    <>
      <div className="slide-frame">
        <div data-aos="slide-left" data-aos-delay="100" data-aos-duration="30" data-aos-easing="ease-in-out" style={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: '100%' }}>
          <video height='280px' src={pv1} autoPlay loop muted />
        </div>
      </div>
    </>
  )
}

export default Project1img
