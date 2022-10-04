import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <div className='home_container'>
        <h2 className='h2'>wireless mobile <br /> network</h2>
        <p className='p'>we go with you!</p>
        <div className="home_box">
            <div className="home_box_left">
                <h3 className='h3'>exlusive membership</h3>
                <p className='p1'>by referal only - starting jan 31st</p>
            </div>
            <div className="home_box_right">
                <p className='p2'>request to be member ➡</p>
            </div>
        </div>
    </div>
  )
}

export default Home