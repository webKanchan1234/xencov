import React from 'react'
import "./service.css";
import member from "../images/member.jpg"

const Service = () => {
  return (
    <div className='service'>
        <div className="service_right">
            <div className="service_img">
                <img src={member} alt="" />
            </div>
        </div>
        <div className="service_left">
            <div className="service_left_top">
            <h2>is this service for everyone ?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officia obcaecati eaque aliquam facere incidunt consequuntur.</p>
            </div>
            <div className="service_left_top">
            <h2>do i have to sign a contract or do a credit check ?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officia obcaecati eaque aliquam facere incidunt consequuntur.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Service