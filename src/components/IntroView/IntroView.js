import React from "react";
import { Link } from "react-router-dom";
import HowItWorksModal from "../ModalView/HowItWorksModal";
import "./IntroView.css";
import Logo from "./Logo";
const IntroView = () => {
    return (
        <div className="introView container">
            <div className="logo row justify-content-center p-2">
                <Logo width={426} height={251} />
            </div>
            <div className="title row justify-content-center title-custom-padding">
                <h1 className="titleText text-center">
                    Stop procrastinating, start producing!
                </h1>
            </div>
            <div className="row justify-content-center subtitle-custom-padding">
                <p className="subTitleText">
                    Virtual coworking with eyeonyou significantly improves your
                    productivity.
                </p>
            </div>
            <Link to="/cam" style={{ textDecoration: "none" }}>
                <div className="start row justify-content-center p-0">
                    <button
                        className="btn startButton startButtonBorder"
                        type="button"
                    >
                        Try EyeOnYou ->
                    </button>
                </div>
            </Link>
            <div className="infoText text-center row justify-content-center p-4">
                <p className="textDetails">
                    Built with TensorFlow.js + p5.js + React.js. Learn more
                    about
                    <HowItWorksModal />
                </p>
            </div>
        </div>
    );
};

export default IntroView;
