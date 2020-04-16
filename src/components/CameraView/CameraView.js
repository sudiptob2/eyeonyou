import React, { useRef } from "react";
import Detector from "./Detector";
import "./CameraView.css";
import p5 from "p5";

import LoaderSpinner from "./LoaderSpinner";

const CameraView = () => {
    const videoRef = useRef(null);

    new p5(Detector, videoRef.current);

    return (
        <div className="cameraview">
            <div ref={videoRef}></div>
        </div>
    );
};

export default CameraView;
