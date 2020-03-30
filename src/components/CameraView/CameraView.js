import React, {useRef} from 'react';
import Detector from "./Detector"
import p5 from 'p5';

const CameraView = () => {
    const videoRef = useRef(null);
    new p5(Detector, videoRef.current)

    return (<div>
        <h1>
            <div ref={videoRef}>

            </div>
        </h1>
    </div>)
}

export default CameraView;