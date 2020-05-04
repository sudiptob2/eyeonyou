import React, { useEffect } from "react";
import "./FooterPage.css";
import PrivacyModal from "../ModalView/PrivacyModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    getSoundOption,
    setSoundOption,
} from "../CameraView/SoundNotification";
import {
    faLinkedin,
    faGithub,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const FooterPage = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                    <PrivacyModal />
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} EyeOnYou. All Rights
                        Reserved.
                    </span>
                </div>
                <div className="item3">
                    <FontAwesomeIcon icon={faGithub} />
                </div>
                <div className="item4">
                    <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="item5">
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>

                {false && <PrivacyModal click={true} />}
            </div>
        </footer>
    );
};

export default FooterPage;
