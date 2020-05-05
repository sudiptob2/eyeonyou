import React, { useRef, useEffect, useState } from "react";
import Detector from "./Detector";
import "./CameraView.css";
import p5 from "p5";
import NoCamera from "./NoCamera";
import { Link } from "react-router-dom";
import "./CameraView.css";
import Logo from "../IntroView/Logo";
import muteIconRed from "./interface_red.svg";
import muteIcon from "./interface.svg";

import { getSoundOption, setSoundOption } from "./SoundNotification";

const CameraView = () => {
    const videoRef = useRef(null);
    const [hasCamera, setHasCamera] = useState(true);
    const [hasVideoRef, setHasVideoRef] = useState(false);
    const [toggleIcon, setToggleIcon] = useState(muteIcon);

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
        console.log("videoref ", videoRef);
        if (window.innerWidth < 250) {
            videoRef.current.hidden = true;
            setHasVideoRef(true);
        }
    }, []);
    checkCamera();

    return (
        <div className="container">
            {hasCamera ? <div ref={videoRef}></div> : <NoCamera />}
            {hasVideoRef && (
                <div className="container">
                    <div className="logo row justify-content-center p-2">
                        <Logo width={119} height={70} />
                    </div>
                    <div className="row justify-content-center">
                        <span className="producing">
                            We got you. start producing!
                        </span>
                    </div>
                    <div className="row justify-content-center p-1">
                        <button
                            onClick={toggleSoundAlert}
                            className="toggle-button"
                        >
                            <img
                                src={toggleIcon}
                                alt="mute"
                                width="32"
                                height="32"
                            />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CameraView;
