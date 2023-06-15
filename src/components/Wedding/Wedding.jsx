import React from 'react'
import './Wedding.css'
import wedimg1 from '../../images/wedimg1.png'
import wedimg2 from '../../images/wedimg2.png'
import wedimg3 from '../../images/wedimg3.png'
import wedimg4 from '../../images/wedimg4.png'
import wedimg5 from '../../images/wedimg5.png'
import wedimg6 from '../../images/wedimg6.png'
import { Button, Card, CardContent, Typography } from '@mui/material'
import { ArrowForward } from '@material-ui/icons'

const Wedding = () => {
    return (
        <div className='wedding'>
            <div className="wed-left">
                <p className='wed-head1'>Real Wedding</p>
                <p className='wed-head2'>List your wedding and browse portfolio</p>
            </div>
            <div className="wed cards">
                <Card style={{ height: "280px", width: "220px", borderRadius: "20px", backgroundColor: "#DDF8F3" }}>
                    <CardContent>
                        <img src={wedimg1} alt="wedimg1" style={{ width: "200px", position: "relative", right: "5px" }} />
                        <div className="wed-cardin">
                            <img src={wedimg5} alt="wedimg5" style={{ width: "67px", height: "67px" }} />
                            <img src={wedimg6} alt="wedimg6" style={{ width: "67px", height: "67px" }} />
                            <img src={wedimg6} alt="wedimg6" style={{ width: "67px", height: "67px" }} />
                        </div>
                        <Typography style={{ textAlign: "left", fontFamily: "K2D, sans-serif", fontSize: "15px", fontWeight: "bold", position: "relative", top: "10px" }}>Danielle & Ronnie<br />
                            <span style={{ fontSize: "13px", fontWeight: "normal" }}>38 photos. Kittery,Polland</span>
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={{ height: "280px", width: "220px", borderRadius: "20px", backgroundColor: "#FBDADA" }}>
                    <CardContent>
                        <img src={wedimg2} alt="wedimg2" style={{ width: "200px", position: "relative", right: "5px" }} />
                        <div className="wed-cardin">
                            <img src={wedimg5} alt="wedimg5" style={{ width: "67px", height: "67px" }} />
                            <img src={wedimg6} alt="wedimg6" style={{ width: "67px", height: "67px" }} />
                            <img src={wedimg6} alt="wedimg6" style={{ width: "67px", height: "67px" }} />
                        </div>
                        <Typography style={{ textAlign: "left", fontFamily: "K2D, sans-serif", fontSize: "15px", fontWeight: "bold", position: "relative", top: "10px" }}>Danielle & Ronnie<br />
                            <span style={{ fontSize: "13px", fontWeight: "normal" }}>38 photos. Kittery,Polland</span>
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={{ height: "280px", width: "220px", borderRadius: "20px", backgroundColor: "#FFF9D9" }}>
                    <CardContent>
                        <img src={wedimg3} alt="wedimg3" style={{ width: "200px", position: "relative", right: "5px" }} />
                        <div className="wed-cardin">
                            <img src={wedimg5} alt="wedimg5" style={{ width: "67px", height: "67px" }} />
                            <img src={wedimg6} alt="wedimg6" style={{ width: "67px", height: "67px" }} />
                            <img src={wedimg6} alt="wedimg6" style={{ width: "67px", height: "67px" }} />
                        </div>
                        <Typography style={{ textAlign: "left", fontFamily: "K2D, sans-serif", fontSize: "15px", fontWeight: "bold", position: "relative", top: "10px" }}>Danielle & Ronnie<br />
                            <span style={{ fontSize: "13px", fontWeight: "normal" }}>38 photos. Kittery,Polland</span>
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={{ height: "280px", width: "220px", borderRadius: "20px", backgroundColor: "#DDE4FF" }}>
                    <CardContent>
                        <img src={wedimg4} alt="wedimg4" style={{ width: "200px", position: "relative", right: "5px" }} />
                        <div className="wed-cardin">
                            <img src={wedimg5} alt="wedimg5" style={{ width: "67px", height: "67px" }} />
                            <img src={wedimg6} alt="wedimg6" style={{ width: "67px", height: "67px" }} />
                            <img src={wedimg6} alt="wedimg6" style={{ width: "67px", height: "67px" }} />
                        </div>
                        <Typography style={{ textAlign: "left", fontFamily: "K2D, sans-serif", fontSize: "15px", fontWeight: "bold", position: "relative", top: "10px" }}>Danielle & Ronnie<br />
                            <span style={{ fontSize: "13px", fontWeight: "normal" }}>38 photos. Kittery,Polland</span>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <Button variant='contained' style={{backgroundColor: "#DDF9FF", color: "black", position: "relative", top: "30px"}}>View More Weddings&nbsp; &nbsp;<ArrowForward style={{color: "black"}} /></Button>
            <hr style={{width: "1100px", position: "relative", left: "120px", top: "30px", border: "1px solid black"}} />
        </div>
    )
}

export default Wedding
