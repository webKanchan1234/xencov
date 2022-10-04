import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="footer_top_left">
          <div className="footer_link_box">
            <a href="#" className="footor_link">
              membership plan
            </a>
          </div>
          <div className="footer_link_box">
            <a href="#" className="footor_link">
              Support & faq
            </a>
          </div>
        </div>
        <div className="footer_top_right">
          <div className="footer_link_box">
            <a href="#" className="footor_link">
              join now ➡
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer_down">
        <h4>We go wifi</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, magnam aliquam. Recusandae doloribus explicabo facilis ut necessitatibus delectus, exercitationem consequuntur vitae, tenetur incidunt quisquam, dolor commodi ducimus quasi porro nobis!</p>
      </div>
    </div>
  );
};

export default Footer;
