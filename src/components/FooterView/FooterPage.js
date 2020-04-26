import React from "react";
import "./FooterPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const FooterPage = () => {
    return (
        <footer className="footer">
            <div class="footer-container">
                <a href="#" class="item1">
                    Privacy policy
                </a>

                <div class="item1-2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} EyeOnYou. All Rights
                        Reserved.
                    </span>
                </div>
                <div class="item2">Contact</div>
                <div class="item3">
                    <FontAwesomeIcon icon={faGithub} />
                </div>
                <div class="item4">
                    <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div class="item5">
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;
