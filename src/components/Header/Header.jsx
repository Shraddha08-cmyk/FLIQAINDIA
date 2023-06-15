import React from 'react'
import './Header.css'
import vector1 from '../../images/vector1.png'
import vector2 from '../../images/vector2.png'
import vector3 from '../../images/vector3.png'
import vector4 from '../../images/vector4.png'

const Header = () => {
  return (
    <div className='header'>
      <div className="head1">
        <h1>India’s Leading Creative Platform</h1>
        <p>Experience hassle free bookings. Trusted by 2500+ Customers</p>
        <input type="text" placeholder='Search service, blog and many more…' />
        <button type="button" class="btn btn-dark">Search</button>
      </div>
      <div className="options">
        <img src={vector1} alt="vec1" style={{ width: "160px" }} />
        <div>
          <p style={{ fontFamily: "Inter, sans-serif", position: "relative", top: "15px" }}>Verified Reviews</p>
          <p style={{ fontSize: "12px", position: "relative", top: "6px" }}>For verified reviewers</p>
        </div>
        <img src={vector2} alt="vec2" style={{ width: "150px" }} />
        <div>
          <p style={{ fontFamily: "Inter, sans-serif", position: "relative", top: "15px" }}>Top Articles</p>
          <p style={{ fontSize: "12px", position: "relative", top: "6px" }}>Helps you decide</p>
        </div>
        <img src={vector3} alt="vec3" style={{ width: "150px" }} />
        <div>
          <p style={{ fontFamily: "Inter, sans-serif", position: "relative", top: "15px" }}>Write Share Win Contest</p>
          <p style={{ fontSize: "12px", position: "relative", top: "6px" }}>Earn cash for reviews</p>
        </div>
        <img src={vector4} alt="vec4" style={{ width: "150px" }} />
        <div>
          <p style={{ fontFamily: "Inter, sans-serif", position: "relative", top: "15px" }}>MouthShut for Brands</p>
          <p style={{ fontSize: "12px", position: "relative", top: "6px" }}>Request a Demo</p>
        </div>
      </div>
      <hr className='head-hr' />
    </div>
  )
}

export default Header
