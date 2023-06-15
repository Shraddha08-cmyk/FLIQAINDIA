import React from 'react'
import './Offer.css'
import { Card, CardContent, Typography } from '@mui/material'
import offerimg1 from '../../images/offerimg1.jpg'
import offerimg2 from '../../images/offerimg2.jpg'
import offerimg3 from '../../images/offerimg3.jpg'
import offerimg5 from '../../images/offerimg5.png'

const Offer = () => {
    return (
        <div className='offer'>
            <div className="offer-left">
                <p className='offer-head1'>Best Offers</p>
                <p className='offer-head2'>Discover the best offers on our services</p>
            </div>
            <div className="offer-cards">
                <Card style={{ height: "280px", width: "180px", borderRadius: "20px", boxShadow: "86px 30px 40px 15px #BADCDC" }}>
                    <CardContent>
                        <img src={offerimg1} alt="offerimg1" style={{ width: "170px", position: "relative", right: "10px" }} />
                        <div className="offer-desc">
                            <Typography style={{ color: "white", fontFamily: "Josefin Sans, sans-serif", letterSpacing: "10px" }}>Wedding Packages</Typography>
                            <hr style={{ border: "1px solid white" }} />
                            <div className="discount">
                                <Typography style={{ color: "white" }}>Discount</Typography>
                                <img src={offerimg5} alt="offerimg5" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card style={{ height: "280px", width: "180px", borderRadius: "20px", boxShadow: "86px 30px 40px 15px #BADCDC" }}>
                    <CardContent>
                        <img src={offerimg2} alt="offerimg2" style={{ width: "158px", position: "relative", right: "5px" }} />
                        <div className="offer-desc2">
                            <Typography style={{ color: "white", fontFamily: "Josefin Sans, sans-serif", letterSpacing: "10px" }}>Website Design</Typography>
                            <hr style={{ border: "1px solid white" }} />
                            <div className="discount">
                                <Typography style={{ color: "white" }}>Discount</Typography>
                                <img src={offerimg5} alt="offerimg5" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card style={{ height: "280px", width: "180px", borderRadius: "20px", boxShadow: "86px 30px 40px 15px #BADCDC" }}>
                    <CardContent>
                        <img src={offerimg3} alt="offerimg3" style={{ width: "140px" }} />
                        <div className="offer-desc3">
                            <Typography style={{ color: "white", fontFamily: "Josefin Sans, sans-serif", letterSpacing: "5px" }}>Beach Photography</Typography>
                            <hr style={{ border: "1px solid white" }} />
                            <div className="discount">
                                <Typography style={{ color: "white" }}>Discount</Typography>
                                <img src={offerimg5} alt="offerimg5" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card style={{ height: "280px", width: "180px", borderRadius: "20px", boxShadow: "86px 30px 40px 15px #BADCDC" }}>
                    <CardContent>
                        <img src={offerimg1} alt="offerimg1" style={{ width: "170px", position: "relative", right: "10px" }} />
                        <div className="offer-desc">
                            <Typography style={{ color: "white", fontFamily: "Josefin Sans, sans-serif", letterSpacing: "10px" }}>Wedding Packages</Typography>
                            <hr style={{ border: "1px solid white" }} />
                            <div className="discount">
                                <Typography style={{ color: "white" }}>Discount</Typography>
                                <img src={offerimg5} alt="offerimg5" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <hr style={{width: "1100px", position: "relative", left: "120px", top: "50px", border: "1px solid black"}} />
        </div>
    )
}

export default Offer
