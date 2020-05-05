import React from "react";
import Sadcat from "../../assets/images/sadcat.svg";
import "../IntroView/IntroView.css";

const NoCamera = () => {
    return (
        <div className="text-center ">
            <img
                style={{
                    paddingTop: "5vh",
                    maxHeight: 250,
                    maxWidth: 250,
                }}
                src={Sadcat}
                alt="I am a sad kitty"
            />
            <div className="title row justify-content-center title-custom-padding">
                <h1 className="titleText text-center">
                    Please connect your webcam
                </h1>
            </div>
            <div className="row justify-content-center subtitle-custom-padding">
                <p className="subTitleText">Your Privacy Is Important To Us</p>
            </div>
            <div className="infoText text-center row justify-content-center p-2">
                <p className="textDetails">
                    All our tests run on the "client side" - which means that we
                    do not and can not see or record the image coming from your
                    web cam.
                </p>
            </div>

            <div className="start row justify-content-center p-2">
                <button
                    className="btn startButton startButtonBorder"
                    type="button"
                    onClick={() => window.location.reload(false)}
                >
                    Retry
                </button>
            </div>
        </div>
    );
};

export default NoCamera;
