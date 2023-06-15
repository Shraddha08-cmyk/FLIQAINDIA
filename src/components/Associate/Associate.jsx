import React from 'react'
import './Associate.css'
import { Card, CardContent, Typography } from '@mui/material'
import rec1 from '../../images/rec1.png'
import rec2 from '../../images/rec2.png'
import rec3 from '../../images/rec3.png'
import rec4 from '../../images/rec4.png'
import rec5 from '../../images/rec5.png'
import batch from '../../images/batch.png'

const Associate = () => {
    return (
        <div className='associate'>
            <div className="head-left">
                <p className='text1'>Find Trusted Associate</p>
                <p className='text2'>Find the best Fliqa Associate for your special day.</p>
            </div>
            <div className="head-right">
                <p className="text3">See More >></p>
            </div>
            <div className='cards'>
                <Card style={{ height: "175px", width: "220px", borderRadius: "20px", boxShadow: "2px 2px 2px 3px darkslategray", backgroundColor: "#2C2C2C" }}>
                    <CardContent>
                        <img src={rec1} alt="rec1" style={{ width: "218px", position: "relative", bottom: "15px", right: "15px" }} />
                        <div className='card-div'>
                            <div className="card-opt">
                                <Typography style={{ color: "white", fontSize: "14px" }}>Name Title</Typography>
                                <Typography style={{ color: "white", fontSize: "14px" }}>Location:</Typography>
                            </div>
                            <div className="card-img">
                                <img src={batch} alt="batch" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card style={{ height: "175px", width: "220px", borderRadius: "20px", boxShadow: "2px 2px 2px 3px darkslategray", backgroundColor: "#2C2C2C" }}>
                    <CardContent>
                        <img src={rec2} alt="rec2" style={{ width: "218px", position: "relative", bottom: "15px", right: "15px" }} />
                        <div className='card-div'>
                            <div className="card-opt">
                                <Typography style={{ color: "white", fontSize: "14px" }}>Name Title</Typography>
                                <Typography style={{ color: "white", fontSize: "14px" }}>Location:</Typography>
                            </div>
                            <div className="card-img">
                                <img src={batch} alt="batch" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card style={{ height: "175px", width: "220px", borderRadius: "20px", boxShadow: "2px 2px 2px 3px darkslategray", backgroundColor: "#2C2C2C" }}>
                    <CardContent>
                        <img src={rec3} alt="rec3" style={{ width: "218px", position: "relative", bottom: "15px", right: "15px" }} />
                        <div className='card-div'>
                            <div className="card-opt">
                                <Typography style={{ color: "white", fontSize: "14px" }}>Name Title</Typography>
                                <Typography style={{ color: "white", fontSize: "14px" }}>Location:</Typography>
                            </div>
                            <div className="card-img">
                                <Typography style={{ color: "white" }}>5.0*</Typography>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card style={{ height: "175px", width: "220px", borderRadius: "20px", boxShadow: "2px 2px 2px 3px darkslategray", backgroundColor: "#2C2C2C" }}>
                    <CardContent>
                        <img src={rec4} alt="rec4" style={{ width: "218px", position: "relative", bottom: "15px", right: "15px" }} />
                        <div className='card-div'>
                            <div className="card-opt">
                                <Typography style={{ color: "white", fontSize: "14px" }}>Name Title</Typography>
                                <Typography style={{ color: "white", fontSize: "14px" }}>Location:</Typography>
                            </div>
                            <div className="card-img">
                                <img src={batch} alt="batch" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card style={{ height: "175px", width: "220px", borderRadius: "20px", boxShadow: "2px 2px 2px 3px darkslategray", backgroundColor: "#2C2C2C" }}>
                    <CardContent>
                        <img src={rec5} alt="rec5" style={{ width: "218px", position: "relative", bottom: "15px", right: "15px" }} />
                        <div className='card-div'>
                            <div className="card-opt">
                                <Typography style={{ color: "white", fontSize: "14px" }}>Name Title</Typography>
                                <Typography style={{ color: "white", fontSize: "14px" }}>Location:</Typography>
                            </div>
                            <div className="card-img">
                                <Typography style={{ color: "white" }}>5.0*</Typography>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Associate
