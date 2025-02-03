import React from "react";
import logo from "../../assets/images/logo.png";
import icon1 from "../../assets/images/Icon Button1.png";
import icon2 from "../../assets/images/Icon Button2.png";
import icon3 from "../../assets/images/Icon Button3.png";
import "../../styles/Footer/index.css"; // Import the CSS file

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className='footer-navigation'style={{display:'flex',alignItems: 'center'}}>
       
            <img src={logo} alt="logo" className="footer-logo" style={{width:'70px',alignItems:'center'}} />
        
        <ul className="footer-links">
          {/* <li>
            <img src={logo} alt="logo" className="footer-logo" />
          </li> */}
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        </div>
        <div className="footer-icons">
          <img src={icon1} alt="icon1" />
          <img src={icon2} alt="icon2" />
          <img src={icon3} alt="icon3" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Central Texas Fly Fishing All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
