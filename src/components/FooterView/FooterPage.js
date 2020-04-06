import React from "react";
import './FooterPage.css'

const FooterPage = () => {
  return (
    <div id= "footer-main-container">
        <div className="copyright">
            <p>copyright 2020 - Eyeonyou</p>
        </div>
        <div className="social">
            <a href="#" className="support">Contact Us</a>
            <div className = "socialLinks">
              <a href="#" className="face">facebook | </a>
              <a href="#" className="tweet">twitter | </a>
              <a href="#" className="linked">LinkedIn </a>
            </div>

        </div>
    </div>
  );
}

export default FooterPage;