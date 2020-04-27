import React, { useRef, useEffect } from "react";
import Detector from "./Detector";
import "./CameraView.css";
import p5 from "p5";

const CameraView = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        new p5(Detector, videoRef.current);
    }, []);

    return (
        <div className="cameraview">
            <div ref={videoRef}></div>
        </div>
    );
};

export default CameraView;
