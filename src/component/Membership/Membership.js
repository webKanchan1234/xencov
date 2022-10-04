import React from 'react'
import "./membership.css";
import member from "../images/member.jpg"

const Membership = () => {
  return (
    <div className='membership'>
        <div className="membership_left">
            <h2>why there is membership ?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officia obcaecati eaque aliquam facere incidunt consequuntur, placeat non quis doloribus? Amet, voluptatibus deleniti earum ipsa dolore doloremque possimus. Similique, modi!</p>
        </div>
        <div className="membership_right">
            <div className="member_img">
                <img src={member} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Membership