import React from 'react'
import './Success.css'
import { Card, CardContent, Typography } from '@mui/material'
import suc1 from '../../images/success1.png'
import suc2 from '../../images/success2.png'
import suc3 from '../../images/success3.png'
import suc4 from '../../images/success4.png'
import suc5 from '../../images/success5.png'
import Poster3 from './Poster3'

const Success = () => {
    return (
        <>
            <div className='success'>
                <div className="success-left">
                    <p className='success-head1'>Our Success</p>
                    <p className='success-head2'>Journey of our success.</p>
                </div>
                <div className="success-cards">
                    <Card style={{ height: "200px", width: "200px", borderRadius: "50%" }}>
                        <CardContent>
                            <img src={suc1} alt="suc1" style={{ width: "180px", position: "relative", right: "5px", top: "52px" }} />
                        </CardContent>
                    </Card>
                    <Card style={{ height: "200px", width: "200px", borderRadius: "50%" }}>
                        <CardContent>
                            <img src={suc2} alt="suc2" style={{ width: "180px", position: "relative", right: "5px", top: "52px" }} />
                        </CardContent>
                    </Card>
                    <Card style={{ height: "200px", width: "200px", borderRadius: "50%" }}>
                        <CardContent>
                            <img src={suc3} alt="suc3" style={{ width: "180px", position: "relative", right: "5px", top: "52px" }} />
                        </CardContent>
                    </Card>
                    <Card style={{ height: "200px", width: "200px", borderRadius: "50%" }}>
                        <CardContent>
                            <img src={suc4} alt="suc4" style={{ width: "180px", position: "relative", right: "5px", top: "28px" }} />
                        </CardContent>
                    </Card>
                    <Card style={{ height: "200px", width: "200px", borderRadius: "50%" }}>
                        <CardContent>
                            <img src={suc5} alt="suc5" style={{ width: "180px", position: "relative", right: "5px", top: "52px" }} />
                        </CardContent>
                    </Card>
                </div>
                <div className="suc-desc">
                    <Typography style={{ fontSize: "12px", width: "215px" }}>Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India.</Typography>
                    <Typography style={{ fontSize: "12px", width: "215px" }}>Appreciation from Startup Bengal for our creative startup community</Typography>
                    <Typography style={{ fontSize: "12px", width: "215px" }}>FliqaIndia got featured on Yourstory. Click here</Typography>
                    <Typography style={{ fontSize: "12px", width: "215px" }}>Received awards from ImagesBazaar on leading creative industry</Typography>
                    <Typography style={{ fontSize: "12px", width: "215px" }}>Top ten in Intuit Circle Codeathon, 2020</Typography>
                </div>
            </div>
            <Poster3 />
        </>
    )
}

export default Success
