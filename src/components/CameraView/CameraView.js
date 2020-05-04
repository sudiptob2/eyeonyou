import React, { useRef, useEffect, useState } from "react";
import Detector from "./Detector";
import "./CameraView.css";
import p5 from "p5";
import NoCamera from "./NoCamera";
import { Link } from "react-router-dom";
import "./CameraView.css";
const CameraView = () => {
    const videoRef = useRef(null);
    const [hasCamera, setHasCamera] = useState(true);

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
        //console.log(videoRef);
    }, []);
    checkCamera();

    return (
        <div className="container">
            {hasCamera ? <div ref={videoRef}></div> : <NoCamera />}
        </div>
    );
};

export default CameraView;
