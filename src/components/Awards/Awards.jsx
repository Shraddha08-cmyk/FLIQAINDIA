import React from 'react'
import './Awards.css'
import { Card, CardContent, Typography } from '@mui/material'
import award1 from '../../images/award1.png'
import award2 from '../../images/award2.png'
import rev1 from '../../images/rev1.png'
import rev2 from '../../images/rev2.png'
import rev3 from '../../images/rev3.png'
import rev4 from '../../images/rev4.png'
import rev5 from '../../images/rev5.png'
import rev6 from '../../images/rev6.png'

const Awards = () => {
  return (
    <div className='award'>
      <div className="award-left">
        <Card style={{ height: "180px", width: "250px", borderRadius: "10px" }}>
          <CardContent>
            <img src={award1} alt="award1" style={{ height: "180px", width: "259px", position: "relative", right: "20px", bottom: "16px" }} />
          </CardContent>
        </Card>
        <Card style={{ height: "180px", width: "250px", borderRadius: "10px" }}>
          <CardContent>
            <img src={award2} alt="award2" style={{ height: "180px", width: "259px", position: "relative", right: "20px", bottom: "16px" }} />
          </CardContent>
        </Card>
      </div>
      <div className="award-right">
        <div className="review1">
          <Card style={{ width: "200px" }}>
            <CardContent>
              <div className="rev-cont">
                <img src={rev1} alt="rev1" style={{ width: "40px" }} />
                <Typography>4.9/5</Typography>
              </div>
            </CardContent>
          </Card>
          <Card style={{ width: "200px" }}>
            <CardContent>
              <div className="rev-cont">
                <img src={rev2} alt="rev2" style={{ width: "40px" }} />
                <Typography>4.9/5</Typography>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="review2">
          <Card style={{ width: "200px" }}>
            <CardContent>
              <div className="rev-cont">
                <img src={rev3} alt="rev3" style={{ width: "40px" }} />
                <Typography>4.9/5</Typography>
              </div>
            </CardContent>
          </Card>
          <Card style={{ width: "200px" }}>
            <CardContent>
              <div className="rev-cont">
                <img src={rev4} alt="rev4" style={{ width: "20px" }} />
                <Typography>4.9/5</Typography>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="review3">
          <Card style={{ width: "200px" }}>
            <CardContent>
              <div className="rev-cont">
                <img src={rev5} alt="rev5" style={{ width: "40px" }} />
                <Typography>4.9/5</Typography>
              </div>
            </CardContent>
          </Card>
          <Card style={{ width: "200px" }}>
            <CardContent>
              <div className="rev-cont">
                <img src={rev6} alt="rev6" style={{ width: "40px" }} />
                <Typography>4.9/5</Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Awards
