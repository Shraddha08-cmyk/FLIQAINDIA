import React from 'react'
import './Service.css'
import poster2 from '../../images/poster2.png'
import { Typography } from '@mui/material'
import gal1 from '../../images/gallery1.png'
import gal2 from '../../images/gallery2.png'
import gal3 from '../../images/gallery3.png'
import gal4 from '../../images/gallery4.png'

const Poster2 = () => {
    return (
        <>
            <div className='poster2'>
                <img src={poster2} alt="post2" />
                <div className="post-text">
                    <Typography style={{ color: "white", fontFamily: "Bebas Neue", fontSize: "30px" }}>DISCOVER</Typography>
                    <Typography style={{ color: "white", fontFamily: "Bebas Neue", fontSize: "30px" }}>GRAPHIC DESIGN IDEAS</Typography>
                    <Typography style={{ color: "white", fontFamily: "Bebas Neue", fontSize: "30px" }}>AND SERVICES</Typography>
                    <Typography style={{ color: "white", fontFamily: "Bebas Neue", fontSize: "30PX" }}>FROM BRANDING TO MARKETING</Typography>
                </div>
                <div className="input-post">
                    <input type="text" placeholder='what kind of design you are looking for?' />
                    <button type="button" class="btn btn-dark">Search</button>
                </div>
                <div className="gallery">
                    <img src={gal1} alt="gal1" style={{ width: "120px", height: "120px", border: " 3px solid #211A13" }} />
                    <img src={gal2} alt="gal2" style={{ width: "120px", height: "120px", border: " 3px solid #211A13", position: "relative", top: "-28px" }} />
                    <img src={gal3} alt="gal3" style={{ width: "120px", height: "120px", border: " 3px solid #211A13" }} />
                    <img src={gal4} alt="gal4" style={{ width: "120px", height: "120px", border: " 3px solid #211A13", position: "relative", top: "-18px" }} />
                </div>
            </div>
            <div className="post-desc">
                <Typography style={{fontFamily: "Homenaje", fontWeight: "500", fontSize: "35px", letterSpacing: "5px"}}>Popular:<span style={{fontWeight: "lighter", fontSize: "30px", color: "#4C696D"}}>&nbsp; &nbsp; &nbsp; &nbsp;Website  Design   Logo Design   Brochure   Label Design</span></Typography>
                <hr style={{width: "1100px", position: "relative", left: "120px", border: "2px solid #ADA3A3"}} />
            </div>
        </>
    )
}

export default Poster2
