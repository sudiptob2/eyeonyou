import React from "react";
import './FooterPage.css'

const FooterPage = () => {
  return (
    <div id= "footer-main-container">
        <div class="copyright">
            <p>copyright 2020 - Eyeonyou</p>
        </div>
        <div class="social">
            <a href="#" class="support">Contact Us</a>
            <div>
            <a href="#" class="face">facebook | </a>
            <a href="#" class="tweet">twitter | </a>
            <a href="#" class="linked">LinkedIn </a>
            </div>

        </div>
    </div>
  );
}

export default FooterPage;