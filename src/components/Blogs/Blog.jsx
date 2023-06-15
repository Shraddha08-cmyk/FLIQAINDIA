import React from 'react'
import './Blog.css'
import { Card, CardContent, Typography } from '@mui/material'
import blogimg1 from '../../images/blogimg1.png'
import blogimg2 from '../../images/blogimg2.png'
import blogimg3 from '../../images/blogimg3.png'
import blogimg4 from '../../images/blogimg4.png'

const Blog = () => {
    return (
        <div className='blog-page'>
            <div className="blog-left">
                <p className='blog-head1'>Our Blogs</p>
                <p className='blog-head2'>Check out our Latest Blog</p>
            </div>
            <div className="blog-card">
                <Card style={{ width: "384px", height: "200px" }}>
                    <CardContent>
                        <img src={blogimg1} alt="blog1" style={{ height: "220px", width: "393px", position: "relative", bottom: "17px", right: "20px" }} />
                        <div className="card1-desc">
                            <Typography style={{ fontSize: "13px", position: "relative", left: "15px", top: "25px" }}>Featured on: Sep 15, 2021</Typography>
                            <Typography style={{ fontSize: "25px", letterSpacing: "5px", position: "relative", top: "25px", left: "15px", fontFamily: "K2D, sans-serif" }}>Wedding Photography at Goa</Typography>
                        </div>
                    </CardContent>
                </Card>
                <Card style={{ width: "384px", height: "200px" }}>
                    <CardContent>
                        <img src={blogimg2} alt="blog2" style={{ width: "435px", position: "relative", bottom: "26px", right: "42px" }} />
                        <div className="card2-desc">
                            <Typography style={{ fontSize: "13px", position: "relative", left: "15px", top: "25px" }}>Featured on: Sep 15, 2021</Typography>
                            <Typography style={{ fontSize: "25px", letterSpacing: "5px", position: "relative", top: "25px", left: "15px", fontFamily: "K2D, sans-serif" }}>Photography: Expectations vs. Reality</Typography>
                        </div>
                    </CardContent>
                </Card>
                <Card style={{ width: "384px", height: "200px", backgroundColor: "#DDF8F3" }}>
                    <CardContent>
                        <div className="card3-head">
                            <Typography style={{ color: "#354547", fontFamily: "K2D, sans-serif", fontSize: "13px", fontWeight: "bold" }}>Trending Now</Typography>
                            <Typography style={{ color: "#354547", fontFamily: "K2D, sans-serif", fontSize: "11px" }}>View All</Typography>
                        </div>
                        <div className="card3-img1">
                            <img src={blogimg3} alt="blog3" style={{ height: "50px", width: "50px" }} />
                            <Typography style={{ fontSize: "xx-small", textAlign: "left", fontWeight: "bold", color: "#354547" }}>Creative Industries are on the verge of depletion due to COVID-19<br />
                                <span style={{ fontWeight: "normal" }}>In a period where many industries remain highly unclear, others want to grasp how COVID-19 impact</span></Typography>
                        </div>
                        <hr style={{ position: "relative", bottom: "15px" }} />
                        <div className="card3-img2">
                            <img src={blogimg2} alt="blog2" style={{ height: "50px", width: "50px" }} />
                            <Typography style={{ fontSize: "xx-small", textAlign: "left", fontWeight: "bold", color: "#354547" }}>Photography: Expectations vs. Reality<br />
                                <span style={{ fontWeight: "normal" }}>Most of the time without any hands-on experience in photography, professional and advanced photography actually</span></Typography>
                        </div>
                        <hr style={{ position: "relative", bottom: "42px" }} />
                        <div className="card3-img3">
                            <img src={blogimg4} alt="blog4" style={{ height: "50px", width: "50px" }} />
                            <Typography style={{ fontSize: "xx-small", textAlign: "left", fontWeight: "bold", color: "#354547" }}>Wedding Photography at Goa<br />
                                <span style={{ fontWeight: "normal" }}>Wedding Photography in Goa If not, every couple when they make their list of Pre-wedding shoot</span></Typography>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Blog
