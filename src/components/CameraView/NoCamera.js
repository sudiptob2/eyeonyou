import React, { useState } from "react";
import "../IntroView/IntroView.css";
import CameraView from "../CameraView/CameraView";

const NoCamera = () => {
    const [clicked, setClicked] = useState(false);
    const [hasCamera, setHasCamera] = useState(true);
    const style = {
        paddingTop: "30vh",
    };
    const letsDoItClick = (e) => {
        setClicked(true);
        checkCamera();
    };

    const checkCamera = () => {
        navigator.getMedia =
            navigator.getUserMedia || // use the proper vendor prefix
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia;

        navigator.getMedia(
            { video: true },
            function () {
                console.log("true");
                setHasCamera(true);
                return true;
            },
            function () {
                console.log("false");
                setHasCamera(false);
                return false;
            }
        );
    };
    return (
        <div>
            {!clicked && (
                <div className="text-center" style={style}>
                    <div className="title row justify-content-center title-custom-padding">
                        <h1 className="titleText text-center">
                            Please connect your webcam
                        </h1>
                    </div>
                    <div className="row justify-content-center subtitle-custom-padding">
                        <p className="subTitleText">
                            Your Privacy Is Important To Us
                        </p>
                    </div>
                    <div className="infoText text-center row justify-content-center p-2">
                        <p className="textDetails">
                            All our tests run on the "client side" - which means
                            that we do not and can not see or record the image
                            coming from your web cam.
                        </p>
                    </div>

                    <div className="start row justify-content-center p-2">
                        <button
                            type="button"
                            onClick={letsDoItClick}
                            className="btn startButton startButtonBorder"
                        >
                            Retry
                        </button>
                    </div>
                </div>
            )}
            <div>
                {hasCamera && clicked ? (
                    <CameraView />
                ) : clicked === true ? (
                    hasCamera === false ? (
                        <NoCamera />
                    ) : null
                ) : null}
            </div>
        </div>
    );
};

export default NoCamera;
