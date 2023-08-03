import React from 'react';
import './Banner.css';
import { Button, Card, InputLabel, TextField } from '@material-ui/core';
import { CardContent } from '@mui/material';
import Icon from './Icon';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="bg__banner">
                <h1 className="bg-head">Over 4 crore customers have faith in us because we care.</h1>
                <img src="https://www.icicilombard.com/docs/default-source/assets/home-revamp/images/banner-img.png" alt="bannerimg" />
            </div>
            <Card
                style={{
                    // marginBottom: "80px",
                    height: "45vh",
                    width: "65vw",
                    // backgroundColor: "yellow",
                    marginLeft: "30px",
                    borderRadius: "20px"
                }}
            >
                <Icon style={{ zIndex: "1000" }} />
                <CardContent>
                    <hr />
                    <div
                        style={{
                            display: "flex",
                            textAlign: "left",
                            justifyContent: "center",
                            gap: "50px",
                            marginTop: "50px"
                        }}
                    >
                        <div>
                            <InputLabel>Car registration no.
                                <span style={{ color: "red" }}>*</span>
                            </InputLabel>
                            <TextField placeholder='E.G. MH01DF5698' />
                        </div>
                        <div>
                            <InputLabel>Mobile no.
                                <span style={{ color: "red" }}>*</span>
                            </InputLabel>
                            <TextField placeholder='Enter mobile no.' />
                        </div>
                        <div>
                            <InputLabel>Email
                                <span style={{ color: "red" }}>*</span>
                            </InputLabel>
                            <TextField placeholder='Enter email address' />
                        </div>
                        <div>
                            <Button variant='contained'
                                style={{
                                    backgroundColor: "#ec6608",
                                    color: "white",
                                    borderRadius: "50px",
                                    height: "50px",
                                    textTransform: "capitalize"
                                }}
                            >
                                Get Quote
                            </Button>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "650px",
                            marginTop: "40px"
                        }}
                    >
                        <u style={{ fontSize: "13px" }}>Got a new vehicle</u>
                        <u style={{ color: "#ec6608", fontWeight: "bold", fontSize: "13px" }}>Recent Quote</u>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Banner
