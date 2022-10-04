import React from "react";
import "./start.css";
import note from "../images/note.png";
import tick from "../images/tick.png";
import message from "../images/message.png";
import tick1 from "../images/tick1.jpg";

const Start = () => {
  return (
    <div className="start">
      <div className="start_left">
        <h1>how do i get started?</h1>
      </div>
      <div className="start_right">
        <div className="start_mid_top">
          <div className="start_mid_top_left">
            <h3>1</h3>
            <div className="img">
                <img src={note} alt="" />
            </div>
          </div>
          <div className="start_mid_top_right">
            <p>
              Fill out the Membership request Form. This can take 2 business
              days for approval
            </p>
          </div>
        </div>
        <div className="start_mid_top">
          <div className="start_mid_top_left">
          <h3>2</h3>
            <div className="img">
                <img src={message} alt="" />
            </div>
          </div>
          <div className="start_mid_top_right">
            <p>
              Choose the device or plan for you
            </p>
          </div>
        </div>
        <div className="start_mid_top">
          <div className="start_mid_top_left">
          <h3>3</h3>
          <div className="img">
            <img src={tick} alt="" />
          </div>
          </div>
          <div className="start_mid_top_right">
            <p>
            We mail you start up package.
            </p>
          </div>
        </div>
        <div className="start_mid_top">
          <div className="start_mid_top_left">
          <h3>4</h3>
            <div className="img">
                <img src={tick1} alt="" />
            </div>
          </div>
          <div className="start_mid_top_right">
            <p>
              You are good to go!
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Start;
