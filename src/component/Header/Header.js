import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='header_container'>
        <div className="header_left">
            <div className="link_box">
                <a href="#" className='link'>We go wifi</a>
            </div>
            <div className="link_box">
                <a href="#" className='link'>membership plan</a>
            </div>
            <div className="link_box">
                <a href="#" className='link'>Support & faq</a>
            </div>
        </div>
        <div className="header_right">
        <div className="link_box">
                <a href="#" className='link'>join now ➡</a>
            </div>
        </div>
    </div>
  )
}

export default Header