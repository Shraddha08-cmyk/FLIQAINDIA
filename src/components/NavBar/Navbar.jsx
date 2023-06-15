import React from 'react'
import './Navbar.css'
import logo from '../../images/FliqaIndia-Logo 1.png'
import { Button } from '@mui/material'
import poster from '../../images/image 5.png'
import Poster from './Poster'

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className="nav-left">
          <img src={logo} alt="logo" className='logo1' />
          <p className="home" style={{ color: "white" }}>Home</p>
          <p className="service" style={{ color: "white" }}>Service</p>
          <p className="portfolio" style={{ color: "white" }}>Portfolio</p>
          <p className="community" style={{ color: "white" }}>Community</p>
          <p className="blog" style={{ color: "white" }}>Blog</p>
        </div>
        <div className="nav-right">
          <Button variant='contained' style={{ background: "linear-gradient(#4E99A4,#004D58)", borderRadius: "30px", width: "110px" }}>Sign Up</Button>
          <Button variant='contained' style={{ background: "linear-gradient(#4E99A4,#004D58)", borderRadius: "30px", width: "110px" }}>Sign In</Button>
        </div>
        {/* <div className="poster">
        <img src={poster} alt="poster" />
      </div> */}
      </div>
      <Poster />
    </>
  )
}

export default Navbar
