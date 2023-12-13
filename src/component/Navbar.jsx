import React from 'react'
import '../style/Navbar.css'
import * as Icons from 'react-bootstrap-icons';
import { Route, Routes } from 'react-router-dom';
import Picscontent from './Picscontent';
import About from './About';


// home , work , about, contact
const Navbar = () => {
  return (
    <>
      <div className="main">
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out" style={{ width: '23%', height: '100px', marginTop: '10px' }}><a href="/" style={{ textDecoration: 'none', color: 'rgb(17, 17, 52)', display: 'flex' }}>
          <div className="home" style={{ borderRadius: '25px 0 0 25px' }}>S</div>
          <div className="home">U</div>
          <div className="home">R</div>
          <div className="home">A</div>
          <div className="home" style={{ borderRadius: '0 25px 25px 0' }}>J</div>
        </a></div>
        <div className="empty"></div>
        <div className="content">
          <div className="Project c-text"><a href='#project' style={{ textDecoration: 'none', color: 'whitesmoke' }}>Project</a></div>
          <div className="Contact c-text"><a href="#Contact" style={{ textDecoration: 'none', color: 'whitesmoke' }}>Contact</a></div>
          <div className="About c-text"><a href='About' style={{ textDecoration: 'none', color: 'whitesmoke' }}>About</a></div>
        </div>
      </div>

      <div style={{ fontSize: '2.7em', width: '59px', position: 'fixed', bottom: '0', right: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <a href="#nav"><Icons.ArrowUpCircleFill style={{ color: 'white' }} /></a>
      </div>

    </>
  )
}

export default Navbar
