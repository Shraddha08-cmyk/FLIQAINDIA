import React from 'react'
import './Service.css'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'
import { Button, Card, CardContent, Typography } from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'
import Poster2 from './Poster2'

const Service = () => {
    return (
        <>
            <div className='service'>
                <div className="service-left">
                    <p className='ser1'>Our Featured Services </p>
                    <p className='ser2'>Discover the range of services provided by FliqaIndia</p>
                </div>
                <div className="ser-cards">
                    <div style={{ backgroundColor: "#DDF8F3", height: "28px", borderRadius: "50%", position: "relative", top: "127px" }}>
                        <KeyboardArrowLeft />
                    </div>
                    <Card style={{ height: "332px", width: "220px", borderRadius: "20px" }}>
                        <CardContent>
                            <img src={img1} alt="img2" style={{ height: "219px", width: "235px", position: "relative", bottom: "16px", right: "23px" }} />
                            <div className="ser-text">
                                <Typography style={{ fontSize: "13px", fontWeight: "600", position: "relative", bottom: "20px" }}>Pre Wedding Photoshoot</Typography>
                                <hr style={{ position: 'relative', bottom: "30px" }} />
                                <Typography style={{ fontSize: "12px", fontWeight: "bold", position: 'relative', bottom: "40px", color: "#4C696D" }}>Starting at <span style={{ fontWeight: "normal" }}>25,000 (One Day)</span></Typography>
                            </div>
                            <Button variant='contained' style={{ backgroundColor: "#4E99A4", width: "150px", position: "relative", bottom: "20px", borderRadius: "20px" }}>Know More</Button>
                        </CardContent>
                    </Card>
                    <Card style={{ height: "332px", width: "220px", borderRadius: "20px" }}>
                        <CardContent>
                            <img src={img2} alt="img2" style={{ height: "219px", width: "235px", position: "relative", bottom: "16px", right: "23px" }} />
                            <div className="ser-text">
                                <Typography style={{ fontSize: "13px", fontWeight: "600", position: "relative", bottom: "20px" }}>Wedding Photoshoot</Typography>
                                <hr style={{ position: 'relative', bottom: "30px" }} />
                                <Typography style={{ fontSize: "12px", fontWeight: "bold", position: 'relative', bottom: "40px", color: "#4C696D" }}>Starting at <span style={{ fontWeight: "normal" }}>65,000 (Two Days)</span></Typography>
                            </div>
                            <Button variant='contained' style={{ backgroundColor: "#4E99A4", width: "150px", position: "relative", bottom: "20px", borderRadius: "20px" }}>Know More</Button>
                        </CardContent>
                    </Card>
                    <Card style={{ height: "332px", width: "220px", borderRadius: "20px" }}>
                        <CardContent>
                            <img src={img3} alt="img3" style={{ height: "219px", width: "235px", position: "relative", bottom: "16px", right: "23px" }} />
                            <div className="ser-text">
                                <Typography style={{ fontSize: "13px", fontWeight: "600", position: "relative", bottom: "20px" }}>Portfolio Shoot</Typography>
                                <hr style={{ position: 'relative', bottom: "30px" }} />
                                <Typography style={{ fontSize: "12px", fontWeight: "bold", position: 'relative', bottom: "40px", color: "#4C696D" }}>Starting at <span style={{ fontWeight: "normal" }}>25,000 (Standard Price for 6-8 hours)</span></Typography>
                            </div>
                            <Button variant='contained' style={{ backgroundColor: "#4E99A4", width: "150px", position: "relative", bottom: "38px", borderRadius: "20px" }}>Know More</Button>
                        </CardContent>
                    </Card>
                    <Card style={{ height: "332px", width: "220px", borderRadius: "20px" }}>
                        <CardContent>
                            <img src={img4} alt="img4" style={{ height: "219px", width: "235px", position: "relative", bottom: "16px", right: "23px" }} />
                            <div className="ser-text">
                                <Typography style={{ fontSize: "13px", fontWeight: "600", position: "relative", bottom: "20px" }}>Birthday Baby Folio</Typography>
                                <hr style={{ position: 'relative', bottom: "30px" }} />
                                <Typography style={{ fontSize: "12px", fontWeight: "bold", position: 'relative', bottom: "40px", color: "#4C696D" }}>Starting at <span style={{ fontWeight: "normal" }}>15,000 (One Day)</span></Typography>
                            </div>
                            <Button variant='contained' style={{ backgroundColor: "#4E99A4", width: "150px", position: "relative", bottom: "20px", borderRadius: "20px" }}>Know More</Button>
                        </CardContent>
                    </Card>
                    <div style={{ backgroundColor: "#DDF8F3", height: "28px", borderRadius: "50%", position: "relative", top: "127px" }}>
                        <KeyboardArrowRight />
                    </div>
                </div>
            </div>
            <Poster2 />
        </>
    )
}

export default Service
