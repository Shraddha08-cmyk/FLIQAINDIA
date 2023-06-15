import React from 'react'
import './Test.css'
import postvec from '../../images/vector-post.png'
import { Button, Card, CardContent, Typography } from '@mui/material'
import testing from '../../images/testing.png'

const Test = () => {
    return (
        <div className='test'>
            <div className="test-left">
                <img src={postvec} alt="vecpost" style={{ width: "450px", position: "absolute", left: "5px" }} />
            </div>
            <div className="test-right">
                <div className="right1">
                    <Typography style={{ color: "#4C696D", fontWeight: "bold", fontSize: "20px" }}>Testimonials</Typography>
                    <Typography style={{ fontSize: "13px" }}>Words from our clients</Typography>
                </div>
                <div className="right-btn">
                    <Button variant='contained' style={{ backgroundColor: "#4E99A4" }}>Google</Button>
                    <Button variant='outlined' style={{ border: "1px solid #4E99A4", color: "black" }}>Facebook</Button>
                    <Button variant='outlined' style={{ border: "1px solid #4E99A4", color: "black" }}>Weddingwire</Button>
                    <Button variant='outlined' style={{ border: "1px solid #4E99A4", color: "black" }}>WedmeGood</Button>
                </div>
            </div>
            <div className="test-cards">
                <Card style={{ height: "280px", width: "180px", borderRadius: "20px", backgroundColor: "#416F75" }}>
                    <CardContent>
                        <img src={testing} alt="testing" />
                        <div className="center-desc">
                            <Typography style={{ color: "white", fontSize: "12px" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                            </Typography>
                            <Typography style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}>~Ramdom Name</Typography>
                        </div>
                    </CardContent>
                </Card>
                <Card style={{ height: "280px", width: "180px", borderRadius: "20px", backgroundColor: "#416F75" }}>
                    <CardContent>
                        <img src={testing} alt="testing" />
                        <div className="center-desc">
                            <Typography style={{ color: "white", fontSize: "12px" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                            </Typography>
                            <Typography style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}>~Ramdom Name</Typography>
                        </div>
                    </CardContent>
                </Card>
                <Card style={{ height: "280px", width: "180px", borderRadius: "20px", backgroundColor: "#416F75" }}>
                    <CardContent>
                        <img src={testing} alt="testing" />
                        <div className="center-desc">
                            <Typography style={{ color: "white", fontSize: "12px" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                            </Typography>
                            <Typography style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}>~Ramdom Name</Typography>
                        </div>
                    </CardContent>
                </Card>
                <Card style={{ height: "280px", width: "180px", borderRadius: "20px", backgroundColor: "#416F75" }}>
                    <CardContent>
                        <img src={testing} alt="testing" />
                        <div className="center-desc">
                            <Typography style={{ color: "white", fontSize: "12px" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                            </Typography>
                            <Typography style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}>~Ramdom Name</Typography>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <hr style={{ width: "1100px", position: "relative", left: "120px", top: "360px", border: "1px solid black" }} />
        </div>
    )
}

export default Test
