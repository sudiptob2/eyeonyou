import React, { useRef, useEffect, useState } from "react";
import Detector from "./Detector";
import "./CameraView.css";
import p5 from "p5";
import NoCamera from "./NoCamera";
import { Link } from "react-router-dom";
const CameraView = () => {
    const videoRef = useRef(null);
    const [hasCamera, setHasCamera] = useState(true);

    const openWindow = () => {
        window.open(
            window.location.origin + "/cam",
            "_blank",
            "toolbar=0,location=0,menubar=0 resizable=yes, width=200,height=300"
        );
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

    useEffect(() => {
        new p5(Detector, videoRef.current);
    }, []);
    checkCamera();

    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <button onClick={openWindow}>Start</button>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    {hasCamera ? <div ref={videoRef}></div> : <NoCamera />}
                </div>
            </div>
        </div>
    );
};

export default CameraView;
