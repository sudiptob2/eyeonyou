import p5 from "p5";
import React, { useEffect, useRef, useState } from "react";
import muteIcon from "../../assets/images/interface.svg";
import muteIconRed from "../../assets/images/interface_red.svg";
import powerIcon from "../../assets/images/power.svg";
import Logo from "../IntroView/Logo";
import "./CameraView.css";
import Detector from "./Detector";
import NoCamera from "./NoCamera";
import { getSoundOption, setSoundOption } from "./SoundNotification";

const CameraView = () => {
    const videoRef = useRef(null);
    const [hasCamera, setHasCamera] = useState(true);
    const [hasVideoRef, setHasVideoRef] = useState(false);
    const [toggleIcon, setToggleIcon] = useState(
        getSoundOption() ? muteIcon : muteIconRed
    );

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
    const toggleSoundAlert = () => {
        setSoundOption(!getSoundOption());
        getSoundOption() ? setToggleIcon(muteIcon) : setToggleIcon(muteIconRed);
    };
    useEffect(() => {
        new p5(Detector, videoRef.current);
        //console.log("videoref ", videoRef);
        if (window.innerWidth < 300) {
            videoRef.current.hidden = true;
            setHasVideoRef(true);
        }
    }, []);
    checkCamera();

    return (
        <div className="container">
            {hasCamera && (
                <div>
                    <div className="title row justify-content-center title-custom-padding">
                        <h1 className="titleText text-center">
                            Welcome to EyOnYou Video Setup
                        </h1>
                    </div>
                    <div className="row justify-content-center subtitle-custom-padding">
                        <p className="subTitleText">
                            Your Privacy is important to us. We do not collect
                            any data from your camera.
                        </p>
                    </div>
                    <div className="infoText text-center row justify-content-center">
                        <p className="textDetails how-to-configure ">
                            Please set up sound notification by clicking{" "}
                            <img
                                src={toggleIcon}
                                alt="mute"
                                width="16"
                                height="16"
                            />{" "}
                            icon. Click{" "}
                            <img
                                src={powerIcon}
                                alt="mute"
                                width="16"
                                height="16"
                            />{" "}
                            to start focusing (by opening the small window).{" "}
                            Close the current window now.{" "}
                            <span style={{ color: "red" }}>
                                Do not close the small window.
                            </span>
                        </p>
                    </div>
                </div>
            )}

            {hasCamera ? <div ref={videoRef}></div> : <NoCamera />}
            {hasVideoRef && hasCamera && (
                <div className="container">
                    <div className="logo row justify-content-center title-custom-padding">
                        <Logo width={119} height={70} />
                    </div>
                    <div className="row justify-content-center">
                        <span className="producing">
                            We got you. start Focusing!
                        </span>
                    </div>
                    <div className="row justify-content-center p-2">
                        <button
                            onClick={toggleSoundAlert}
                            className="toggle-button"
                        >
                            <img
                                src={toggleIcon}
                                alt="mute"
                                width="24"
                                height="24"
                            />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CameraView;
