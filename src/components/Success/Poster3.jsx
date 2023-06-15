import React from 'react'
import './Success.css'
import post3 from '../../images/poster3.png'
import postin3 from '../../images/post3-center.png'
import { Typography } from '@mui/material'

const Poster3 = () => {
  return (
    <div className='post3'>
      <img src={post3} alt="post3" style={{width: "100%", position: "relative", top: "260px"}} />
      <div className="post3-opt">
        <Typography style={{color: "white", fontFamily: "Bebas Neue", letterSpacing: "5px", fontWeight: "lighter", fontSize: "20px", textAlign: "left"}}>ULTIMATE <br/> COURSE IN <br /><span style={{fontSize: "50px"}}>PHOTOGRAPHY</span></Typography>
        <img src={postin3} alt="postin3" />
      </div>
    </div>
  )
}

export default Poster3
