import React from 'react'
import "./membershiplong.css";
import member from "../images/member.jpg"

const Membershiplong = () => {
  return (
    <div className='membershiplong'>
        <div className="membershiplong_left">
            <h2>why there is membership ?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officia obcaecati eaque aliquam facere incidunt consequuntur, placeat non quis doloribus? Amet, voluptatibus deleniti earum ipsa dolore doloremque possimus. Similique, modi!</p>
        </div>
        <div className="membershiplong_right">
            <div className="member_img">
                <img src={member} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Membershiplong